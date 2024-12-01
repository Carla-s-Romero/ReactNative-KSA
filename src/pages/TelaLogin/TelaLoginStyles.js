import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  content: {
    paddingTop: height * 0.02, 
    paddingBottom: height * 0.06, 
  },
  imageLogin: {
    display: 'flex',
    position: 'relative',
    width: '100%',  
    height: '27%', 
    zIndex: 1,
  },
  helloText:{
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    marginTop: -17,
  },
  subText: {
    textAlign: 'center',
    color: '#A8A8A8',
  },

  
});