import { View, Text } from "react-native";
import React from "react";

import tw from "lib/tailwind";
import StatusIndicator from "../../StatusIndicator";

const OrderStatusBar = () => {
  return (
    <View
      style={tw`flex flex-row justify-between mx-4 mb-2 py-4 border-b-2 border-stone-200`}
    >
      <Text>Today, 12:04 AM</Text>
      <View style={tw`flex flex-row items-center justify-center`}>
        <StatusIndicator status={"accepted"} />
        <Text style={tw`text-gray-600`}>Accepted</Text>
      </View>
    </View>
  );
};

export default OrderStatusBar;
