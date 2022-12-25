import { View, Text } from "react-native";
import React from "react";

import tw from "lib/tailwind";

import SubScreenHeader from "components/SubScreenHeader";
import OrderStatusBar from "components/Orders/details/OrderStatusBar";
import ItemDetails from "components/Orders/details/Items";
import CustomerDetails from "components/Orders/details/Customer";
import ActionBar from "components/Orders/details/ActionBar";

const OrderDetailsScreen = () => {
  return (
    <View style={tw`flex-1`}>
      <SubScreenHeader title={"Order #43252"} />
      <OrderStatusBar />
      <ItemDetails
        products={[
          {
            name: "Kashmiri Apple",
            price: 1599,
            image:
              "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg",
          },
        ]}
      />
      <CustomerDetails />
      <ActionBar />
    </View>
  );
};

export default OrderDetailsScreen;
