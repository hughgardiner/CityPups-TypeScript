import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  topPanel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#52b479'
  },
  titleText: {
    color: 'white'
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
    color: '#52b479'
  },
  getStartedContainer: {
    flex: 1,  
    width: '80%'
    // paddingHorizontal: 10
  },
  getStartedButton: {
    backgroundColor: '#52b479',
    alignItems: 'center',
    paddingVertical: 15
  },
  getStartedText: {
    color: 'white'
  }
});