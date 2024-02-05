import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import {auth} from '../../firebase'



export default function Login({ props }) {
  const navigation = useNavigation(); // Initialize the navigation hook
  const [email, setEamail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Log In 
        const user = userCredential.user;
        navigation.navigate('PageTwo')
        console.log('Log In seccesfuly')
        console.log(auth.currentUser.uid)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  }

  return (
    <ScrollView>
      <View style={styles.loginContainer}>
        <Image style={styles.logo} source={require('./Images/Bookstore_logo.png')}></Image>
      </View>

      <View style={styles.loginContainer}>
        <Text style={styles.text_header}> Welcome Back!</Text>
        <View style={styles.action}>
          <FontAwesome name='user-o' color='#009999' style={styles.smallIcon}></FontAwesome>
          <TextInput
            placeholder='Email'
            value={email}
            onChangeText={setEamail}
            style={styles.textInput} />
        </View>


        <View style={styles.action}>
          <FontAwesome name='lock' color='#009999' style={styles.smallIcon}></FontAwesome>
          <TextInput
            placeholder='Password'
            value={password}
            onChangeText={setPassword}
            style={styles.textInput}
            secureTextEntry ></TextInput>
        </View>


        <View style={styles.forgetPas}>
          <Text style={{ color: '#009999', fontWeight: '700' }}> Forget Password?</Text>
        </View>

        <View style={styles.button}>
          <TouchableOpacity style={styles.inBut} onPress={handleLogin}>
            <View>
              <Text style={styles.textSign}> Login</Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => { navigation.navigate('Signup') }} >
            <View>
              <Text style={{ color: 'grey', marginTop: 20, fontSize: 16 }}
              > Not a Member? Sign Up</Text>
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
  loginContainer: {
    // backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
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

  forgetPas: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 8,
    marginRight: 10,
  },
})
