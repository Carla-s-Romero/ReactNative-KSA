import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    zIndex: 1,
  },
  header: {
    width: '100%',
    height: 80,
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

  icon: {
    padding: 10,
    marginTop: '6%',
  },

  logo: {
    width: 48,
    height: 23,
    marginTop: '7%',
  },

});
