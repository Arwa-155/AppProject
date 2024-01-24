import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View style={styles.background}>
      <AntDesign name="search1" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search Books..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <AntDesign name="arrowright" style={styles.buttonIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: "100%",
    alignSelf: "center",
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 3,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  icon: {
    fontSize: 24,
    color: "black",
  },
  input: {
    flex: 1,
    height: "100%",
    marginLeft: 10,
  },
  button: {
    backgroundColor: "black",
    borderRadius: 5,
    padding: 10,
    marginLeft: 10,
  },
  buttonIcon: {
    fontSize: 24,
    color: "white",
  },
});

export default SearchBar;
