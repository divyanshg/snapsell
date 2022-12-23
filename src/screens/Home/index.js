import { View, Text } from "react-native";
import tw from "lib/tailwind";

import HomeHeader from "components/Home/Header";
import PendingOrders from "components/Home/PendingOrders";
import KycBanner from "components/Home/KycBanner";

const HomeScreen = () => {
  return (
    <View style={tw`flex-1 bg-gray-100`}>
      <HomeHeader />
      <View style={tw`flex flex-col`}>
        <PendingOrders />
        <KycBanner />
      </View>
    </View>
  );
};

export default HomeScreen;
