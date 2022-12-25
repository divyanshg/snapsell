import { View, Text } from "react-native";
import React from "react";

import tw from "lib/tailwind";

const CustomerDetails = () => {
  return (
    <View style={tw`mx-4 pb-4`}>
      <Text style={tw`text-gray-500`}>CUSTOMER DETAILS</Text>
      <View style={tw`mt-4`}>
        <View>
          <Text style={tw`text-gray-700 font-semibold`}>John Doe</Text>
          <Text style={tw`text-gray-400 font-semibold`}>+91 9999999999</Text>
        </View>
        <View style={tw`mt-4`}>
          <Text style={tw`text-gray-700 font-semibold`}>Address</Text>
          <Text style={tw`text-gray-400 font-semibold`}>
            some, random, address
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CustomerDetails;
