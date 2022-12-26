import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import ScreenHeader from "components/ScreenHeader";
import ProductScreen from "screens/Products";
import CategoriesScreen from "screens/Products/Categories";

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
  return (
    <>
      <ScreenHeader title={"Products"} />
      <Tab.Navigator>
        <Tab.Screen
          name="ProductStack"
          options={{ tabBarLabel: "Products" }}
          component={ProductScreen}
        />
        <Tab.Screen
          name="CategoriesStack"
          options={{ tabBarLabel: "Categories" }}
          component={CategoriesScreen}
        />
      </Tab.Navigator>
    </>
  );
};

export default TopTab;
