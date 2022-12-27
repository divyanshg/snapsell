import tw from "lib/tailwind";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";

const ProductDetails = () => {
  const navigation = useNavigation();

  const goto = () => {
    navigation.navigate("ProductFullDetails");
  };
  return (
    <>
      <View style={tw`flex flex-row  mt-5`}>
        <MaterialIcons name="arrow-back" style={tw`text-black `} size={30} />
        <Text
          style={tw`text-black w-1.6/2 text-center  text-xl  font-semibold`}
        >
          Add Product
        </Text>
      </View>
      <View style={tw` px-2 flex flex-row justify-between `}>
        <TextInput
          placeholder="Product Name"
          style={tw`w-10/12 h-12 px-2 py-2 bg-gray-200 border-gray-300 rounded-lg`}
        />
        <TouchableOpacity onPress={goto}>
          <View
            style={tw`bg-slate-300 items-center text-center w-12 rounded-lg`}
          >
            <Feather
              name="plus"
              size={20}
              style={tw`mx-auto my-auto text-blue-500`}
            />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ProductDetails;
