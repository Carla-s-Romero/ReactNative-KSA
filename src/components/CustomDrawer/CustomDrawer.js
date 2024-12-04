import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'; // Adicionando useRoute
import Icon from 'react-native-vector-icons/MaterialIcons'; // Exemplo com MaterialIcons

const CustomDrawer = () => {
  const navigation = useNavigation(); // Hook de navegação
  const route = useRoute(); // Hook para pegar a rota atual
  
  // Defina as telas que devem exibir o botão de menu
  const drawerScreens = ['TelaTurmas', 'TelaContato', 'TelaBoletim', 'TelaHorarios'];
  const isDrawerScreen = drawerScreens.includes(route.name); // Verifique se a tela atual está na lista de telas do drawer

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../../assets/Fundo.png')} 
        style={styles.header}
        resizeMode="cover" 
      >
        <View style={styles.profileContainer}>
          <Image 
            source={require('../../assets/Ellipse 204.png')} 
            style={styles.logo} 
          />
          <Text style={styles.username}>Kleber Domingues</Text>
          <Text style={styles.email}>Aluno@esamac-paulista.pe.com.br</Text>
        </View>
      </ImageBackground>

      <ScrollView style={styles.menuContainer}>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('TelaHorarios')}>
         <Image source={require('../../assets/IconCalendario.png')}   style={styles.iconMenu} />
          <Text style={styles.menuItemText}>Calendário</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('TelaBoletim')}>
        <Image source={require('../../assets/IconBoletim.png')}   style={styles.iconMenu} />
          <Text style={styles.menuItemText}>Boletim</Text>
        </TouchableOpacity>

<<<<<<< HEAD
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('')}>
        <Image source={require('../../assets/IconFinanceiro.png')}   style={styles.iconMenu} />
          <Text style={styles.menuItemText}>Financeiro</Text>
=======
        <TouchableOpacity 
          style={styles.menuItem} 
          onPress={() => navigation.navigate('TelaHorarios')} // Passando o nome da tela
        >
          <Text style={styles.menuItemText}>Horários</Text>
>>>>>>> baf33c2ec32e8b93b9fdd90f9f9045007ac691a9
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('TelaTurmas')}>
        <Image source={require('../../assets/IconTurmas.png')}  style={styles.iconMenu} />
          <Text style={styles.menuItemText}>Turmas</Text>
        </TouchableOpacity>
    
        {/* Sistema (sub-itens) */}
        <View style={styles.systemContainer}>
          <View style={styles.system}>
          <View style={styles.triangle} />
          <Text style={styles.systemHeader}>Sistema</Text>
          </View>
          
          <TouchableOpacity 
            style={styles.menuItem} 
            onPress={() => navigation.navigate('TelaConfiguracao')}
          >
            <Icon name="settings" size={20} color="#FF9900" style={styles.icon} />
            <Text style={styles.menuItemText}>Configuração</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.menuItem} 
            onPress={() => navigation.navigate('TelaContato')}
          >
            <Icon name="support-agent" size={20} color="#FF9900" style={styles.icon} />
            <Text style={styles.menuItemText}>Suporte</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    height: 210,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  email: {
    fontSize: 12,
    color: '#fff',
  },
  menuContainer: {
    flex: 1,
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  iconMenu: {
    marginLeft: 10,
    marginRight: 10,
    width: 30,
    height: 30,
  },
  menuItemText: {
    fontSize: 16,
  },
  systemContainer: {
    marginTop: 20,
    paddingTop: 10,
  },
  systemHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 15,
    color: '#999',
    marginTop: -4,
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#FF9900',
    transform: [{ rotate: '90deg' }],
    marginLeft: 20,
    marginRight: 3,
    alignItems: 'center'
  },
  system: {
    flexDirection: 'row',
  }
});

export default CustomDrawer;
