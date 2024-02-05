import React from 'react';
import { StyleSheet, Text, View, Image , ScrollView , TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card, Button } from 'react-native-paper';
import { MaterialIcons, Entypo, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { auth, db, realtimeDb } from '../../firebase'
import { doc, getDoc , updateDoc} from 'firebase/firestore';



const Profile = ({ props }) => {
    const navigation = useNavigation(); // Initialize the navigation hook
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [ViewMode, setViewMode] = React.useState(true);

    const handleSave = () => {
        setViewMode(true)
        updateUserDate();
    }

    const getUser = async () => {
        const docRef = doc(db, 'users', auth.currentUser.uid);
        const docsnap = await getDoc(docRef);
        if (docsnap.exists()) {
            console.log('Document data: ', docsnap.data());
            const data = docsnap.data()
            setName(data.name)
            setEmail(data.email)
            setPhone(data.phone)
            setPassword(data.password) 
        } else {
            console.log('No such document');
        }
    };

    const updateUserDate = async () => {
        const washingToRef = doc(db, 'users', auth.currentUser.uid)
        await updateDoc(washingToRef, {
            name: name,
            email: email,
            phone: phone,
            password: password,
        })
    };

    const handleEdit = () => {
        setViewMode(false)
    }

    { ViewMode ? getUser(): null }
    return (
        <ScrollView style={styles.root}>
            <LinearGradient
                colors={['#009999', '#00BFBF']}
                style={{ height: "20%" }}
            >
                <View style={{ flexDirection: 'row', marginTop: "10%" }}>
                    <View style={styles.divider} />
                    <View style={styles.title}>
                        <Text style={{ fontSize: 38, color: "#2D3436" }}> Personal <Text style={{ fontWeight: "300", color: "white" }}>Profile</Text></Text>
                    </View>
                    <View style={styles.divider} />
                </View>
            </LinearGradient>

            <View style={styles.imagestyle}>
                <Image
                    style={{ width: 140, height: 140, borderRadius: 140 / 2, margin: -50 }}
                    source={require('./Images/icon.png')}
                />
            </View>

            <View style={{ alignItems: "center", marginTop: 55, margin: 15 }}>
                <Title>{name}</Title>

            </View>

            { ViewMode ? (
                <View>
                    <Card style={styles.mycard}>
                        <View style={styles.cardconent}>
                            <Ionicons style={{ margin: 4 }} name="person" size={32} color='#009999' />
                            <Text style={{ marginTop: 12, fontSize: 15 }}> {name} </Text>
                        </View>
                    </Card>

                    <Card style={styles.mycard} >
                        <View style={styles.cardconent}>
                            <MaterialIcons style={{ margin: 4 }} name="email" size={32} color='#009999' />
                            <Text style={{ marginTop: 12, fontSize: 15 }}> {email} </Text>

                        </View>
                    </Card>


                    <Card style={styles.mycard} >
                        <View style={styles.cardconent}>
                            <Entypo style={{ margin: 4 }} name="phone" size={32} color='#009999' />
                            <Text style={{ marginTop: 12, fontSize: 15 }}> {phone} </Text>
                        </View>
                    </Card>

                    <Card style={styles.mycard} >
                        <View style={styles.cardconent}>
                            <FontAwesome5 style={{ margin: 4 }} name="home" size={24} color='#009999' />
                            <Text style={{ marginTop: 12, fontSize: 15 }}> {password} </Text>
                        </View>
                    </Card>



                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15, marginBottom:50 }}>
                        <Button icon="account-edit" color="#FF8C00" mode="contained" onPress={handleEdit}>
                            Edit
                        </Button>
                    </View>
                </View>
            ) : (
                <View>
                    <Card style={styles.mycard}>
                        <View style={styles.cardconent}>
                            <Ionicons style={{ margin: 4 }} name="person" size={32} color='#009999' />
                            <TextInput
                                style={{ marginTop: 12, fontSize: 15 }}
                                value={name}
                                onChangeText={setName}
                                autoFocus />
                        </View>
                    </Card>

                    <Card style={styles.mycard} >
                        <View style={styles.cardconent}>
                            <MaterialIcons style={{ margin: 4 }} name="email" size={32} color='#009999' />
                            <TextInput
                                style={{ marginTop: 12, fontSize: 15 }}
                                value={email}
                                onChangeText={setEmail}
                                autoFocus />

                        </View>
                    </Card>


                    <Card style={styles.mycard} >
                        <View style={styles.cardconent}>
                            <Entypo style={{ margin: 4 }} name="phone" size={32} color='#009999' />
                            <TextInput
                                style={{ marginTop: 12, fontSize: 15 }}
                                value={phone}
                                onChangeText={setPhone}
                                autoFocus />
                        </View>
                    </Card>

                    <Card style={styles.mycard} >
                        <View style={styles.cardconent}>
                            <FontAwesome5 style={{ margin: 4 }} name="home" size={24} color='#009999' />
                            <TextInput
                                style={{ marginTop: 12, fontSize: 15 }}
                                value={password}
                                onChangeText={setPassword}
                                autoFocus />
                        </View>
                    </Card>



                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 , marginBottom:50 }}>
                        <Button icon="account-edit" color="#FF8C00" mode="contained" onPress={handleSave}>
                            Save
                        </Button>
                    </View>

                </View>
            )}
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white'
    },
    imagestyle: {
        alignItems: 'center',
        marginTop: 30
    },
    mycard: {
        margin: 3,
        marginTop: 10
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
    }
})
export default Profile;
