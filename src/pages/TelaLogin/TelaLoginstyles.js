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
  },
  triangleContainer: {
    alignItems: 'center',
    marginTop: height * -0.035, 
  },
  triangle: {
    width: width * 0.5, 
    height: height * 0.25, 
    position: 'absolute',
    top: height * -0.13, 
    left: width * -0.11, 
  },
  textContainer: {
    marginTop: height * 0.16, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  helloText: {
    fontSize: width * 0.06, 
    fontWeight: 'bold',
    color: '#021320',
    borderBottomWidth: 4,
    borderBottomColor: '#0C476F',
    paddingBottom: 10,
    fontFamily: 'Open Sans Semi Bold',
  },
  welcomeText: {
    fontSize: width * 0.06, 
    fontWeight: 'bold',
    color: '#021320',
    fontFamily: 'Open Sans Semi Bold',
  },
  subText: {
    color: '#A8A8A8',
    fontFamily: 'Open Sans',
    fontSize: width * 0.035, 
    fontWeight: '600',
    lineHeight: width * 0.045, 
    marginTop: height * 0.025, 
    textAlign: 'center',
  },
  questionText: {
    marginTop: height * 0.034, 
    fontSize: width * 0.035, 
    fontFamily: 'Open Sans Semi Bold',
    fontWeight: '600',
    color: '#000',
    left: width * 0.05, 
  },
  asterisk: {
    color: '#FF0606',
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
    marginTop: height * 0.03, 
  },
  circleWithText: {
    alignItems: 'center',
    marginHorizontal: width * 0.02, 
  },
  circleWrapper: {
    width: width * 0.24, 
    height: width * 0.24, 
    borderRadius: (width * 0.24) / 2, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleImage: {
    width: width * 0.2, 
    height: height * 0.1, 
    borderRadius: (width * 0.2) / 2, 
  },
  selectedOption: {
    borderWidth: 3,
    borderColor: '#5A9BD5',
  },
  optionTextWrapper: {
    marginTop: height * 0.01, 
    alignItems: 'center',
  },
  optionText: {
    fontSize: width * 0.03, 
    fontFamily: 'Open Sans Semi Bold',
    fontWeight: '700',
    color: '#000',
  },
  selectedTextOption: {
    color: '#28a745',
  },
  imageContainer: {
    marginTop: '-10%',
    height: height * 0.25, 
    marginLeft: width * -0.4, 
  },
  image: {
    width: '100%',
    height: '100%',
  },
  footer: {
    width: '100%',
    height: height * 0.065, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03395F',
  },
});