import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';



export default function Login({ props }) {
  const navigation = useNavigation(); // Initialize the navigation hook

  return (
    <View>
      <View style={styles.loginContainer}>
        <Image style={styles.logo} source={require('./Images/Bookstore_logo.png')}></Image>
      </View>

      <View style={styles.border}>
        <Text style={styles.text_header}> Join Slidely Application!</Text>

        <Text style={styles.txt}> Create an account to start reading</Text>

        <View style={styles.button}>
          <TouchableOpacity style={styles.inBut} onPress={() => { navigation.navigate('Signup') }}>
            <View>
              <Text style={styles.textSign}> Sign Up </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inBut} onPress={() => { navigation.navigate('Login') }}>
            <View>
              <Text style={styles.textSign}> Log In </Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </View>

  )
}




const styles = StyleSheet.create({
  loginContainer: {
    // backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  logo: {
    height: 260,
    width: 260,
    marginTop: 30,
    marginLeft: 50,
  },
  text_header: {
    color: '#009999',
    fontWeight: 'bold',
    fontSize: 33,
    marginTop: 70,
  },
  button: {
    alignItems: 'center',
    marginTop: -20,
    alignItems: 'center',
    textAlign: 'center',
    margin: 20,
  },
  inBut: {
    width: '50%',
    backgroundColor: '#009999',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 50,
    marginTop: 50,
    marginLeft: 180,
  },

  border: {
    borderColor: 'white',
    borderWidth: 1, 
    backgroundColor: 'white', 
    borderRadius: 20, 
    width: 410, 
    height: 500, 
  },
  txt: {
    fontSize: 20, 
    color: 'grey', 
    marginLeft: 15, 
    padding: 5,
  },
})