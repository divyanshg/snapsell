import tw from "lib/tailwind";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import AddNew from "components/Product/AddNew";

import { useState } from "react";

const UpdateProductFullDetail = () => {
  const navigation = useNavigation();
  const goto = () => {
    navigation.navigate("Variant");
  };
  const back = () => {
    navigation.goBack();
  };

  const [selectedUnit, setSelectedUnit] = useState("Piece");
  const [addProduct, setAddProduct] = useState("Add Product");
  const [Unit] = useState([
    "Piece",
    "Kg",
    "gm",
    "Litre",
    "ml",
    "mm",
    "ft",
    "meter",
    "set",
    "dozen",
    "bunch",
    "bundle",
    "pair",
    "pack",
    "capsule",
    "tablet",
    "plate",
  ]);
  return (
    <>
      <View style={tw`ml-4 w-full `}>
        <View style={tw`flex flex-row  mt-5`}>
          <TouchableOpacity onPress={back}>
            <MaterialIcons
              name="arrow-back"
              style={tw`text-black `}
              size={30}
            />
          </TouchableOpacity>
          <Text
            style={tw`text-black w-1.6/2 text-center  text-xl  font-semibold`}
          >
            Update Product
          </Text>
        </View>
        <TouchableOpacity>
          <View style={tw`w-1/4  h-24 w-24 `}>
            <AntDesign
              name="camerao"
              style={tw`text-gray-500 p-4 border-black border-2  border-gray-300 text-center rounded-2xl h-24 pt-[28%] w-28 `}
              size={40}
            />
          </View>
        </TouchableOpacity>
        <Text style={tw`text-gray-400`}>Update Product Images(Up to 8)</Text>
        <Text style={tw`text-gray-400 mt-2`}>Update Product Details</Text>
        <TextInput
          placeholder="Product Name "
          style={tw`w-11/12 h-12 px-2 py-2 bg-gray-200 border-gray-300 rounded-lg`}
        />
        {/* Product Category */}
        <TextInput
          placeholder="Product Category "
          style={tw`w-11/12 mt-2 h-12 px-2 py-2 bg-gray-200 border-gray-300 rounded-lg`}
        />
        {/* Price */}
        <View style={tw`flex flex-row w-[48%] mt-2`}>
          <TextInput
            placeholder="Price"
            required="true"
            autoCapitalize="true"
            style={tw`w-11/12 h-12 px-2 py-2 bg-gray-200 border-gray-300 rounded-lg`}
          />
          {/* Discounted Price */}
          <TextInput
            placeholder="Discounted Price"
            autoCapitalize="true"
            style={tw`w-11/12 h-12 px-2 py-2 bg-gray-200 border-gray-300 rounded-lg ml-3`}
          />
        </View>
        {/* No. of unit of product */}
        <View style={tw`flex flex-row w-[48%] mt-2`}>
          <TextInput
            placeholder="Units"
            required="true"
            autoCapitalize="true"
            style={tw`w-11/12 h-12 px-2 py-2 bg-gray-200 border-gray-300 rounded-lg`}
          />

          {/* Product Unit */}
          {/*  <Picker
            selectedValue={selectedUnit}
            onValueChange={(itemValue, itemIndex) => setSelectedUnit(itemValue)}
            style={tw`w-11/12 h-12 px-2 py-2 bg-gray-200 border-gray-300 rounded-lg ml-3`}
          />
          {Unit.map((item, index) => {
            return <Picker.Item label={item} value={item} />;
          })} 
          <

          <Picker /> */}
        </View>
        <Text style={tw`text-sm  `}>Unit: Per 1 Piece </Text>
        <TextInput
          placeholder="Product Details "
          style={tw`w-11/12 mt-2 h-12 px-2 py-2 bg-gray-200 border-gray-300 rounded-lg`}
        />
        <View style={tw`w-11/12 mt-2 `}>
          <TouchableOpacity onPress={goto}>
            <Text style={tw`text-blue-500  `}> + ADD VARIANTS</Text>
          </TouchableOpacity>
        </View>
        <View style={tw`flex items-center right-55 absolute bottom-10`}>
          <AddNew  text={"Update Product"} to="" />
        </View>
      </View>
    </>
  );
};

export default UpdateProductFullDetail;
