import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  scrollView: {
    paddingBottom: height * 0.2,
  },

  decor: {
    position: 'relative',  
    top: -80,  
    right: -70,
    width: 200,
    height: 160,
    resizeMode: 'contain',
  },  

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: height * 0.03,
    marginTop: -5,
  },

  titleText: {
    fontSize: width * 0.05,  
    fontWeight: 'bold',
    marginLeft: width * 0.01,
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

  semesterTab: {
    paddingVertical: 5,
    paddingHorizontal: 30,
    alignItems: 'flex-start',
    marginTop: -30,
  },

  tabsContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: -20,
    borderBottomWidth: 1,
    paddingRight: 4, 
    borderBottomColor: '#ddd',
    marginBottom: 20,
  },

  activeTab: {
    color: '#452E94',
    borderBottomWidth: 2,
    borderBottomColor: '#452E94',
    paddingHorizontal: 30,

  },

  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
    marginVertical: 5,
  },

  subText: {
    fontSize: width * 0.035, 
    color: '#000',
  },

  boldText: {
    fontWeight: 'bold',
    fontSize: width * 0.035,  
    color: '#000',
  },

  tableContainer: {
    marginTop: height * 0.01,
    borderWidth: 0.6,
    borderColor: '#000',
    marginHorizontal: width * 0.05,  // TA AQUI CARLA
  },

  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#FFA500',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    height: 40,
  },

  tableHeaderText: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFF',
    borderRightWidth: 1,
    borderRightColor: '#000',
    fontSize: width * 0.03,  
    marginTop: 10, 
  },

  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },

  tableCell: {
    flex: 1,
    paddingVertical: height * 0.015,  
    textAlign: 'center',
    fontSize: width * 0.03,  
    borderRightWidth: 1,
    borderRightColor: '#000',
  },

  legendContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: height * 0.01,
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

  infoContainer: {
     marginHorizontal: 20,
     marginVertical: 25,
  },

  legendTitleBold:{
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 2,
  },

  legendText:{
    fontSize: 12,
  },

  teste:{
    flexDirection: 'row',
  }
});
