import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";

const Waiting = () => {
  const data = { _id: 5858585858, game: "PUBG", price: 10000 };
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
            <Text style={styles.h3}>{data.game}</Text>
            {/* <Link to={`/schedule/account/${data._doc.gameAccountId}`}>
              <button className="px-2 font-normal rounded-full bg-neutral-700 h-fit">
                View Details
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
          <Text style={styles.h3}>₹{data.price}</Text>
        </View>
        <Text style={styles.h4}>Waiting for approval</Text>
        {/* <Text style={{ color: "#fff", fontSize: 10 }}>
          XRoom event is sheduled on{" "}
          {new Date(data._doc.proposedSchedule.date).toDateString()} at{" "}
          {data._doc.proposedSchedule.time.hours}:
          {data._doc.proposedSchedule.time.minute < 10 && "0"}
          {data._doc.proposedSchedule.time.minute}{" "}
          <span>{data._doc.proposedSchedule.time.PM ? "PM" : "AM"}</span> by
          Premium cores{" "}
        </Text> */}
        <Text style={{ color: "#fff", fontSize: 10 }}>
          XRoom event is sheduled on Tue Mar 28 2023 at 9:30 PM by Premium cores
        </Text>
        <View className="grid grid-cols-2 gap-5 font-semibold">
          {/* <button className="py-1 rounded-sm xs:py-2 bg-dark-gray-300 text-white-50">
            Waiting for approval
          </button> */}

          {/* <button
            className="py-1 border-2 border-yellow-500 rounded-sm xs:py-2 solid"
            type="button"
            onClick={withdrawHandler}
          >
            Withdraw event
          </button> */}
          <Pressable
            style={{
              borderColor: "#ffa800",
              paddingVertical: 3,
              borderWidth: 1,
              marginBottom: 3,
            }}
          >
            <Text style={{ color: "#fff", textAlign: "center" }}>
              Withdraw event
            </Text>
          </Pressable>
        </View>
        <Text style={{ color: "#fff", fontSize: 10 }}>
          Time left for event is{" "}
          <Text style={{ color: "#ffa800", fontSize: 10 }}>2 hrs 20 mins </Text>
        </Text>
      </View>
    </View>
  );
};

export default Waiting;

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
