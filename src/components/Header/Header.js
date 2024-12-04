import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, DrawerActions } from '@react-navigation/native'; // Importando DrawerActions
import { styles } from './Headerstyles';

const Header = () => {
  const navigation = useNavigation(); // Hook de navegação

  const drawerScreens = ['TelaTurmas', 'TelaContato', 'TelaBoletim', 'TelaHorarios'];
  const isDrawerScreen = drawerScreens.includes(navigation.getState().routeNames[navigation.getState().index]);
  
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#021320', '#023A60', '#023A60', '#022036']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
      
        {isDrawerScreen && (
          <TouchableOpacity
            style={styles.icon}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())} // Usando DrawerActions
          >
            <Ionicons name="menu" size={28} color="white" />
          </TouchableOpacity>
        )}
      </LinearGradient>
    </View>
  );
};

export default Header;
