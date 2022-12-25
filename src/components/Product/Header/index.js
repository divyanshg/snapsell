import { View, Text } from "react-native";
import tw from "lib/tailwind";
const Header = () => {
  return (
    <View style={tw`mt-5`}>
      <View
        style={tw`flex  items-center  `}
      >
        <Text style={tw`text-3xl font-brandSemibold flex justify-center py-1`}>Catalogue</Text>
      </View>
    </View>
  );
};

export default Header;
