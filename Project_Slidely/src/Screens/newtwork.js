import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, ActivityIndicator, FlatList, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function Network() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getBooks = async () => {
    try {
      const response = await fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json');
      const json = await response.json();
      const booksWithId = json.map((book, index) => ({ ...book, id: index.toString() }));
      setData(booksWithId);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBooks();
    console.log('useEffect');
  }, []);

  return (


    <View>
      <View style={{alignItems:'center',marginTop: "10%",}}><Text style={{fontSize:30}}>Books</Text></View>
      <View style={{ flexDirection: 'row', }}>

        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <View style={{ padding: 24 }}>
            <FlatList
              data={data}
              keyExtractor={({ id }) => id}
              renderItem={({ item }) => (
                <View style={{ backgroundColor: "#009999", borderWidth: 1, flex: 1, fontSize: 20, padding: 15, borderRadius: 10, margin: 2 }} key={item.id}>
                  <Text  >
                    <Text style={{ fontWeight: 'bold', }}> Book name:</Text> {item.title}
                  </Text>
                  <Text >
                    <Text style={{ fontWeight: 'bold', }}> number of pages:</Text>  {item.pages}
                  </Text>
                  <Text >
                    <Text style={{ fontWeight: 'bold', }}> year of publication:</Text> {item.year}
                  </Text>
                </View>
              )}
            />
          </View>
        )}
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white'
  },


  cardconent: {
    flexDirection: 'row',
    padding: 5
  },
  divider: {
    backgroundColor: "#009999",
    height: 1,
    flex: 1,
    alignSelf: 'center'
  },
  view1: {
    backgroundColor: "#009999",

  }
})