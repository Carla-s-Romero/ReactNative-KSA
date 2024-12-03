import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header, Footer } from '../../imports/import';
import { styles } from './TelaBoletimStyles';
import Dec from '../../assets/dec.png';

const TelaBoletim = ({ navigation, route }) => {
  const { idusuario = '673637a57622fcccf389f6f1' } = route.params || {};
  const { width } = Dimensions.get('window');
  const [selectedSemester, setSelectedSemester] = useState(1);
  const [disciplinas, setDisciplinas] = useState([]);
  const [conceitos, setConceitos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const disciplinasResponse = await fetch('https://back-end-mediotec.onrender.com/api/disciplinas');
        const disciplinasData = await disciplinasResponse.json();
        setDisciplinas(Array.isArray(disciplinasData) ? disciplinasData : []);
      } catch (error) {
        console.error('Erro ao carregar disciplinas:', error);
      }

      try {
        const conceitosResponse = await fetch(`https://back-end-mediotec.onrender.com/api/conceitos/${idusuario}/conceitos`);
        const conceitosData = await conceitosResponse.json();
        setConceitos(Array.isArray(conceitosData) ? conceitosData : []);
      } catch (error) {
        console.error('Erro ao carregar conceitos:', error);
      }
    };

    fetchData();
  }, [idusuario]);

  const getSemesterTitle = (semester) => `${semester}° Semestre`;

  const renderConceito = (disciplinaId, semestre) => {
    const conceito = conceitos.find(
      (c) => c.disciplinaId === disciplinaId && c.semestre === semestre
    );

    const validarConceito = (valor) => {
      const validos = ['A', 'PA', 'NA', 'D', 'ND'];
      return validos.includes(valor) ? valor : '-';
    };

    return conceito ? (
      <>
        <Text style={styles.tableCell}>{validarConceito(conceito.av1)}</Text>
        <Text style={styles.tableCell}>{validarConceito(conceito.av2)}</Text>
        <Text style={styles.tableCell}>{validarConceito(conceito.noa)}</Text>
        <Text style={styles.tableCell}>{validarConceito(conceito.mencao)}</Text>
      </>
    ) : (
      <>
        <Text style={styles.tableCell}>-</Text>
        <Text style={styles.tableCell}>-</Text>
        <Text style={styles.tableCell}>-</Text>
        <Text style={styles.tableCell}>-</Text>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <Header title="KSA" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.titleContainer}>
          <Icon name="play-arrow" size={width * 0.05} color="#FFA500" />
          <Text style={styles.titleText}>Boletim</Text>
          <Image source={Dec} style={styles.icon} />
        </View>

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

        <View style={styles.infoContainer}>
          <Text style={styles.boldText}>
            Senac Mediotec Boletim {getSemesterTitle(selectedSemester)}
          </Text>
          <Text style={styles.subText}>Aluno: Anna Carolina</Text>
          <Text style={styles.subText}>Turma: 3A</Text>
        </View>

        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Disciplina</Text>
            <Text style={styles.tableHeaderText}>Av 1</Text>
            <Text style={styles.tableHeaderText}>Av 2</Text>
            <Text style={styles.tableHeaderText}>NOA</Text>
            <Text style={styles.tableHeaderText}>Menção Final</Text>
          </View>
          {disciplinas.map((disciplina, index) => (
            <View
              key={disciplina.id || index}
              style={[
                styles.tableRow,
                { backgroundColor: index % 2 === 0 ? '#E0E0E0' : '#FFFFFF' },
              ]}
            >
              <Text style={styles.tableCell}>{disciplina.nome}</Text>
              {renderConceito(disciplina.id, selectedSemester)}
            </View>
          ))}
        </View>

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
