import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";

// const { StatusBarManager } = NativeModules;

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/HomeBg.png")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={{ transform: [{ scale: 1.4 }] }}
          />
          <Text style={styles.h1}>PremiumCores</Text>
          <View style={styles.subHeading}>
            <Text style={styles.text}>
              A hub for all gaming accounts with secure and reliable marketplace
              for selling and buying game accounts.A secure and reliable
              marketplace for selling and buying game accounts.
            </Text>
          </View>
          <Text style={styles.text}></Text>

          <View style={styles.button}>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text
                style={[
                  styles.h3,
                  {
                    backgroundColor: "black",
                    paddingHorizontal: 20,
                    borderRadius: 8,
                  },
                ]}
              >
                Signup
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text
                style={[
                  styles.h3,
                  {
                    backgroundColor: "#FFA800",
                    paddingHorizontal: 30,
                    borderRadius: 8,
                  },
                ]}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  subHeading: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 7,
  },
  h1: {
    color: "white",
    fontWeight: "bold",
    fontSize: 42,
    marginTop: 8,
  },
  h3: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    paddingVertical: 8,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  button: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 50,
  },
});

export default Home;
