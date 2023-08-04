import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";

const Payment = () => {
  return (
    <View style={styles.container}>
      <View style={{ width: "30%" }}>
        <View>
          <Image
            // src={data._doc.Thumbnail}
            source={require("../../../../assets/images/pubgBg.png")}
            style={{
              borderTopLeftRadius: 12,
              borderBottomLeftRadius: 12,
              width: "100%",
              height: "100%",
            }}
            resizeMode="stretch"
          />
        </View>
      </View>
      <View
        style={{
          paddingBottom: 8,
          paddingTop: 6,
          backgroundColor: "rgb(48,48,48)",
          borderBottomRightRadius: 12,
          borderTopRightRadius: 12,
          paddingHorizontal: 6,
          width: "70%",
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={styles.h3}>Pubg mobile</Text>
            {/* <Link to={`/schedule/account/${data?._doc.gameAccountId}`}>
              <button className="px-2 font-normal rounded-full bg-neutral-700 h-fit">
                view details
              </button>
            </Link> */}
            <Pressable>
              <Text
                style={{
                  backgroundColor: "#161616",
                  paddingHorizontal: 2,
                  borderRadius: 10,
                  color: "#fff",
                  textAlign: "center",
                  fontSize: 10,
                }}
              >
                view details
              </Text>
            </Pressable>
          </View>
          <Text style={styles.h3}>₹10000</Text>
        </View>
        <View style={{ paddingTop: 6, paddingBottom: 10 }}>
          <Text style={styles.h4}>Event approved</Text>
          <Text style={{ color: "#fff", fontSize: 10 }}>
            XRoom event is approved on 23 October 12:00 PM by Premium cores make
            the initial payment to confirm booking
          </Text>
        </View>
        {/* <button className="w-full py-2 mt-3 bg-yellow-500">Make payment</button> */}
        <Pressable
          style={{
            backgroundColor: "#ffa800",
            paddingVertical: 3,
            borderRadius: 8,
            marginBottom: 3,
          }}
        >
          <Text style={{ color: "#fff", textAlign: "center" }}>
            Make payment
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(22, 22, 22, 0.8)",
    borderRadius: 12,
    margin: 6,
    flexDirection: "row",
    height: 160,
  },
  h4: {
    color: "#ffa800",
    fontWeight: "600",
    fontSize: 16,
  },
  h3: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "800",
  },
});
