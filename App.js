import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CustomDrawer, TelaLogin, TelaTurmas, TelaComunicado, TelaContato, TelaHorarios, TelaBoletim } from './src/imports/import';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Definição do DrawerNavigator
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
      initialRouteName="TelaTurmas"
      drawerContent={CustomDrawer} 
      screenOptions={{
        drawerPosition: 'right', 
        headerShown: false, // Esconde o cabeçalho do Drawer
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
        {/* Tela de login (não tem header) */}
        <Stack.Screen 
          name="TelaLogin" 
          component={TelaLogin} 
          options={{ headerShown: false }} 
        />
        
        {/* Outras telas de navegação dentro do Stack */}
        <Stack.Screen 
          name="TelaHorarios" 
          component={TelaHorarios} 
          options={{ headerShown: false }} 
        />
<<<<<<< HEAD

        <Stack.Screen 
          name="TelaContato" 
          component={TelaContato} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="TelaBoletim" 
          component={TelaBoletim} 
          options={{ headerShown: false }} 
        />
      
=======
        <Stack.Screen
          name="TelaBoletim"
          component={TelaBoletim}
          options={{ headerShown: false }}
        />
>>>>>>> baf33c2ec32e8b93b9fdd90f9f9045007ac691a9
        <Stack.Screen 
          name="TelaComunicado" 
          component={TelaComunicado} 
          options={{ headerShown: false, gestureEnabled: true }} 
        />
<<<<<<< HEAD

        {/* Tela de Turmas com DrawerNavigator */}
=======
>>>>>>> baf33c2ec32e8b93b9fdd90f9f9045007ac691a9
        <Stack.Screen 
          name="TelaTurmas" 
          component={DrawerNavigator} 
          options={{ headerShown: false }} 
        />
<<<<<<< HEAD

=======
        <Stack.Screen
          name="TelaContato"
          component={TelaContato}
          options={{ headerShown: false }}
        />
>>>>>>> baf33c2ec32e8b93b9fdd90f9f9045007ac691a9
      </Stack.Navigator>
    </NavigationContainer>
  );
}
