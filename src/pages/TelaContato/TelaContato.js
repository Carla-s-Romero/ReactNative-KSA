import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
} from 'react-native';
import { styles } from './TelaContatoStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Header } from '../../imports/import';

const SobreScreen = () => {
  const [faq, setFaq] = useState({ 1: false, 2: false, 3: false });

  const toggleFaq = (id) => {
    setFaq((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const faqQuestions = [
    {
      question: 'Onde vejo minhas notas?',
      answer: 'Você pode visualizar suas notas no menu principal, na aba "Notas".',
    },
    {
      question: 'O que fazemos?',
      answer: 'Nós fornecemos uma plataforma educacional integrada para estudantes e professores.',
    },
    {
      question: 'Quais nossos objetivos?',
      answer: 'Nosso objetivo é facilitar a gestão acadêmica e melhorar a comunicação.',
    },
  ];

  const locations = [
    {
      title: 'Senac Sede',
      phone: '(81) 3415-4555',
      address: 'Av. Vis. de Suassuna, 500 - Santo Amaro, Recife',
      image: require('../../assets/FaculdadeSenac.png'),
    },
    {
      title: 'MedioTec Recife',
      phone: '(81) 3415-5456',
      address: 'R. João de Barros, 327 - Soledade, Recife',
      image: require('../../assets/MediotecSenacRecife.png'),
    },
    {
      title: 'MedioTec Paulista',
      phone: '(81) 3432-7649',
      address: 'Av. Mal. Mascarenhas de Morais - Jardim Paulista',
      image: require('../../assets/MeditecSenacPaulista.png'),
    },
  ];

  const handlePhonePress = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`).catch((err) =>
      console.error('Error opening phone number', err)
    );
  };

  const LocationItem = ({ title, phone, address, image }) => (
    <View style={styles.locationItem}>
      <Image source={image} style={styles.locationImage} />
      <View style={styles.locationText}>
        <Text style={styles.locationTitle}>{title}</Text>
        <View style={styles.infor}>
          <Image
            source={require('../../assets/TelefoneIcon.png')}
            style={styles.icon}
          />
          <TouchableOpacity onPress={() => handlePhonePress(phone)}>
            <Text style={styles.locationPhone}>{phone}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infor}>
          <Image
            source={require('../../assets/LocalizaçãoIcon.png')}
            style={styles.icon}
          />
          <Text style={styles.locationAddress}>{address}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <Header />

        {/* Suporte */}
        <View style={styles.line}>
          <View style={styles.triangle} />
          <Text style={styles.title}>Suporte</Text>
        </View>

        <View style={styles.subtitleDescription}>
          <Text style={styles.subtitle}>Entre em contato</Text>
          <Text style={styles.description}>
            Se você quiser registrar sua opinião, esclarecer dúvidas, enviar sugestões ou pedir
            informações, entre em contato conosco através dos endereços abaixo:
          </Text>
        </View>

        {/* Localizações */}
        <View style={styles.locationsContainer}>
          {locations.map((loc, index) => (
            <LocationItem
              key={index}
              title={loc.title}
              phone={loc.phone}
              address={loc.address}
              image={loc.image}
            />
          ))}
        </View>

        {/* Sistema */}
        <View style={styles.line}>
          <View style={styles.triangle} />
          <Text style={styles.title}>Sistema</Text>
        </View>

        <TouchableOpacity style={styles.errorButton}>
          <Image
            source={require('../../assets/Bug.png')}
            style={styles.bug}
          />
          <View>
            <Text style={styles.errorText}>Reportar erro</Text>
            <Text style={styles.errorSubText}>
              Ocorreu um erro inesperado. Por favor, tente novamente. Caso o problema persista,
              utilize a opção "Limpar dados do aplicativo" ou entre em contato pelo e-mail{' '}
              <Text style={styles.email}>KlickSystemAcademic@gmail.com</Text> para suporte.
            </Text>
          </View>
        </TouchableOpacity>

        {/* Perguntas Frequentes */}
        <View style={styles.line}>
          <View style={styles.triangle} />
          <Text style={styles.title}>Perguntas Frequentes</Text>
        </View>

        <View style={styles.faqContainer}>
          {faqQuestions.map((item, index) => (
            <View key={index}>
              <TouchableOpacity
                onPress={() => toggleFaq(index + 1)}
                style={styles.faqItem}>
                <Text style={styles.faqQuestion}>{item.question}</Text>
                <Icon
                  name={faq[index + 1] ? 'chevron-up' : 'chevron-down'}
                  style={styles.iconPerguntas}
                />
              </TouchableOpacity>
              {faq[index + 1] && (
                <Text style={styles.faqAnswer}>{item.answer}</Text>
              )}
            </View>
          ))}
        </View>

      </ScrollView>
    </View>
  );
};

export default SobreScreen;
