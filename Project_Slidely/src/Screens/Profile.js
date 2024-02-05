import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Linking, Platform, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card, Button } from 'react-native-paper';
import { MaterialIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { ref, get, set } from 'firebase/database';
import { realtimeDb } from './firebaseConfig';
const Profile = () => {
  const route = useRoute();
  const { id } = route.params;
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userDataRef = ref(realtimeDb, id);
        const userDataSnapshot = await get(userDataRef);
        if (userDataSnapshot.exists()) {
          setUser(userDataSnapshot.val());
          setName(userDataSnapshot.val().name);
          setEmail(userDataSnapshot.val().email);
        } else {
          console.log('User not found');
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUserData();
  }, [id]);

  const handleSaveChanges = () => {
    try {
      set(ref(realtimeDb, id), {
        ...user,
        name: name,
        email: email,
      });
      console.log('Changes saved successfully');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.root}>
      <LinearGradient colors={['#009999', '#00BFBF']} style={{ height: '20%' }}>
        <View style={{ flexDirection: 'row', marginTop: '10%' }}>
          <View style={styles.divider} />
          <View style={styles.title}>
            <Text style={{ fontSize: 38, color: '#2D3436' }}>
              Personal <Text style={{ fontWeight: '300', color: 'white' }}>Profile</Text>
            </Text>
          </View>
          <View style={styles.divider} />
        </View>
      </LinearGradient>
      <View style={styles.imagestyle}>
        <Image style={{ width: 140, height: 140, borderRadius: 140 / 2, margin: -50 }} source={require('./Images/icon.png')} />
      </View>

      <View style={{ alignItems: 'center', marginTop: 55, margin: 15 }}>
        <Title>{name}</Title>
      </View>

      <Card style={styles.mycard} onPress={() => { Linking.openURL('mailto:Noor@gmail.com') }}>
        <View style={styles.cardconent}>
          <MaterialIcons style={{ margin: 4 }} name="email" size={32} color="#009999" />
          <Text style={{ marginTop: 12, fontSize: 15 }}>{email}</Text>
        </View>
      </Card>

      <Card style={styles.mycard} onPress={() => { OpenDial() }}>
        <View style={styles.cardconent}>
          <Entypo style={{ margin: 4 }} name="phone" size={32} color="#009999" />
          <Text style={{ marginTop: 12, fontSize: 15 }}>01212836883</Text>
        </View>
      </Card>

      <Card style={styles.mycard}>
        <View style={styles.cardconent}>
          <FontAwesome5 style={{ margin: 4 }} name="home" size={24} color="#009999" />
          <Text style={{ marginTop: 12, fontSize: 15 }}>129 El-Merghany Street, Heliopolis</Text>
        </View>
      </Card>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Name"
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
        />
      </View>

      <Button icon="account-edit" color="#FF8C00" mode="contained" onPress={handleSaveChanges}>
        Save Changes
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  imagestyle: {
    alignItems: 'center',
    marginTop: 30,
  },
  mycard: {
    margin: 3,
    marginTop: 10,
  },
  cardconent:{
    flexDirection: 'row',
    padding: 5,
  },
  divider: {
    backgroundColor: '#009999',
    height: 1,
    flex: 1,
    alignSelf: 'center',
  },
  input: {
    width: '40%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default Profile;
