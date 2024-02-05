import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card, Button } from 'react-native-paper';
import { MaterialIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { ref, get } from "firebase/database";
import { realtimeDb } from './firebaseConfig';
import { useRoute } from '@react-navigation/native';
import { uid } from "uid";

const Profile = () => {
  const route = useRoute();
  const { id } = route.params;
  const [user, setUser] = useState(null);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userDataRef = ref(realtimeDb, id);
        const userDataSnapshot = await get(userDataRef);
        if (userDataSnapshot.exists()) {
          setUser(userDataSnapshot.val());
        } else {
          console.log("User not found");
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUserData();
  }, [id]);

  if (!user) {
    return <Text>Loading...</Text>;
  }

  const { name, email } = user;

  const OpenDial = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${01212836883}';
    } else {
      phoneNumber = 'telprompt:${01212836883}';
    }

    Linking.openURL(phoneNumber);
  };

  const updateUser = async () => {
    try {
      if (newName && newEmail) {
        const userDataRef = ref(realtimeDb, id);
        await set(userDataRef, { name: newName, email: newEmail });

        setUser({ ...user, name: newName, email: newEmail });

        setIsEditing(false); // Hide input boxes after updating

        console.log('User data updated successfully.');
      } else {
        console.log('Invalid input. Please provide both name and email.');
      }
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


      <Card style={styles.mycard} onPress={() => { Linking.openURL('mailto:Noor@gmail.com') }}>
        <View style={styles.cardconent}>
          <MaterialIcons style={{ margin: 4 }} name="email" size={32} color="#009999" />
          {isEditing ? (
            <TextInput
              
              placeholder="New Email"
              value={newEmail}
              onChangeText={setNewEmail}
            />
          ) : (
            <Text style={{ marginTop: 12, fontSize: 15 }}>{email}</Text>
          )}
        </View>
      </Card>

      <Card style={styles.mycard} onPress={() => { OpenDial() }}>
        <View style={styles.cardconent}>
          <Entypo style={{ margin: 4 }} name="phone" size={32} color="#009999" />
          <Text style={{ marginTop: 12, fontSize: 15 }}>01212836883</Text>
        </View>
      </Card>

      <Card style={styles.javascriptmycard}>
        <View style={styles.cardconent}>
          <FontAwesome5 style={{ margin: 4 }} name="home" size={24} color="#009999" />
          <Text style={{ marginTop: 12, fontSize: 15 }}>129 El-Merghany Street, Heliopolis</Text>
        </View>
      </Card>


      <View style={{ alignItems: 'center', marginTop: 55, margin: 15 }}>
        {isEditing ? (
          <View>
            <View style={styles.input}>
            <TextInput
              
              placeholder="update name"
              value={newName}
              onChangeText={setNewName}
            />
            </View>
            <TextInput
              style={styles.input}
              placeholder="update Email"
              value={newEmail}
              onChangeText={setNewEmail}
            />
          </View>
        ) : (
          <Title>{name}</Title>
        )}
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
        {isEditing ? (
          <Button icon="account-check" color="#FF8C00" mode="contained" onPress={updateUser}>
            Save
          </Button>
        ) : (
          <Button icon="account-edit" color="#FF8C00" mode="contained" onPress={() => setIsEditing(true)}>
            Edit
          </Button>
        )}
      </View>
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
    marginBottom:50
  },
  mycard: {
    margin: 3,
    marginTop: 10,
  },
  cardconent: {
    flexDirection: 'row',
    padding: 5,
  },
  divider: {
    backgroundColor: '#009999',
    height: 1,
    flex: 1,
    alignSelf: 'center',
  },
  input:{
    borderWidth:2,
    borderColor:'black',
    width:200,
    margin:5,
    padding:10,
    borderColor:'#009999'
  }
  
});

export default Profile;
