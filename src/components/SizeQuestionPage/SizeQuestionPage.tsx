import React from 'react';
import { AnswerProps } from '../AnswerButton/AnswerButton';
import styles from './styles';
import tinyDogIcon from '../../../assets/images/tinyDogIcon.png';
import smallDogIcon from '../../../assets/images/smallDogIcon.png';
import mediumDogIcon from '../../../assets/images/mediumDogIcon.png';
import largeDogIcon from '../../../assets/images/largeDogIcon.png';
import { QuestionPage, QuestionPageProps } from '../QuestionPage/QuestionPage';

const sizePageButtons: AnswerProps[] = [
  {
    buttonText: 'Tiny',
    iconSource: tinyDogIcon,
    iconStyle: [styles.dogIconStyle, styles.tinyDogIconSize]
  },
  {
    buttonText: 'Small',
    iconSource: smallDogIcon,
    iconStyle: [styles.dogIconStyle, styles.smallDogIconSize]
  },
  {
    buttonText: 'Medium',
    iconSource: mediumDogIcon,
    iconStyle: [styles.dogIconStyle, styles.mediumDogIconSize]
  },
  {
    buttonText: 'Large',
    iconSource: largeDogIcon,
    iconStyle: styles.dogIconStyle,
  }
]

export class SizeQuestionPage extends React.Component<{}> {
  public render() {
    const sizePageProps: QuestionPageProps = {
      questionText: "What size dog are \n you looking for?",
      navigation: this.props.navigation,
      answerButtons: sizePageButtons,
      previousPage: 'HomePage',
      nextPage: 'LivingPage'
    }
    return (
      <QuestionPage {...sizePageProps} />
    );
  }
}
