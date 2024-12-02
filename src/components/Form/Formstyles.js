import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  content:{
    paddingHorizontal: 23,
    paddingBottom: 40,
    height: '100%'
  },

  inputContainer: {
    marginBottom: 10,
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
    backgroundColor: '#FFCDD2', 
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#F44336',
    marginVertical: 10,
    alignSelf: 'stretch', 
    alignItems: 'center', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, 
  },

  errorText: {
    color: '#B71C1C', 
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
    width: 190,
    height: 50,
    backgroundColor: '#F90',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 7, 
    marginTop: 40,
    alignSelf: 'center',
    fontWeight: 'bold'
  },

  dropdownStyle:  {
    borderRadius: 0,
    border: 'o,5 solid #000',
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingLeft: 10,
    paddingRight: 40, 
  },
  
  iconContainer: {
    position: 'absolute',
    right: 10,
    top: 12, 
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },

  forgotPasswordText:  {
    color: '#1861F0',
    textDecorationLine: 'underline',
  },

  helloText:{
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },

  subText: {
    textAlign: 'center',
    color: '#A8A8A8',
    marginBottom: 40,
  },

  imageLogin: {
    display: 'flex',
    position: 'relative',
    width: '100%',  
    height: '30%',
    objectFit: 'cover', 
    zIndex: 1,
    marginTop: '-5%'
  },
});
