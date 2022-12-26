import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import AddProduct from "screens/Products/AddProduct";
import AddCategory from "screens/Products/Categories/AddCategory";

import TopTab from "./TopTab";

const ProductStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Product" component={TopTab} />
      <Stack.Screen name="AddProduct" component={AddProduct} />
      <Stack.Screen name="AddCategory" component={AddCategory} />
    </Stack.Navigator>
  );
};

export default ProductStack;
