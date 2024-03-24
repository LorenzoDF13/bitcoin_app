import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
const Tab = createBottomTabNavigator();
import Home from "../../assets/svgs/home.svg";
import Wallett from "../../assets/svgs/wallett.svg";
import Discovery from "../../assets/svgs/discovery.svg";
import Settings from "../../assets/svgs/settings.svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import FoundsScreen from "../screens/FoundsScreen";

const BottomNavigator = () => {
  const insets = useSafeAreaInsets();
  console.log(insets);
  return (
    <Tab.Navigator
      safeAreaInsets={{
        top: 0,
        bottom: 4,
        left: insets.left,
        right: insets.right,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let Icon = route.name.toLowerCase();
          if (Icon == "funds") {
            Icon = "wallet";
          }
          if (Icon == "settings") {
            Icon = "setting";
          }

          /*Icon =
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
              size={size}
              color={focused ? "#0184fb" : "#7c879a"}
              />
              ); */
          return Icon == "discovery" ? (
            <Entypo name="globe" size={size} color="#7c879a" />
          ) : (
            <AntDesign
              name={Icon}
              size={size}
              color={focused ? "#0184fb" : "#7c879a"}
            />
          );
        },
        tabBarActiveTintColor: "#0184fb",
        tabBarInactiveTintColor: "#7c879a",
        tabBarLabelStyle: {
          fontSize: 14,
        },

        tabBarStyle: {
          backgroundColor: "#242831",
          borderTopColor: "#242831",
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Funds"
        component={FoundsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Discovery"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Settings" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
