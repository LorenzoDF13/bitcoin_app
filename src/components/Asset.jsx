import { View, Text } from "react-native";
import React from "react";
import currencyFormat from "../utils/CurrencyFormat";

const Asset = ({ icon, text, subtext, usd, change }) => {
  return (
    <View
      className="rounded-xl p-3 px-5 justify-between items-center flex-row w-full mb-3"
      style={{ backgroundColor: "#242831" }}
    >
      <View className="flex-row items-center">
        <View className="mr-5 rounded-full">{icon}</View>
        <View className=" text-white">
          <Text className="text-lg text-white">{text}</Text>
          <Text style={{ color: "#96979B" }}>{subtext}</Text>
        </View>
      </View>
      <View className=" ">
        <Text className="text-lg text-white">{currencyFormat(usd)}</Text>
        <Text
          className="self-end"
          style={{
            color:
              change > 0
                ? "#05BD88"
                : change == "0.00%"
                ? "#96979B"
                : "#E23F2E",
          }}
        >
          {change}
        </Text>
      </View>
    </View>
  );
};

export default Asset;
