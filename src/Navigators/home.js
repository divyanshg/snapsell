import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import HomeScreen from "screens/Home";

import OrdersScreen from "screens/Orders";

import tw from "lib/tailwind";

import { Feather, Foundation } from "@expo/vector-icons";

import ProductStack from "./Products";
 

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { ...tw`bg-white absolute bottom-0 left-0 h-[70px]` },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <View style={tw`flex flex-col items-center justify-center`}>
              <Feather name="home" size={size} color={color} />
              <Text
                style={{
                  ...tw`font-brandRegular`,
                  color: color,
                  fontSize: 14,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={ProductStack}
        options={{
          tabBarLabel: "Products",
          tabBarIcon: ({ color, size }) => (
            <View style={tw`flex flex-col items-center justify-center`}>
              <Feather name="shopping-bag" size={size} color={color} />
              <Text
                style={{
                  ...tw`font-brandRegular`,
                  color: color,
                  fontSize: 14,
                }}
              >
                Products
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          tabBarLabel: "Orders",
          tabBarIcon: ({ color, size }) => (
            <View style={tw`flex flex-col items-center justify-center`}>
              <Foundation name="clipboard-notes" size={size} color={color} />
              <Text
                style={{
                  ...tw`font-brandRegular`,
                  color: color,
                  fontSize: 14,
                }}
              >
                Orders
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Manage"
        component={HomeScreen}
        options={{
          tabBarLabel: "Manage",
          tabBarIcon: ({ color, size }) => (
            <View style={tw`flex flex-col items-center justify-center`}>
              <Feather name="settings" size={size} color={color} />
              <Text
                style={{
                  ...tw`font-brandRegular`,
                  color: color,
                  fontSize: 14,
                }}
              >
                Manage
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={HomeScreen}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <View style={tw`flex flex-col items-center justify-center`}>
              <Feather name="user" size={size} color={color} />
              <Text
                style={{
                  ...tw`font-brandRegular`,
                  color: color,
                  fontSize: 14,
                }}
              >
                Account
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
