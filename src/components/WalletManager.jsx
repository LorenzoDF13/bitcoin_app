import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { useBitcoinStore } from "../stores/BitcoinStore";
import { useTransactionStore } from "../stores/TransactionStore";
import Dialog from "react-native-dialog";
import usdToBtc from "../utils/BitcoinFormat";
const WalletManager = () => {
  const { setUsd, btcPrice, setBitcoin } = useBitcoinStore();
  const { setTransactions } = useTransactionStore();
  const [visible, setIsVisible] = useState(false);
  const [value, setValue] = useState("0");

  const close = () => {
    setIsVisible(false);
  };
  return (
    <View>
      <Pressable
        onPress={() => {
          setIsVisible(true);
        }}
      >
        <Text>+</Text>
      </Pressable>
      <Dialog.Container visible={visible}>
        <Dialog.Title>Account delete</Dialog.Title>
        <Dialog.Description>
          Do you want to delete this account? You cannot undo this action.
        </Dialog.Description>
        <Dialog.Input
          keyboardType="numeric"
          onChangeText={setValue}
          value={value}
        ></Dialog.Input>
        <Dialog.Button label="Cancel" onPress={close} />
        <Dialog.Button
          label="OK"
          onPress={() => {
            setUsd(value);
            setBitcoin((value / btcPrice).toFixed(10));
            setTransactions([
              {
                type: "Received",
                amountUsd: parseInt(value),
                date: new Date().getTime(),
              },
            ]);
            close();
          }}
        />
      </Dialog.Container>
    </View>
  );
};

export default WalletManager;
