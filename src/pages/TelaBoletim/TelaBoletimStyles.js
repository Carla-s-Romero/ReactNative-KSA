import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  
  scrollView: {
    paddingBottom: height * 0.2,
  },

  decor: {
    position: 'relative',  
    top: -height * 0.1,  
    right: -width * 0.2,
    width: width * 0.5,
    height: height * 0.2,
    resizeMode: 'contain',
  },  

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: width * 0.05,
    marginTop: height * 0.05,
  },

  titleText: {
    fontSize: width * 0.05,  
    fontWeight: 'bold',
    marginLeft: width * 0.01,
  },

  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: width * 0.025,
    borderRightWidth: width * 0.025,
    borderBottomWidth: height * 0.02,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#FF9900',
    transform: [{ rotate: '90deg' }],
    marginRight: width * 0.01,
    alignItems: 'center'
  },

  semesterTab: {
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.08,
    alignItems: 'flex-start',
  },

  tabsContainer: {
    flexDirection: 'row',
    marginHorizontal: width * 0.05,
    marginTop: -height * 0.02,
    borderBottomWidth: 1,
    paddingRight: width * 0.01, 
    borderBottomColor: '#ddd',
    marginBottom: height * 0.02,
  },

  activeTab: {
    color: '#452E94',
    borderBottomWidth: 2,
    borderBottomColor: '#452E94',
    paddingHorizontal: width * 0.08,
  },

  activeTabText: {
    color: '#452E94',
    fontWeight: 'bold',
  },

  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
    marginVertical: height * 0.01,
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
    marginTop: height * 0.02,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    marginHorizontal: width * 0.05,
  },

  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#FFA500',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },

  tableHeaderText: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFF',
    borderRightWidth: 1,
    borderRightColor: '#000',
    fontSize: width * 0.03,  
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
    marginHorizontal: width * 0.05,
    marginTop: height * 0.01,
  },

  buttonText: {
    color: '#FFF',
    fontSize: width * 0.05,
    fontWeight: '600',
  },

  enterButton: {
    width: width * 0.5,
    height: height * 0.07,
    backgroundColor: '#F90',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 7, 
    marginTop: height * 0.05,
    alignSelf: 'center',
    fontWeight: 'bold'
  },

  infoContainer: {
     marginHorizontal: width * 0.05,
     marginVertical: height * 0.03,
  },

  legendTitleBold:{
    marginVertical: height * 0.02,
    fontWeight: 'bold',
    fontSize: width * 0.035,
    marginBottom: height * 0.005,
  },

  legendText:{
    fontSize: width * 0.03,
  },

  teste:{
    flexDirection: 'row',
  }
});
