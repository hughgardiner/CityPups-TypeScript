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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  greetingText: {
    color: '#00B561',
    fontFamily: 'HelveticaNeue',
    fontSize: 18
  },
  getStartedContainer: {
    flex: 1,  
    width: '80%'
    // paddingHorizontal: 10
  },
  getStartedButton: {
    backgroundColor: '#00B561',
    alignItems: 'center',
    paddingVertical: 15
  },
  getStartedText: {
    color: 'white',
    fontFamily: 'HelveticaNeue-Bold'
  }
});