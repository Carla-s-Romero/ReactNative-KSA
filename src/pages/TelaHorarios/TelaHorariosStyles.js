import { StyleSheet, Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: height * 0.00, 
  },

  content: {
    flex: 1,
    padding: width * 0.03, 
    justifyContent: 'flex-start', 
    alignItems: 'flex-start', 
  },
  
  textComSetaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.05, 
    paddingLeft: width * 0.02, 
  },

  textComSeta: {
    fontSize: width * 0.05, 
    color: '#000000',
    fontFamily: 'Open Sans Semi Bold',
    fontWeight: 'bold',
  },

  setaInline: {
    width: width * 0.034,  
    height: height * 0.03, 
    marginRight: width * 0.03, 
  },
  
  gradeHorarioImage: {
    width: width * 0.9,  
    height: height * 0.3,  
    resizeMode: 'contain',  
    marginTop: height * 0.03, 
    alignSelf: 'center', 
  },
  
  decorTela: {
    position: 'absolute',
    top: '-10%',  
    right: '-30%', 
    width: width * 0.9,  
    height: width * 0.34,
    resizeMode: 'contain', 
  },
});
