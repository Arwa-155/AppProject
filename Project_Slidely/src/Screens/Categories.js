import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
//

const Categories = (props) => {
    const array = [
        { id: 1, title: "Artificial Intelligence (AI) CS 361", sourse1: require('../Screens/Images/Ai.png') },
        { id: 2, title: "Software Engineering CS 290", sourse1: require('../Screens/Images/soft.png') },
        { id: 3, title: "Computer Networks CS 330", sourse1: require('../Screens/Images/newtork.png') },
        { id: 4, title: "Human-Computer Interaction CS 351", sourse1: require('../Screens/Images/hci.png') },
        { id: 5, title: "Deep learning CS 464", sourse1: require('../Screens/Images/deep.png') },
        { id: 6, title: "Database CS 370", sourse1: require('../Screens/Images/database.png') },
        { id: 7, title: "data structure", sourse1: require('../Screens/Images/datastracture.png') }
    ]
    return (
        <View style={{ backgroundColor: 'white' }}>
            <LinearGradient
                // color top down 
                colors={['#009999', '#009999']}
                style={{ height: "20%" }}
            >
                <View style={{ flexDirection: 'row', marginTop: '13%', marginBottom: 20 }}>
                    <View style={styles.divider} />
                    <View style={styles.title}>
                        <Text style={{ fontSize: 38, color: "#2D3436" }}> Book <Text style={{ fontWeight: "300", color: "white" }}>Categories</Text></Text>
                    </View>
                    <View style={styles.divider} />
                </View>
            </LinearGradient>



            <ScrollView>


                {
                    array.map((item) => (
                        <View style={styles.card} key={item.id}>
                            <View style={styles.cardImgWrapper}>
                                <Image
                                    source={item.sourse1}
                                    resizeMode="stretch"
                                    style={styles.cardImg}
                                />
                            </View>
                            <View style={styles.cardInfo}>
                                <Text style={styles.cardTitle}>{item.title}</Text>

                                <Text style={styles.cardDetails}>
                                    Amazing description for this Category
                                </Text>
                            </View>
                        </View>
                    ))
                }



            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    divider: {
        backgroundColor: "#009999",
        height: 1,
        flex: 1,
        alignSelf: 'center'
    },
    title: {
        flexDirection: "row",
        fontWeight: "800",
        color: "#2D3436",
        paddingHorizontal: 30
    },
    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
    },
    card: {
        height: 100,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    cardImgWrapper: {
        flex: 1,
    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,

    },
    cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
    },
    cardTitle: {
        fontWeight: 'bold',
    },
    cardDetails: {
        fontSize: 12,
        color: '#444',
    }
})
export default Categories;
