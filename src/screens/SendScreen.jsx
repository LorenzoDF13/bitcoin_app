import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
const SendScreen = () => {
  return (
    <SafeAreaView
      className="flex-1 justify-between text-white  px-4 "
      style={{ backgroundColor: "#16171C" }}
    >
      <View>
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
            US$
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
      <View className="rounded-t-xl p-2" style={{ backgroundColor: "#22252E" }}>
        <Text className="font-bold" style={{ color: "#6a707e" }}>
          Send from:{" "}
        </Text>
        <View>
          <View className="justify-between">
            <Text className="text-orange-500 rounded-full mr-2">.</Text>
            <Text className="font-bold text-white" style={{ color: "#6a707e" }}>
              My BTC wallet{" "}
            </Text>
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
            {/*[0,1,2,3,4,5,6,7,8,9].map((item) => */}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SendScreen;
