import { useState } from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import RNModal from "react-native-modal";
import tw from "lib/tailwind";

const ProductModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleModal = () => setModalVisible(() => !modalVisible);
  return (
    <View>
      <RNModal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="down"
        animationIn={"zoomIn"}
        animationOut={"zoomOut"}
        style={tw`flex flex-col items-center justify-center`}
      >
        <View style={tw`bg-white w-full h-1/2 rounded-xl`}>
          <View style={tw`flex flex-row justify-between items-center`}>
            <Text style={tw`text-xl font-bold ml-4 mt-4`}>Product Name</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={tw`text-xl font-bold mr-4 mt-4`}>X</Text>
            </TouchableOpacity>
          </View>
        </View>
      </RNModal>
    </View>
  );
};
export default ProductModal;
