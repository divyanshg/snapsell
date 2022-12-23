import { View, Text } from "react-native";
import tw from "lib/tailwind";

const HomeHeader = () => {
  return (
    <View style={tw`w-full py-14 px-6 flex flex-row justify-between`}>
      <Text style={tw`text-3xl font-brandSemibold`}>
        Shoppers Stop
      </Text>
      <View style={tw`flex flex-row items-center`}>
        <View
          style={tw`w-10 h-10 rounded-full bg-brand-primary-variant`}
        ></View>
      </View>
    </View>
  );
};

export default HomeHeader;
