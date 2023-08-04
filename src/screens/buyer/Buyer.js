import { View, Text, Image } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Explore from "./Explore";
import Profile from "./Profile";
import Schedule from "./Schedule";
import Chats from "../Chats";
import Schedules from "../Schedules";

function Header() {
  return (
    <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
      <Image
        source={require("../../../assets/images/logo.png")}
        style={{ width: 35, height: 30, marginTop: 6 }}
      />
      <View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "900",
            color: "#ffa800",
            marginLeft: 10,
          }}
        >
          PremiumCores
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#ffa800",
            marginHorizontal: 10,
            marginTop: -6,
          }}
        >
          Buyer
        </Text>
      </View>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const Buyer = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitle: "",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Explore":
              iconName = focused ? "search" : "search-outline";
              break;
            case "Chats":
              iconName = focused ? "chatbubbles" : "chatbubbles-outline";
              break;
            case "Profile":
              iconName = focused ? "person-circle" : "person-circle-outline";
              break;
            case "Schedules":
              iconName = focused ? "calendar" : "calendar-outline";
              break;
            case "Settings":
              iconName = focused ? "ios-list" : "ios-list-outline";
              break;
            default:
              iconName = focused
                ? "chatbubbles"
                : "ios-information-circle-outline";
              break;
          }
          // if (route.name === "Explore") {
          //   iconName = focused
          //     ? "chatbubbles"
          //     : "ios-information-circle-outline";
          // } else if (route.name === "Settings") {
          //   iconName = focused ? "ios-list" : "ios-list-outline";
          // }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerStyle: {
          backgroundColor: "#131313",
        },
        tabBarStyle: { backgroundColor: "#131313" },
        tabBarActiveTintColor: "#ffa800",
        tabBarInactiveTintColor: "#ffffff",
        headerLeft: () => <Header />,
        headerRight: () => (
          <Ionicons name="notifications" size={25} color="#ffa800" />
        ),
      })}
    >
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Schedule" component={Schedules} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default Buyer;
