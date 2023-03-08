import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
// import DatePicker from "react-native-date-picker";
import Ionicons from "react-native-vector-icons/Ionicons";

const Schedule = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={28} color="#ffa800" />
      </TouchableOpacity> */}
      <ScrollView style={styles.content}>
        {/* <Text style={styles.h1}>Schedule buy</Text> */}
        <View style={styles.box}>
          <Text style={styles.h2}>Sellers detail</Text>
          <ScrollView style={styles.scrollBox}>
            <View
              style={{
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Image
                source={require("../../../assets/images/seller.png")}
                style={{ width: 80, height: 80, borderRadius: 40 }}
              />
              <Text style={styles.text}>Prateek Srivastav</Text>
            </View>
            <View style={styles.greyBox}>
              <View style={styles.justify}>
                <Text style={[styles.text, { fontSize: 18 }]}>
                  Accounts owned
                </Text>
                <Text style={[styles.text, { fontSize: 18 }]}>4</Text>
              </View>
              <View style={styles.justify}>
                <Text style={[styles.text, { fontSize: 18 }]}>Gmail</Text>
                <Text style={[styles.text, { fontSize: 18 }]}>
                  prateek.srvastav@gmail.com
                </Text>
              </View>
            </View>
            <View style={{ marginTop: 7 }}>
              <Text style={[styles.h2, { marginBottom: 7 }]}>
                Account summary
              </Text>
              <View style={styles.justify}>
                <Text style={styles.name}>Account level</Text>
                <Text style={styles.text}>69 level</Text>
              </View>
              <View style={styles.justify}>
                <Text style={styles.name}>Tenure of ownership</Text>
                <Text style={styles.text}>5 years 7 months</Text>
              </View>
              <View style={styles.justify}>
                <Text style={styles.name}>Special mentions</Text>
                <Text style={styles.text}>PUBG star</Text>
              </View>
              <View style={styles.justify}>
                <Text style={styles.name}>Memorable frames</Text>
                <Text style={styles.text}>conquerer s1</Text>
              </View>
              <View style={styles.justify}>
                <Text style={styles.name}>Memorable titles</Text>
                <Text style={styles.text}>sniper</Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.box}>
          <Text style={styles.h2}>Schedule event</Text>
          <View style={[styles.inputBox, styles.justify]}>
            <Text style={styles.price}>BGMI</Text>
            <Text style={styles.price}>₹ 10000 </Text>
          </View>
          <Text style={styles.h2}>Schedule date and time -</Text>
          <Text style={styles.name}>Select date</Text>
          {/* <Button title="Open" onPress={() => setOpen(true)} /> */}
          {/* <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={(date) => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          /> */}
          <Text style={styles.text}>
            Date and time picker to be added here ....{" "}
          </Text>
          <Text style={[styles.name, { textAlign: "center", marginTop: 10 }]}>
            Purchase schedule on date 28/02/23 and time 0:00 AM
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#ffa800",
              paddingVertical: 8,
              alignItems: "center",
              marginVertical: 10,
              borderRadius: 10,
            }}
          >
            <Text style={styles.h2}>Propose schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "rgb(48,48,48)",
              borderColor: "#ffa800",
              borderWidth: 2,
              paddingVertical: 8,
              alignItems: "center",
              borderRadius: 10,
            }}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.h2}>Go back to details</Text>
          </TouchableOpacity>
          <Text style={[styles.name, { textAlign: "center", marginTop: 10 }]}>
            **Need to pay 10% of total cost while scheduling
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  content: {
    padding: 8,
    overflow: "scroll",
  },
  text: {
    color: "#ffffff",
    marginTop: 6,
    fontSize: 16,
  },
  h1: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "600",
  },
  h2: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
  box: {
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundColor: "#232222",
    borderRadius: 12,
    padding: 20,
    marginVertical: 10,
  },
  greyBox: {
    // backgroundColor: "rgb(31,31,31)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingBottom: 7,
    marginVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  scrollBox: {
    height: 300,
    overflow: "scroll",
  },
  justify: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    color: "rgb(158,158,158)",
    fontSize: 16,
  },
  inputBox: {
    backgroundColor:
      "linear-gradient(90.59deg,rgba(56, 55, 55, 0.5) -2.17%,rgba(152, 152, 152, 0) 110.76%)",
    borderColor: "#303030",
    borderWidth: 2,
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 8,
    marginVertical: 4,
  },
  price: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
  },
});
