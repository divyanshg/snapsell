import { View, Text, FlatList, Image } from "react-native";
import React from "react";

import tw from "lib/tailwind";

const Product = ({ product }) => (
  <View style={tw`flex justify-start`}>
    <View style={tw`flex-row justify-between items-center`}>
      <Image
        source={{ uri: product.image }}
        style={tw`w-16 h-16 bg-gray-300 rounded-lg border border-gray-400`}
      />
      <View style={tw`flex-1 ml-4`}>
        <Text style={tw`text-gray-600 font-semibold text-lg`}>
          {product.name}
        </Text>
        <Text style={tw`text-gray-400 font-semibold`}>per piece</Text>
        <View style={tw`flex-row justify-between`}>
          <Text style={tw`text-gray-400 font-semibold`}>
            1 x Rs.{product.price}
          </Text>
          <Text style={tw`text-gray-400 font-semibold`}>
            Rs.{product.price}
          </Text>
        </View>
      </View>
    </View>
  </View>
);

const ItemDetails = ({ products }) => {
  return (
    <View style={tw`mx-4 py-4 mb-2 flex`}>
      <View style={tw`flex-row justify-between mb-3`}>
        <Text style={tw`text-gray-400 font-semibold`}>
          {products && products.length} ITEM
        </Text>
        <Text style={tw`text-blue-400 font-semibold`}>RECEIPT</Text>
      </View>
      <FlatList
        style={tw`border-b-2 border-stone-200 pb-4`}
        data={products}
        renderItem={({ item }) => <Product product={item} />}
        keyExtractor={(item) => item.name}
      />
      <View style={tw`mt-4 border-b-2 border-stone-200 pb-4`}>
        <View style={tw`flex-row justify-between my-0.5`}>
          <Text style={tw`text-gray-400 font-semibold`}>Subtotal</Text>
          <Text style={tw`text-gray-400 font-semibold`}>Rs. 1599</Text>
        </View>
        <View style={tw`flex-row justify-between my-0.5`}>
          <Text style={tw`text-gray-400 font-semibold`}>Delivery Charges</Text>
          <Text style={tw`text-gray-400 font-semibold`}>FREE</Text>
        </View>
        <View style={tw`flex-row justify-between my-0.5`}>
          <Text style={tw`text-gray-700 text-lg font-bold`}>Grand Total</Text>
          <Text style={tw`text-gray-700 text-lg font-bold`}>Rs. 1599</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemDetails;
