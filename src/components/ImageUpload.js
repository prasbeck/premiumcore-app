import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ImageUpload({ image, setImage }) {
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  };

  return (
    <ScrollView style={{ height: "70%", paddingVertical: 6 }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Upload Thumbnail" onPress={pickImage} />
        {image && (
          <Image
            source={{ uri: image.uri }}
            style={{ width: "90%", height: 250, marginTop: 3 }}
          />
        )}
      </View>
    </ScrollView>
  );
}
