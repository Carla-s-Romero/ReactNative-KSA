import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF9900',
    marginTop: 10,
  },

  
  description: {
    fontSize: 12,
    color: '#555',
    marginBottom: 10,
    lineHeight: 20,
  },

  subtitleDescription:{
    padding: 10,
  },
  
  locationsContainer: {
    marginBottom: 20,
  },
  locationItem: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  locationImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  locationText: {
    flex: 1,
  },
  locationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  locationPhone: {
    fontSize: 14,
    color: '#1E90FF',
    marginTop: 4,
  },
  locationAddress: {
    fontSize: 12,
    color: '#555',
    marginTop: 4,
    lineHeight: 18,
  },
  errorButton: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginTop: 10,
    backgroundColor: '#f9f9f9',
  },
  errorText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  errorSubText: {
    fontSize: 12,
    color: '#777',
    marginTop: 4,
    lineHeight: 18,
  },
  faqContainer: {
    marginTop: 10,
  },
  faqItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  faqQuestion: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  faqAnswer: {
    fontSize: 12,
    color: '#777',
    marginTop: 5,
    lineHeight: 18,
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  teamMember: {
    alignItems: 'center',
  },
  teamImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
    backgroundColor: '#f0f0f0',
  },
  teamName: {
    fontSize: 12,
    color: '#333',
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

  title: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Open Sans Semi Bold',
    color: '#000',
  },

  line: {
    paddingTop: 40, 
    paddingBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
});
