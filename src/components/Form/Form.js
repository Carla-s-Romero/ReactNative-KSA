import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView,Image } from 'react-native';
import { styles } from './Formstyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Form = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [open, setOpen] = useState(false);
  const [selectedProfissao, setSelectedProfissao] = useState('Aluno');

  // Função para alternar visibilidade da senha
  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = async () => {
    const backendUrl = 'https://back-end-mediotec.onrender.com/api';
    try {
      const response = await fetch(`${backendUrl}/auth/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, senha: senha }),
      });

      const data = await response.json();

      if (response.ok) {
        await AsyncStorage.setItem('token', data.token); // Armazena o token
        await AsyncStorage.setItem('userId', data.userId); // Armazena o Id do Usuario
        navigation.navigate('TelaTurmas');
      } else {
        setErro(data.message || 'Erro no login. Tente novamente.');
      }
    } catch (error) {
      setErro('Erro na conexão com o servidor.');
    }
  };

  return (
    

    <View style={styles.container}>
      <Image style={styles.imageLogin} source={require('../../assets/LoginDeccoracao.png')} />
      <View style={styles.textContainer}>
      <Text style={styles.helloText}> Seja Bem-Vindo!</Text>
      <Text style={styles.subText}>Preencha os dados abaixo para realizar seu login</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.inputContainer}>
          <View>
            <Text style={styles.label}>Qual sua profissão?</Text>
            <DropDownPicker 
              open={open}
              value={selectedProfissao}
              items={[
                { label: 'Aluno', value: 'Aluno' },
                { label: 'Professor', value: 'Professor' },
                { label: 'Coordenador', value: 'Coordenador' },
              ]}
              setOpen={setOpen}
              setValue={setSelectedProfissao}
              containerStyle={styles.dropdown}
              style={styles.dropdownStyle}
              dropDownStyle={styles.dropdownList}
            />
          </View>

          <Text style={styles.label}>E-mail:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail acadêmico"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha:</Text>
          
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry={!isPasswordVisible}
            />
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={handlePasswordVisibility}
            >
              <Icon
                name={isPasswordVisible ? 'eye-off' : 'eye'}
                size={20}
                color="#666"
              />
            </TouchableOpacity>
          </View>
          </View>

        {erro ? (
          <View style={styles.errorBox}>
            <Text style={styles.errorText}>{erro}</Text>
          </View>
        ) : null}

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen')}>
          <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.enterButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Form;
