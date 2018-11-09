import React from 'react';
import { AnswerProps } from '../AnswerButton/AnswerButton';
import styles from './styles';
import { QuestionPage, QuestionPageProps } from '../QuestionPage/QuestionPage';
import smallApartmentIcon from '../../../assets/images/smallApartmentIcon.png';
import largeApartmentIcon from '../../../assets/images/largeApartmentIcon.png';
import houseIcon from '../../../assets/images/houseIcon.png';

const livingPageButtons: AnswerProps[] = [
  {
    buttonText: 'I live in a small apartment',
    buttonTextStyle: styles.answerButtonText,
    iconSource: smallApartmentIcon,
    iconStyle: [styles.apartmentIconStyle, styles.smallApartmentStyle],
  },
  {
    buttonText: 'I live in a large apartment or loft',
    buttonTextStyle: styles.answerButtonText,
    iconSource: largeApartmentIcon,
    iconStyle: styles.apartmentIconStyle,
  },
  {
    buttonText: 'I live in a single family home',
    buttonTextStyle: styles.answerButtonText,
    iconSource: houseIcon,
    iconStyle: styles.apartmentIconStyle,
  },
]

export class LivingQuestionPage extends React.Component<{}> {
  public render() {
    const livingPageProps: QuestionPageProps = {
      questionText: "Where will your \n new dog live?",
      navigation: this.props.navigation,
      answerButtons: livingPageButtons,
      previousPage: 'SizeQuestionPage',
      nextPage: 'SpaceQuestionPage'
    }
    return <QuestionPage {...livingPageProps} />
  }
}