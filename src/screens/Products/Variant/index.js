import React from "react";
import { View, Text, TouchableOpacity ,TextInput} from "react-native";
import tw from "lib/tailwind";
import ScreenHeader from "components/ScreenHeader";
import { Entypo } from "@expo/vector-icons";

const Variant = () => {
  return (
    <>
      <View>
        <ScreenHeader title={"Add Product"} />
        <View
          style={tw`mx-5 p-4 w-9/10 bg-white  flex flex-row border-white rounded-xl justify-between`}
        >
          <Text style={tw`font-brandSemibold`}>Size</Text>
          <Entypo
            style={tw`items mr-6`}
            name="chevron-down"
            size={24}
            color="black"
          />
        </View>
        <View style={tw``}>
          <TextInput
            placeholder="Product Name "
            style={tw`w-11/12 h-12 px-2 py-2 bg-gray-200 border-gray-300 rounded-lg`}
          />
        </View>
      </View>
      <View></View>
    </>
  );
};

export default Variant;
