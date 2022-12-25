import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableHighlight,
} from "react-native";
import React from "react";
import tw from "lib/tailwind";
import { useNavigation } from "@react-navigation/native";

import { AntDesign } from "@expo/vector-icons";
import StatusIndicator from "../StatusIndicator";

let orders = [
  {
    id: 1,
    products: [
      {
        id: 1,
        name: "Product 1",
        price: 100,
        quantity: 1,
      },
      {
        id: 2,
        name: "Product 2",
        price: 200,
        quantity: 2,
      },
    ],
    total: 500,
    status: "pending",
    createdAt: "2021-01-01 00:00:00",
    customer: {
      name: "Customer 1",
      email: "test@mail.com",
      phone: "1234567890",
      shippingAddress: {
        address: "Address 1",
        city: "City 1",
        state: "State 1",
        country: "Country 1",
        zip: "12345",
      },
    },
    paymentMethod: "cod",
    paymentResult: {
      id: "1234567890",
      status: "success",
      update_time: "2021-01-01 00:00:00",
      email_address: "test@mail.com",
    },
  },
];

const Order = ({ order }) => {
  const { navigate } = useNavigation();
  return (
    <TouchableHighlight
      onPress={() => navigate("OrderDetails", { id: order.id })}
      underlayColor="#DDDDDD"
      style={tw`bg-white rounded-lg border border-stone-200 mb-4`}
    >
      <View style={tw`p-4`}>
        <View style={tw`flex flex-row justify-between items-center`}>
          <View style={tw`flex flex-row items-center`}>
            <Text style={tw`font-semibold text-lg`}>Order #{order.id}</Text>
            <View style={tw`mx-2 bg-green-600 rounded px-1`}>
              <Text style={tw`text-white text-sm font-semibold`}>NEW</Text>
            </View>
          </View>
          <Text style={tw`font-semibold text-stone-400`}>Today, 12:04 AM</Text>
        </View>
        <View style={tw`flex flex-row justify-between items-center my-2`}>
          <View style={tw`flex flex-col`}>
            <Text style={tw`font-semibold text-stone-400`}>
              {order.products.length === 1
                ? "1 ITEM"
                : `${order.products.length} ITEMS`}
            </Text>
            <Text style={tw`font-semibold text-brand-primary`}>
              ₹{order.total}
            </Text>
          </View>
          <View style={tw`bg-brand-secondary-variant px-2 py-1 rounded`}>
            <Text style={tw`font-semibold text-brand-secondary`}>
              {order.paymentMethod.toUpperCase()}
            </Text>
          </View>
        </View>
        <View
          style={tw`border-t border-stone-200 pt-2 flex flex-row items-center justify-between`}
        >
          <View style={tw`flex flex-row items-center`}>
            <StatusIndicator status={order.status} />
            <Text style={tw`font-bold text-stone-400`}>
              {order.status.toUpperCase()}
            </Text>
          </View>
          <AntDesign name="right" size={20} style={tw`text-stone-400`} />
        </View>
      </View>
    </TouchableHighlight>
  );
};

const OrdersList = () => {
  return (
    <ScrollView nestedScrollEnabled={true} bounces={false}>
      {orders.length === 0 ? (
        <View style={tw`flex-1 justify-center items-center`}>
          <Text style={tw`text-gray-700 font-bold`}>No Orders Found</Text>
        </View>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Order order={item} />}
        />
      )}
    </ScrollView>
  );
};

export default OrdersList;
