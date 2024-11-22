import React, { useState } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { Header, Footer, Form } from '../../imports/import'; 
import { styles } from './TelaLoginstyles';

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
        <Header title="KSA" />
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.triangleContainer}>
            <Image
              source={require('../../assets/triangulo.png')}
              style={styles.triangle}
              resizeMode="contain"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.helloText}>
              Olá, <Text style={styles.welcomeText}>Seja bem-vindo!!</Text>
            </Text>
            <Text style={styles.subText}>
              Preencha os dados abaixo para realizar seu login
            </Text>
          </View>

          <Text style={styles.questionText}>
            Quem é você?<Text style={styles.asterisk}> *</Text>
          </Text>

          <View style={styles.imagesContainer}>
            {/* Professor */}
            <View style={styles.circleWithText}>
              <TouchableOpacity
                style={[
                  styles.circleWrapper,
                  { backgroundColor: '#011022' },
                  selectedOption === 'professor' && styles.selectedOption,
                ]}
                onPress={() => handleSelect('professor')}
              >
                <Image
                  source={require('../../assets/imagem1.png')}
                  style={styles.circleImage}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.optionTextWrapper,
                  selectedOption === 'professor' && styles.selectedTextOption,
                ]}
                onPress={() => handleSelect('professor')}
              >
                <Text style={styles.optionText}>Professor</Text>
              </TouchableOpacity>
            </View>

            {/* Aluno */}
            <View style={styles.circleWithText}>
              <TouchableOpacity
                style={[
                  styles.circleWrapper,
                  { backgroundColor: '#704908' },
                  selectedOption === 'aluno' && styles.selectedOption,
                ]}
                onPress={() => handleSelect('aluno')}
              >
                <Image
                  source={require('../../assets/imagem2.png')}
                  style={styles.circleImage}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.optionTextWrapper,
                  selectedOption === 'aluno' && styles.selectedTextOption,
                ]}
                onPress={() => handleSelect('aluno')}
              >
                <Text style={styles.optionText}>Aluno</Text>
              </TouchableOpacity>
            </View>

            {/* Coordenador */}
            <View style={styles.circleWithText}>
              <TouchableOpacity
                style={[
                  styles.circleWrapper,
                  { backgroundColor: '#036B3A' },
                  selectedOption === 'coordenador' && styles.selectedOption,
                ]}
                onPress={() => handleSelect('coordenador')}
              >
                <Image
                  source={require('../../assets/imagem3.png')}
                  style={styles.circleImage}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.optionTextWrapper,
                  selectedOption === 'coordenador' && styles.selectedTextOption,
                ]}
                onPress={() => handleSelect('coordenador')}
              >
                <Text style={styles.optionText}>Coordenador</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Formulário */}
          <Form navigation={navigation} /> 

          {/* DecoracaoInfer */}
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/DecoracaoInfer.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <Footer />
        </ScrollView>
      </View>
    </>
  );
};

export default TelaLogin;