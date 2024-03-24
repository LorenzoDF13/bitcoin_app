import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useBitcoinStore } from "../stores/BitcoinStore";
import { useTransactionStore } from "../stores/TransactionStore";
import currencyFormat from "../utils/CurrencyFormat";
import usdToBtc from "../utils/BitcoinFormat";
import Bitcoin from "../../assets/svgs/bitcoin.svg";
import { LinearGradient } from "expo-linear-gradient";
const ConfirmedModal = ({
  amountUsd,
  receiver,
  isVisible,
  setIsVisible,
  navigation,
}) => {
  const { btcPrice, usd, setUsd, setBitcoin } = useBitcoinStore();
  const { addTransaction } = useTransactionStore();
  const [reviewVisible, setReviewVisible] = React.useState(true);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setIsVisible(!isVisible);
      }}
    >
      <View
        className=" flex-1 w-full items-center"
        style={{ backgroundColor: "#01C48C" }}
      >
        <Text className="text-white text-xl py-2 text-center custom-font-bold">
          Payment Sent!
        </Text>
        <View className="mb-12 mt-16">
          <Feather name="check-circle" size={112} color="white" />
        </View>
        <Text className="text-white custom-font text-5xl text-center">
          {currencyFormat(amountUsd)}
        </Text>
        <View className="flex-row  justify-center items-center pb-2">
          <Bitcoin width="20" height="20" />
          <Text className="text-white  ml-2 text-lg custom-font-bold">
            {usdToBtc(amountUsd, btcPrice, 10)}
          </Text>
        </View>
        <Text className="text-white custom-font">
          Your payment has been sent to
        </Text>
        <Text className="text-white custom-font text-base px-10">
          {receiver}
        </Text>
        <View className="flex-row w-full px-10 py-10 justify-between">
          <View className="flex-row justify-center items-center">
            <View className="w-6 h-6 rounded-lg bg-white mr-2"></View>
            <Text className="text-white  text-base">Save Address</Text>
          </View>
          <View className="flex-row justify-center items-center">
            <Feather name="share-2" size={20} color="white" />
            <Text className="text-white  text-base ml-2">Share</Text>
          </View>
        </View>
        <View className="px-10 w-full">
          <View
            style={{ padding: 6 }}
            className=" px-4 bg-white w-full  rounded-lg"
          >
            <Text className="text-base" style={{ color: "#6b717f" }}>
              Add a personal note
            </Text>
          </View>
        </View>
        {reviewVisible ? (
          <>
            <View className="w-full z-10 absolute top-0  h-screen bg-black/50"></View>
            <View className=" flex-row z-20  mt-auto w-full  text-white ">
              <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                className="p-5 items-center justify-center "
                style={{ backgroundColor: "#00448d" }}
                colors={["#007EFE", "#00448d"]}
              >
                <MaterialCommunityIcons
                  name="cellphone-check"
                  size={48}
                  color="white"
                />
              </LinearGradient>
              <View className=" p-3 pr-0 flex-1 bg-white">
                <Text>Are you enjoying the Bitcoin.com Wallet?</Text>
                <View className=" flex-row flex-1 items-center">
                  <TouchableOpacity className="mr-3">
                    <Text
                      className="custom-font-bold"
                      style={{ color: "#27a0ed" }}
                    >
                      {" "}
                      LOVE IT!
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setReviewVisible(false)}>
                    <Text
                      className="custom-font-bold"
                      style={{ color: "#27a0ed" }}
                    >
                      {" "}
                      NOT REALLY
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </>
        ) : (
          <View className="mt-auto mb-6 w-full px-10">
            <Pressable
              className="bg-white rounded-xl p-3"
              onPress={() => {
                setBitcoin((usd - amountUsd) / btcPrice);
                setUsd(usd - amountUsd);
                addTransaction({
                  amountUsd,
                  receiver,
                  date: new Date().getTime(),
                  type: "Pending",
                });
                navigation.navigate("home");
              }}
            >
              <Text
                className="text-center custom-font-bold"
                style={{ color: "#01C48C" }}
              >
                CLOSE
              </Text>
            </Pressable>
          </View>
        )}
      </View>
    </Modal>
  );
};

export default ConfirmedModal;
