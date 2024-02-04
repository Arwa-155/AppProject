import { SafeAreaView , StyleSheet, Text ,TextInput, View, FlatList } from "react-native";
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

});

const SearchFilter = () => {

const Filters = [

{
    id: 1,
    name:"DataBase",
    CourseID:"CS370",
    Chapter:"3",
},

{
    id: 2,
    name:"Application Development",
    CourseID:"CS447",
    Chapter:"1",
},

{
    id: 3,
   name:" Deep Learning",
   CourseID:"CS464",
   Chapter:"5",
   },

{
    id: 4,
   name:" Distributed System",
   CourseID:"CS427",
   Chapter:"7",
   },

{
    id: 5,
   name:" Softwere Engineer2",
   CourseID:"CS392",
   Chapter:"1",
   },

{
    id: 6,
   name:" Network Security",
   CourseID:"CS337",
   Chapter:"1",
   },
];

// init states
const [userInput , setUserInput] = useState("");
const [FilterList, setFilterList]= useState(Filters);





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
    </View>
  )}
 />
</View>
);
};

export default SearchFilter;



   

    
