import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React from "react";

const Chats = ({ navigation }) => {
  const chats = [
    { id: 1, name: "john Doe" },
    { id: 2, name: "prateek srivastav" },
  ];

  const Chat = ({ item }) => {
    return (
      <Pressable
        style={styles.inbox}
        onPress={() => navigation.navigate("Chat", { key: item.id, item })}
      >
        <View style={styles.justify}>
          <Text
            style={[
              styles.text,
              {
                backgroundColor: "#ffa800",
                height: 40,
                width: 40,
                borderRadius: 20,
                textAlignVertical: "center",
                paddingBottom: 4,
                marginRight: 16,
                textAlign: "center",
                fontWeight: "bold",
              },
            ]}
          >
            {item.name[0]}
          </Text>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <View>
          <Text style={styles.date}>27/06/2002</Text>
        </View>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Messages</Text>
      <FlatList
        data={chats}
        renderItem={Chat}
        keyExtractor={(item) => item.id}
        style={{ marginTop: 10 }}
      />
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  name: {
    color: "#ffffff",
    fontSize: 16,
    paddingTop: 7,
    fontWeight: "500",
  },
  date: {
    color: "#9e9e9e",
    paddingTop: 8,
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
  justify: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 9,
    paddingVertical: 16,
    marginVertical: 6,
    backgroundColor: "#232222",
  },
});
