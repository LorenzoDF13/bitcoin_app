import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useBitcoinStore } from "../stores/BitcoinStore";
import { useTransactionStore } from "../stores/TransactionStore";
import currencyFormat from "../utils/CurrencyFormat";
import usdToBtc from "../utils/BitcoinFormat";
const ConfirmedModal = ({
  amountUsd,
  receiver,
  isVisible,
  setIsVisible,
  navigation,
}) => {
  const { btcPrice, usd, setUsd } = useBitcoinStore();
  const { addTransaction } = useTransactionStore();
  return (
    <SafeAreaView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setIsVisible(!modalVisible);
        }}
      >
        <View
          className=" w-full flex-1 items-center px-4"
          style={{ backgroundColor: "#01C48C" }}
        >
          <Text className="text-white text-xl py-2 text-center font-bold">
            Payment sent!
          </Text>
          <View className="mb-12 mt-32">
            <Feather name="check-circle" size={112} color="white" />
          </View>
          <Text className="text-white text-6xl text-center">
            {currencyFormat(amountUsd)}
          </Text>
          <Text className="text-white pb-2 text-lg font-bold">
            {usdToBtc(amountUsd, btcPrice, 10)}
          </Text>
          <Text className="text-white">Your payment has been sent to</Text>
          <Text className="text-white text-base">{receiver}</Text>
          <View className="mt-auto mb-6 w-full">
            <Pressable
              className="bg-white rounded-xl p-3"
              onPress={() => {
                setUsd(usd - amountUsd);
                addTransaction({
                  amountUsd,
                  receiver: receiver,
                  date: new Date().getTime(),
                  type: "Sent",
                });
                navigation.navigate("home");
              }}
            >
              <Text
                className="text-center font-bold"
                style={{ color: "#01C48C" }}
              >
                CLOSE
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ConfirmedModal;
