import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyStack from "./src/navigation/StackNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#17161C" />
      <MyStack></MyStack>
    </NavigationContainer>
  );
}
