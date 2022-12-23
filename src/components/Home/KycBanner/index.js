import { View, Text, TouchableHighlight } from "react-native";
import tw from "lib/tailwind";

const KycBanner = () => {
  return (
    <View style={tw`flex bg-red-200 rounded shadow mx-4 my-2 py-4 px-4`}>
      <View style={tw`flex-row justify-between items-center`}>
        <View>
          <Text style={tw`text-lg font-brandRegular`}>
            You are required to complete {"\n"}your kyc to continue using{"\n"}
            Snap Sell.
          </Text>
        </View>
        <TouchableHighlight
          onPress={() => {}}
          underlayColor="#70798C"
          style={tw`w-24 bg-brand-error text-center items-center shadow rounded py-2 mx-1`}
        >
          <Text style={tw`text-sm font-brandRegular text-white text-lg`}>
            Go
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default KycBanner;
