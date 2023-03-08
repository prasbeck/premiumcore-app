import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";

const Profile = ({ navigation }) => {
  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <Text style={{ color: "#ffffff", fontSize: 22 }}>Hello Prashant,</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Explore")}
      >
        <Text style={{ color: "#ffffff" }}>Explore accounts</Text>
      </TouchableOpacity>
      <View style={styles.box}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../../assets/images/seller.png")}
            style={{ borderRadius: 40, height: 80, width: 80 }}
          />
          <Text style={{ color: "#ffffff", marginVertical: 6, fontSize: 16 }}>
            Prashant Beck
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: 12,
            padding: 10,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "#ffffff" }}>Accounts owned</Text>
            <Text style={{ color: "#ffffff" }}>0</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 6,
            }}
          >
            <Text style={{ color: "#ffffff" }}>Total value of accounts</Text>
            <Text style={{ color: "#ffffff" }}>0</Text>
          </View>
        </View>
        <Text
          style={{
            color: "#ffffff",
            marginHorizontal: 10,
            marginTop: 10,
            fontSize: 18,
          }}
        >
          Details
        </Text>
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: 12,
            padding: 10,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "#ffffff" }}>Email</Text>
            <Text style={{ color: "#ffffff" }}>prashantbeck1057@gmail.com</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 6,
            }}
          >
            <Text style={{ color: "#ffffff" }}>D.O.B</Text>
            <Text style={{ color: "#ffffff" }}>27/06/2002</Text>
          </View>
        </View>
      </View>
      <View style={styles.box}>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: 12,
            padding: 10,
          }}
        >
          <Text style={{ color: "#ffffff" }}>
            No account is purchased yet. Purchase some gaming account for sell
            from{" "}
            <Text
              style={{ color: "#ffa800" }}
              onPress={() => navigation.navigate("Explore")}
            >
              here
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#ffa800",
    width: "50%",
    paddingVertical: 6,
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginVertical: 10,
  },
  box: {
    marginTop: 10,
    backgroundColor: "#232222",
    marginBottom: 20,
    paddingVertical: 20,
    borderRadius: 12,
    paddingHorizontal: 10,
  },
});
export default Profile;
