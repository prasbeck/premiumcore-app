import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const TagsInput = ({ tags, setTags, placeholder }) => {
  // const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const handleInputSubmit = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleTagDelete = (tag) => {
    const newTags = tags.filter((t) => t !== tag);
    setTags(newTags);
  };

  return (
    <View style={styles.container}>
      {tags.map((tag, index) => (
        <View key={index} style={styles.tag}>
          <Text style={{ marginLeft: 10 }}>{tag}</Text>
          <TouchableOpacity
            onPress={() => handleTagDelete(tag)}
            style={{ marginHorizontal: 10 }}
          >
            <Text style={{ color: "red" }}>X</Text>
          </TouchableOpacity>
        </View>
      ))}

      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={handleInputChange}
        onSubmitEditing={handleInputSubmit}
        placeholder={placeholder}
        placeholderTextColor="#515151"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    backgroundColor:
      "linear-gradient(90.59deg, rgba(56, 55, 55, 0.5) -2.17%, rgba(152, 152, 152, 0) 110.76%)",
    borderColor: "#303030",
    borderRadius: 6,

    color: "#ffffff",
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    flex: 1,
    color: "#ffffff",
    minWidth: 80,
    minHeight: 48,
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgb(209,213,219)",
    borderRadius: 20,
    padding: 5,
    marginRight: 5,
    marginBottom: 5,
  },
});

export default TagsInput;
