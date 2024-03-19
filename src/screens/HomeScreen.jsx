import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import BitcoinGraph from "../components/BitcoinGraph";
import Asset from "../components/Asset";
// import BottomNavigator from "../navigation/BottomNavigator";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useBitcoinStore } from "../stores/BitcoinStore";
import Verce from "../../assets/svgs/verce.svg";

import Bitcoin from "../../assets/svgs/bitcoin.svg";

import WalletManager from "../components/WalletManager";
import BtcToUsd from "../utils/UsdFormat";
import BtcCash from "../../assets/svgs/btcCash.svg";
import Eth from "../../assets/svgs/eth.svg";
const HomeScreen = ({ navigation }) => {
  const { usd, setBtcPrice, bitcoin, btcPrice, setLast24hChange } =
    useBitcoinStore();
  const [bitcoinData, setBitcoinData] = useState(null);
  console.log(typeof bitcoin);
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
      className="flex-1 text-white   pt-3"
      style={{ backgroundColor: "#16171C" }}
    >
      <Text
        className=" pb-2 text-lg custom-font-bold px-4"
        style={{ color: "#96979B" }}
      >
        Total Portfolio
      </Text>
      <View className="justify-between items-center pb-3 flex-row px-4">
        <Text className="text-3xl text-white custom-font-bold">
          {BtcToUsd(bitcoin, btcPrice)}
        </Text>
        <View className="flex-row items-center">
          <View
            className="p-2 mr-2  rounded-xl justify-center items-center"
            style={{ backgroundColor: "#242831" }}
          >
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={24}
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
      <View className="gap-4 flex-row items-center px-4">
        {bitcoinData?.percent_change_24h > 0 ? (
          <View className="flex-row items-end">
            <AntDesign name="caretup" size={16} color="#05BD88" />
            <Text
              className="pr-1 pl-1 custom-font"
              style={{
                color: "#05BD88",
              }}
            >
              +{bitcoinData?.percent_change_24h}%
            </Text>
          </View>
        ) : (
          <View className="flex-row items-top">
            <AntDesign name="caretdown" size={16} color="#E23F2E" />
            <Text
              className="pr-1 pl-1 custom-font"
              style={{
                // "#E23F2E"
                color: "#E23F2E",
              }}
            >
              {bitcoinData?.percent_change_24h}%
            </Text>
          </View>
        )}
        <View
          style={{ backgroundColor: "#242831" }}
          className="p-1 px-2 rounded-xl flex-row items-center"
        >
          <MaterialIcons name="currency-exchange" size={12} color="#359BD7" />
          <Text style={{ color: "#919296" }} className="pl-1 custom-font">
            1Y
          </Text>
        </View>
      </View>
      <View>
        <BitcoinGraph LineColor={"#0882f1"} toColor={"#0b447c"} />
      </View>
      <View
        className="flex-row justify-around rounded-xl p-3 mx-4"
        style={{ backgroundColor: "#242831" }}
      >
        <View className="items-center justify-center  gap-2 ">
          <TouchableHighlight
            underlayColor={"#242831"}
            onPress={() => {
              navigation.navigate("selectassett");
            }}
            title="Send"
          >
            <View>
              <Feather name="send" size={20} color="#0184fb" />
              <Text className="text-white custom-font ">Send</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View className="items-center">
          <Feather name="download" size={20} color="#0184fb" />
          <Text className="text-white custom-font ">Recive</Text>
        </View>
        <View className="items-center">
          <Feather name="shopping-cart" size={20} color="#0184fb" />
          <Text className="text-white">Buy</Text>
        </View>
        <View className="items-center">
          <Feather name="repeat" size={20} color="#0184fb" />
          <Text className=" custom-font text-white">Swap</Text>
        </View>
      </View>
      <View className="py-3 flex-row justify-between px-4">
        <Text className=" custom-font text-white text-base"> My Assets</Text>
        <WalletManager />
      </View>
      <View className="px-4">
        <Asset
          icon={<Verce width={32} height={32} />}
          text="Verse"
          subtext={"0 verse"}
          usd="$0.00"
          change={"0.00%"}
        ></Asset>
        <View
          className="rounded-t-xl p-3 px-5 justify-between  flex-row w-full "
          style={{ backgroundColor: "#242831" }}
        >
          <View className="flex-row justify-center items-center ">
            <View className="mr-5">
              <BtcCash width={30} height={30} />
            </View>
            <View className=" text-white">
              <Text className="text-base custom-font text-white">
                Bitcoin Cash
              </Text>
              <Text style={{ color: "#96979B" }}>0 BCH</Text>
            </View>
          </View>
          <View className=" ">
            <Text className="text-base  custom-font  text-white">
              {"$0.00"}
            </Text>
            <Text
              className="self-end"
              style={{
                color: "#96979B",
              }}
            >
              {"0.00%"}
            </Text>
          </View>
        </View>
        <Asset
          icon={<Bitcoin width={30} height={30} />}
          text="Bitcoin"
          subtext={parseFloat(bitcoin).toFixed(10) + " BTC"}
          usd={BtcToUsd(bitcoin, btcPrice)}
          change={bitcoinData?.percent_change_24h}
        ></Asset>
        <View
          className="flex-row justify-between   p-3 px-5 rounded-b-xl"
          style={{ backgroundColor: "#242831" }}
        >
          <View
            className="flex-row  items-center  "
            style={{ backgroundColor: "#242831" }}
          >
            <View className="mr-5">
              <Eth width={30} height={30} />
            </View>
            <View className=" text-white">
              <Text className="text-base text-white">Ethereum</Text>
              <Text style={{ color: "#96979B" }}>0 BCH</Text>
            </View>
          </View>
          <View className=" ">
            <Text className="text-base custom-font  text-white">{"$0.00"}</Text>
            <Text
              className="self-end"
              style={{
                color: "#96979B",
              }}
            >
              {"0.00%"}
            </Text>
          </View>
        </View>
      </View>
      <Text className="text-white  custom-font  py-3 px-4 text-base">
        {" "}
        Services
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
