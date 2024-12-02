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
    height: '70%', 
    zIndex: 1,
    marginTop: '-5%',
    marginBottom: -20,
  },


  
});