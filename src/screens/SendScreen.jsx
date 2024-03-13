import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Entypo,
  FontAwesome5,
  FontAwesome6,
  Feather,
} from "@expo/vector-icons";
const SendScreen = () => {
  const [value, setValue] = React.useState("");
  return (
    <SafeAreaView
      className="flex-1 justify-between text-white   "
      style={{ backgroundColor: "#16171C" }}
    >
      <View className="px-4">
        <View className=" pb-5 flex-row justify-between">
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
          >
            <FontAwesome5 name="chevron-left" size={24} color="#0184fb" />
          </Pressable>
          <Text className="text-white text-lg ">Send</Text>
          <Text>
            <Entypo name="dots-three-vertical" size={24} color="#0184fb" />
          </Text>
        </View>
        <View className="p-10">
          <Text className="text-white text-xl p-3 text-center w-full font-bold">
            US$ {value}
          </Text>
          <View className="">
            <FontAwesome6
              name="bitcoin"
              size={32}
              color="yellow"
              className="mr-5"
            />
            <Text
              className=" text-lg text-center w-full font-bold"
              style={{ color: "" }}
            >
              0 BTC
            </Text>
          </View>
        </View>
      </View>
      <View
        className="rounded-t-xl   p-2 flex-1"
        style={{ backgroundColor: "#22252E" }}
      >
        <View className="w-full">
          <Text className="font-bold pb-5" style={{ color: "#6a707e" }}>
            Send from:{" "}
          </Text>
        </View>
        <View className="flex-row justify-between">
          <View className="flex-row justify-between items-center">
            <View className=" flex-row">
              <Text
                className="text-orange-500 text-base   rounded-full mr-2"
                /* style={{ backgroundColor: "rgb(249 115 22)" }} */
              >
                {"\u2B24"}
              </Text>
              <Text className="font-bold text-lg text-white">
                My BTC wallet{" "}
              </Text>
            </View>
          </View>
          <View>
            <View>
              <Text
                className="font-bold text-white"
                style={{ color: "#6a707e" }}
              >
                US$2.000.31
                <Feather name="chevron-right" size={20} color="#0184fb" />
              </Text>
            </View>
          </View>
        </View>
        <View className="flex-wrap flex-row justify-center">
          {["0", "1", "2", "3", "4", "5", "6", "7", "8", ".", "9", "x"].map(
            (item) => (
              <TouchableOpacity
                key={item}
                style={{ height: 90, width: 100 }}
                onPress={() => {
                  if (item != "x") setValue((value) => value + item);
                  if (item == ".") setValue((value) => value + item);
                  if (item == "x") setValue((value) => value.slice(0, -1));
                }}
                className="justify-center items-center"
              >
                <Text className="text-white  text-3xl">{item}</Text>
              </TouchableOpacity>
            )
          )}
        </View>
        <TouchableOpacity
          className=" rounded-xl justify-center items-center mx-8 mb-4 my-3 px-4 py-2"
          style={{ backgroundColor: "#323844" }}
        >
          <Text className="text-lg text-white" style={{ color: "#e7e8ea" }}>
            CONTINUE
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SendScreen;
