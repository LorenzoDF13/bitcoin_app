import { View, Text } from "react-native";
import React from "react";
import { useBitcoinStore } from "../stores/BitcoinStore";
import { FontAwesome6 } from "@expo/vector-icons";
import { format } from "date-fns";
import { SafeAreaView } from "react-native-safe-area-context";
const MovmentScreen = ({ route }) => {
  const { amountUsd, date, reciver, type } = route.params;
  const { btcPrice } = useBitcoinStore();
  console.log(date);
  return (
    <SafeAreaView
      className="flex-1 px-4"
      style={{ backgroundColor: "#16171C" }}
    >
      <Text className="text-white text-center text-lg w-full my-3">{type}</Text>
      <View
        style={{ backgroundColor: "#242831" }}
        className="justify-center rounded-xl  py-6 mt-3"
      >
        <View className="p-6">
          <View className="pb-6 mb-3 flex-row border-b border-white border-dashed">
            <FontAwesome6 name="bitcoin" size={40} color="yellow" />
            <View className="ml-5 ">
              <Text className="text-white text-4xl">US$ {amountUsd}</Text>
              <Text className="text-white text-lg">
                {(amountUsd / btcPrice).toFixed(8)} BTC
              </Text>
            </View>
          </View>

          <View
            id="status"
            className="w-full flex-row justify-between pb-2  border-b border-black"
          >
            <Text className="text-white ">Status</Text>
            <View
              className="px-2 py-1 rounded-full"
              style={{ backgroundColor: "blue" }}
            >
              <Text className="text-white ">pending</Text>
            </View>
          </View>
          <View
            id="FROM"
            className="w-full justify-between pb-1 border-b border-black"
          >
            <Text className="text-white ">TO</Text>
            <Text className="text-white " style={{ color: "#95979b" }}>
              {reciver}
            </Text>
          </View>
          <View
            id="date"
            className="w-full justify-between pb-1 border-b border-black"
          >
            <Text className="text-white ">Date</Text>
            <Text className="text-white " style={{ color: "#95979b" }}>
              {format(new Date(date * 1000), "d MMM y H:mm")}
            </Text>
          </View>
          <View
            id="currentprice"
            className="w-full justify-between pb-1 border-b border-black"
          >
            <Text className="text-white ">CurrentPrice</Text>
            <Text className="text-white ">US${amountUsd}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MovmentScreen;
