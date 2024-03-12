import { Text, TextInput, View } from "react-native";
import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
export class SelectAssettScreen extends Component {
  render() {
    return (
      <SafeAreaView
        className="flex-1 text-white  px-4 "
        style={{ backgroundColor: "#16171C" }}
      >
        <View className=" py-3">
          <FontAwesome5 name="chevron-left" size={24} color="black" />
          <Text>Select Asset</Text>
        </View>
        <View className="pb-3">
          <TextInput
            className="rounded-xl"
            placeholder="seach by asset ticker or name"
          ></TextInput>
        </View>
        <View className="flex-1">
          <View className="flex-row">
            <Text className="text-lg text-white">BTC</Text>
            <Text className=" text-white">bitcoin</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default SelectAssettScreen;
