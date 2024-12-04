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

  decor: {
    position: 'absolute',
    top: -10,
    right: -40,
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },

  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalImage: {
    width: width * 0.9, 
    height: height * 0.6,
    resizeMode: 'contain',
  },

  modalContent: {
    alignItems: 'center',
  },
  zoomControls: {
    position: 'absolute',
    bottom: 90,
    left: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 120,
    padding: 10,
    borderRadius: 10,
  },
  
  zoomButton: {
    width: 40,
    height: 40,
    backgroundColor: '#FFF', 
    borderRadius: 20, 
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, 
  },
  
  zoomButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  
  
});