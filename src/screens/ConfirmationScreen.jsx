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
const ConfirmationScreen = ({ navigation, route }) => {
  const { btcPrice } = useBitcoinStore();
  const [sliderState, setSliderState] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
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
          <FontAwesome5 name="chevron-left" size={24} color="#0184fb" />
        </Pressable>
        <Text className="text-white text-lg ">Confirm</Text>
        <Text>
          <FontAwesome5 name="chevron-left" size={24} color="#16171C" />
        </Text>
      </View>

      <View className="pb-4 border-b border-b-white">
        <Text
          className=" py-2 font-bold text-lg w-full "
          style={{ color: "#6b717E" }}
        >
          Sending:
        </Text>
        <View className="flex-row ">
          <View className="text-white rounded-full ">
            <View className="w-4 absolute bottom-1 left-1 h-4 bg-white"></View>
            <FontAwesome6 name="bitcoin" size={24} color="#f0A10F" />
          </View>
          <Text className="text-white pl-3 text-base">Bitcoin</Text>
        </View>
      </View>
      <View className="pb-4 border-b border-b-white">
        <Text
          className=" py-2 font-bold text-lg w-full "
          style={{ color: "#6b717E" }}
        >
          From:
        </Text>
        <View className=" flex-row">
          <Text
            className="text-orange-500 text-base   rounded-full mr-2"
            /* style={{ backgroundColor: "rgb(249 115 22)" }} */
          >
            {"\u2B24"}
          </Text>
          <Text className="font-bold text-lg text-white">My BTC wallet </Text>
        </View>
      </View>
      <View className="pb-4 border-b border-b-white">
        <Text
          className=" py-2 font-bold text-lg w-full "
          style={{ color: "#6b717E" }}
        >
          BTC Network fee:
        </Text>
        <View className=" flex-row">
          <Text className="font-bold text-lg text-white">US$5.23</Text>
        </View>
      </View>
      <View className="pb-6 border-b border-b-white">
        <Text
          className=" py-2 font-bold text-lg w-full "
          style={{ color: "#6b717E" }}
        >
          They will recive:
        </Text>
        <View className=" flex-row">
          <Text className="font-bold text-4xl py-1 text-white">
            US${route.params.amountUsd}
          </Text>
          <Text
            className="font-bold text-3xl py-1 "
            style={{ color: "#96979B" }}
          >
            {(route.params.amountUsd / btcPrice).toFixed(8)} BTC
          </Text>
        </View>
      </View>
      <View className="mt-auto mb-6 justify-center items-center ">
        <SlideToConfirm
          unconfimredTipText={"SLIDE TO SEND  "}
          unconfirmedTipTextStyle={{
            color: "white",
            fontSize: 18,
            borderRadius: 50,
          }}
          confirmedTipText={"Confirmed"}
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
            setIsVisible(true);
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
        <Text className="w-3/4 pt-2" style={{ color: "#6B707D" }}>
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
