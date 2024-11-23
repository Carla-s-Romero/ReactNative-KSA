import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, RefreshControl } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './MessageCardStyles';

/**
 * A component that displays a list of messages from a given turma.
 * @param {string} turmaid the id of the turma to display messages from
 * @returns {React.ReactElement} a FlatList component displaying the messages
 */
const MessageCard = ({ turmaid }) => {
    const [comunicados, setComunicados] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        fetchData();
    };

    const fetchData = async () => {
        try {
            const storedToken = await AsyncStorage.getItem('token');
            const response = await fetch(`https://back-end-mediotec.onrender.com/api/comunicados/turma/${turmaid}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${storedToken}`,
                },
            });
            const data = await response.json();
            setComunicados(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setRefreshing(false);
        }
    };
    useEffect(() => {
        fetchData();
    }, [turmaid]);

    return (
        <View>
            <FlatList
                data={comunicados}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <View style={styles.messageContainer}>
                        <Image style={styles.usericon} source={{ uri: item.autor.foto }} />
                        <Text style={styles.messageText}>{item.mensagem}</Text>
                    </View>
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                ListEmptyComponent={
                    <Text style={styles.messageContainer}>Nenhum comunicado disponível.</Text>
                }
            />
        </View>
    );
};

export default MessageCard;
