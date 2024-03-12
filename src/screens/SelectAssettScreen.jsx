import {
  Pressable,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import Asset from "../components/Asset";
export default SelectAssettScreen = ({ navigation }) => {
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
      <TouchableHighlight
        onPress={() => navigation.navigate("selectsender")}
        underlayColor="#16171C"
        activeOpacity={0.6}
      >
        <View className="rounded-xl p-2 px-5  items-center flex-row w-full mb-3">
          <View className="flex-row">
            <View className="mr-5 justify-center">
              <FontAwesome6 name="bitcoin" size={32} color="yellow" />
            </View>
            <View className="">
              <Text className="text-lg text-white">BTC</Text>
              <Text style={{ color: "#96979B" }}>Bitcoin</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  );
};
