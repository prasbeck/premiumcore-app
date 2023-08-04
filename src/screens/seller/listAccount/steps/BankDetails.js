import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import React from "react";

const BankDetails = () => {
  return (
    <ScrollView style={{ height: "70%", paddingVertical: 6 }}>
      <View style={styles.container}>
        <Text style={styles.h2}>Bank details</Text>
        <Text style={styles.h4}>Account number</Text>
        <TextInput
          placeholder=" Enter account number"
          style={styles.inputBox}
          placeholderTextColor="#515151"
          keyboardType="number-pad"
        />
        <Text style={styles.h4}>Confirm account number</Text>
        <TextInput
          placeholder=" Confirm account number"
          style={styles.inputBox}
          placeholderTextColor="#515151"
          keyboardType="number-pad"
        />
        <Text style={styles.h4}>IFSC number</Text>
        <TextInput
          placeholder=" Enter IFSC number"
          style={styles.inputBox}
          placeholderTextColor="#515151"
        />
        <Text style={styles.h4}>Name of beneficiary</Text>
        <TextInput
          placeholder=" Enter your beneficiary"
          style={styles.inputBox}
          placeholderTextColor="#515151"
        />
      </View>
    </ScrollView>
  );
};

export default BankDetails;

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
});
