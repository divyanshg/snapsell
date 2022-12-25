import { View, Text } from "react-native";
import React from "react";
import tw from "lib/tailwind";

const StatusIndicator = ({ status }) => {
  //set color based on status
  let color = "gray";
  if (status === "pending") {
    color = "yellow";
  } else if (status === "accepted") {
    color = "green";
  } else if (status === "rejected") {
    color = "red";
  } else if (status === "delivered") {
    color = "blue";
  } else if (status === "cancelled") {
    color = "gray";
  }
  
  return <View style={tw`rounded-lg h-4 w-4 bg-${color}-500 mr-2`} />;
};

export default StatusIndicator;
