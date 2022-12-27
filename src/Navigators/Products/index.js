import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import AddProduct from "screens/Products/AddProduct";
import AddCategory from "screens/Products/Categories/AddCategory";
import ProductsFullDetail from "screens/Products/ProductsFullDetail";
import UpdateProductFullDetail from "screens/Products/AddProduct/UpdateProductFullDetail";
import UpdateCategory from "screens/Products/Categories/UpdateCategory";
import Variant from "screens/Products/Variant";

import TopTab from "./TopTab";

const ProductStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Product" component={TopTab} />
      <Stack.Screen name="AddProduct" component={AddProduct} />
      <Stack.Screen name="AddCategory" component={AddCategory} />
      <Stack.Screen name="ProductsFullDetail" component={ProductsFullDetail} />
      <Stack.Screen name="UpdateProductFullDetail" component={UpdateProductFullDetail} />
      <Stack.Screen name="UpdateCategory" component={UpdateCategory} />
      <Stack.Screen name="Variant" component={Variant} />
      
    </Stack.Navigator>
  );
};

export default ProductStack;
