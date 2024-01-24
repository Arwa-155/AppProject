import React from "react";
import { Text, View, Dimensions, StyleSheet, Image } from "react-native";
import SearchBar from "../Components/SearchBar";
const WIDTH = Dimensions.get('window').width;
const Search = () => {
  const handleSearch = (searchText) => {
    // Implement your search logic here
    console.log("Search text:", searchText);
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <View style={styles.content}>
        <Image
          source={require("../Screens/Images/BookC.png")}
          style={styles.logoStyle}
          resizeMode="stretch"
        />
        <Text style={styles.title}>Welcome to Book Search!</Text>
        <Text style={styles.subtitle}>Search for your favorite books</Text>
      </View>
    </View>
  );
};

const { height } = Dimensions.get("screen");
const height_logo = height * 0.7 * 0.4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoStyle: {
    width: height_logo,
    height: height_logo,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
  },
});

export default Search;
