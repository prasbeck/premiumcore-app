import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Pressable,
  TextInput,
} from "react-native";
import React, { useRef, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const Chat = ({ route, navigation }) => {
  const scrollRef = useRef();
  // useEffect(() => {
  //   scrollRef.current?.scrollIntoView({ behaviour: "smooth" });
  // }, [messages]);

  const messages = [
    { text: " hello prateek", createdAt: "24/02/23", senderId: 1 },
    { text: " hello prashant", createdAt: "24/02/23", senderId: 2 },
    { text: " how are you", createdAt: "24/02/23", senderId: 1 },
    { text: " I am good", createdAt: "24/02/23", senderId: 2 },
    { text: "what about you", createdAt: "24/02/23", senderId: 2 },
    { text: "good ", createdAt: "24/02/23", senderId: 1 },

    {
      text: "what's going on in life ,tell something",
      createdAt: "24/02/23",
      senderId: 2,
    },
    {
      text: "as usual nothing special daily routine , class , lab , work , study sleep.",
      createdAt: "24/02/23",
      senderId: 1,
    },
    {
      text: "give some guidance for placement preparation ",
      createdAt: "24/02/23",
      senderId: 1,
    },
    {
      text: "chill only , start practicing DSA it will be fine",
      createdAt: "24/02/23",
      senderId: 2,
    },
    { text: " yeah doing , thanks .", createdAt: "24/02/23", senderId: 1 },
  ];
  const currentUserId = 1;
  const userName = route.params?.item.name;

  const HeaderProfile = ({ userName }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#ffa800" />
        </TouchableOpacity>
        <Text
          style={[
            styles.text,
            {
              backgroundColor: "#ffa800",
              height: 35,
              width: 35,
              borderRadius: 18,
              textAlignVertical: "center",
              paddingBottom: 4,
              marginHorizontal: 16,
              textAlign: "center",
              fontWeight: "bold",
            },
          ]}
        >
          {userName[0]}
        </Text>
      </View>
    );
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: userName,
      headerLeft: () => <HeaderProfile userName={userName} />,
    });
  }, [navigation, userName]);

  //   messages sent component
  const MessageRecieved = ({ msg }) => {
    return (
      <View style={styles.chat}>
        <View style={styles.recieved}>
          <Text style={styles.recieveMsg}>{msg.text}</Text>
        </View>
        <Text style={styles.recieveDate}>{msg.createdAt}</Text>
      </View>
    );
  };
  // messages recieve component
  const MessageSent = ({ msg }) => {
    return (
      <View style={styles.chat}>
        <View style={styles.sent}>
          <Text style={styles.sentMsg}>{msg.text}</Text>
        </View>
        <Text style={styles.date}>{msg.createdAt}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {messages?.map((msg, index) => {
          return (
            <View ref={scrollRef} key={index} style={{ paddingHorizontal: 12 }}>
              {msg.senderId === currentUserId ? (
                <MessageSent msg={msg} />
              ) : (
                <MessageRecieved msg={msg} />
              )}
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.inputBox}>
        <TextInput
          name="message"
          placeholder=" send a message ..."
          placeholderTextColor="#9e9e9e"
          style={styles.input}
        />
        <Pressable
          onPress={() => console.log("pressed send")}
          style={{ justifyContent: "center" }}
        >
          <Ionicons name="send" size={28} color="#ffa800" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopColor: "#2e2e2e",
    borderTopWidth: 2,
    padding: 16,
  },
  inputBox: {
    borderColor: "#2e2e2e",
    borderWidth: 2,
    flexDirection: "row",
    gap: 6,
    padding: 4,
    borderRadius: 16,
  },
  input: {
    height: 40,
    width: "90%",
    paddingHorizontal: 10,
    color: "#ffffff",
  },
  sent: {
    backgroundColor: "#444444",
    borderRadius: 10,
    maxWidth: "70%",
    alignSelf: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  sentMsg: {
    color: "#ffffff",
    fontSize: 16,
  },
  recieved: {
    width: "auto",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    alignSelf: "flex-start",
    maxWidth: "70%",
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  recieveMsg: {
    color: "rgb(0,0,0)",
    fontSize: 16,
  },
  chat: {
    flexDirection: "column",
    justifyContent: "flex-end",
    marginBottom: 7,
  },
  date: {
    color: "#9e9e9e",
    flexDirection: "row",
    alignSelf: "flex-end",
    paddingHorizontal: 10,
  },
  recieveDate: {
    color: "#9e9e9e",
    flexDirection: "row",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
  },
});

export default Chat;
