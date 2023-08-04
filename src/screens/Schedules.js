import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

import notFoundAnimation from "../../assets/images/notFoundAnimation.json";
import EventCanceled from "./buyer/cards/EventCanceled";
import Payment from "./buyer/cards/Payment";
import ReSchedule from "./buyer/cards/ReSchedule";
import Waiting from "./buyer/cards/Waiting";

const Schedules = () => {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      {/* <View style={styles.container}>
        <LottieView
          source={notFoundAnimation}
          autoPlay
          loop
          style={{ width: 200, height: 200, marginTop: -16 }}
        />

        <Text style={styles.h3}>No Schedules Found</Text>
      </View> */}
      <ScrollView>
        <EventCanceled />
        <Payment />
        <ReSchedule />
        <Waiting />
      </ScrollView>
    </View>
  );
};

export default Schedules;

const styles = StyleSheet.create({
  h3: {
    color: "#ffffff",
    fontWeight: "600",
    alignSelf: "center",
    marginTop: 3,
    fontSize: 18,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
