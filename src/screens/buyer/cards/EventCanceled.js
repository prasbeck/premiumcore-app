import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";

const EventCanceled = () => {
  return (
    <View style={styles.container}>
      <View style={{ width: "30%" }}>
        <View>
          <Image
            // source={data._doc.Thumbnail}
            source={require("../../../../assets/images/pubgBg.png")}
            style={{
              borderTopLeftRadius: 12,
              borderBottomLeftRadius: 12,
              width: "100%",
              height: "100%",
            }}
            resizeMode="stretch"
            // className="self-center w-full h-full sm:rounded-l-xl sm:rounded-r-none rounded-t-xl md:rounded-t-xl md:rounded-b-none lg:rounded-r-none lg:rounded-l-xl"
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
            <Pressable>
              <Text
                style={{
                  backgroundColor: "#161616",
                  paddingHorizontal: 2,
                  borderRadius: 10,
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                view details
              </Text>
            </Pressable>
            {/* <Link to={`/schedule/account/${data._doc.gameAccountId}`}>
              <button className="px-2 font-normal rounded-full bg-neutral-700 h-fit">
                view details
              </button>
            </Link> */}
          </View>
          <Text style={styles.h3}>₹10000</Text>
        </View>
        <View style={{ paddingVertical: 10 }}>
          <Text style={styles.h4}> Event cancelled</Text>
          <Text style={{ color: "#fff" }}> XRoom event was cancelled</Text>
        </View>
      </View>
    </View>
  );
};

export default EventCanceled;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(22, 22, 22, 0.8)",
    borderRadius: 12,
    margin: 6,
    flexDirection: "row",
    height: 150,
  },
  h4: {
    color: "red",
    fontWeight: "600",
    fontSize: 16,
  },
  h3: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "800",
  },
});
