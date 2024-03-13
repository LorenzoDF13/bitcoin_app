import { View, Text, Pressable, TouchableHighlight } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5, Feather, FontAwesome6 } from "@expo/vector-icons";
import { useBitcoinStore } from "../stores/BitcoinStore";
const FoundsScreen = ({ navigation }) => {
  const { usd, btcPrice } = useBitcoinStore();
  return (
    <SafeAreaView
      className="flex-1 text-white  px-4 "
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
        <Text className="text-white text-lg ">Founds</Text>
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
      <TouchableHighlight
        className="w-full text-center rounded-xl my-4"
        style={{ backgroundColor: "#0184fb" }}
      >
        <Text className="text-white text-lg text-center px-4 py-2">
          BUY CRYPTO
        </Text>
      </TouchableHighlight>
      <Text className="pb-3 text-white">Wallets</Text>
      <View
        className="rounded-xl p-3 px-5 justify-between items-center flex-row w-full mb-3"
        style={{ backgroundColor: "#242831" }}
      >
        <View className="flex-row">
          <View className="mr-5">
            <FontAwesome6 name="bitcoin" size={32} color="green" />
          </View>
          <View className=" text-white">
            <Text className="text-lg text-white">My BHC Wallet</Text>
            <Text style={{ color: "#96979B" }}>0 BCH</Text>
          </View>
        </View>
        <View className="justify-end align-bottom">
          <Text
            className="text-base  text-end  self-end"
            style={{ color: "#50535A" }}
          >
            US$0.00
          </Text>
        </View>
      </View>
      <View
        className="rounded-xl p-3 px-5 justify-between items-center flex-row w-full mb-3"
        style={{ backgroundColor: "#242831" }}
      >
        <TouchableHighlight
          onPress={() => navigation.navigate("btcwallet")}
          className="flex-row"
        >
          <View className="flex-row">
            <View className="mr-5">
              <FontAwesome6 name="bitcoin" size={32} color="yellow" />
            </View>
            <View className=" text-white">
              <Text className="text-lg text-white">My BTC Wallet</Text>
              <Text style={{ color: "#96979B" }}>
                {(usd / btcPrice).toFixed(10) + " BTC"}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
        <View className="justify-end align-bottom">
          <Text className="text-base  text-end text-white self-end" style={{}}>
            US${usd}
          </Text>
        </View>
      </View>
      <View
        className="rounded-xl p-3 px-5 justify-between items-center flex-row w-full mb-3"
        style={{ backgroundColor: "#242831" }}
      >
        <View className="flex-row">
          <View className="mr-5">
            <FontAwesome6 name="bitcoin" size={32} color="purple" />
          </View>
          <View className=" text-white">
            <Text className="text-lg text-white">My ETH Wallet</Text>
            <Text style={{ color: "#96979B" }}>0 ETH</Text>
          </View>
        </View>
        <View className="justify-end align-bottom">
          <Text
            className="text-base  text-end  self-end"
            style={{ color: "#50535A" }}
          >
            US$0.00
          </Text>
        </View>
      </View>
      <View
        className="rounded-xl p-3 px-5 justify-between items-center flex-row w-full mb-3"
        style={{ backgroundColor: "#242831" }}
      >
        <View className="flex-row">
          <View className="mr-5">
            <FontAwesome6 name="bitcoin" size={32} color="violet" />
          </View>
          <View className=" text-white">
            <Text className="text-lg text-white">My MATIC Wallet</Text>
            <Text style={{ color: "#96979B" }}>0 MATIC</Text>
          </View>
        </View>
        <View className="justify-end align-bottom">
          <Text
            className="text-base  text-end  self-end"
            style={{ color: "#50535A" }}
          >
            US$0.00
          </Text>
        </View>
      </View>

      <TouchableHighlight
        className="w-full text-center rounded-xl "
        style={{ backgroundColor: "#0184fb" }}
      >
        <Text className="text-white text-lg text-center px-4 py-2">
          ADD / IMPORT
        </Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default FoundsScreen;
