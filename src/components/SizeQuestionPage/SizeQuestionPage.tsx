import React from 'react';
import {TouchableOpacity, Text, View, ImageBackground, Image} from 'react-native';
import styles from '../../styles';
import questionPageBackground from '../../../assets/images/questionPageBackground.png';

export class SizeQuestionPage extends React.Component<{}> {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.topPanel}>
          <ImageBackground source={questionPageBackground} style={styles.homePagePicture}/>
          <Text style={styles.questionText}>What size dog are you looking for?</Text>
        </View>
        <View style={styles.bottomPanel}>
          <TouchableOpacity style={styles.getStartedButton} onPress={() => {navigate('HomePage')}}>
            <Text style={styles.getStartedText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
