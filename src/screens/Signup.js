import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";

const Signup = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginDiv}>
        <Text style={styles.h1}>Create Account</Text>
        <ScrollView style={{ height: "60%", marginTop: 20 }}>
          <View>
            <Text style={styles.h3}>First Name</Text>
            <TextInput
              placeholder="Enter your first name"
              style={styles.inputBox}
              placeholderTextColor="#515151"
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.h3}>Last Name</Text>
            <TextInput
              placeholder="Enter your last name"
              style={styles.inputBox}
              placeholderTextColor="#515151"
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.h3}>Email Id</Text>
            <TextInput
              placeholder="Enter your email Id"
              style={styles.inputBox}
              placeholderTextColor="#515151"
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.h3}>DOB</Text>
            <TextInput
              placeholder="Select date"
              style={styles.inputBox}
              placeholderTextColor="#515151"
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.h3}>Password</Text>
            <TextInput
              placeholder="Enter password"
              style={styles.inputBox}
              placeholderTextColor="#515151"
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.h3}>Confirm Password</Text>
            <TextInput
              placeholder="Confirm your password"
              style={styles.inputBox}
              placeholderTextColor="#515151"
            />
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.h2}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <Text style={styles.text}>Already have an account ?</Text>
          <TouchableOpacity
            style={{ marginLeft: 8 }}
            onPress={() => navigation.navigate("Login")}
          >
            <Text
              style={{ color: "#D97706", fontWeight: "bold", fontSize: 16 }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#ffffff",

    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  loginDiv: {
    backgroundColor: "rgba(22, 22, 22, 0.8)",
    borderColor: "#303030",
    borderWidth: 2,
    width: "100%",
    padding: 20,
    justifyContent: "center",
    borderRadius: 8,
  },
  h1: {
    color: "white",
    fontWeight: "bold",
    fontSize: 42,
    marginTop: 8,
  },
  h2: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    paddingVertical: 8,
  },
  h3: {
    color: "#F7F8F9",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  text: {
    color: "#C5C5C5",
    textAlign: "center",
    fontSize: 16,
  },
  inputBox: {
    width: "100%",
    backgroundColor:
      "linear-gradient(90.59deg, rgba(56, 55, 55, 0.5) -2.17%, rgba(152, 152, 152, 0) 110.76%)",
    borderColor: "#303030",
    borderRadius: 6,
    height: 48,
    color: "#fff",
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#FFA800",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
export default Signup;
