import React, { useState } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import {Form } from '../../imports/import'; 
import { styles } from './TelaLoginstyles';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const TelaLogin = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleLogin = () => {
    navigation.navigate('TelaTurmas');
  };

  return (
    <>
      <View style={styles.container}>
        <Image style={styles.imageLogin} source={require('../../assets/LoginDeccoracao.png')} />
        
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.textContainer}>
              <Text style={styles.helloText}> Seja Bem-Vindo!</Text>
            
            <Text style={styles.subText}>Preencha os dados abaixo para realizar seu login</Text>
          </View>

          {/* Formulário */}
          <Form navigation={navigation} /> 
        </ScrollView>
      </View>
    </>
  );
};

export default TelaLogin;