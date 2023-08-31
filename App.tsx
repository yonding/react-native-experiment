import React from "react";
import { View, StyleSheet, Text } from 'react-native';
import MyButton from "./src/components/MyButton";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My First React Native</Text>
      <MyButton></MyButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  title: {
    fontSize: 30
  }
})

export default App;