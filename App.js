import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TelaLogin, TelaTurmas, TelaComunicado, TelaContato, TelaHorarios } from './src/imports/import';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaHorarios">
      <Stack.Screen name="TelaHorarios" component={TelaHorarios} options={{ headerShown: false }} />
        <Stack.Screen name="TelaLogin" component={TelaLogin} options={{ headerShown: false }} />
        <Stack.Screen name="TelaTurmas" component={TelaTurmas} options={{ headerShown: false }} />
        <Stack.Screen name="TelaComunicado" component={TelaComunicado} options={{ headerShown: false }} />
        <Stack.Screen name="TelaContato" component={TelaContato} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
