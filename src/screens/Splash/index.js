import { View, Text } from "react-native";
import tw from "lib/tailwind";

const Splash = () => {
  return (
    <View style={tw`bg-brand-primary flex-1 items-center justify-center`}>
      <Text style={tw`text-brand-on-primary text-3xl font-brandBold`}>SNAP SELL</Text>
    </View>
  );
};

export default Splash;
