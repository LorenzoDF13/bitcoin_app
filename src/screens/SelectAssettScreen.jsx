import {
  Pressable,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import Bitcoin from "../../assets/svgs/bitcoin.svg";
import Asset from "../components/Asset";
export default SelectAssettScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView
      className="flex-1 text-white  px-4 pt-3"
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
        <Text className="text-white text-lg ">Select Asset</Text>
        <Text>
          <FontAwesome5 name="chevron-left" size={24} color="#16171C" />
        </Text>
      </View>
      <View className="pb-3">
        <TextInput
          className="rounded-xl"
          style={{ backgroundColor: "#242831", color: "#96979B", padding: 10 }}
          placeholder="seach by asset ticker or name"
          placeholderTextColor={"#96979B"}
          cursorColor={"#0184fb"}
        ></TextInput>
      </View>
      <TouchableNativeFeedback
        onPress={() => navigation.navigate("selectsender")}
        underlayColor={"#50535A"}
        className="rounded-xl "
      >
        <View className="rounded-xl p-2 px-5 pb-2  items-center flex-row w-full mb-3">
          <View className="flex-row">
            <View className="mr-5 justify-center">
              <Bitcoin width={32} height={32} />
            </View>
            <View className="">
              <Text className="text-lg text-white">BTC</Text>
              <Text style={{ color: "#96979B" }}>Bitcoin</Text>
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
};
