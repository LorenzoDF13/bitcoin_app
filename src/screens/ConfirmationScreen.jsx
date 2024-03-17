import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { useBitcoinStore } from "../stores/BitcoinStore";
import SlideToConfirm from "rn-slide-to-confirm";
import { Ionicons } from "@expo/vector-icons";
import ConfirmedModal from "../components/ConfirmedModal";
import Bitcoin from "../../assets/svgs/bitcoin.svg";
import usdToBtc from "../utils/BitcoinFormat";
import Loader from "react-native-three-dots-loader";
import currencyFormat from "../utils/CurrencyFormat";
const ConfirmationScreen = ({ navigation, route }) => {
  const { btcPrice } = useBitcoinStore();
  const [sliderState, setSliderState] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <SafeAreaView
      className="flex-1   px-4 pt-3"
      style={{ backgroundColor: "#16171C" }}
    >
      <View className=" pb-5 flex-row justify-between">
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <FontAwesome5 name="chevron-left" size={24} color="#0184fb" />
        </Pressable>
        <Text
          className="text-white custom-font text-lg w-1/2"
          numberOfLines={1}
        >
          {route.params.receiver}
        </Text>
        <Text>
          <FontAwesome5 name="chevron-left" size={24} color="#16171C" />
        </Text>
      </View>

      <View className="pb-4 border-b border-b-white">
        <Text
          className=" py-2 custom-font-bold text-base w-full "
          style={{ color: "#6b717E" }}
        >
          Sending:
        </Text>
        <View className="flex-row ">
          <View className="text-white rounded-full ">
            <View className="w-4 absolute bottom-1 left-1 h-4 bg-white"></View>
            <Bitcoin width={24} height={24} />
          </View>
          <Text className="text-white custom-font pl-3 text-base">Bitcoin</Text>
        </View>
      </View>
      <View className="pb-4 border-b border-b-white">
        <Text
          className=" py-2 custom-font-bold text-base w-full "
          style={{ color: "#6b717E" }}
        >
          From:
        </Text>
        <View className=" flex-row">
          <Text
            style={{ color: "#F7931A" }}
            className=" text-base   rounded-full mr-2"
            /* style={{ backgroundColor: "rgb(249 115 22)" }} */
          >
            {"\u2B24"}
          </Text>
          <Text className=" custom-font text-base text-white">
            My BTC wallet{" "}
          </Text>
        </View>
      </View>
      <View className="pb-4 border-b border-b-white">
        <Text
          className=" py-2 custom-font-bold  w-full "
          style={{ color: "#6b717E" }}
        >
          BTC Network fee:
        </Text>
        <View className=" flex-row">
          <Text className="custom-font-bold text-base text-white">
            $5.23 = {usdToBtc(5.23, btcPrice, 10)}
          </Text>
        </View>
      </View>
      <View className="pb-6 border-b border-b-white">
        <Text
          className=" py-1 pt-4 custom-font-bold text-base w-full "
          style={{ color: "#6b717E" }}
        >
          They will recive:
        </Text>
        <View className="">
          <Text className="custom-font-bold text-4xl py-1 text-white">
            {currencyFormat(route.params.amountUsd)}
          </Text>
          <Text
            className="custom-font-bold text-base py-1 "
            style={{ color: "#96979B" }}
          >
            {usdToBtc(route.params.amountUsd, btcPrice, 10)}
          </Text>
        </View>
      </View>
      <View className="mt-auto  justify-center items-center ">
        {!isLoading ? (
          <SlideToConfirm
            unconfimredTipText={"SLIDE TO SEND"}
            unconfirmedTipTextStyle={{
              color: "white",
              fontSize: 18,
              fontWeight: 700,
              borderRadius: 50,
            }}
            confirmedTipText={"SENDING"}
            confirmedTipTextStyle={{
              color: "white",
              fontSize: 18,
            }}
            state={sliderState}
            sliderButtonComponent={
              <View
                className="rounded-full  justify-center items-center m-1"
                style={{ backgroundColor: "#0184fb", width: 50, height: 50 }}
              >
                <Ionicons name="send" size={24} color="white" />
              </View>
            }
            onSlideConfirmed={() => {
              setSliderState(true);
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
                setIsVisible(true);
              }, 2000);
            }}
            sliderStyle={{
              justifyContent: "center",
              width: 280,
              height: 70,
              borderRadius: 50,
              overflow: "hidden",
              backgroundColor: "#242831",
            }}
          />
        ) : (
          <Loader
            useNativeDriver={true}
            background={"#6B707D"}
            activeBackground={"#0184fb"}
          />
        )}
        <Text className="w-3/4 pt-2 custom-font" style={{ color: "#6B707D" }}>
          Transaction are non-reversible. Plese ensure all information is
          correct
        </Text>
      </View>
      <ConfirmedModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        receiver={route.params?.receiver}
        amountUsd={route.params?.amountUsd}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

export default ConfirmationScreen;
