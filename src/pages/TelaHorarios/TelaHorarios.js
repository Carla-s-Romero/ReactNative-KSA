import React from 'react';
import { View, Text, Image } from 'react-native';
import { Header} from '../../imports/import'; 
import {styles} from './TelaHorariosStyles';

const TelaHorarios = () => {
  return (
    <View style={styles.container}>
      <Header title="KSA" />  
      <View style={styles.content}>
      <Image source={require('../../assets/Seta.png')} style={styles.setaTela }/>
      <Image source={require('../../assets/decorTelaComunicados.png')} style={ styles.decorTela } />
      </View>
    </View>
  );
};

export default TelaHorarios;
