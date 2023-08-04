import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";

import Ionicons from "react-native-vector-icons/Ionicons";
import AccountForm from "./listAccount/AccountForm";

const Dashboard = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const Listaccount = () => {
    return (
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalBox}>
            <View style={styles.modalHeader}>
              <Text
                style={{ fontSize: 18, fontWeight: "700", color: "#ffffff" }}
              >
                List Account
              </Text>
              <Pressable onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={25} color="#ffffff" />
              </Pressable>
            </View>

            <AccountForm setModalVisible={setModalVisible} />
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <Listaccount />
      <Text style={{ color: "#ffffff", fontSize: 22 }}>Hello Prashant,</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setModalVisible(true)}
      >
        <View style={{ justifyContent: "center", flexDirection: "row" }}>
          <Text
            style={{ color: "#ffffff", marginVertical: 4, fontWeight: "600" }}
          >
            List account{" "}
          </Text>
          <Ionicons name="add" size={25} color="#ffffff" />
        </View>
      </TouchableOpacity>
      <View style={styles.box}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../../assets/images/seller.png")}
            style={{ borderRadius: 40, height: 80, width: 80 }}
          />
          <Text style={{ color: "#ffffff", marginVertical: 6, fontSize: 16 }}>
            Prashant Beck
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: 12,
            padding: 10,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "#ffffff" }}>Accounts sold</Text>
            <Text style={{ color: "#ffffff" }}>0</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 6,
            }}
          >
            <Text style={{ color: "#ffffff" }}>Accounts in store</Text>
            <Text style={{ color: "#ffffff" }}>0</Text>
          </View>
        </View>
        <Text
          style={{
            color: "#ffffff",
            marginHorizontal: 10,
            marginTop: 10,
            fontSize: 18,
          }}
        >
          Details
        </Text>
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: 12,
            padding: 10,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "#ffffff" }}>Email</Text>
            <Text style={{ color: "#ffffff" }}>prashantbeck1057@gmail.com</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 6,
            }}
          >
            <Text style={{ color: "#ffffff" }}>D.O.B</Text>
            <Text style={{ color: "#ffffff" }}>27/06/2002</Text>
          </View>
        </View>
      </View>
      <View style={styles.box}>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: 12,
            padding: 10,
          }}
        >
          <Text style={{ color: "#ffffff" }}>
            No account is added here. Please add a game account for sale from
            <Text
              style={{ color: "#ffa800" }}
              onPress={() => navigation.navigate("Explore")}
            >
              here
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#ffa800",
    width: "50%",
    paddingVertical: 6,
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginVertical: 10,
  },
  box: {
    marginTop: 10,
    backgroundColor: "#232222",
    marginBottom: 20,
    paddingVertical: 20,
    borderRadius: 12,
    paddingHorizontal: 10,
  },

  //  modal style

  centeredView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.75)",
  },
  modalBox: {
    borderColor: "rgb(31,31,31)",
    borderWidth: 2,
    margin: 10,
    paddingVertical: 10,
    backgroundColor: "#161616",
    borderRadius: 16,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderBottomColor: "rgb(31,31,31)",
    borderBottomWidth: 4,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
export default Dashboard;
