import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity, ImageBackground, RefreshControl} from 'react-native';
import { styles } from './TelaTurmasStyles';
import { Header, Footer } from '../../imports/import';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TelaTurmas = ({ navigation }) => {
  const [turmas, setTurmas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchTurmas = async () => {
    const token = await AsyncStorage.getItem('token');
    const userId = await AsyncStorage.getItem('userId');
    try {
      const response = await fetch(`https://back-end-mediotec.onrender.com/api/turmas/user/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      const sortedData = data.sort((a, b) => a.nome.localeCompare(b.nome));
      setTurmas(sortedData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching turmas:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTurmas();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchTurmas().then(() => setRefreshing(false));
  }, []);

  const renderTurma = ({ item }) => {
    const totalPessoas = item.professores.length + item.alunos.length;
    const nomeProf = item.primeiroProfessor

    return (
      <TouchableOpacity onPress={() => navigation.navigate('TelaComunicado', { turmaid: item._id })} style={styles.turmaCard}>
        <ImageBackground source={require('../../assets/Banner.jpg')} blurRadius={5} style={styles.turmaCardHeader}>
          <View style={styles.overlay} />
          <Image source={require('../../assets/heimer.jpg')} style={styles.turmaFotoProf} />
          <View style={styles.turmaCardHeaderDesc}>
          </View>
        </ImageBackground>
        <View style={styles.turmaDesc}>
          <Text style={styles.turmaName}>{item.nome}</Text>
          <Text style={styles.turmaCardHeaderText}>Turno: {item.turno}</Text>
        </View>
        <View style={styles.turmaDetail}>
          <Image source={require('../../assets/professor.png')} style={styles.detailIcon} />
          <Text style={styles.turmaDetailText} numberOfLines={1} ellipsizeMode="tail">{nomeProf}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header title="KSA" />
      <Image source={require('../../assets/decorTelaTurmas.png')} style={styles.decor} />
      <View style={styles.line}>
        <View style={styles.triangle} />
        <Text style={styles.title}>Turmas</Text>
      </View>
      {loading ? (
        <ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} size="large" color="#FF9900" />
      ) : (
        <FlatList
          data={turmas}
          renderItem={renderTurma}
          keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}


    </View>
  );
};

export default TelaTurmas;
