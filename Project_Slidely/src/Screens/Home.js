import React, { useState } from "react";
import { View, StyleSheet, Image, Text, ScrollView, Dimensions, TouchableOpacity, LinearGradient } from "react-native";
import Book from "../Components/Book";
import Swiper from 'react-native-swiper';
import { Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
//import { LinearGradient } from 'expo-linear-gradient';
import { get } from "react-native/Libraries/Utilities/PixelRatio";

const screen_width = Dimensions.get('window').width;


export default function Home() {
  return (
    <View style={styles.mainview}>
      


      <ScrollView style={styles.container} showsVerticalScrollIndicator={true} >

        <View style={styles.sliderContainer}>


          <View style={styles.slide}>
            <Swiper
              autoplay
              horizontal={false}
              height={200} //edit:increase 
              activeDotColor='black'>
              <View style={styles.slide}>
                <Image
                  source={require('./Images/WP1.png')}
                  resizeMode="cover"
                  style={styles.sliderImage}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  source={require('./Images/WP2.png')}
                  resizeMode="cover"
                  style={styles.sliderImage}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  source={require('./Images/WP3.png')}
                  resizeMode="cover"
                  style={styles.sliderImage}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  source={require('./Images/WP4.png')}
                  resizeMode="cover"
                  style={styles.sliderImage}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  source={require('./Images/WP5.png')}
                  resizeMode="cover"
                  style={styles.sliderImage}
                />
              </View>
            </Swiper>

          </View>

          <View style={styles.categoryContainer}>

            <TouchableOpacity style={styles.categoryBtn}>
              <View style={styles.categoryIcon}>
                <FontAwesome name="bookmark" size={35} color='#009999' />
              </View>
              <Text style={styles.categoryBtnTxt}>Saved</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryBtn}>
              <View style={styles.categoryIcon}>
                <FontAwesome5 name="readme" size={35} color='#009999' />
              </View>
              <Text style={styles.categoryBtnTxt}>History</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryBtn}>
              <View style={styles.categoryIcon}>
                <Entypo name="star" size={35} color='#009999' />
              </View>
              <Text style={styles.categoryBtnTxt}>Favourite</Text>
            </TouchableOpacity>

          </View>
          <Text style={{ fontSize: 30, alignSelf: 'center', fontWeight: 'bold', marginBottom: 20, color: '#000', marginTop: 20 }}>Recently Added</Text>
          <View style={styles.shelf}>
            <Book />
          </View>
        </View>
      </ScrollView>
    </View>

  );

};

const styles = StyleSheet.create({
  shelf: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  mainview: {
    marginTop: 20, // safe arwa
    flex: 1,// none


  },
  sliderContainer: {
    height: '100%', //edit
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    //flex: 1//add
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    //height: 200, //addd
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center'
  },
  divider: {
    marginTop: 10,
    backgroundColor: "#000",
    height: 1,
    width: '100%',
    flex: 1,
    alignSelf: 'center'
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    marginHorizontal: 0,
    alignSelf: 'center',
    marginLeft: 15
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 30
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#003333',
    marginRight: 30
  },
  shelfs: {
    fontSize: 50
  },
});
