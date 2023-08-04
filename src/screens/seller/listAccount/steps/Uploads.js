import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import ImageUpload from "../../../../components/ImageUpload";

const Uploads = () => {
  const [Image1, setImage1] = useState(null);
  return (
    <ScrollView style={{ height: "70%", paddingVertical: 6 }}>
      <View style={{ marginTop: 3 }}>
        <ImageUpload image={Image1} setImage={setImage1} />
      </View>
    </ScrollView>
  );
};

export default Uploads;

const styles = StyleSheet.create({});
