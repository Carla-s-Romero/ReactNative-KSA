import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  content: {
    paddingTop: height * 0.02,
    paddingBottom: height * 0.06,
    paddingHorizontal: width * 0.05,
  },
  contactContainer: {
    alignItems: 'center',
    marginTop: height * 0.05,
  },
  image: {
    width: width * 0.4,
    height: width * 0.3,
  },
  title: {
    fontSize: width * 0.06,
    fontFamily: 'Open Sans Semi Bold',
    fontWeight: '700',
    color: '#021320',
    marginBottom: height * 0.02,
  },
  description: {
    fontSize: width * 0.04,
    fontFamily: 'Open Sans',
    color: '#021320',
    textAlign: 'center',
    marginBottom: height * 0.04,
  },
  contactItem: {
    marginBottom: height * 0.02,
  },
  contactText: {
    fontSize: width * 0.04,
    fontFamily: 'Open Sans',
    color: '#03395F',
    textDecorationLine: 'underline',
  },
});