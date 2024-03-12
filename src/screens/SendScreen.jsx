import { View, Text } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
const SendScreen = ({ navigation }) => {
  return (
    <View
      className="flex-1 text-white  px-4 "
      style={{ backgroundColor: "#16171C" }}
    >
      <View className=" py-3 flex-row justify-between">
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
      <Text>SendScreen</Text>
      <View className="pb-1">
        <TextInput
          className="rounded-xl"
          style={{ backgroundColor: "#242831", color: "#96979B", padding: 10 }}
          placeholder="bitcoin address"
          placeholderTextColor={"#96979B"}
          cursorColor={"#0184fb"}
        ></TextInput>
        <Text>Who can I send to?</Text>
      </View>
      <TouchableHighlight underlayColor="#16171C" activeOpacity={0.6}>
        <View className="rounded-xl p-2 px-5 justify-between items-center flex-row w-full mb-3">
          <View className="flex-row">
            <View className="mr-5">
              <FontAwesome6 name="bitcoin" size={32} color="yellow" />
            </View>
            <View className=" text-white">
              <Text className="text-lg text-white">BTC</Text>
              <Text style={{ color: "#96979B" }}>Bitcoin</Text>
            </View>
          </View>
          <View className=" ">
            <Feather name="chevron-right" size={24} color="#" />
          </View>
        </View>
      </TouchableHighlight>
      <TouchableHighlight underlayColor="#16171C" activeOpacity={0.6}>
        <View className="rounded-xl p-2 px-5 justify-between items-center flex-row w-full mb-3">
          <View className="flex-row">
            <View className="mr-5">
              <FontAwesome6 name="bitcoin" size={32} color="yellow" />
            </View>
            <View className=" text-white">
              <Text className="text-lg text-white">Scan a QR code</Text>
            </View>
          </View>
          <View className=" ">
            <Text className="text-lg text-white"></Text>
            <Text style={{ color: "#96979B" }}></Text>
          </View>
        </View>
      </TouchableHighlight>
      <TouchableHighlight underlayColor="#16171C" activeOpacity={0.6}>
        <View className="rounded-xl p-2 px-5 justify-between items-center flex-row w-full mb-3">
          <View className="flex-row">
            <View className="mr-5">
              <FontAwesome6 name="bitcoin" size={32} color="yellow" />
            </View>
            <View className=" text-white">
              <Text className="text-lg text-white">My Wallets</Text>
            </View>
          </View>
          <View className=" ">
            <Text className="text-lg text-white"></Text>
            <Text style={{ color: "#96979B" }}></Text>
          </View>
        </View>
      </TouchableHighlight>
      <TouchableHighlight underlayColor="#16171C" activeOpacity={0.6}>
        <View className="rounded-xl p-2 px-5 justify-between items-center flex-row w-full mb-3">
          <View className="flex-row">
            <View className="mr-5">
              <FontAwesome6 name="bitcoin" size={32} color="yellow" />
            </View>
            <View className=" text-white">
              <Text className="text-lg text-white">Sharable links</Text>
            </View>
          </View>
          <View className=" ">
            <Text className="text-lg text-white"></Text>
            <Text style={{ color: "#96979B" }}></Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default SendScreen;
