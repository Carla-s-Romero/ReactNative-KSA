import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    position: 'relative',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Open Sans Semi Bold',
    color: '#000',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingTop: 40, 
    paddingBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },

  listContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  turmaCard: {
    flex: 1,
    margin: 10,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    maxWidth: '45%',
    borderStyle: 'solid',
    borderColor: '#333',
    borderWidth: 1,
    paddingBottom: 15,
    justifyContent: 'space-between',
  },
  turmaName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  turmaDesc: {
    paddingTop: 20, 
    paddingBottom: 10,
    width: '80%',
    alignItems: 'center',
  },
  turmaCardHeader: {
    backgroundColor: '#FF9900',
    paddingTop: 5,
    paddingBottom: 20,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
  },
  detailIcon: {
    width: 20,
    height: 15, 
    marginRight: 5,
  },
  turmaDetail: {
    borderTopWidth: 1,
    borderTopColor: '#FF9900',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
    width: '80%',
    maxWidth: '100%',
  },
  turmaDetailText: {
    fontSize: 12,
    color: '#333',
    flexShrink: 1,
  },
  decor: {
    position: 'absolute',
    top: -10,
    right: -40,
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  turmaFotoProf: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'gray',
    borderColor: 'black',
    borderWidth: 1,
    position: 'absolute',
    left: 10,
    top: -15,
  },
  turmaCardHeaderDesc:{
    paddingLeft: 80,
    height: 25,
  },
  turmaCardHeaderText: {
    fontWeight: '400',
    color: '#000',
    width: '100%',
    marginTop: 4,
    marginBottom: 10,
    fontSize: 12,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },

  FlatList:{
    backgroundColor: '#000',
  }
});
