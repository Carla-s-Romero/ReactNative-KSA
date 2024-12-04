import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF9900',
    marginTop: 10,
    marginBottom: 4,
  },

  
  description: {
    fontSize: 12,
    color: '#555',
    marginBottom: 10,
    lineHeight: 20,
  },

  subtitleDescription:{
    paddingHorizontal: 20,
  },

  locationsContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 20,
  },

  locationItem: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },

  locationImage: {
    width: 70,
    height: 70,
    marginRight: 10,
  },

  locationText: {
    flex: 1,
  },

  locationTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },

  locationPhone: {
    fontSize: 12,
    color: '#1E90FF',
    marginTop: 4,
  },
  
  locationAddress: {
    fontSize: 12,
    color: '#1E90FF',
    marginTop: 4,
    lineHeight: 18,
  },

  icon:{
    width: 15,
    height: 15,
    marginTop: 6,
    marginRight: 4,
  },

  infor:{
    display: 'flex',
    flexDirection: 'row',
  },

  errorButton: {
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#fff',
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: '#ffff',
  },

  bug:{
    width: 50,
    height: 50,
    marginRight: 10,
  },

  errorText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  errorSubText: {
    fontSize: 11,
    color: '#777',
    marginTop: 4,
    lineHeight: 18,
    flexWrap: 'wrap',
    width: '30%'
  },
  email:{
    color: '#0E41E5',
    textDecorationLine: 'underline',
  },

  faqContainer: {
    marginTop: 20,
    paddingHorizontal: 15,
  },

  faqContainer: {
    marginTop: 20,
    paddingHorizontal: 15,
    marginBottom: 60,
  },
  
  faqItem: {
    flexDirection: 'row', // Ícones e texto lado a lado
    justifyContent: 'space-between', // Espaço entre o texto e o ícone
    alignItems: 'center', // Alinhamento vertical
    borderBottomWidth: 1, // Linha inferior para separar itens
    borderBottomColor: '#ccc', 
    paddingVertical: 15, // Espaçamento interno vertical
  },
  
  faqQuestion: {
    fontSize: 16, // Tamanho do texto da pergunta
    fontWeight: 'bold', // Texto em negrito para destaque
    color: '#000',
    flex: 1, // Ocupa o espaço restante
  },
  
  faqAnswer: {
    fontSize: 14,
    color: '#555', // Cor mais discreta para respostas
    marginTop: 10, // Espaço superior para separar da pergunta
    lineHeight: 20, // Melhor leitura
  },
  
  iconPerguntas: {
    fontSize: 20, // Tamanho do ícone
    color: '#FF9900', // Cor do ícone combinando com o tema
    marginLeft: 10, // Espaçamento entre o texto e o ícone
  },

  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#FF9900',
    transform: [{ rotate: '90deg' }],
    marginRight: 5,
    alignItems: 'center'
  },

  title: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Open Sans Semi Bold',
    color: '#000',
  },

  line: {
    paddingTop: 40, 
    paddingBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
});
