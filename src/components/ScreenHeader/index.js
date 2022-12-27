import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "lib/tailwind";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ScreenHeader = ({ title }) => {
  const navigation = useNavigation();
  const goto = () => {
    navigation.navigate("Products");
  };
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View
      style={tw`w-full py-4 pt-10 px-4 bg-brand-secondary border-b border-gray-200 flex flex-row`}
    >
      <TouchableOpacity onPress={goBack}>
        <Ionicons name="arrow-back" style={tw`text-white `} size={30} />
      </TouchableOpacity>
      <Text
        style={tw`text-2xl font-brandSemibold text-white text-center flex-1`}
      >
        {title}
      </Text>
    </View>
  );
};

export default ScreenHeader;
