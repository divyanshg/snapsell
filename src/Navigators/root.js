import { useEffect, useState, useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Splash from "screens/Splash";
import Home from "./home";

export default function Root() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "email@email.com",
    phone: "1234567890",
  });
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      {isLoading ? (
        <Splash />
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {user ? (
            <>
              <Stack.Screen name="HomeStack" component={Home} />
            </>
          ) : (
            <>
              <Stack.Screen name="Welcome" component={<></>} />
            </>
          )}
        </Stack.Navigator>
      )}
    </>
  );
}
