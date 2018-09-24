import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from '../../styles';

export class HomePage extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topPanel}>
          <Text style={styles.titleText}>City Pups</Text>
        </View>
        <View style={styles.bottomPanel}>
          <View style={styles.greetingContainer}>
            <Text style={styles.greetingText}>Tell us a little about yourself,</Text>
            <Text style={styles.greetingText}>and we'll match you with the</Text>
            <Text style={styles.greetingText}>perfect city dogs to adopt!</Text>
          </View>
          <View style={styles.getStartedContainer}>
            <TouchableOpacity style={styles.getStartedButton} onPress={() => {return true}}>
              <Text style={styles.getStartedText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}