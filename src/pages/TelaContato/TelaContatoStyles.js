import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  subtitle: {
    fontSize: width < 400 ? 13 : 14, // Ajuste baseado na largura da tela
    fontWeight: 'bold',
    color: '#FF9900',
    marginTop: 10,
    marginBottom: 4,
  },

  description: {
    fontSize: width < 400 ? 12 : 12, // Ajuste para telas menores
    color: '#555',
    marginBottom: 10,
    lineHeight: 18,
  },

  subtitleDescription: {
    paddingHorizontal: width < 400 ? 18 : 20, // Menos padding para telas menores
  },

  locationsContainer: {
    marginHorizontal: width < 400 ? 15 : 20, 
    marginBottom: -10,
    marginTop: 20,
  },

  locationItem: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },

  locationImage: {
    width: width < 400 ? 60 : 70, // Ajuste para telas menores
    height: width < 400 ? 60 : 70,
    marginRight: 10,
  },

  locationText: {
    flex: 1,
  },

  locationTitle: {
    fontSize: width < 400 ? 12 : 14,
    fontWeight: 'bold',
    color: '#333',
  },

  locationPhone: {
    fontSize: width < 400 ? 10 : 12,
    color: '#1E90FF',
    marginTop: 4,
  },

  locationAddress: {
    fontSize: width < 400 ? 10 : 12,
    color: '#1E90FF',
    marginTop: 4,
    lineHeight: 18,
  },

  icon: {
    width: 15,
    height: 15,
    marginTop: 6,
    marginRight: 4,
  },

  infor: {
    display: 'flex',
    flexDirection: 'row',
  },

  errorButton: {
    marginHorizontal: width < 400 ? 15 : 20,
    borderWidth: 1,
    borderColor: '#fff',
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: '#ffff',
  },

  bug: {
    width: 50,
    height: 50,
    marginRight: 10,
  },

  errorText: {
    fontSize: width < 400 ? 13 : 14,
    fontWeight: 'bold',
    color: '#333',
  },

  errorSubText: {
    fontSize: width < 400 ? 10 : 11,
    color: '#777',
    marginTop: 4,
    lineHeight: 18,
    flexWrap: 'wrap',
    width: '30%',
  },

  email: {
    color: '#0E41E5',
    textDecorationLine: 'underline',
  },

  faqContainer: {
    marginTop: 20,
    marginHorizontal: width < 400 ? 15 : 15,
    marginBottom: 60,
  },

  faqItem: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc', 
    paddingVertical: width < 400 ? 10 : 15, // Menos padding em telas menores
  },

  faqQuestion: {
    fontSize: width < 400 ? 14 : 16,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
  },

  faqAnswer: {
    fontSize: width < 400 ? 12 : 14,
    color: '#555',
    marginTop: 10,
    lineHeight: 20,
  },

  iconPerguntas: {
    fontSize: width < 400 ? 16 : 20,
    color: '#FF9900',
    marginLeft: 10,
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
    fontSize: width < 400 ? 18 : 20,
    fontFamily: 'Open Sans Semi Bold',
    color: '#000',
  },

  line: {
    paddingTop: 40,
    paddingBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
