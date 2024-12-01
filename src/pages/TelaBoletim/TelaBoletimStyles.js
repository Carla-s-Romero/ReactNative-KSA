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
    width: width * 0.2,
    height: width * 0.2,
    position: 'absolute',
    top: '-200%',
    right: '0%',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.02,
  },
  titleText: {
    fontSize: width * 0.045,
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
  tableContainer: {
    marginTop: height * 0.02,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
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
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  tableCell: {
    flex: 1,
    paddingVertical: height * 0.02,
    textAlign: 'center',
    fontSize: width * 0.035,
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
