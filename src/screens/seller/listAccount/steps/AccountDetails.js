import Checkbox from "expo-checkbox";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";

const AccountDetails = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <ScrollView style={{ height: "70%", paddingVertical: 6 }}>
      <View style={{ padding: 10 }}>
        <View>
          <Text style={[styles.h4, { marginBottom: 3 }]}>Game</Text>
          <Picker
            selectedValue={selectedValue}
            style={{
              width: "100%",
              backgroundColor: "#2e2e2e",
              color: "#ffffff",
              fontWeight: "600",
            }}
            itemStyle={{
              color: "#ffffff",
              backgroundColor: "#2e2e2e",
            }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
            mode="dropdown"
          >
            <Picker.Item label="PUBG" value="PUBG" />
            <Picker.Item label="BGMI" value="BGMI" />
          </Picker>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.h4}>Price</Text>
          <View style={styles.inputBox}>
            <TextInput
              name="price"
              style={{ backgroundColor: "rgb(0,0,0,0)", width: "90%" }}
              placeholder="Enter price"
              placeholderTextColor="#515151"
              // onKeyDown={handleKeyDown}
              // value={formik.values.price}
            />
            <Text
              style={{
                paddingVertical: 12,
                fontWeight: "700",
                color: "#ffffff",
              }}
            >
              INR
            </Text>
          </View>
          {/* <ErrorMessage
            className="text-red-400 error-message"
            name="price"
            component="View"
          /> */}
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.h4}>Player ID</Text>
          <View style={styles.inputBox}>
            <TextInput
              label="Player ID"
              name="playerID"
              placeholder="Enter Player ID"
              style={{ backgroundColor: "rgba(0, 0, 0, 0)", width: "85%" }}
              placeholderTextColor="#515151"
              // onChange={handleKeyDown}
              // onKeyDown={handleKeyDown}
              // value={formik.values.playerID}
            />
            <Pressable
            // onClick={verifyPlayerIdHandler}
            >
              <Text
                style={{
                  paddingVertical: 12,
                  color: "#ffffff",
                  fontWeight: "700",
                }}
              >
                Verify
              </Text>
            </Pressable>
          </View>
          {/* <ErrorMessage
            className="text-red-400 error-message"
            name="playerID"
            component="View"
          /> */}
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.h4}>Ingame name</Text>
          <TextInput
            style={styles.inputBox}
            label="Ingame name"
            name="ingameName"
            placeholder="Enter Ingame name"
            // value={playerName}
            placeholderTextColor="#515151"
            editable={false}
          />
        </View>
      </View>

      <View style={{ marginVertical: 6 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <View>
            <Text style={styles.txt}>Facebook</Text>
            <Text style={styles.txt}>
              Read Our{" "}
              <Text
                onPress={() => console.log("tnc pressed")}
                style={{ color: "#04D8D8", textDecorationLine: "underline" }}
              >
                Terms & Condition
              </Text>
            </Text>
          </View>
          <Checkbox
            style={styles.Checkbox}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingVertical: 8,
          }}
        >
          <View>
            <Text style={styles.txt}>Twitter</Text>
            <Text style={styles.txt}>
              Read Our{" "}
              <Text
                onPress={() => console.log("tnc pressed")}
                style={{ color: "#04D8D8", textDecorationLine: "underline" }}
              >
                Terms & Condition
              </Text>
            </Text>
          </View>
          <Checkbox
            style={styles.Checkbox}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <View>
            <Text style={styles.txt}>Email</Text>
            <Text style={styles.txt}>
              Read Our{" "}
              <Text
                onPress={() => console.log("tnc pressed")}
                style={{ color: "#04D8D8", textDecorationLine: "underline" }}
              >
                Terms & Condition
              </Text>
            </Text>
          </View>
          <Checkbox
            style={styles.Checkbox}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <View>
            <Text style={styles.txt}>Mobile</Text>
            <Text style={styles.txt}>
              Read Our{" "}
              <Text
                onPress={() => console.log("tnc pressed")}
                style={{ color: "#04D8D8", textDecorationLine: "underline" }}
              >
                Terms & Condition
              </Text>
            </Text>
          </View>
          <Checkbox
            style={styles.Checkbox}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default AccountDetails;

const styles = StyleSheet.create({
  txt: {
    color: "#ffffff",
  },
  h4: {
    color: "#ffffff",
    fontWeight: "600",
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
    flexDirection: "row",
    marginTop: 3,
  },
  Checkbox: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
});
