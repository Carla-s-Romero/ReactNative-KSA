import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native'; // Importando hook de navegação e rota
import { styles } from './Headerstyles';

const Header = () => {
  const navigation = useNavigation();
  const route = useRoute(); // Obter a rota atual

  // Verifique se a tela atual é uma das telas do Drawer (por exemplo, TelaTurmas)
  const isDrawerScreen = [,'TelaTurmas', 'TelaContato', 'TelaBoletim', 'TelaHorarios'].includes(route.name);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#021320', '#023A60', '#023A60', '#022036']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
      
        {/* Só mostrar o botão do menu se a tela atual estiver dentro do Drawer */}
        {isDrawerScreen && (
          <TouchableOpacity
            style={styles.icon}
            onPress={() => navigation.openDrawer()} // Abre o menu lateral
          >
            <Ionicons name="menu" size={28} color="white" />
          </TouchableOpacity>
        )}
      </LinearGradient>
    </View>
  );
};

export default Header;
