import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#F5F5F5',
    zIndex: 2,
  },
  header: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Open Sans Semi Bold',
    flex: 1,
  },
  icon: {
    padding: 10,
  },
});
