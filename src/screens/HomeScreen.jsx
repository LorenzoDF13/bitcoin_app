import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import React, { useEffect, useState } from "react";
import BitcoinGraph from "../components/bitcoinGraph";
// import BottomNavigator from "../navigation/BottomNavigator";
import exampleImage from "../../assets/home.jpg";
const img = require("../../assets/icon.png");
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
            onClick={() => {
              navigation.navigate("selectassett");
            }}
            title="Send"
          >
            <Text className="text-white">Send</Text>
          </Pressable>
        </View>
        <View>
          <Text className="text-white">Recive</Text>
        </View>
        <View>
          <Text className="text-white">Buy</Text>
        </View>
        <View>
          <Text className="text-white">Swap</Text>
        </View>
      </View>
      <View className="py-3 text-lg text-white">
        <Image
          source="https://picsum.photos/seed/696/3000/2000"
          className="flex-1 w-full h-9"
        />
        <Text className="text-lg text-white">My assetts</Text>
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <Image
          style={{
            flex: 1,
            width: "100%",
            backgroundColor: "#0553",
          }}
          source={require("../../assets/home.jpg")}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
