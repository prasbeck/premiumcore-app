import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Explore = ({ navigation }) => {
  const accounts = [
    {
      id: 0,
      game: "BGMI",
      price: 7000,
      text: "Nice inventory with all sorts of new Gun skins",
    },
    {
      id: 1,
      game: "BGMI",
      price: 7000,
      text: "Nice inventory with all sorts of new Gun skins",
    },
    {
      id: 2,
      game: "BGMI",
      price: 7000,
      text: "Nice inventory with all sorts of new Gun skins",
    },
    {
      id: 3,
      game: "BGMI",
      price: 7000,
      text: "Nice inventory with all sorts of new Gun skins",
    },
  ];
  const Accounts = ({ item }) => {
    return (
      <View style={{ height: 260, marginVertical: 8 }}>
        <ImageBackground
          source={require("../../../assets/images/pubgBg.png")}
          resizeMode="stretch"
          imageStyle={{ borderRadius: 15 }}
        >
          <View style={styles.card}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{ color: "#ffffff", fontWeight: "700", fontSize: 20 }}
              >
                {item.game}
              </Text>
              <Text
                style={{ color: "#ffffff", fontWeight: "700", fontSize: 20 }}
              >
                ₹{item.price}
              </Text>
            </View>
            <Text
              style={{
                color: "#ffffff",
                fontWeight: "700",
                marginVertical: 5,
                height: 40,
                overflow: "scroll",
              }}
            >
              {item.text}
            </Text>
            <TouchableOpacity
              style={{
                marginTop: 8,
                borderRadius: 8,
                backgroundColor: "#161616",
                paddingVertical: 10,
                alignItems: "center",
              }}
              onPress={() => navigation.push("Details")}
            >
              <Text
                style={{
                  color: "#ffa800",
                  borderRadius: 10,
                  fontWeight: "600",
                  fontSize: 16,
                }}
              >
                view details
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  };
  return (
    <View style={{ padding: 25 }}>
      <Text style={{ color: "#ffffff", fontSize: 20, fontWeight: "600" }}>
        Hello Prashant ,
      </Text>
      <FlatList
        data={accounts}
        renderItem={Accounts}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    color: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  card: {
    marginTop: 104,
    backgroundColor: "black",
    opacity: 0.8,
    overlayColor: "black",
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    height: "60%",
    padding: 10,
    paddingHorizontal: 15,
  },
});
export default Explore;
