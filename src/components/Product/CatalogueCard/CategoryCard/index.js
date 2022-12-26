import tw from "lib/tailwind";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Switch,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import RNModal from "react-native-modal";
import { useState } from "react";
 
const CategoryCard = () => {
  const [switchVal, setSwitchVal] = useState("Active");
  const [modalVisible, setModalVisible] = useState(false);
  const handleModal = () => setModalVisible(() => !modalVisible);
  const navigation = useNavigation();
  const goto = () => {
    navigation.navigate("UpdateCategory");
  };

  return (
    <>
      <View style={tw` border-2 border-white bg-white rounded-xl mt-3 mx-4`}>
        <View style={tw`border-b-2  border-gray-300 flex flex-row ml-1 mx-1`}>
          <View>
            <TouchableOpacity>
              <View style={tw`w-1/4  h-24 w-24 `}>
                <Entypo
                  name="images"
                  style={tw`text-gray-500 p-3 border-black border-2 mt-2 border-gray-300 text-center rounded-2xl h-20 pt-[20%] w-24 `}
                  size={40}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={tw`ml-5 font-brandBold`}>
            <Text style={tw`font-brandSemibold`}>Product Name</Text>
            <Text>0 Product listed</Text>

            <Text style={tw`text-green-500 mt-4`}>{switchVal}</Text>
          </View>
          <View style={tw` w-36 flex items-end`}>
            <TouchableOpacity onPress={handleModal}>
              <Entypo
                style={tw`text-gray-400 mr-2 mt-2`}
                name="dots-three-vertical"
                size={20}
              />
            </TouchableOpacity>
            <Switch
              style={tw`mt-4`}
              rackColor={{ false: "#767577", true: "#81b0ff" }}
              ThumbColor={switchVal ? "#fff" : "#f4f3f4"}
              onValueChange={() => setSwitchVal((prevVal) => !prevVal)}
              value={switchVal}
            />
          </View>
        </View>
        <TouchableOpacity>
          <View style={tw` mx-2 flex flex-row items-center justify-center`}>
            <Entypo style={tw`text-xl text-gray-500`} name="share" />
            <Text style={tw`text-xl text-gray-500`}> Share Category</Text>
          </View>
        </TouchableOpacity>
        <RNModal
          isVisible={modalVisible}
          onBackdropPress={() => setModalVisible(false)}
          onSwipeComplete={() => setModalVisible(false)}
          swipeDirection="down"
          animationIn={"zoomIn"}
          animationOut={"zoomOut"}
          style={tw`flex items-center justify-center`}

          // style={tw`relative items-center   `}
        >
          <View style={tw`bg-white w-2/4  rounded-xl`}>
            <View style={tw`flex flex-row justify-between items-center`}>
              {/* <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={tw`text-xl font-bold mr-4 mt-4 ml-6 flex`}>X</Text>
              </TouchableOpacity> */}
            </View>
            <View style={tw`p-4`}>
              <TouchableOpacity onPress={goto}>
                <Text>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>Move to top</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={tw`text-red-500`}>Delete Category</Text>
              </TouchableOpacity>
            </View>
          </View>
        </RNModal>
      </View>
    </>
  );
};

export default CategoryCard;
