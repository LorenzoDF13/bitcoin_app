import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Feather } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import BitcoinGraph from "../components/bitcoinGraph";
// import BottomNavigator from "../navigation/BottomNavigator";

const HomeScreen = ({ navigation }) => {
  const [bitcoinData, setBitcoinData] = useState(null);
  console.log("Home " + bitcoinData);
  useEffect(() => {
    fetch("https://api.coinlore.net/api/ticker/?id=90")
      .then((response) => response.json())
      .then((data) => setBitcoinData(data[0]));
  }, []);
  return (
    <SafeAreaView
      className="flex-1 text-white  px-4 "
      style={{ backgroundColor: "#16171C" }}
    >
      <Text className=" pb-3 text-lg font-bold" style={{ color: "#96979B" }}>
        Total Portfolio
      </Text>
      <View className="justify-between pb-3 flex-row">
        <Text className="text-4xl text-white">US$2.000.31</Text>
        <View className="flex-row">
          <Text className="text-3xl">svg</Text>
          <Text className="text-lg">svg</Text>
        </View>
      </View>
      <View className="gap-4 flex-row items-center">
        <Text
          className="pr-1 "
          style={{
            color: bitcoinData?.percent_change_24h > 0 ? "#05BD88" : "red",
          }}
        >
          {bitcoinData?.percent_change_24h}%
        </Text>
        <View>
          <Text
            className="p-1 px-2 rounded-xl"
            style={{ backgroundColor: "#242831", color: "#919296" }}
          >
            24H
          </Text>
        </View>
      </View>
      <View>
        <BitcoinGraph />
      </View>
      <View
        className="flex-row justify-around rounded-xl p-3 "
        style={{ backgroundColor: "#242831" }}
      >
        <View>
          <Pressable
            className="bg-transparent"
            onPress={() => {
              navigation.navigate("selectassett");
            }}
            title="Send"
          >
            <Feather name="send" size={24} color="#0184fb" />
            <Text className="text-white">Send</Text>
          </Pressable>
        </View>
        <View>
          <Feather name="download" size={24} color="#0184fb" />
          <Text className="text-white">Recive</Text>
        </View>
        <View>
          <Feather name="shopping-cart" size={24} color="#0184fb" />
          <Text className="text-white">Buy</Text>
        </View>
        <View>
          <Feather name="repeat" size={24} color="#0184fb" />
          <Text className="text-white">Swap</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
