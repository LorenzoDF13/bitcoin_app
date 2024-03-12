import { View, Text } from "react-native";
import React from "react";

const Asset = ({ icon, text, subtext, usd, change }) => {
  return (
    <View
      className="rounded-xl p-3 px-5 justify-between items-center flex-row w-full mb-3"
      style={{ backgroundColor: "#242831" }}
    >
      <View className="flex-row">
        <View className="mr-5">{icon}</View>
        <View className=" text-white">
          <Text className="text-lg text-white">{text}</Text>
          <Text style={{ color: "#96979B" }}>{subtext}</Text>
        </View>
      </View>
      <View className=" ">
        <Text className="text-lg text-white">US${usd}</Text>
        <Text style={{ color: "#96979B" }}>{change}</Text>
      </View>
    </View>
  );
};

export default Asset;
