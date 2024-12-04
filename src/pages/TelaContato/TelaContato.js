import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Linking } from 'react-native';
import { styles } from './TelaContatoStyles';
import { Header } from '../../imports/import';
const SobreScreen = () => {
  const [faq, setFaq] = useState({ 1: false, 2: false, 3: false });

  const toggleFaq = (id) => {
    setFaq((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <View style={styles.container}>
    
    <ScrollView >
    <Header/>

    <View style={styles.line}>
        <View style={styles.triangle} />
        <Text style={styles.title}>Suporte</Text>
      </View>

    <View  style={styles.subtitleDescription}>
    <Text style={styles.subtitle}>Entre em contato</Text>
      <Text style={styles.description}>
        Se você quiser registrar sua opinião, esclarecer dúvidas, enviar sugestões ou pedir informações, entre em
        contato conosco através dos endereços abaixo:
      </Text>
    </View>
     

      {/* Lista de locais */}
      <View style={styles.locationsContainer}>
        {/* Item 1 */}
        <View style={styles.locationItem}>
          <Image source={require('../../assets/FaculdadeSenac.png')} style={styles.locationImage} />
          <View style={styles.locationText}>
            <Text style={styles.locationTitle}>Senac Sede</Text>
            <TouchableOpacity onPress={() => Linking.openURL('tel:8113415455')}>
              <Text style={styles.locationPhone}>📞 (81) 3415-4555</Text>
            </TouchableOpacity>
            <Text style={styles.locationAddress}>
              📍 Av. Vis. de Suassuna, 500 - Santo Amaro, Recife - PE, 50050-540
            </Text>
          </View>
        </View>

        {/* Item 2 */}
        <View style={styles.locationItem}>
          <Image source={require('../../assets/FaculdadeSenac.png')} style={styles.locationImage} />
          <View style={styles.locationText}>
            <Text style={styles.locationTitle}>MedioTec Recife</Text>
            <TouchableOpacity onPress={() => Linking.openURL('tel:8113415455')}>
              <Text style={styles.locationPhone}>📞 (81) 3415-5456</Text>
            </TouchableOpacity>
            <Text style={styles.locationAddress}>
              📍 R. João de Barros, 327 - Soledade, Recife - PE, 50070-100
            </Text>
          </View>
        </View>

        {/* Item 3 */}
        <View style={styles.locationItem}>
          <Image source={require('../../assets/FaculdadeSenac.png')} style={styles.locationImage} />
          <View style={styles.locationText}>
            <Text style={styles.locationTitle}>MedioTec Paulista</Text>
            <TouchableOpacity onPress={() => Linking.openURL('tel:8113427649')}>
              <Text style={styles.locationPhone}>📞 (81) 3432-7649</Text>
            </TouchableOpacity>
            <Text style={styles.locationAddress}>
              📍 Av. Mal. Mascarenhas de Morais - Jardim Paulista
            </Text>
          </View>
        </View>
      </View>

      {/* Sistema */}
      <Text style={styles.sectionTitle}>Sistema</Text>
      <TouchableOpacity style={styles.errorButton}>
        <Text style={styles.errorText}>📢 Reportar erro</Text>
        <Text style={styles.errorSubText}>
          Envie sua mensagem para nossa equipe. Copie o problema que deseja reportar e detalhe as informações.
        </Text>
      </TouchableOpacity>

      {/* Perguntas Frequentes */}
      <Text style={styles.sectionTitle}>Perguntas Frequentes</Text>
      <View style={styles.faqContainer}>
        {['Que somos nós?', 'O que fazemos?', 'Quais nossos objetivos?'].map((question, index) => (
          <TouchableOpacity key={index} onPress={() => toggleFaq(index + 1)} style={styles.faqItem}>
            <Text style={styles.faqQuestion}>{question}</Text>
            <Text style={styles.faqAnswer}>{faq[index + 1] ? 'Resposta aqui!' : ''}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Equipe KSA */}
      <Text style={styles.sectionTitle}>Equipe KSA</Text>
      <View style={styles.teamContainer}>
        {['Carla', 'Gaby', 'Lucas', 'Vitor', 'Vinícius'].map((name, index) => (
          <View key={index} style={styles.teamMember}>
            {/* <Image source={require('./assets/avatar.png')} style={styles.teamImage} /> */}
            <Text style={styles.teamName}>{name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
    </View>
  );
};



export default SobreScreen;
