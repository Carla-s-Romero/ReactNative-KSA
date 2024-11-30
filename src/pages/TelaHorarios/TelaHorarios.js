import React from 'react';
import { View, Text, Image } from 'react-native';
import { Header } from '../../imports/import'; 
import { styles } from './TelaHorariosStyles';

const TelaHorarios = () => {
  return (
    <View style={styles.container}>
      <Header title="KSA" />
      <View style={styles.content}>
        <View style={styles.textComSetaContainer}>
          <Image source={require('../../assets/Seta.png')} style={styles.setaInline} />
          <Text style={styles.textComSeta}>Horários</Text>
        </View>
       
        <Image 
          source={require('../../assets/Gradehorario.png')} 
          style={styles.gradeHorarioImage} />
        <Image source={require('../../assets/circulo_laranja.png')} style={styles.decorTela} />
      </View>
    </View>
  );
};

export default TelaHorarios;
