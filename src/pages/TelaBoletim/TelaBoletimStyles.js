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
  icon: {
    width: width * 0.3,
    height: width * 0.3,
    position: 'absolute',
    top: '-350%',
    right: '0%',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.02,
  },
  titleText: {
    fontSize: width * 0.04,  
    fontWeight: 'bold',
    marginLeft: width * 0.02,
  },
  semesterTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: height * 0.02,
  },
  activeTab: {
    borderBottomColor: '#6A1B9A',
    borderBottomWidth: 2,
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
    marginTop: height * 0.02,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    marginHorizontal: width * 0.05,  // TA AQUI CARLA
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
    padding: width * 0.04,
    marginTop: height * 0.05,
  },
  downloadButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    alignSelf: 'center',
    marginVertical: 15,
  },
  downloadButtonText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
