 
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import React from "react";
import ProductStack from ".";
import CategoriesScreen from "screens/Categories";

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ProductStack"
        options={{ tabBarLabel: "Products" }}
        component={ProductStack}
      />
      <Tab.Screen
        name="CategoriesStack"
        options={{ tabBarLabel: "Categories" }}
        component={CategoriesScreen}
      />
    </Tab.Navigator>
  );
};

export default TopTab;
