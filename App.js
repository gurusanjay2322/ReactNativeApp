import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput } from 'react-native';


export default function App() {
  // create a state variable called name and a function to update it
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  // create a function for onPress event to update the name
   return (
    <View style={styles.container}>
      <Text>Enter your name : </Text>
      <TextInput
      multiline  
      style={styles.  input}
      placeholder='Your Name Here'
      onChangeText={(val) => setName(val)}
      /><Text>Enter your Age : </Text>
      <TextInput 
      keyboardType='numeric'
      style={styles.input}
      placeholder='Your Age Here'
      onChangeText={(val) => setAge(val)}
      />
      <Text>Name is {name}, age: {age}</Text>
      
      <View style={styles.buttonContainer}>
        
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',   
  },
  // add 20 pixels for top margin for the button
  buttonContainer: {
    marginTop: 20,    

  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});
