import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';

import { auth, db, realtimeDb } from '../../firebase'
import { doc, setDoc } from 'firebase/firestore';



export default function SignUp({ props }) {
  const [name, setName] = React.useState('');
  const navigation = useNavigation(); // Initialize the navigation hook
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [compassword, setComPassword] = React.useState('');
 
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password, name, phone, compassword)
      .then(async (userCredential) => {
        const user = userCredential.user;
        navigation.navigate('PageTwo')
        console.log('Sign Up seccesfuly')
        console.log(compassword) // For checking if I capture cofirm pasword correctly
        addUserToDatabase();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        console.log(errorCode)
      });
  }

  const addUserToDatabase = async () => {
    await setDoc(doc(db, 'users', auth.currentUser.uid), {
      name: name,
      email: email,
      phone: phone,
      password: password,
    });
  }

  return (
    <ScrollView>
      <View style={styles.SignUpContainer}>
        <Image style={styles.logo} source={require('./Images/Bookstore_logo.png')}></Image>
      </View>

      <View style={styles.SignUpContainer}>
        <Text style={styles.text_header}> Sign Up</Text>
        <View style={styles.action}>
          <FontAwesome name='user-o' color='#009999' style={styles.smallIcon}></FontAwesome>
          <TextInput
            placeholder='Name'
            value={name}
            onChangeText={setName}
            style={styles.textInput} />
        </View>


        <View style={styles.action}>
          <FontAwesome name='envelope' color='#009999' style={styles.smallIcon}></FontAwesome>
          <TextInput
            placeholder='Email'
            value={email}
            onChangeText={setEmail}
            style={styles.textInput} />
        </View>


        <View style={styles.action}>
          <FontAwesome name='mobile' color='#009999' style={styles.smallIcon}></FontAwesome>
          <TextInput
            placeholder='phone' 
            value={phone}
            onChangeText={setPhone}
            style={styles.textInput} />
        </View>


        <View style={styles.action}>
          <FontAwesome name='lock' color='#009999' style={styles.smallIcon}></FontAwesome>
          <TextInput
            placeholder='Create Password'
            value={password}
            onChangeText={setPassword}
            style={styles.textInput}
            secureTextEntry />
        </View>


        <View style={styles.action}>
          <FontAwesome name='lock' color='#009999' style={styles.smallIcon}></FontAwesome>
          <TextInput
            placeholder='Confirm Password'
            value={compassword}
            onChangeText={setComPassword}
            style={styles.textInput}
            secureTextEntry />
        </View>


        <View style={styles.button}>
          <TouchableOpacity style={styles.inBut} onPress={handleSignUp}>
            <View>
              <Text style={styles.textSign}> Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>


      </View>
    </ScrollView>

  )
}




const styles = StyleSheet.create({
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  smallIcon: {
    marginRight: 10,
    fontSize: 24,
    marginBottom: 10,
  },
  logo: {
    height: 260,
    width: 260,
    marginTop: 30,
    marginLeft: 50,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    paddingTop: 14,
    paddingBottom: 3,
    marginTop: 15,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#009999',
    borderRadius: 50,
  },
  textInput: {
    flex: 1,
    marginTop: -12,
    // color: '#009999',
  },
  SignUpContainer: {
    // backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  text_header: {
    color: '#009999',
    // fontWeight: 'bold',
    fontSize: 30,
  },
  button: {
    alignItems: 'center',
    marginTop: -20,
    alignItems: 'center',
    textAlign: 'center',
    margin: 20,
  },
  inBut: {
    width: '70%',
    backgroundColor: '#009999',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 50,
    marginTop: 50,
  },
})
