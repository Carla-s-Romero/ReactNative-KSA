import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    margin: 16,
    fontWeight: 'bold',
  },
  decorTela: {
    position: 'absolute',
    top: '4%',
    right: '-5%',
    zIndex: 0,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tab: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    color: '#E3E1E1',
  },
  activeTab: {
    color: '#452E94',
    borderBottomWidth: 2,
    borderBottomColor: '#452E94',
  },
  comunicadoContainer: {
    backgroundColor: '#022036',
    margin: 16,
    paddingTop: 90,
    paddingBottom: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  comunicadoTitulo: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 16,
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  usericon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ddd',
    marginRight: 8,
  },
  AvisoContainer: {
    backgroundColor:'#ECECEC',
    padding: 20,
    height: '20%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  AvisoText: {
    color: '#939393',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;