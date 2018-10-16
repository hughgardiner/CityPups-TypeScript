import React from "react";
import {TouchableOpacity, Text, View, ImageBackground} from "react-native";
import styles from "../../styles";
import questionPageBackground from "../../../assets/images/questionPageBackground.png";

export class SizeQuestionPage extends React.Component<{}> {
  public render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.questionTopPanel}>
          <ImageBackground source={questionPageBackground} style={styles.homePagePicture}/>
          <Text style={styles.questionText}>What size dog are you looking for?</Text>
        </View>
        <View style={styles.bottomPanel}>
          <View style={styles.navigationButtonContainer}>
            <TouchableOpacity style={styles.navigationButton} onPress={() => {navigate("HomePage"); }}>
              <Text style={styles.navigationButtonText}>Go Back</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.answerPanel}>
          <View style={styles.answerButtonContainer}>
            <TouchableOpacity style={styles.answerButton}>
              <Text style={styles.answerButtonText}>Answer 1</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
