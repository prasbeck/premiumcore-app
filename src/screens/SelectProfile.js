import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SelectProfile = () => {
  const navigation = useNavigation();
  const user = [
    { num: 0, profile: "BUYER", path: "Buyer" },
    { num: 1, profile: "SELLER", path: "Seller" },
    // { num: 2, profile: "Visitor", path: "/BXRoom" },
  ];
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View>
          {user.map((user) => {
            return (
              <View
                key={user.num}
                style={[
                  { alignItems: "center", marginHorizontal: 30 },
                  styles.box,
                ]}
              >
                <View>
                  <Image
                    source={require("../../assets/images/Icon.png")}
                    style={{ transform: [{ scale: 0.6 }] }}
                  />
                </View>
                <Text
                  style={{
                    fontWeight: "900",
                    fontSize: 30,
                    color: "white",
                    transform: [{ scaleY: 1.2 }],
                  }}
                >
                  {user.profile}
                </Text>
                <Text style={{ color: "white", marginVertical: 5 }}>
                  {" "}
                  A hub for all gaming accounts with secure and reliable
                  marketplace for selling and buying game accounts.
                </Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate(user.path)}
                >
                  <View>
                    <Text style={{ color: "white" }}>
                      Proceed as {user.profile}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </SafeAreaView>
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
  box: {
    backgroundColor: "rgba(22, 22, 22, 0.8)",
    borderColor: "#303030",
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingBottom: 20,
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 8,
    // -webkit-clip-path: "polygon(7% 0, 100% 0, 100% 61%, 94% 100%, 0 100%, 0 40%)",
  },
  button: {
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderColor: "#ffa800",
    // clipPath: `polygon(10% 0, 100% 0%, 100% 100%, 0 100%)`,
    borderWidth: 2,
    marginTop: 10,
  },
});

export default SelectProfile;
