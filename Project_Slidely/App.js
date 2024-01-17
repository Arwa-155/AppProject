import { View, Text , StyleSheet } from 'react-native'
import React from 'react'
import Home from './src/Screens/Home'

export default function App() {
  return (
    <View style={styles.Container}>
      <Home />
    </View>
  )
}
const styles = StyleSheet.create({
  Container:{
    flex:1
  }
});