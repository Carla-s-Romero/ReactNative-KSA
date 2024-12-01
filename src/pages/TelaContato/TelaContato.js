import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Header, Footer } from '../../imports/import';
import { styles } from './TelaContatoStyles';

const TelaContato = ({ navigation }) => {
  const handlePhonePress = () => {
    Linking.openURL('tel: +55813413-6666');
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:senac@pe.senac.br');
  };

  const handleAddressPress = () => {
    Linking.openURL('https://maps.app.goo.gl/6b1gHHPrWgasmHNN9');
  };

  const handleWebSite = () => {
    Linking.openURL('https://www.pe.senac.br/mediotec/');
  };

  const handleFalePress = () => {
    Linking.openURL('https://www.pe.senac.br/contato/');
  };

  return (
    <View style={styles.container}>
      <Header title="Contato" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.contactContainer}>
          <Text style={styles.title}>Entre em Contato</Text>
          <Text style={styles.description}>
            Se você quiser registrar sua opinião, esclarecer dúvidas, enviar sugestões ou pedir informações, entre em contato conosco através dos meios abaixo:
          </Text>
          
          <TouchableOpacity style={styles.contactItem} onPress={handleFalePress}>
            <Text style={styles.contactText}>Fale Conosco</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactItem} onPress={handleWebSite}>
            <Text style={styles.contactText}>Website: pe.senac.br</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactItem} onPress={handlePhonePress}>
            <Text style={styles.contactText}>Telefone: (81) 3413-6666</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactItem} onPress={handleEmailPress}>
            <Text style={styles.contactText}>E-mail: senac@pe.senac.br</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactItem} onPress={handleAddressPress}>
            <Text style={styles.contactText}>Endereço: Av. João de Barros, 523 - Soledade, Recife</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

export default TelaContato;