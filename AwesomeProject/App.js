import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Screen1 = () => {
  const [value, sayHello] = useState('Hello')
  const onPress = () => sayHello(value => 'Hello World')
  return(<View style={styles.container}>
  <Text style={styles.title}>Ecran1</Text>
  <TextInput>Write something</TextInput>
  <ButtonPersonalized name={'Button'} action={onPress}/>
  <Text>Text: {value}</Text></View>)}

const Screen2 = () => {
  const [value, sayHello] = useState('Hello')
  // const onPress = () => sayHello(value => 'Hello World')
  return(<View style={styles.container}>
  <Text style={styles.title}>Ecran2</Text>
  {/* <TextInput>Write something</TextInput> */}
  {/* <ButtonPersonalized name={'Button'} action={onPress}/> */}
  <Text>Text: {value}</Text></View>)
}

export default function App() {
  
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Screen1}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen name="Profile" component={Screen2} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export const ButtonPersonalized = ({ name, action }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={action}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  title: {
    borderWidth: 4,
    borderRadius: 6,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
