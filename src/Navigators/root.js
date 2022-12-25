import { useEffect, useState, useContext } from "react";
import { DeviceEventEmitter, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Auth from "functions/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Splash from "screens/Splash";
import Home from "./home";
import LoginScreen from "screens/Auth/login";

import UserContext from "context/User";
import useAxiosPrivate from "hooks/useAxiosPrivate";

const Stack = createNativeStackNavigator();

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log(e.msg);
    return true;
  }
};

export default function Root() {
  const { user, setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstLaunch, setIsFirstLaunch] = useState(true);

  const axiosPrivate = useAxiosPrivate();

  const checkIfSignedIn = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser(axiosPrivate)({
        bypassCache: true,
      });
      setUser(authUser);
    } catch (e) {
        console.log(e);
      setUser(null);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    checkIfSignedIn();
    (async () => {
      const value = await getData("@isFirstLaunch");
      setIsFirstLaunch(value == "true" ? true : false);
      if (value == "true") {
        await AsyncStorage.setItem("@isFirstLaunch", "false");
      }
    })();
  }, []);

  useEffect(() => {
    const listner = (data) => {
      if (data.payload.event === "login" || data.payload.event === "logout") {
        checkIfSignedIn();
      }
    };

    DeviceEventEmitter.addListener("auth", listner);
    return () => DeviceEventEmitter.removeAllListeners("auth");
  }, []);

  const HomeComponent = () => (
    <>
      {isFirstLaunch ? (
        <>
          <Text>First Launch</Text>
        </>
      ) : (
        <Home />
      )}
    </>
  );

  return (
    <>
      {isLoading ? (
        <Splash />
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {user ? (
            <>
              <Stack.Screen name="HomeStack" component={HomeComponent} />
            </>
          ) : (
            <>
              {/* <Stack.Screen name="Welcome" component={OnboardingScreens} /> */}
              <Stack.Screen name="SignIn" component={LoginScreen} />
            </>
          )}
        </Stack.Navigator>
      )}
    </>
  );
}
