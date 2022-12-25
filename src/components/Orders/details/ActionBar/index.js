import { View, Text, Pressable } from "react-native";
import React from "react";
import tw from "lib/tailwind";

const ActionBar = () => {
  return (
    <View
      style={tw`absolute bottom-18 w-full h-12 border-t border-gray-200 bg-white`}
    >
      <View style={tw`flex-row justify-between items-center h-full`}>
        <Pressable style={tw`w-1/2 h-full flex items-center justify-center`}>
          <Text style={tw`text-center text-brand-error`}>Cancel Order</Text>
        </Pressable>
        <Pressable
          style={tw`w-1/2 h-full bg-brand-on-primary flex items-center justify-center`}
        >
          <Text style={tw`text-center text-white`}>Accept Order</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ActionBar;
