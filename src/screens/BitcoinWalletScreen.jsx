import { View, Text, Pressable, TouchableHighlight } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  FontAwesome5,
  FontAwesome6,
  Feather,
  Entypo,
} from "@expo/vector-icons";
import { useTransactionStore } from "../stores/TransactionStore";
import { useBitcoinStore } from "../stores/BitcoinStore";
import { format } from "date-fns";
import currencyFormat from "../utils/CurrencyFormat";
import Bitcoin from "../../assets/svgs/bitcoin.svg";
import usdToBtc from "../utils/BitcoinFormat";
const BitcoinWalletScreen = ({ navigation }) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const { usd, btcPrice, last_24h_change } = useBitcoinStore();
  const { transactions } = useTransactionStore();
  return (
    <SafeAreaView
      className="flex-1 text-white  "
      style={{ backgroundColor: "#16171C" }}
    >
      <View className=" pb-5 flex-row justify-between px-4">
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <FontAwesome5 name="chevron-left" size={24} color="#16171C" />
        </Pressable>
        <View className=" flex-row">
          <Text
            className="text-orange-500 text-base   rounded-full mr-2"
            /* style={{ backgroundColor: "rgb(249 115 22)" }} */
          >
            {"\u2B24"}
          </Text>
          <Text className="font-bold text-lg text-white">My BTC wallet </Text>
        </View>
        <Text>
          <Entypo name="dots-three-vertical" size={24} color="#0184fb" />
        </Text>
      </View>
      <View className="justify-center  py-6 ">
        <Text className="text-4xl text-white text-center  font-bold">
          {currencyFormat(usd)}
        </Text>
        <View className="gap-4   items-center">
          <Text
            className="pr-1 font-bold"
            style={{
              color: last_24h_change > 0 ? "#05BD88" : "#E23F2E",
            }}
          >
            {last_24h_change}% last 24h change
          </Text>
        </View>
      </View>
      <View
        id="send-recive-swap"
        className="flex-row justify-around rounded-xl p-3 mx-4 mb-6"
        style={{ backgroundColor: "#242831" }}
      >
        <View className="items-center justify-center  gap-2 ">
          <Pressable
            className="bg-transparent"
            onPress={() => {
              navigation.navigate("selectassett", {});
            }}
            title="Send"
          >
            <Feather name="send" size={20} color="#0184fb" />
            <Text className="text-white">Send</Text>
          </Pressable>
        </View>
        <View className="items-center">
          <Feather name="download" size={20} color="#0184fb" />
          <Text className="text-white">Recive</Text>
        </View>
        <View className="items-center">
          <Feather name="repeat" size={20} color="#0184fb" />
          <Text className="text-white">Swap</Text>
        </View>
      </View>

      <View>
        <Text className="text-center  " style={{ color: "#0184fb" }}>
          Transactions
        </Text>
      </View>
      <View className="flex-1" style={{ backgroundColor: "#22252E" }}>
        <Text
          style={{ color: "gray" }}
          className="border-b border-black text-base  p-3"
        >
          {monthNames[new Date().getMonth()]}
        </Text>
        {transactions.map((transaction) => {
          return (
            <TouchableHighlight
              underlayColor="#16171C"
              key={transaction.date}
              onPress={() => {
                navigation.navigate("movment", transaction);
              }}
            >
              <View className="flex-row justify-between border-b border-black p-3">
                <View id="icon-Received" className="flex-row items-center">
                  {transaction.type == "Received" ? (
                    <View className="text-white rounded-full ">
                      <View className="w-4 absolute bottom-1 left-1 h-4 bg-white"></View>
                      <Bitcoin width={24} height={24} />
                    </View>
                  ) : (
                    <View className="text-white rounded-full ">
                      <View className="w-4 absolute bottom-1 left-1 h-4 bg-white"></View>
                      <Bitcoin width={24} height={24} />
                    </View>
                  )}
                  <View className="ml-3">
                    <Text className="text-white">{transaction.type}</Text>
                    <Text style={{ color: "#96979B" }}>
                      {format(new Date(transaction.date * 1000), "MMM d, y")}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      color:
                        transaction.type == "Received" ? "#05BD88" : "#F19F0F",
                    }}
                  >
                    {transaction.type == "Received" ? "+" : "-"}
                    {currencyFormat(transaction.amountUsd)}
                  </Text>
                  <Text style={{ color: "#96979B" }}>
                    {usdToBtc(transaction.amountUsd / btcPrice, 8)}
                  </Text>
                </View>
              </View>
            </TouchableHighlight>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default BitcoinWalletScreen;
