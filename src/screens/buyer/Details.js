import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
const Details = ({ navigation }) => {
  const seasons = [
    { key: 1, value: 1 },
    { key: 2, value: 2 },
    { key: 3, value: 3 },
    { key: 4, value: 4 },
    { key: 5, value: 5 },
  ];
  const item = { id: 2, name: "prateek srivastav" };
  function season({ item }) {
    return (
      <View
        style={{
          marginHorizontal: 6,
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: 180,
          paddingTop: 7,
          paddingBottom: 8,
          backgroundColor: "rgb(29,29,29)",
          borderRadius: 20,
        }}
      >
        <Image
          source={require("../../../assets/images/season.png")}
          style={{ marginTop: 5, marginLeft: -25 }}
        />
        <Text style={[styles.text, { marginLeft: -20 }]}>
          season {item.value}
        </Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          source={require("../../../assets/images/pubgBg.png")}
          resizeMode="cover"
          style={{ borderRadius: 12, height: 250, width: "100%" }}
        />

        <View style={{ padding: 10 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.h1}>BGMI</Text>
            <Text style={styles.h1}>₹10000</Text>
          </View>
          <Text style={[styles.h2, { marginTop: 10 }]}>Account Details</Text>
          <View style={{ padding: 6 }}>
            <View style={styles.rows}>
              <Text style={styles.h3}>Player ID</Text>
              <Text style={styles.text}>546466232</Text>
            </View>
            <View style={styles.rows}>
              <Text style={styles.h3}>Ingame name</Text>
              <Text style={styles.text}>prashant55</Text>
            </View>
            <View style={styles.rows}>
              <Text style={styles.h3}>Tenure of ownership</Text>
              <Text style={styles.text}>7 years 5 months</Text>
            </View>
            <View style={styles.rows}>
              <Text style={styles.h3}>Account level</Text>
              <Text style={styles.text}>55</Text>
            </View>
            <View style={styles.rows}>
              <Text style={styles.h3}>Memorable frames</Text>
              <View>
                <Text style={styles.text}>conquerer,</Text>
                <Text style={styles.text}>s1</Text>
              </View>
            </View>
            <View style={styles.rows}>
              <Text style={styles.h3}>Memorable titles</Text>
              <View>
                <Text style={styles.text}>sniper</Text>
              </View>
            </View>
            <View style={styles.rows}>
              <Text style={styles.h3}>Special mentions</Text>
              <Text style={styles.text}>PUBG Star</Text>
            </View>
          </View>
          <Text style={styles.h2}>Royal pass details</Text>
          <View style={{ padding: 6 }}>
            <Text style={styles.h3}>Regular</Text>
            <FlatList
              style={{
                marginVertical: 10,
              }}
              horizontal={true}
              data={seasons}
              keyExtractor={(item) => item.key}
              renderItem={season}
            />
            <Text style={styles.h3}>Elite</Text>
            <FlatList
              style={{
                marginVertical: 10,
              }}
              horizontal={true}
              data={seasons}
              keyExtractor={(item) => item.key}
              renderItem={season}
            />
            <Text style={styles.h3}>Elite plus</Text>
            <FlatList
              style={{
                marginVertical: 10,
              }}
              horizontal={true}
              data={seasons}
              keyExtractor={(item) => item.key}
              renderItem={season}
            />
          </View>
          <View>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#ffa800" }]}
              onPress={() => navigation.navigate("Schedule buy")}
            >
              <Text style={styles.text}>Schedule the buy </Text>
              <Ionicons name="time-outline" color="#ffffff" size={25} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor: "rgb(48,48,48)",
                  marginTop: 12,
                  borderColor: "#ffa800",
                  borderWidth: 2,
                },
              ]}
              onPress={() =>
                navigation.navigate("Chat", { key: item.id, item })
              }
            >
              <Text style={styles.text}>Chat with owner </Text>
              <Ionicons name="chatbox-outline" color="#ffffff" size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",
    color: "#ffffff",
    padding: 15,
  },
  h1: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "700",
  },
  h2: {
    color: "rgb(125,125,125)",
    fontSize: 20,
    fontWeight: "700",
  },
  h3: {
    color: "rgb(125,125,125)",
    fontSize: 16,
    fontWeight: "500",
  },
  text: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
  },
  rows: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",

    alignItems: "center",
    paddingVertical: 8,
    borderRadius: 12,
  },
});
export default Details;
