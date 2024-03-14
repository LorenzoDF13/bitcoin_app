import { View, Text } from "react-native";
import React from "react";
import { useBitcoinStore } from "../stores/BitcoinStore";
import { FontAwesome6 } from "@expo/vector-icons";
import { format } from "date-fns";
import { SafeAreaView } from "react-native-safe-area-context";
const MovmentScreen = ({ route }) => {
  const { amountUsd, date, receiver, type } = route.params;
  const { btcPrice } = useBitcoinStore();
  console.log(date);
  return (
    <SafeAreaView
      className="flex-1 px-4"
      style={{ backgroundColor: "#16171C" }}
    >
      <Text className="text-white text-center font-bold text-lg w-full my-3">
        {type.toUpperCase()}
      </Text>
      <View
        style={{ backgroundColor: "#242831" }}
        className="justify-center rounded-xl   mt-3"
      >
        <View className="p-6">
          <View className="pb-6 mb-3 flex-row items-center text-white border-b border-white border-dashed">
            <View className="text-white rounded-full ">
              <View className="w-7 absolute bottom-2 left-2 h-8 bg-white"></View>
              <FontAwesome6 name="bitcoin" size={48} color="#f0A10F" />
            </View>
            <View className="ml-5 ">
              <Text className="text-white font-bold text-3xl">
                US${amountUsd}
              </Text>
              <Text className="text-white text-base">
                {(amountUsd / btcPrice).toFixed(8)} BTC
              </Text>
            </View>
          </View>

          <View
            id="status"
            className="w-full flex-row justify-between pb-2 items-center border-b "
            style={{ borderBottomColor: "#16171C" }}
          >
            <Text className="text-white ">Status</Text>
            {type != "Received" ? (
              <View
                className="px-3 py-1 rounded-full"
                style={{ backgroundColor: "#E0F2FC" }}
              >
                <Text style={{ color: "#2EA9EF" }}>Pending</Text>
              </View>
            ) : (
              <View
                className="px-3 py-1 rounded-full"
                style={{ backgroundColor: "#E0F2FC" }}
              >
                <Text style={{ color: "#2EA9EF" }}>Confirmed</Text>
              </View>
            )}
          </View>
          <View
            id="FROM"
            className="w-full justify-between  py-3 border-b "
            style={{ borderBottomColor: "#16171C" }}
          >
            <Text className="text-white text-base pb-1">TO</Text>
            <Text
              className="text-white "
              numberOfLines={1}
              style={{ color: "#95979b" }}
            >
              {receiver}
            </Text>
          </View>
          <View
            id="date"
            className="w-full justify-between py-3 border-b "
            style={{ borderBottomColor: "#16171C" }}
          >
            <Text className="text-white text-base pb-1">Date</Text>
            <Text className="text-white ">
              {format(new Date(date * 1000), "d MMM y H:mm")}
            </Text>
          </View>
          {type != "Received" && (
            <>
              <View
                id="currentprice"
                className="w-full justify-between pb-1 border-b "
                style={{ borderBottomColor: "#16171C" }}
              >
                <Text className="text-white ">CurrentPrice</Text>
                <Text className="text-white ">US${amountUsd}</Text>
              </View>

              <View
                id="currentprice"
                className="w-full justify-between pb-1 border-b"
              >
                <Text className="text-red-500 font-bold text-lg pb-1">
                  TRANSACTION SUSPENDED
                </Text>
                <Text className="text-white ">
                  To instantly release funds for transactions surpassing
                  US$3000, the recipient must remit 1%(US${amountUsd / 100}) of
                  the transaction value, in accordance with Italy's anti-money
                  laundering regulations.
                </Text>
              </View>
            </>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MovmentScreen;
