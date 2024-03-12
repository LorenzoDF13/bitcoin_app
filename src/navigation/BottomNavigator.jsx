import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
const Tab = createBottomTabNavigator();
import Home from "../../assets/svgs/home.svg";
import Wallett from "../../assets/svgs/wallett.svg";
import Discovery from "../../assets/svgs/discovery.svg";
import Settings from "../../assets/svgs/settings.svg";
const BottomNavigator = () => {
  console.log("ok");
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          /* let Icon;
          Icon =
            route.name === "Home"
              ? 
              : route.name === "Wallet"
              ? Wallett
              : route.name === "Discovery"
              ? Discovery
              : Settings; */
          /*   return (
            <AntDesign
              name={route.name.toLowerCase()}
              size={24}
              color={focused ? "#0184fb" : "#7c879a"}
            />
          ); */
          return (
            <View
              style={{
                flex: 1,
                flex: 1,
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{
                  flex: 1,
                  width: "100%",
                }}
                source={require("../../assets/icon.png")}
              />
            </View>
          );
        },
        tabBarActiveTintColor: "#0184fb",
        tabBarInactiveTintColor: "#7c879a",
        tabBarLabelStyle: {
          fontSize: 14,
          padding: 4,
        },

        tabBarStyle: {
          backgroundColor: "#242831",
          borderTopColor: "#242831",
          elevation: 0,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Founds" component={HomeScreen} />
      <Tab.Screen name="Discovery" component={HomeScreen} />
      <Tab.Screen name="Settings" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
