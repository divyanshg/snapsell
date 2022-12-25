import tw from "lib/tailwind";
import React from "react";
import { Text, View } from "react-native";
import { Entypo, SimpleLineIcons } from "@expo/vector-icons";
import AddNew from "components/Product/AddNew";

const ProductScreen = () => {
  return (
    <View style={tw`flex items-center justify-center mt-5  `}>
      <Text style={tw`text-2xl font-brandSemibold w-full text-center`}>
        Products
      </Text>
      <View>
        <SimpleLineIcons
          style={tw`text-center mt-70 text-gray-700`}
          name="social-dropbox"
          size={90}
          color="black"
        />

        <Text style={tw`text-xl text-center text-gray-700`}>
          Add products to your online store
        </Text>
        <Text style={tw`text-sm text-center text-gray-500 `}>
          It take only few second to add your products and start selling to the
          customers
        </Text>
      </View>
      <AddNew to={'AddProduct'} text={"Add New Product"} />
    </View>
  );
};

export default ProductScreen;
