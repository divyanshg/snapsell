import tw from "lib/tailwind";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AddNew = ({ text, to }) => {
  const navigation = useNavigation();
  const goto = () => {
    navigation.navigate(to);
  };
  return (
    <TouchableOpacity
      onPress={goto}
      style={tw`absolute -bottom-54  items-center p-4 bg-red-400 rounded-xl `}
    >
      <View>
        <Text style={tw`text-xl px-20`}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AddNew;
