import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 20,
  },
  content: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  decorTela: {
    position: 'absolute',
    top: '-7%',
    right: '-5%',
    zIndex: 0,
  },
 
});
