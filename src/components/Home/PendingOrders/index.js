import { View, Text, TouchableHighlight } from "react-native";
import tw from "lib/tailwind";

import { Entypo } from "@expo/vector-icons";

const PendingOrders = () => {
  return (
    <TouchableHighlight
      onPress={() => {}}
      underlayColor="#70798C"
      style={tw`flex bg-brand-on-primary rounded shadow mx-4 my-2 py-4 px-4`}
    >
      <View style={tw`flex-row justify-between items-center`}>
        <View>
          <Text style={tw`text-xl font-brandSemibold`}>0</Text>
          <Text style={tw`text-sm font-brandRegular mt-2`}>
            PENDING ORDERS FOR REVIEW
          </Text>
        </View>
        <View>
          <Entypo name="chevron-right" size={24} color="black" />
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default PendingOrders;
