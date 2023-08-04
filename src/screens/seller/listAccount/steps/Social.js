import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";

const Social = () => {
  return (
    <ScrollView style={{ height: "70%", paddingVertical: 6 }}>
      <View style={styles.container}>
        <Text style={styles.h2}>Facebook</Text>
        <Text style={styles.h4}>Username</Text>
        <TextInput
          placeholder=" Enter username"
          style={styles.inputBox}
          placeholderTextColor="#515151"
        />
        <Text style={styles.h4}>Password</Text>
        <TextInput
          placeholder=" Enter password"
          style={styles.inputBox}
          placeholderTextColor="#515151"
        />
        <Pressable style={styles.btn}>
          <Text style={styles.h4}>Verify facebook</Text>
        </Pressable>
      </View>
      <View style={[styles.container, { marginVertical: 12 }]}>
        <Text style={styles.h2}>Twitter</Text>
        <Text style={styles.h4}>Username</Text>
        <TextInput
          placeholder=" Enter username"
          style={styles.inputBox}
          placeholderTextColor="#515151"
        />
        <Text style={styles.h4}>Password</Text>
        <TextInput
          placeholder=" Enter password"
          style={styles.inputBox}
          placeholderTextColor="#515151"
        />
        <Pressable style={[styles.btn]}>
          <Text style={styles.h4}>Verify twitter</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Social;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.8)",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 4,
  },
  inputBox: {
    width: "100%",
    backgroundColor:
      "linear-gradient(90.59deg, rgba(56, 55, 55, 0.5) -2.17%, rgba(152, 152, 152, 0) 110.76%)",
    borderColor: "#303030",
    borderRadius: 6,
    minHeight: 48,
    color: "#fff",
    paddingHorizontal: 10,
    flexDirection: "row",
    marginTop: 3,
    marginBottom: 8,
  },
  h2: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 8,
  },
  h4: {
    color: "#ffffff",
    fontWeight: "600",
    marginBottom: 1,
  },
  btn: {
    backgroundColor: "rgb(69,69,69)",
    height: 44,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 6,
  },
});
