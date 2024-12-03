import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import { Header } from '../../imports/import';
import { styles } from './TelaBoletimStyles';
import Dec from '../../assets/dec.png';

const TelaBoletim = ({ navigation, route }) => {
  const { idusuario = '673637a57622fcccf389f6f1' } = route.params || {};
  const { width } = Dimensions.get('window');

  const [selectedSemester, setSelectedSemester] = useState(1);
  const [disciplinas, setDisciplinas] = useState([]);
  const [conceitos, setConceitos] = useState([]);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [disciplinasResponse, conceitosResponse] = await Promise.all([
          fetch('https://back-end-mediotec.onrender.com/api/disciplinas'),
          fetch(
            `https://back-end-mediotec.onrender.com/api/conceitos/${idusuario}/conceitos`
          ),
        ]);

        const disciplinasData = await disciplinasResponse.json();
        const conceitosData = await conceitosResponse.json();

        setDisciplinas(Array.isArray(disciplinasData) ? disciplinasData : []);
        setConceitos(Array.isArray(conceitosData) ? conceitosData : []);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };

    fetchData();
  }, [idusuario]);

  const getSemesterTitle = (semester) => `${semester}° Semestre`;

  const validarConceito = (valor) => {
    const validos = ['A', 'PA', 'NA', 'D', 'ND'];
    return validos.includes(valor) ? valor : '-';
  };

  const renderConceito = (disciplinaId, semestre) => {
    const conceito = conceitos.find(
      (c) => c.disciplinaId === disciplinaId && c.semestre === semestre
    );

    return (
      <>
        <Text style={styles.tableCell}>
          {validarConceito(conceito?.av1 || '-')}
        </Text>
        <Text style={styles.tableCell}>
          {validarConceito(conceito?.av2 || '-')}
        </Text>
        <Text style={styles.tableCell}>
          {validarConceito(conceito?.noa || '-')}
        </Text>
        <Text style={styles.tableCell}>
          {validarConceito(conceito?.mencao || '-')}
        </Text>
      </>
    );
  };

  return (
    
    <View style={styles.container}>
        
      <Header />
      <View style={styles.teste}> 
          <View style={styles.titleContainer}>
              <View style={styles.triangle} />
              <Text style={styles.titleText}>Boletim</Text>
          </View>

          <Image source={Dec} style={styles.decor} />
      </View>
     
      {/* Tabs Section */}
      <View style={styles.tabsContainer}>
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


      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Title Section */}
   

       
        {/* Info Section */}
        <View style={styles.infoContainer}>
          <Text style={styles.boldText}>
            Senac Mediotec Boletim {getSemesterTitle(selectedSemester)}
          </Text>
          <Text style={styles.subText}>Aluno: Anna Carolina</Text>
          <Text style={styles.subText}>Turma: 3A</Text>
        </View>

        {/* Table Section */}
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

        {/* Legend Section */}
        <View style={styles.legendContainer}>
          <View style={styles.legendTextContainer}>
            <Text style={styles.legendTitleBold}>Legendas:</Text>
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

        {/* Download Button */}
        <TouchableOpacity style={styles.enterButton} >
          <Text style={styles.buttonText}>Baixar</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

export default TelaBoletim;
