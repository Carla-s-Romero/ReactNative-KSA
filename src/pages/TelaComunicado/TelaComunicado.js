import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './TelaComunicadoStyles';
import { Header, Footer, MessageCard } from '../../imports/import';

/**
 * A component that displays a list of messages from a given turma.
 * @param {string} [turmaid] the id of the turma to display messages from
 * @returns {React.ReactElement} a React component displaying a list of messages
 */
const TelaComunicado = ({turmaid = '67365397f7dd299b547cdb9d'}) => {
    const [activeTab, setActiveTab] = useState('Mural');
    const [turma, setTurma] = useState([]);

    const fetchData = async () => {
        try {
            const storedToken = await AsyncStorage.getItem('token');
            const response = await fetch(`https://back-end-mediotec.onrender.com/api/turmas/${turmaid}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${storedToken}`,
                },
            });
            const data = await response.json();
            setTurma(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <Header title="KSA" />
            <Text style={styles.title}><Image source={require('../../assets/Seta.png')} /> {turma.nome}</Text>
            <Image source={require('../../assets/decorTelaComunicados.png')} style={ styles.decorTela } />
            <View style={styles.tabsContainer}>
                <TouchableOpacity onPress={() => setActiveTab('Mural')}>
                    <Text style={[styles.tab, activeTab === 'Mural' && styles.activeTab]}>Mural</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveTab('Pessoas')}>
                    <Text style={[styles.tab, activeTab === 'Pessoas' && styles.activeTab]}>Pessoas</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.comunicadoContainer}>
                <Text style={styles.comunicadoTitulo}>Comunicados</Text>
            </View>
            <MessageCard turmaid={turmaid} />
            <Footer />
        </View>
    );

};

export default TelaComunicado;