import { SafeAreaView , StyleSheet, Text ,TextInput, View, FlatList , Image } from "react-native";
//import React from "react";
import React, { useState } from "react";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      },
    TextInputContainer: {
        borderColor: "blue",
        borderWidth:2,
        paddingHorizontal: 36,
        paddingVertical: 8,
        borderRadius: 6,
        marginHorizontal: 16,

},

title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

    itemContainer: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        margin: 10,
        marginHorizontal: 16,
        backgroundColor: "#ebf5fb",
        paddingHorizontal: 36,
        paddingVertical: 16,
        borderRadius: 6,
},

image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    },

});

const SearchFilter = () => {

const Filters = [

{
    id: 1,
    name:"DataBase",
    CourseID:"CS370",
    Chapter:"3",
    image: "./Screens/Images/database.png",
},


{
    id: 2,
    name:"Application Development",
    CourseID:"CS447",
    Chapter:"1",
    image: "./Screens/Images/app.png",
},

{
    id: 3,
   name:" Deep Learning",
   CourseID:"CS464",
   Chapter:"5",
   image: "./Screens/Images/deeplearning.png",
   },

{
    id: 4,
   name:" Distributed System",
   CourseID:"CS427",
   Chapter:"7",
   image: "./Screens/Images/distributed.png",
   },

 {
     id: 5,
    name:" Softwere Engineer2",
   CourseID:"CS392",
   Chapter:"1",
   image: "./Screens/Images/softwere2.png",
   },

{
    id: 6,
   name:" Network Security",
   CourseID:"CS337",
   Chapter:"1",
   image: "./Screens/Images/networksecurity.png",
   },
];

// init states
const [userInput , setUserInput] = useState("");
const [FilterList, setFilterList]= useState(Filters);

// // const FilterData = (item) => {

// //     //if the input is empty
// //     if(userInput === ""){
// //      return(
// //         <View style={styles.itemContainer}>
// //         <Text>{item.name}</Text>
// //     </View>
// //      );
// //     }

// //     //if user has started searching 
// //     if(item.name.toLowerCase().includes(userInput.toLowerCase())){
// //        return(
// //         <View style={styles.itemContainer}>
// //         <Text>{item.name}</Text>
// //     </View>
// //        );
// //     }
// // };




//filter functionality 

const handleFilter = (text)=>{
if(text){
    let filteredList = Filters.filter((Filter)=> 
    Filter.name.toLowerCase().includes(text.toLowerCase())
    );

    setFilterList(filteredList); // pass the filtered list
}
else{
    setFilterList(Filters); // pass the original list
}
};
return (
<View >
    <SafeAreaView />
    <Text style={styles.title}>Search Filter</Text>
  <View style={styles.TextInputContainer}>
  <TextInput 
  placeholder="Enter you search" 
  onChangeText={(text) =>{
    setUserInput(text);
    handleFilter(text);
  }}
  />
  </View>
  
  <FlatList 
  data={FilterList} 
  renderItem={({item , index }) => (
    <View style={styles.itemContainer}>
        <Text>{item.name}</Text>
        {item.image && <Image source={{ uri: item.image }} style={styles.image} />}
    </View>
  )}
  keyExtractor={(item) => item.id.toString()}
 />
</View>
);
};

export default SearchFilter;



   

    
