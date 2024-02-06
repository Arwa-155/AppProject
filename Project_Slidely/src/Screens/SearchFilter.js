import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  TextInputContainer: {
    borderColor: '#009999',
    borderWidth: 2,
    paddingHorizontal: 36,
    paddingVertical: 8,
    borderRadius: 6,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    marginHorizontal: 16,
    backgroundColor: '#92b39e',
    paddingHorizontal: 36,
    paddingVertical: 16,
    borderRadius: 6,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  detailsContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  largeImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
});

const SearchFilter = () => {
  const Filters = [
    {
      id: 1,
      name: 'DataBase',
      CourseID: 'CS370',
      Chapter: '3',
      image: require('../Screens/Images/database.png'),
    },
    {
      id: 2,
      name: 'Application Development',
      CourseID: 'CS447',
      Chapter: '1',
      image: require('../Screens/Images/app.png'),
    },
    {
      id: 3,
      name: 'Deep Learning',
      CourseID: 'CS464',
      Chapter: '5',
      image: require('../Screens/Images/deeplearning.png'),
    },
    {
      id: 4,
      name: 'Distributed System',
      CourseID: 'CS427',
      Chapter: '7',
      image: require('../Screens/Images/distributed.png'),
    },
    {
      id: 5,
      name: 'Software Engineer 2',
      CourseID: 'CS392',
      Chapter: '1',
      image: require('../Screens/Images/softwere2.png'),
    },
    {
      id: 6,
      name: 'Network Security',
      CourseID: 'CS337',
      Chapter: '1',
      image: require('../Screens/Images/networksecurity.png'),
    },
  ];

  const [userInput, setUserInput] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [filteredList, setFilteredList] = useState(Filters);

  const handleFilter = (text) => {
    setUserInput(text);
    let filteredList = Filters.filter((Filter) =>
      Filter.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredList(filteredList);
  };

  const handleItemPress = (item) => {
    setSelectedItem(item);
  };

  return (
    <View>
      <SafeAreaView />
      <Text style={styles.title}>Search Filter</Text>
      <View style={styles.TextInputContainer}>
        <TextInput
          placeholder="Enter your search"
          onChangeText={handleFilter}
        />
      </View>

      <FlatList
        data={filteredList}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleItemPress(item)}>
            <View style={styles.itemContainer}>
              <Text>{item.name}</Text>
              {item.image && (
                <Image source={item.image} style={styles.image} />
              )}
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      {selectedItem && (
        <View style={styles.detailsContainer}>
          <Text>Name: {selectedItem.name}</Text>
          <Text>Course ID: {selectedItem.CourseID}</Text>
          <Text>Chapter: {selectedItem.Chapter}</Text>
          {selectedItem.image && (
            <TouchableOpacity onPress={() => setSelectedItem(null)}>
              <Image
                source={selectedItem.image}
                style={styles.largeImage}
              />
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default SearchFilter;
