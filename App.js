import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from './src/components/LoginForm';
import RegistroForm from './src/components/RegistroForm';
import BilleteraCuadro from './src/components/dashboardCompon/Billetera';

const Stack = createStackNavigator(); // Define el objeto Stack

export default function App() {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <Image
        source={require('./assets/imaapp.png')} // Cambia esta ruta por la ubicación de tu imagen
        style={{ width: 40, height: 40 }} // Establece el tamaño de la imagen como desees
      />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="RegistroForm">
          <Stack.Screen name="RegistroForm" component={RegistroForm} />
          <Stack.Screen name="LoginForm" component={LoginForm} />
        </Stack.Navigator>
      </NavigationContainer>
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
});
