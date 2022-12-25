import tw from "lib/tailwind";
import React from "react";
import { Text, View } from "react-native";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import AddNew from "components/Product/AddNew";
const CategoriesScreen = () => {
  const openAddCatagories = () => {
    console.log("Add Catagories");
  };

  return (
    <View style={tw`flex items-center justify-center mt-5`}>
       
      <View>
        <AntDesign
          style={tw`text-center mt-70 text-gray-700`}
          name="gift"
          size={90}
          color="black"
        />

        <Text style={tw`text-xl text-center text-gray-700`}>
          Create your first catagory now
        </Text>
        <Text style={tw`text-sm text-center text-gray-500 `}>
          Showcase your products or services to the coustomers by creating
          beautiful categories
        </Text>
      </View>
      <AddNew text={"Add new Catagory"} onPress={openAddCatagories} />
    </View>
  );
};

export default CategoriesScreen;
