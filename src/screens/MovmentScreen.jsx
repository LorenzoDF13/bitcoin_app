import { View, Text } from "react-native";
import React from "react";
import { useBitcoinStore } from "../stores/BitcoinStore";
import { FontAwesome6 } from "@expo/vector-icons";
import { format } from "date-fns";
import { SafeAreaView } from "react-native-safe-area-context";
import currencyFormat from "../utils/CurrencyFormat";
import Bitcoin from "../../assets/svgs/bitcoin.svg";
import usdToBtc from "../utils/BitcoinFormat";
const MovmentScreen = ({ route }) => {
  const { amountUsd, date, receiver, type } = route.params;
  const { btcPrice } = useBitcoinStore();
  console.log(date);
  return (
    <SafeAreaView
      className="flex-1 px-4 pt-3"
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
              <Bitcoin width={48} height={48} />
            </View>
            <View className="ml-5 ">
              <Text className="text-white font-bold text-3xl">
                {currencyFormat(amountUsd)}
              </Text>
              <Text className="text-white text-base">
                {usdToBtc(amountUsd, btcPrice, 8)}
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
              {format(new Date(date), "MMM d, y H:mm")}
            </Text>
          </View>
          {type != "Received" && (
            <>
              {/*  <View
                id="currentprice"
                className="w-full justify-between pb-1 border-b "
                style={{ borderBottomColor: "#16171C" }}
              >
                <Text className="text-white ">CurrentPrice</Text>
                <Text className="text-white ">{currencyFormat(amountUsd)}</Text>
              </View>
 */}
              <View className="w-full justify-between pb-1 border-b">
                <Text className="text-red-500 font-bold text-lg pb-1">
                  SUSPICIUS ACTIVITIY DETECTED
                </Text>
                {/* <Text className="text-red-700 tex-base">
                  To instantly release funds for transactions surpassing
                  $3,000.00, the recipient must remit 1%({" "}
                  {currencyFormat(amountUsd / 100)}) of the transaction value,
                  in accordance with Italy's anti-money laundering regulations.
                </Text> */}
                <Text className="text-red-700 tex-base">
                  This transaction has been temporarily halted due to security
                  concerns stemming from unusual activity detected on your
                  account. To ensure the integrity of your transactions, we
                  kindly request that you receive a transaction before
                  proceeding with this one
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
