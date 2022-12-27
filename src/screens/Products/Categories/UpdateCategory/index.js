import tw from "lib/tailwind";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { MaterialIcons, AntDesign } from "@expo/vector-icons";

const UpdateCategory = () => {
  const navigation = useNavigation();
  const back = () => {
    navigation.goBack();
  };
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
            Update Category
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
        <Text style={tw`text-gray-400`}>Update Category Images</Text>
        <TextInput
          placeholder="Update Category Name "
          style={tw`w-11/12 mt-2 h-12 px-2 py-2 bg-gray-200 border-gray-300 rounded-lg`}
        />
      </View>
    </>
  );
};

export default UpdateCategory;
