import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class ChatScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user', 'Chat')
  });

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Chat Screen</Text>
      </View>
    )
  }
}