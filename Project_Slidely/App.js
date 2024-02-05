import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Welcome from './src/Screens/WelcomePage';
import Home from './src/Screens/Home';
import Login from './src/Screens/Login';
import Signup from './src/Screens/SignUp';
import Profile from './src/Screens/Profile';
import Categories from './src/Screens/Categories';
import Search from './src/Screens/SearchFilter'
import Quote from './src/Screens/Quote'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tab_in_Stack(){
  return(
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        } else if (route.name === 'Categories') {
          iconName = focused ? 'list' : 'list-outline';
        } else if (route.name === 'SearchFilter') {
          iconName = focused ? 'search' : 'search-outline';
        } else if (route.name === 'Quote') {
          iconName = focused ? 'book' : 'book-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#009999',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
    })}>
      <Tab.Screen name='Home' component={Home}></Tab.Screen>
      <Tab.Screen name='Categories' component={Categories}></Tab.Screen>
      <Tab.Screen name='SearchFilter' component={SearchFilter}></Tab.Screen>
        <Tab.Screen name='Quote' component={Quote}></Tab.Screen>
      <Tab.Screen name='Profile' component={Profile}></Tab.Screen>
    </Tab.Navigator>
  );
}
function Login_and_Signup(){
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name='Login' component={Login}></Stack.Screen>
    <Stack.Screen name='Signup' component={Signup}></Stack.Screen>
  </Stack.Navigator>
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Welcome' component={Welcome}></Stack.Screen>
        <Stack.Screen name='PageOne' component={Login_and_Signup}></Stack.Screen>
        <Stack.Screen name='PageTwo' component={Tab_in_Stack}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



