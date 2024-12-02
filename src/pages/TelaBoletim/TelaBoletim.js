import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header, Footer } from '../../imports/import'; // Mantendo a estrutura de importação
import { styles } from './TelaBoletimStyles';
import Dec from '../../assets/dec.png'; // Importação correta da imagem

const TelaBoletim = ({ navigation }) => {
  const { width } = Dimensions.get('window');
  const [selectedSemester, setSelectedSemester] = useState(1); // Estado para selecionar o semestre
  
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


  const getSemesterTitle = (semester) => `Semestre ${semester}`;

  return (
    <View style={styles.container}>
      <Header title="KSA" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.titleContainer}>
          <Icon name="play-arrow" size={width * 0.05} color="#FFA500" />
          <Text style={styles.titleText}>Boletim</Text>
          <Image source={Dec} style={styles.icon} /> {/* Exibindo a imagem Dec */}
        </View>

        {/* Aba de seleção de semestres */}
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

        <Text style={styles.semesterTitle}>{getSemesterTitle(selectedSemester)}</Text>

        <Text style={styles.subText}>Aluno: Anna Carolina</Text>
        <Text style={styles.subText}>Turma: 3A</Text>

        {/* Tabela de disciplinas */}
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Disciplina</Text>
            <Text style={styles.tableHeaderText}>Av 1</Text>
            <Text style={styles.tableHeaderText}>Av 2</Text>
            <Text style={styles.tableHeaderText}>NOA</Text>
            <Text style={styles.tableHeaderText}>Menção Final</Text>
          </View>
          {materias.map((disciplina, index) => (
            <View
              style={[
                styles.tableRow,
                { backgroundColor: index % 2 === 0 ? '#E0E0E0' : '#FFFFFF' },
              ]}
              key={index}
            >
              <Text style={styles.tableCell}>{disciplina}</Text>
              <Text style={styles.tableCell}>-</Text>
              <Text style={styles.tableCell}>-</Text>
              <Text style={styles.tableCell}>-</Text>
              <Text style={styles.tableCell}>-</Text>
            </View>
          ))}
        </View>

        {/* Legenda */}
        <View style={styles.legendContainer}>
          <View style={styles.legendTextContainer}>
            <Text style={styles.legendTitle}>Legendas:</Text>
            <Text style={styles.legendText}>A - Atendido</Text>
            <Text style={styles.legendText}>PA - Parcialmente Atendido</Text>
            <Text style={styles.legendText}>NA - Não Atendido</Text>
            <Text style={styles.legendText}>D - Desenvolvido</Text>
            <Text style={styles.legendText}>ND - Não Desenvolvido</Text>
            <Text style={styles.legendText}>NOA - Novas oportunidades de aprendizado</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadButtonText}>Baixar</Text>
        </TouchableOpacity>
      </ScrollView>
      <Footer />
    </View>
  );
};

export default TelaBoletim;
