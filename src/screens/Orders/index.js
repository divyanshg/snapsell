import { View, Text, SafeAreaView } from "react-native";
import tw from "lib/tailwind";

import ScreenHeader from "components/ScreenHeader";
import OrdersList from "../../components/Orders/List";

const OrdersScreen = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-stone-100`}>
      <ScreenHeader title={"Orders"} />
      <View style={tw`flex-1 py-4 px-4`}>
        <OrdersList />
      </View>
    </SafeAreaView>
  );
};

export default OrdersScreen;
