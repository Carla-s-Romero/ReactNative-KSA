import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const CustomDrawer = () => {
  const navigation = useNavigation();

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

      {/* Itens de navegação */}
      <ScrollView style={styles.menuContainer}>
        <TouchableOpacity 
          style={styles.menuItem} 
          onPress={() => navigation.navigate('TelaTurmas')} // Passando o nome da tela
        >
          <Text style={styles.menuItemText}>Turmas</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuItem} 
          onPress={() => navigation.navigate('TelaBoletim')} // Passando o nome da tela
        >
          <Text style={styles.menuItemText}>Boletim</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuItem} 
          onPress={() => navigation.navigate('TelaHorarios')} // Passando o nome da tela
        >
          <Text style={styles.menuItemText}>Financeiro</Text>
        </TouchableOpacity>

        {/* Sistema (sub-itens) */}
        <View style={styles.systemContainer}>
          <Text style={styles.systemHeader}>Sistema</Text>
          <TouchableOpacity 
            style={styles.menuItem} 
            onPress={() => navigation.navigate('TelaConfiguracao')} // Certifique-se de que a tela está registrada
          >
            <Text style={styles.menuItemText}>Configuração</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.menuItem} 
            onPress={() => navigation.navigate('TelaContato')} // Passando o nome da tela
          >
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
    height: 210, // Define a altura do cabeçalho
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40, // Ajuste para dar espaço ao conteúdo no cabeçalho
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
    marginTop: 20, // Espaço entre o cabeçalho e os itens do menu
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuItemText: {
    fontSize: 16,
  },
  systemContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 10,
  },
  systemHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 15,
    color: '#999',
  },
});

export default CustomDrawer;
