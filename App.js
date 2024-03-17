import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import MyStack from "./src/navigation/StackNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LogBox } from "react-native";
import { StatusBar } from "expo-status-bar";

// Ignore log notification by message
//LogBox.ignoreLogs(["Warning: ..."]);

//Ignore all log notifications
//LogBox.ignoreAllLogs();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <MyStack></MyStack>
    </NavigationContainer>
  );
}
