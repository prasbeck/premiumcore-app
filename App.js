import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Welcome from "./src/screens/Welcome";
import Signup from "./src/screens/Signup";
import SelectProfile from "./src/screens/SelectProfile";
import Buyer from "./src/screens/buyer/Buyer";
import Details from "./src/screens/buyer/Details";
import Schedule from "./src/screens/buyer/Schedule";
import Chat from "./src/screens/Chat";
import Seller from "./src/screens/seller/Seller";

const Stack = createNativeStackNavigator();

export default function App() {
  const Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#111111",
    },
  };

  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Welcome"
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Welcome"
        >
          <Stack.Screen name="Selectprofile" component={SelectProfile} />
          <Stack.Screen name="Buyer" component={Buyer} />
          <Stack.Screen name="Seller" component={Seller} />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            headerStyle: {
              backgroundColor: "#161616",
            },
            headerTintColor: "#ffa800",
          }}
        >
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Schedule buy" component={Schedule} />
          <Stack.Screen name="Chat" component={Chat} />
        </Stack.Group>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,

//     backgroundColor: "#111111",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
