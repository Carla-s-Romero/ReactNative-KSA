import React, { useState } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { Form } from '../../imports/import';
import { styles } from './TelaLoginStyles';

const TelaLogin = ({ navigation }) => {
  const staticContent = [
    { id: 'header', type: 'header' },
    { id: 'form', type: 'form' },
  ];

  const renderItem = ({ item }) => {
    // if (item.type === 'header') {
    //   return (
    //     <>
    //       <Image style={styles.imageLogin} source={require('../../assets/LoginDeccoracao.png')} />
         
    //     </>
    //   );
    // }

    if (item.type === 'form') {
      return <Form navigation={navigation} />;
    }

    return null;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={staticContent}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.content}
      />
    </View>
  );
};

export default TelaLogin;
