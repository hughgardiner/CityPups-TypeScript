import React from "react";
import {TouchableOpacity, Text, View, ImageBackground, Image} from "react-native";
import styles from "../../styles";
import dogGroup from "../../../assets/images/dogGroup.png";
import helperDog from "../../../assets/images/helperDog.png";
import boneLogo from "../../../assets/images/boneLogo.png";

export class HomePage extends React.Component<{}> {
  public render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.topPanel}>
          <ImageBackground source={dogGroup} style={styles.homePagePicture}/>
          <Image source={boneLogo} style={styles.boneLogoHome} resizeMode="contain"/>
          <Text style={styles.titleText}>City Pups</Text>
        </View>
        <View style={styles.bottomPanel}>
        <View style={styles.greetingContainer}>
            <Text style={styles.greetingText}>Tell us a little about yourself,</Text>
            <Text style={styles.greetingText}>and we'll match you with the</Text>
            <Text style={styles.greetingText}>perfect city dogs to adopt!</Text>
          </View>
          <View style={styles.navigationButtonContainer}>
            <Image source={helperDog} style={styles.helperDogHome}/>
            <TouchableOpacity style={styles.navigationButton} onPress={() => {navigate("SizeQuestionPage"); }}>
              <Text style={styles.navigationButtonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}