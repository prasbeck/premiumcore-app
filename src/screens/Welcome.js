import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";

const Welcome = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={{ transform: [{ scale: 1.4 }] }}
      />

      <Text style={[styles.welcomeText, { color: "#FFA800", marginTop: 20 }]}>
        PremiumCores
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Welcome;
