import { View, Text, Pressable } from "react-native";
import React from "react";
import tw from "lib/tailwind";
import { useNavigation } from "@react-navigation/native";

import { AntDesign } from "@expo/vector-icons";

const SubScreenHeader = ({ title, backEnabled = true }) => {
  const { goBack } = useNavigation();

  return (
    <View
      style={tw`w-full py-4 pt-10 px-4 bg-brand-secondary border-b border-gray-200 flex flex-row items-center justify-center`}
    >
      {backEnabled && (
        <Pressable onPress={goBack} style={tw`absolute left-3 top-11`}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </Pressable>
      )}
      <Text style={tw`text-lg font-semibold text-white`}>{title}</Text>
    </View>
  );
};

export default SubScreenHeader;
