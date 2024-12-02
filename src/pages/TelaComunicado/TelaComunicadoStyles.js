import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: width * 0.06, // Ajuste dinâmico baseado na largura da tela
    margin: 16,
    marginLeft: 0,
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
    fontSize: width * 0.04, // Ajuste dinâmico baseado na largura da tela
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
    paddingTop: height * 0.1, // Ajuste dinâmico baseado na altura da tela
    paddingBottom: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  comunicadoTitulo: {
    color: 'white',
    fontSize: width * 0.04, // Ajuste dinâmico baseado na largura da tela
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
    height: height * 0.18, // Ajuste dinâmico baseado na altura da tela
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  AvisoText: {
    color: '#939393',
    fontSize: width * 0.03, // Ajuste dinâmico baseado na largura da tela
    fontWeight: 'bold',
    textAlign: 'center',
  },
  line: {
    paddingTop: 20, 
    paddingBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
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
});

export default styles;