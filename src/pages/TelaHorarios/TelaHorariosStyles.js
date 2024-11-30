import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 10,
  },

  content: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-start', 
    alignItems: 'flex-start', 
  },
  
  textComSetaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40, 
    paddingLeft: 6, 
  },

  textComSeta: {
    fontSize: 20,
    color: '#333',
    fontFamily: 'Open Sans Semi Bold',
    fontWeight: 'bold',
  },

  setaInline: {
    width: 10, 
    height: 16, 
    marginRight: 8, 
  },
  
  gradeHorarioImage: {
    width: width * 0.95,  
    height: height * 0.3,  
    resizeMode: 'contain',  
    marginTop: 20, 
    alignSelf: 'center', 
  },
  
  decorTela: {
    position: 'absolute',
    top: '-7%', 
    right: '-5%',
  },
  
});
