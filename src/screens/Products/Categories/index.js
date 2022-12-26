import tw from "lib/tailwind";
import React from "react";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AddNew from "components/Product/AddNew";
import CategoryCard from "components/Product/CatalogueCard/CategoryCard";

const CategoriesScreen = () => {
  return (
    <View>
      <CategoryCard />
      <View style={tw`flex items-center justify-center mt-2`}>
        <View>
          <AntDesign
            style={tw`text-center mt-30 text-gray-700`}
            name="gift"
            size={90}
            color="black"
          />

          <Text style={tw`text-xl text-center text-gray-700`}>
            Create your first category now
          </Text>
          <Text style={tw`text-sm text-center text-gray-500 `}>
            Showcase your products or services to the coustomers by creating
            beautiful categories
          </Text>
        </View>
      </View>
        <View style={tw`mx-4`}>
          <AddNew to={"AddCategory"} text={"Add New Category"} />
        </View>
    </View>
  );
};

export default CategoriesScreen;
