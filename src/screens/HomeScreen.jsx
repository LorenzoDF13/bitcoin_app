import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome6 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import BitcoinGraph from "../components/BitcoinGraph";
import Asset from "../components/Asset";
// import BottomNavigator from "../navigation/BottomNavigator";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useBitcoinStore } from "../stores/BitcoinStore";
import Verce from "../../assets/svgs/verce.svg";
import currencyFormat from "../utils/CurrencyFormat";
import usdToBtc from "../utils/BitcoinFormat";
import Bitcoin from "../../assets/svgs/bitcoin.svg";
import { useTransactionStore } from "../stores/TransactionStore";
const HomeScreen = ({ navigation }) => {
  const { usd, setBtcPrice, btcPrice, setLast24hChange } = useBitcoinStore();
  const { resetTransactions } = useTransactionStore();
  console.log("HOME: ", usd);
  const [bitcoinData, setBitcoinData] = useState(null);
  useEffect(() => {
    fetch("https://api.coinlore.net/api/ticker/?id=90")
      .then((response) => response.json())
      .then((data) => {
        setBitcoinData(data[0]);
        setBtcPrice(data[0].price_usd);
        setLast24hChange(data[0].percent_change_24h);
      });
    //resetTransactions();
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
        <Text className="text-4xl text-white font-bold">
          {currencyFormat(usd)}
        </Text>
        <View className="flex-row">
          <View
            className="p-2 mr-2  rounded-xl justify-center items-center"
            style={{ backgroundColor: "#242831" }}
          >
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={20}
              className=""
              color="#0184fb"
            />
          </View>
          <View
            className="p-2  rounded-xl justify-center items-center"
            style={{ backgroundColor: "#0184fb" }}
          >
            <Verce width={24} height={24} />
          </View>
        </View>
      </View>
      <View className="gap-4 flex-row items-center">
        <Text
          className="pr-1 "
          style={{
            color: bitcoinData?.percent_change_24h > 0 ? "#05BD88" : "#E23F2E",
          }}
        >
          {bitcoinData?.percent_change_24h}%
        </Text>
        <View
          style={{ backgroundColor: "#242831" }}
          className="p-1 px-2 rounded-xl flex-row"
        >
          <MaterialIcons name="currency-exchange" size={16} color="#359BD7" />
          <Text style={{ color: "#919296" }} className="pl-1">
            1M
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
        <View className="items-center justify-center  gap-2 ">
          <Pressable
            className="bg-transparent"
            onPress={() => {
              navigation.navigate("selectassett");
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
          <Feather name="shopping-cart" size={20} color="#0184fb" />
          <Text className="text-white">Buy</Text>
        </View>
        <View className="items-center">
          <Feather name="repeat" size={20} color="#0184fb" />
          <Text className="text-white">Swap</Text>
        </View>
      </View>
      <Text className="text-white py-3"> My Assets</Text>
      <Asset
        icon={<Bitcoin width={32} height={32} />}
        text="BTC"
        subtext={usdToBtc(usd, btcPrice)}
        usd={usd}
        change={bitcoinData?.percent_change_24h + "%"}
      ></Asset>
      <Asset
        icon={<Verce width={32} height={32} />}
        text="Verse"
        subtext={"0 verse"}
        usd="0.00"
        change={"0.00%"}
      ></Asset>
    </SafeAreaView>
  );
};

export default HomeScreen;
