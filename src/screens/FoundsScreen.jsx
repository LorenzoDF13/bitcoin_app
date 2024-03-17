import { View, Text, Pressable, TouchableHighlight } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5, Feather, FontAwesome6 } from "@expo/vector-icons";
import { useBitcoinStore } from "../stores/BitcoinStore";
import currencyFormat from "../utils/CurrencyFormat";
import Matic from "../../assets/svgs/matic.svg";
import Eth from "../../assets/svgs/eth.svg";
import BtcCash from "../../assets/svgs/btcCash.svg";
import Bitcoin from "../../assets/svgs/bitcoin.svg";
import BtcToUsd from "../utils/UsdFormat";
const FoundsScreen = ({ navigation }) => {
  const { usd, btcPrice, bitcoin } = useBitcoinStore();
  return (
    <SafeAreaView
      className="flex-1 text-white  px-4 pt-3"
      style={{ backgroundColor: "#16171C" }}
    >
      <View className=" pb-5 flex-row justify-between">
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <FontAwesome5 name="chevron-left" size={24} color="#16171C" />
        </Pressable>
        <Text className="text-white custom-font  text-lg ">Founds</Text>
        <Text>
          <FontAwesome5 name="chevron-left" size={24} color="#16171C" />
        </Text>
      </View>
      <View
        className="flex-row justify-around rounded-xl p-3 "
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
            <Text className="text-white custom-font ">Send</Text>
          </Pressable>
        </View>
        <View className="items-center">
          <Feather name="download" size={20} color="#0184fb" />
          <Text className="text-white">Recive</Text>
        </View>
        <View className="items-center">
          <Feather name="repeat" size={20} color="#0184fb" />
          <Text className="text-white custom-font ">Swap</Text>
        </View>
      </View>
      <TouchableHighlight
        className="w-full text-center rounded-xl my-4"
        style={{ backgroundColor: "#0184fb" }}
      >
        <Text className="text-white custom-font  text-lg text-center px-4 py-2">
          BUY CRYPTO
        </Text>
      </TouchableHighlight>
      <Text className="pb-3 custom-font  text-white">Wallets</Text>
      <View
        className="rounded-xl p-3 px-5 justify-between items-center flex-row w-full mb-3"
        style={{ backgroundColor: "#242831" }}
      >
        <View className="flex-row justify-center items-center">
          <View className="mr-5">
            <BtcCash width={30} height={30} />
          </View>
          <View className=" text-white">
            <Text className="text-base custom-font  text-white">
              My BHC Wallet
            </Text>
            <Text style={{ color: "#96979B" }}>0 BCH</Text>
          </View>
        </View>
        <View className="justify-end align-bottom">
          <Text
            className="text-base  text-end  self-end"
            style={{ color: "#50535A" }}
          >
            $0.00
          </Text>
        </View>
      </View>
      <TouchableHighlight
        className="rounded-xl mb-3"
        onPress={() => navigation.navigate("btcwallet")}
        underlayColor={"#50535A"}
      >
        <View
          className="rounded-xl p-3 px-5  justify-between items-center flex-row w-full "
          style={{ backgroundColor: "#242831" }}
        >
          <View
            onPress={() => navigation.navigate("btcwallet")}
            className="flex-row"
          >
            <View className="flex-row justify-center items-center">
              <View className="mr-5">
                <Bitcoin width={30} height={30} />
              </View>
              <View className=" text-white">
                <Text className="text-base custom-font  text-white">
                  My BTC Wallet
                </Text>
                <Text style={{ color: "#96979B" }}>
                  {parseFloat(bitcoin).toFixed(10) + " BTC"}
                </Text>
              </View>
            </View>
          </View>
          <View className="justify-end align-bottom">
            <Text
              className="text-base  text-end text-white self-end"
              style={{}}
            >
              {BtcToUsd(bitcoin, btcPrice)}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
      <View
        className="rounded-xl p-3 px-5 justify-between items-center flex-row w-full mb-3"
        style={{ backgroundColor: "#242831" }}
      >
        <View className="flex-row justify-center items-center">
          <View className="mr-5">
            <Eth width={30} height={30} />
          </View>
          <View className=" text-white">
            <Text className="text-base custom-font  text-white">
              My ETH Wallet
            </Text>
            <Text style={{ color: "#96979B" }}>0 ETH</Text>
          </View>
        </View>
        <View className="justify-end align-bottom">
          <Text
            className="text-base  text-end  self-end"
            style={{ color: "#50535A" }}
          >
            $0.00
          </Text>
        </View>
      </View>
      <View
        className="rounded-xl p-3 px-5 justify-between items-center flex-row w-full mb-3"
        style={{ backgroundColor: "#242831" }}
      >
        <View className="flex-row justify-center items-center">
          <View className="mr-5">
            <Matic width={30} height={30} />
          </View>
          <View className=" text-white">
            <Text className="text-base custom-font  text-white">
              My MATIC Wallet
            </Text>
            <Text style={{ color: "#96979B" }}>0 MATIC</Text>
          </View>
        </View>
        <View className="justify-end align-bottom">
          <Text
            className="text-base  text-end  self-end"
            style={{ color: "#50535A" }}
          >
            $0.00
          </Text>
        </View>
      </View>

      <TouchableHighlight
        className="w-full text-center rounded-xl "
        style={{ backgroundColor: "#0184fb" }}
      >
        <Text className="text-white custom-font  text-lg text-center px-4 py-2">
          ADD / IMPORT
        </Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default FoundsScreen;
