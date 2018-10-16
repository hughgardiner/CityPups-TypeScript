import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  topPanel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00DF5D',
    opacity: 0.7
  },
  homePagePicture: {
    width: '100%', 
    height: '100%',
    position: 'absolute',
    opacity: 0.3
  },
  boneLogoHome: {
    width: '10%',
    height: '10%'
  },
  titleTextView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    color: 'white',
    alignItems: 'center',
    fontFamily: 'DancingScript-Bold',
    fontSize: 50
  },
  bottomPanel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingText: {
    color: '#00B561',
    fontFamily: 'HelveticaNeue',
    fontSize: 18,
    lineHeight: 25 
  },
  helperDogHome: {
    flex: 1,
    position: 'absolute',
    left: 200,
    top: -57
  },
  navigationButtonContainer: {
    flex: 1,  
    width: '80%',
    paddingVertical: -50
  },
  navigationButton: {
    backgroundColor: '#00B561',
    alignItems: 'center',
    paddingVertical: 15,
    shadowOffset:{  width: 5,  height: 5,  },
    shadowColor: 'gray',
    shadowOpacity: 1.0,
  },
  navigationButtonText: {
    color: 'white',
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 16
  },
  questionText: {
    flex: 1,
    color: 'white',
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 32,
    top: '15%',
    left: '10%',
    right: '10%'
  },
  answerPanel: {
    flex: 1,
    position: 'absolute',
    borderRadius: 4,
    borderWidth: 3,
    borderColor: '#000000',
    backgroundColor: 'white', 
    top: '25%', 
    left: '5%', 
    right: '5%',
    bottom: '15%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  answerButtonContainer: {
    flex: 1,  
    width: '80%',
    paddingVertical: -50,
  },
  answerButton: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: 15
  },
  answerButtonText: {

  },
  questionTopPanel: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00DF5D',
    opacity: 0.7
  }
});