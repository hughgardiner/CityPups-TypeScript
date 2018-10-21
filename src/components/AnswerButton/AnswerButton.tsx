import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ImageSourcePropType,
  ImageStyle,
  ViewStyle,
  RegisteredStyle,
} from 'react-native';
import styles from './styles';
import answerCheck from '../../../assets/images/answerCheck.png';

interface AnswerProps {
  iconSource: ImageSourcePropType;
  iconStyle: ImageStyle;
  buttonText: string;
}

interface AnswerState {
  selected: boolean;
  buttonColor: RegisteredStyle<ViewStyle>;
  textColor: RegisteredStyle<ViewStyle>;
  iconColor: RegisteredStyle<ViewStyle>;
}

const selectedState = {
  selected: true,
  buttonColor: styles.buttonSelectedColor,
  textColor: styles.textSelectedColor,
  iconColor: styles.iconSelectedColor,
};

const unselectedState = {
  selected: false,
  buttonColor: styles.buttonUnselectedColor,
  textColor: styles.textUnselectedColor,
  iconColor: styles.iconUnselectedColor,
};

export class AnswerButton extends React.Component<AnswerProps, AnswerState> {
  constructor(props: AnswerProps) {
    super(props);
    this.state = unselectedState;
  }

  private buttonPressed = () => {
    this.state.selected
      ? this.setState(unselectedState)
      : this.setState(selectedState);
  };

  public render() {
    const buttonCheck = this.state.selected ? (
      <Image source={answerCheck} style={styles.answerCheck} />
    ) : null;

    return (
      <View style={styles.answerButtonContainer}>
        <TouchableOpacity
          style={[styles.answerButton, this.state.buttonColor]}
          onPress={this.buttonPressed}
        >
          <Image
            source={this.props.iconSource}
            style={[this.props.iconStyle, this.state.iconColor]}
          />
          <Text style={[styles.answerButtonText, this.state.textColor]}>
            {this.props.buttonText}
          </Text>
          {buttonCheck}
        </TouchableOpacity>
      </View>
    );
  }
}
