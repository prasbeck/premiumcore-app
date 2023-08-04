import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import TagsInput from "../../../../components/TagsInput";

import Ionicons from "react-native-vector-icons/Ionicons";

const InventoryDetails = () => {
  const [framesArray, setFramesArray] = useState([]);
  const [titlesArray, setTitlesArray] = useState([]);
  return (
    <ScrollView style={{ height: "70%", paddingVertical: 6 }}>
      <View style={{ padding: 10 }}>
        <Text style={styles.h4}>Tenure of ownership</Text>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            style={[styles.inputBox, { width: 50, marginHorizontal: 10 }]}
            placeholder=" - - "
            placeholderTextColor="#515151"
            keyboardType="numeric"
          />
          <Text style={[styles.txt, { alignSelf: "center", marginRight: 20 }]}>
            years
          </Text>
          <TextInput
            style={[styles.inputBox, { width: 50, marginHorizontal: 10 }]}
            placeholder=" - - "
            placeholderTextColor="#515151"
            keyboardType="numeric"
          />
          <Text style={[styles.txt, { alignSelf: "center" }]}>months</Text>
        </View>
        <Text style={styles.h4}>Account level</Text>
        <TextInput
          style={styles.inputBox}
          placeholder=" Enter account level"
          placeholderTextColor="#515151"
        />
        <Text style={[styles.h4, { marginTop: 4 }]}>Memorable Frames</Text>
        <TagsInput
          tags={framesArray}
          setTags={setFramesArray}
          placeholder={"add frames"}
        />
        <Text style={[styles.h4, { marginTop: 4 }]}>Memorable Titles</Text>
        <TagsInput
          tags={titlesArray}
          setTags={setTitlesArray}
          placeholder={"add titles"}
        />
        <Text style={[styles.h4, { marginTop: 4 }]}>Highlights</Text>
        <TextInput
          style={styles.inputBox}
          placeholder=" Enter highlights of this account"
          placeholderTextColor="#515151"
        />
        <Text style={[styles.h4, { marginTop: 4 }]}>Special Mention</Text>
        <TextInput
          style={styles.inputBox}
          placeholder=" Enter special mention"
          placeholderTextColor="#515151"
        />
        <Text style={[styles.h4, { marginTop: 4 }]}>Inventory details</Text>
        <TextInput
          style={styles.inputBox}
          placeholder=" Enter Inventory details"
          placeholderTextColor="#515151"
          multiline
          numberOfLines={4}
        />
      </View>
      <View style={{ padding: 10 }}>
        <Text style={styles.h4}>Royal pass details</Text>
      </View>
    </ScrollView>
  );
};

export default InventoryDetails;

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
    minHeight: 48,
    color: "#fff",
    paddingHorizontal: 10,
    flexDirection: "row",
    marginTop: 3,
  },
  Checkbox: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  textInput1: {
    height: 40,
    borderColor: "white",
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 5,
    padding: 3,
  },
  tag: {
    backgroundColor: "#fff",
  },
  tagText: {
    color: "#3ca897",
  },
});
