import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'; // Importando ícones
import { Header, Footer, Dec } from './src/imports/import'; // Importação de componentes

const Stack = createNativeStackNavigator();

function HomeScreen() {
  const [selectedSemester, setSelectedSemester] = useState(1);

  // Matérias fixas para todos os Unidades
  const materias = [
    'Biologia',
    'Educação Física',
    'Física',
    'Formação P.',
    'Geografia',
    'História',
    'Língua Inglesa',
    'Matemática',
    'Química',
    'Filosofia',
    'Projeto de Vida',
    'Programaê!',
    
  ];

  // Função para atualizar o título conforme o Unidade selecionado
  const getSemesterTitle = (semester) => {
    switch (semester) {
      case 1:
        return 'Senac mediotec boletim 1° Unidade';
      case 2:
        return 'Senac mediotec boletim 2° Unidade';
      case 3:
        return 'Senac mediotec boletim 3° Unidade';
      default:
        return 'Senac mediotec boletim';
    }
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <Header title="KSA" />

      {/* Ícone no canto superior direito */}
      <View style={styles.Dec}>
    
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.titleContainer}>
          <Icon name="play-arrow" size={20} color="#FFA500" /> {/* Ícone laranja */}
          <Text style={[styles.titleText, { color: '#000' }]}>Boletim</Text> {/* Texto preto */}
          <Image source={Dec} style={styles.icon} />
        </View>

        {/* Navegação entre Unidades (Abaixo de "Boletim") */}
        <View style={styles.semesterTabs}>
          {[1, 2, 3].map((semester) => (
            <TouchableOpacity
              key={semester}
              onPress={() => setSelectedSemester(semester)}
              style={[
                styles.semesterTab,
                selectedSemester === semester && styles.activeTab,
              ]}
            >
              <Text
                style={[
                  styles.semesterTabText,
                  selectedSemester === semester && styles.activeTabText,
                ]}
              >
                Unidade {semester}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Título dinâmico de acordo com o Unidade */}
        <Text style={{ fontWeight: 'bold', textAlign: 'center', marginVertical: 10 }}>
          {getSemesterTitle(selectedSemester)}
        </Text>

        <Text style={styles.subText}>Aluno: Anna Carolina</Text>
        <Text style={styles.subText}>Turma: 3A</Text>

        {/* Tabela de Boletim */}
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Disciplina</Text>
            <Text style={styles.tableHeaderText}>Av 1</Text>
            <Text style={styles.tableHeaderText}>Av 2</Text>
            <Text style={styles.tableHeaderText}>NOA</Text>
            <Text style={styles.tableHeaderText}>Menção Final</Text>
          </View>
          {materias.map((disciplina, index) => (
            <View style={styles.tableRow} key={index}>
              <Text style={styles.tableCell}>
                {disciplina.length > 12 ? disciplina.slice(0, 12) + '...' : disciplina}
              </Text>
              <Text style={styles.tableCell}>-</Text>
              <Text style={styles.tableCell}>-</Text>
              <Text style={styles.tableCell}>-</Text>
              <Text style={styles.tableCell}>-</Text>
            </View>
          ))}
        </View>

        {/* Legenda e Botão */}
        <View style={styles.legendContainer}>
          <View style={styles.legendTextContainer}>
            <Text style={styles.legendTitle}>Legendas:</Text>
            <Text style={styles.legendText}>A - Atendido</Text>
            <Text style={styles.legendText}>PA - Parcialmente Atendido</Text>
            <Text style={styles.legendText}>NA - Não Atendido</Text>
            <Text style={styles.legendText}>D - Desenvolvido</Text>
            <Text style={styles.legendText}>ND - Não Desenvolvido</Text>
            <Text style={styles.legendText}>
              NOA - Novas oportunidades de aprendizado
            </Text>
          </View>
          <TouchableOpacity style={styles.downloadButton}>
            <Text style={styles.downloadButtonText}>Baixar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Rodapé */}
      <Footer />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  iconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingLeft: 15,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6A1B9A',
    marginLeft: 5,
  },
  semesterTabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10, // Adicionando algum espaço entre o título "Boletim" e os botões de Unidade
  },
  semesterTab: {
    padding: 10,
    marginHorizontal: 5,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#6A1B9A',
  },
  semesterTabText: {
    fontSize: 14,
    color: '#666',
  },
  activeTabText: {
    color: '#6A1B9A',
    fontWeight: 'bold',
  },
  scrollView: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  tableContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    overflow: 'hidden',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#FFA500',
    padding: 10,
  },
  tableHeaderText: {
    flex: 1,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tableCell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    fontSize: 12, // Reduzido para caber na célula
  },
  legendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    marginBottom: 30, // Maior distância entre legenda e rodapé
  },
  legendTextContainer: {
    flex: 1,
  },
  legendTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  legendText: {
    fontSize: 14,
    marginBottom: 2,
  },
  downloadButton: {
    backgroundColor: '#FFA500',
    padding: 10,
    borderRadius: 5,
    elevation: 3,
  },
  downloadButtonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
