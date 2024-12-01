import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity, ImageBackground, RefreshControl} from 'react-native';
import { styles } from './TelaTurmasstyles';
import { Header, Footer } from '../../imports/import';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TelaTurmas = ({ navigation }) => {
  const [turmas, setTurmas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const fetchTurmas = async () => {
      const token = await AsyncStorage.getItem('token');
      try {
        const response = await fetch('https://back-end-mediotec.onrender.com/api/turmas', {
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

    fetchTurmas();
  }, []);

  const renderTurma = ({ item }) => {
    const totalPessoas = item.professores.length + item.alunos.length;

    return (
      <TouchableOpacity onPress={() => navigation.navigate('TelaComunicado', { turmaid: item._id })} style={styles.turmaCard}>
        <ImageBackground source={require('../../assets/Banner.jpg')} blurRadius={5} style={styles.turmaCardHeader}>
          <View style={styles.overlay} />
          <Image source={require('../../assets/heimer.jpg')} style={styles.turmaFotoProf} />
          <View style={styles.turmaCardHeaderDesc}>
            <Text style={styles.turmaCardHeaderText}>Turno: {item.turno}</Text>
            <Text style={styles.turmaCardHeaderText}>Série: {item.serie}</Text>
          </View>
        </ImageBackground>
        <View style={styles.turmaLine}>
          <Text style={styles.turmaName}>{item.nome}</Text>
        </View>
        <View style={styles.turmaDetail}>
          <Image source={require('../../assets/professor.png')} style={styles.detailIcon} />
          <Text style={styles.turmaDetailText} numberOfLines={1} ellipsizeMode="tail">{item.professores.join(', ')}</Text>
        </View>
        <View style={styles.turmaDetail}>
          <Image source={require('../../assets/people.png')} style={styles.detailIcon} />
          <Text style={styles.turmaDetailText} numberOfLines={1} ellipsizeMode="tail">{totalPessoas} Pessoas</Text>
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
      <Footer />
    </View>
  );
};

export default TelaTurmas;
