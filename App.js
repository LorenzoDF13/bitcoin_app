import "react-native-gesture-handler";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import MyStack from "./src/navigation/StackNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LogBox } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as SystemUI from "expo-system-ui";
// Ignore log notification by message
LogBox.ignoreLogs(["Warning: ..."]);

//Ignore all log notifications
LogBox.ignoreAllLogs();
SystemUI.setBackgroundColorAsync("#16171C");
export default function App() {
  return (
    <SafeAreaProvider style={{ backgroundColor: "#16171C" }}>
      <NavigationContainer
        theme={{
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            background: "#16171C",
          },
        }}
      >
        <StatusBar style="auto" />
        <MyStack></MyStack>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
