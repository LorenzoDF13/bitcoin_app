import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
const SelectSenderScreen = ({ navigation }) => {
  const [text, onChangeText] = React.useState("");
  console.log(text.length);
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
        <Text className="text-white text-lg ">Send</Text>
        <Text>
          <FontAwesome5 name="chevron-left" size={24} color="#16171C" />
        </Text>
      </View>

      <View className="pb-1">
        <TextInput
          className="rounded-xl"
          style={{ backgroundColor: "#242831", color: "#96979B", padding: 10 }}
          placeholder="Bitcoin address"
          onChangeText={onChangeText}
          value={text}
          placeholderTextColor={"#96979B"}
          cursorColor={"#0184fb"}
        ></TextInput>
        <Text
          className=" py-2 font-bold text-md w-full "
          style={{ color: "#0184fb", textAlign: "right" }}
        >
          Who can I send to?
        </Text>
      </View>
      {text.length == 0 ? (
        <>
          <TouchableHighlight underlayColor="#16171C" activeOpacity={0.6}>
            <View className="rounded-xl p-2 px-5 justify-between items-center flex-row w-full mb-3">
              <View className="flex-row items-center">
                <View className="mr-5">
                  <MaterialCommunityIcons
                    name="qrcode-scan"
                    size={24}
                    color="#0184fb"
                  />
                </View>
                <View className=" text-white">
                  <Text className="text-base text-white">Scan a QR code</Text>
                </View>
              </View>
              <View className=" ">
                <Feather name="chevron-right" size={20} color="#0184fb" />
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#16171C" activeOpacity={0.6}>
            <View className="rounded-xl p-2 px-5 justify-between items-center flex-row w-full mb-3">
              <View className="flex-row items-center">
                <View className="mr-5">
                  <AntDesign name="wallet" size={32} color="#0184fb" />
                </View>
                <View className=" text-white">
                  <Text className="text-base text-white">My Wallets</Text>
                </View>
              </View>
              <View className=" ">
                <Feather name="chevron-right" size={20} color="#0184fb" />
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#16171C" activeOpacity={0.6}>
            <View className="rounded-xl p-2 px-5 justify-between items-center flex-row w-full mb-3">
              <View className="flex-row">
                <View className="mr-5">
                  <FontAwesome6 name="link" size={20} color="#103964" />
                </View>
                <View className=" text-white">
                  <Text className="text-lg " style={{ color: "#989BA6" }}>
                    Sharable links
                  </Text>
                </View>
              </View>
              <View className=" ">
                <Feather name="chevron-right" size={20} color="#0184fb" />
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight className="w-full">
            <Text
              className="text-lg border-2 rounded-xl p-2 text-center"
              style={{
                borderColor: "#0184fb",
                color: "#0184fb",
                fontWeight: "bold",
              }}
            >
              Import Contacts
            </Text>
          </TouchableHighlight>
        </>
      ) : (
        <TouchableHighlight
          underlayColor="#16171C"
          onPress={() => navigation.navigate("send")}
        >
          <View className="rounded-xl p-2 px-5 justify-between items-center flex-row w-full mb-3">
            <View className="flex-row items-center">
              <View className="mr-5">
                <Feather name="send" size={20} color="#0184fb" />
              </View>
              <View className=" text-white flex-1">
                <Text className="text-base text-white" numberOfLines={1}>
                  Send to: {text}
                </Text>
              </View>
            </View>
            <View className=" ">
              <Feather name="chevron-right" size={20} color="#0184fb" />
            </View>
          </View>
        </TouchableHighlight>
      )}
    </SafeAreaView>
  );
};

export default SelectSenderScreen;
