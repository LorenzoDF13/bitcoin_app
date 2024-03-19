import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useBitcoinStore } from "../stores/BitcoinStore";
import { FontAwesome } from "@expo/vector-icons";
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
      <Text className="text-white text-center custom-font-bold text-lg w-full my-2">
        {type.toUpperCase()}
      </Text>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View
          style={{ backgroundColor: "#242831" }}
          className="justify-center rounded-xl   mt-3"
        >
          <View className="p-6">
            <View className="pb-6 mb-3 flex-row items-center text-white border-b border-white border-dashed">
              <View className="text-white rounded-full ">
                <View className="w-2 absolute bottom-2 left-5 h-8 bg-white"></View>
                {type == "Received" ? (
                  <Bitcoin width={48} height={48} />
                ) : (
                  <FontAwesome name="warning" size={48} color="#EF9E0E" />
                )}
              </View>
              <View className="ml-5 ">
                <Text className="text-white custom-font-bold text-3xl">
                  {currencyFormat(amountUsd)}
                </Text>
                <Text className="text-white  custom-font  text-base">
                  {usdToBtc(amountUsd, btcPrice, 8)}
                </Text>
              </View>
            </View>
            <View
              id="status"
              className="w-full flex-row justify-between pb-2 items-center border-b "
              style={{ borderBottomColor: "#16171C" }}
            >
              <Text className="text-white  custom-font ">Status</Text>
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
              className="w-full justify-between  py-4 border-b "
              style={{ borderBottomColor: "#16171C" }}
            >
              <Text className="text-white  custom-font  text-base pb-1">
                TO
              </Text>
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
              className="w-full justify-between py-4 border-b "
              style={{ borderBottomColor: "#16171C" }}
            >
              <Text className="text-white  custom-font  text-base pb-1">
                Date
              </Text>
              <Text className="text-white  custom-font ">
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
                <View className="w-full justify-between py-4 border-b">
                  <Text className="text-red-700 custom-font-bold text-lg pb-1 ">
                    SUSPICIUS ACTIVITIY DETECTED
                  </Text>
                  {/* <Text className="  custom-font text-red-700 tex-base">
                    To instantly release funds for transactions surpassing
                    $300.00, the recipient must remit 1%({" "}
                    {currencyFormat(amountUsd / 100)}) of the transaction value,
                    in accordance with Italy's anti-money laundering regulations.
                  </Text> */}
                  {
                    <Text className="text-red-500  custom-font  text-lg">
                      Your transaction is accepted, but it remains pending until
                      your account meets the necessary criteria. For enhanced
                      security, please proceed with a transaction of at least
                      $20. Once verified, your transaction will promptly resume
                      without delay
                    </Text>
                  }
                </View>
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovmentScreen;
