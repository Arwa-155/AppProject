//import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Image, Dimensions, TouchableOpacity ,View,Text} from "react-native";
//import { TouchableOpacity } from "react-native-gesture-handler";
//import Pdf from 'react-native-pdf'

const HEIGHT = 300, WIDTH = 200;
const screen_width = Dimensions.get('window').width;


const Book = () => {
  return (
    <View style={styles.Container} >
      <TouchableOpacity style={styles.Main_View} /* onPress={() => {
      nav.navigate('Book Details', { imgsrc: bookimgsrc, title: props.title,author:bookauthor ,description:bookdescription})
    }} */>
        <Image source={require('./Image/database.png')} style={styles.Coverimg} />
        <Text  style={styles.text} >Course: DataBase</Text>
        <Text  style={styles.text} >Course ID: CS370</Text>
        <Text  style={styles.text} >Chapter:3</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.Main_View} /* onPress={() => {
      nav.navigate('Book Details', { imgsrc: bookimgsrc, title: props.title,author:bookauthor ,description:bookdescription})
    }} */>
        <Image source={require('./Image/app.png')} style={styles.Coverimg} />
        <Text  style={styles.text}>Course: Application Development</Text>
        <Text  style={styles.text}>Course ID: CS447</Text>
        <Text  style={styles.text}>Chapter:1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Main_View} /* onPress={() => {
      nav.navigate('Book Details', { imgsrc: bookimgsrc, title: props.title,author:bookauthor ,description:bookdescription})
    }} */>
        <Image source={require('./Image/deeplearning.png')} style={styles.Coverimg} />
        <Text  style={styles.text}>Course: Deep Learning</Text>
        <Text  style={styles.text}>Course ID: CS464</Text>
        <Text  style={styles.text}>Chapter:5</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Main_View} /* onPress={() => {
      nav.navigate('Book Details', { imgsrc: bookimgsrc, title: props.title,author:bookauthor ,description:bookdescription})
    }} */>
        <Image source={require('./Image/distributed.png')} style={styles.Coverimg} />
        <Text  style={styles.text}>Course: Distributed System</Text>
        <Text  style={styles.text}>Course ID: CS427</Text>
        <Text  style={styles.text}>Chapter:7</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Main_View} /* onPress={() => {
      nav.navigate('Book Details', { imgsrc: bookimgsrc, title: props.title,author:bookauthor ,description:bookdescription})
    }} */>
        <Image source={require('./Image/softwere2.png')} style={styles.Coverimg} />
        <Text  style={styles.text}>Course: Softwere Engineer2</Text>
        <Text  style={styles.text}>Course ID: CS392</Text>
        <Text  style={styles.text}>Chapter:1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Main_View} /* onPress={() => {
      nav.navigate('Book Details', { imgsrc: bookimgsrc, title: props.title,author:bookauthor ,description:bookdescription})
    }} */>
        <Image source={require('./Image/networksecurity.png')} style={styles.Coverimg} />
        <Text  style={styles.text}>Course: Network Security</Text>
        <Text  style={styles.text}>Course ID: CS337</Text>
        <Text  style={styles.text}>Chapter:1</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  Container:{
    flex:1,
    flexDirection:'row',
    flexWrap: 'wrap'
  },
  Main_View: {
    width: screen_width / 2 - 8,
    height: HEIGHT,
    marginHorizontal: 3,
  },

  Coverimg: {
    width: "100%",
    height: "50%",
    borderRadius: 10,
    alignSelf: "center",
    borderColor:'#BDBDBD',
    borderWidth:1
  },
  text:{
    fontSize:18,
    marginVertical:3,
    paddingLeft:9
  }
});
export default Book;