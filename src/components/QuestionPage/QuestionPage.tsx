import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
  TouchableHighlight,
  RegisteredStyle,
  TextStyle,
} from 'react-native';
import { AnswerButton, AnswerProps } from '../AnswerButton/AnswerButton';
import styles from './styles';
import questionPageBackground from '../../../assets/images/questionPageBackground.png';
import backArrow from '../../../assets/images/backArrow.png';
import CityPup from '../CityPup/CityPup';

export interface QuestionPageProps {
  questionText: string;
  answerButtons: AnswerProps[];
  previousPage: string;
  nextPage: string;
  navigation: func;
}

export class QuestionPage extends React.Component<QuestionPageProps> {
  constructor(props: QuestionPageProps) {
    super(props);
  }

  public render() {
    const { navigate } = this.props.navigation;
    const answerButtons = this.props.answerButtons.map((answerButton, i) => {
      return (<AnswerButton
        key={i}
        buttonTextStyle={answerButton.buttonTextStyle}
        buttonText={answerButton.buttonText}
        iconSource={answerButton.iconSource}
        iconStyle={answerButton.iconStyle}
        multiSelect={answerButton.multiSelect} />);
    });
    return (
      <View style={styles.container}>
        <View style={styles.questionTopPanel}>
          <ImageBackground
            source={questionPageBackground}
            style={styles.questionPagePicture}
          />
          <TouchableHighlight
            onPress={() => {
              navigate(this.props.previousPage);
            }}
          >
            <Image style={styles.backArrowButton} source={backArrow} />
          </TouchableHighlight>
          <Text style={styles.questionText}>
            {this.props.questionText}
          </Text>
        </View>
        <View style={styles.bottomPanel}>
          <View style={styles.cityPupContainer}>
            <CityPup />
          </View>
        </View>
        <View style={styles.answerPanel}>
          {answerButtons}
          <View style={styles.continueButtonContainer}>
            <TouchableOpacity style={styles.navigationButton} onPress={() => {
              navigate(this.props.nextPage);
            }}>
              <Text style={styles.navigationButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
