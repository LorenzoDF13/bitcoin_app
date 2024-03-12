import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import SelectAssettScreen from "../screens/SelectAssettScreen";
import BottomNavigator from "./BottomNavigator";
import SelectSenderScreen from "../screens/SelectSenderScreen";
import SendScreen from "../screens/SendScreen";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={BottomNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="selectassett"
        component={SelectAssettScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="selectsender"
        component={SelectSenderScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="send"
        component={SendScreen}
        options={{ headerShown: false }}
      />
      {/*  <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}

export default MyStack;
