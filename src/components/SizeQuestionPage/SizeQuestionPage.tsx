import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
  TouchableHighlight,
} from 'react-native';
import { AnswerButton } from '../AnswerButton/AnswerButton';
import styles from './styles';
import questionPageBackground from '../../../assets/images/questionPageBackground.png';
import tinyDogIcon from '../../../assets/images/tinyDogIcon.png';
import smallDogIcon from '../../../assets/images/smallDogIcon.png';
import mediumDogIcon from '../../../assets/images/mediumDogIcon.png';
import largeDogIcon from '../../../assets/images/largeDogIcon.png';
import backArrow from '../../../assets/images/backArrow.png';
import helperDog from '../../../assets/images/helperDog.png';
import CityPup from '../CityPup/CityPup';

export class SizeQuestionPage extends React.Component<{}> {
  public render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.questionTopPanel}>
          <TouchableHighlight
            onPress={() => {
              navigate('HomePage');
            }}
          >
            <Image style={styles.backArrowButton} source={backArrow} />
          </TouchableHighlight>
          <ImageBackground
            source={questionPageBackground}
            style={styles.questionPagePicture}
          />
          <Text style={styles.questionText}>
            What size dog are {'\n'} you looking for?
          </Text>
        </View>
        <View style={styles.bottomPanel}>
          <View style={styles.cityPupContainer}>
            <CityPup />
            <View></View>
          </View>
        </View>
        <View style={styles.answerPanel}>
          <AnswerButton
            buttonText={'Tiny'}
            iconSource={tinyDogIcon}
            iconStyle={[styles.dogIconStyle, styles.tinyDogIconSize]}
          />
          <AnswerButton
            buttonText={'Small'}
            iconSource={smallDogIcon}
            iconStyle={[styles.dogIconStyle, styles.smallDogIconSize]}
          />
          <AnswerButton
            buttonText={'Medium'}
            iconSource={mediumDogIcon}
            iconStyle={[styles.dogIconStyle, styles.mediumDogIconSize]}
          />
          <AnswerButton
            buttonText={'Large'}
            iconSource={largeDogIcon}
            iconStyle={styles.dogIconStyle}
          />
          <View style={styles.continueButtonContainer}>
            <TouchableOpacity style={styles.navigationButton}>
              <Text style={styles.navigationButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
