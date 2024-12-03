import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    RefreshControl,
    ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './TelaComunicadoStyles';
import { Header, MessageCard } from '../../imports/import';

/**
 * Tela de Comunicados
 * 
 * Exibe comunicados enviados pela turma e informações de professores e alunos.
 * @param {Object} route Parâmetros da rota, contendo o id da turma.
 */
const TelaComunicado = ({ route }) => {
    const { turmaid } = route.params; // Obtém o id da turma
    const [activeTab, setActiveTab] = useState('Mural');
    const [turma, setTurma] = useState({});
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [error, setError] = useState('');

    const fetchData = async () => {
        setLoading(true);
        setError('');
        try {
            const storedToken = await AsyncStorage.getItem('token');
            const response = await fetch(`https://back-end-mediotec.onrender.com/api/turmas/${turmaid}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${storedToken}`,
                },
            });
            if (!response.ok) {
                throw new Error('Erro ao buscar dados da turma.');
            }
            const data = await response.json();
            setTurma(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [turmaid]);

    const onRefresh = async () => {
        setRefreshing(true);
        await fetchData();
        setRefreshing(false);
    };

    const MuralTab = () => (
        <View>
            <View style={styles.comunicadoContainer}>
                <Text style={styles.comunicadoTitulo}>Comunicados</Text>
            </View>
            <MessageCard turmaid={turmaid} />
        </View>
    );

    const PessoasTab = () => {
        const professores = turma?.professores || [];
        const alunos = turma?.alunos || [];

        const renderPerson = ({ item }) => (
            <View style={styles.pessoaCard}>
                <Image style={styles.usericon} source={{ uri: item.foto }} />
                <Text style={styles.messageText}>{item.nome}</Text>
            </View>
        );

        return (
            <View>
                <View style={styles.pessoasContainer}>
                    <Text style={styles.pessoasTitulo}>Professores</Text>
                </View>
                <FlatList
                    style={styles.FlatList}
                    data={professores}
                    keyExtractor={(item) => item._id}
                    renderItem={renderPerson}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                    ListEmptyComponent={
                        <Text style={styles.messageContainer}>Nenhum professor na turma.</Text>
                    }
                />
                <View style={styles.pessoasContainer}>
                    <Text style={styles.pessoasTitulo}>Alunos</Text>
                </View>
                <FlatList
                    data={alunos}
                    keyExtractor={(item) => item._id}
                    renderItem={renderPerson}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                    ListEmptyComponent={
                        <Text style={styles.messageContainer}>Nenhum aluno na turma.</Text>
                    }
                />
            </View>
        );
    };

    if (loading) {
        return (
            <View style={[styles.container, styles.centered]}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={[styles.container, styles.centered]}>
                <Text style={styles.errorText}>{error}</Text>
                <TouchableOpacity onPress={fetchData}>
                    <Text style={styles.retryText}>Tentar novamente</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Header title="KSA" />
            <View style={styles.line}>
                <View style={styles.triangle} />
                <Text style={styles.title}>{turma?.nome || 'Turma'}</Text>
            </View>
            <Image source={require('../../assets/decorTelaTurmas.png')} style={styles.decor}/>
            <View style={styles.tabsContainer}>
                <TouchableOpacity onPress={() => setActiveTab('Mural')}>
                    <Text style={[styles.tab, activeTab === 'Mural' && styles.activeTab]}>Mural</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveTab('Pessoas')}>
                    <Text style={[styles.tab, activeTab === 'Pessoas' && styles.activeTab]}>Pessoas</Text>
                </TouchableOpacity>
            </View>
            {activeTab === 'Mural' ? <MuralTab /> : <PessoasTab />}
            {activeTab === 'Mural' && (
                <View style={styles.AvisoContainer}>
                    <Text style={styles.AvisoText}>
                        <Ionicons name="lock-closed" size={9} color="#939393" />{' '}
                        Apenas o professor pode enviar mensagens neste canal. Fique atento às notificações para não perder nenhuma informação importante.
                    </Text>
                </View>
            )}
        </View>
    );
};

export default TelaComunicado;
