import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CustomDrawer, TelaLogin, TelaTurmas, TelaComunicado, TelaContato, TelaHorarios, TelaBoletim } from './src/imports/import';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// DrawerNavigator configurado
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
      initialRouteName="TelaTurmas"
      drawerContent={CustomDrawer} 
      screenOptions={{
        drawerPosition: 'right', 
        headerShown: false, 
      }}
    >
      <Drawer.Screen name="TelaTurmas" component={TelaTurmas} />
      <Drawer.Screen name="TelaContato" component={TelaContato} />
      <Drawer.Screen name="TelaBoletim" component={TelaBoletim} />
      <Drawer.Screen name="TelaHorarios" component={TelaHorarios} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaLogin">
        <Stack.Screen 
          name="TelaLogin" 
          component={TelaLogin} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="TelaHorarios" 
          component={TelaHorarios} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="TelaBoletim"
          component={TelaBoletim}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="TelaComunicado" 
          component={TelaComunicado} 
          options={{ 
            headerShown: false, 
            gestureEnabled: true 
          }} 
        />
        <Stack.Screen 
          name="TelaTurmas" 
          component={DrawerNavigator} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="TelaContato"
          component={TelaContato}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
