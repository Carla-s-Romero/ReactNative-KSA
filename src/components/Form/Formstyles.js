import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  content: {
    paddingBottom: 50,
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontFamily: 'Open Sans Semi Bold',
    fontWeight: '600',
    color: '#000',
    marginBottom: 7,
  },
  input: {
    height: 50,
    borderColor: '#000',
    borderWidth: 0.7,
    paddingHorizontal: 10,
    fontSize: 14,
    fontFamily: 'Open Sans',
    backgroundColor: '#FFF',
  },
  errorBox: {
    backgroundColor: '#FFCDD2', // Fundo vermelho claro
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#F44336', // Borda vermelha
    marginVertical: 10,
    alignSelf: 'stretch', // Para preencher horizontalmente
    alignItems: 'center', // Centraliza o texto horizontalmente
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, // Sombra para Android
  },
  errorText: {
    color: '#B71C1C', // Texto vermelho escuro
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '600',
  },
  enterButton: {
    width: 160,
    height: 50,
    backgroundColor: '#F90',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginTop: 40,
    alignSelf: 'center',
  },
  forgotPasswordText: {
    color: '#007BFF',
    fontSize: 14,
    textAlign: 'left',
    textDecorationLine: 'underline',
    marginTop: -10,
  },
});
