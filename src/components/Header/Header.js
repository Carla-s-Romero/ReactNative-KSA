import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './Headerstyles';

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#021320', '#023A60', '#022036']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="menu" size={28} color="white" />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default Header;
