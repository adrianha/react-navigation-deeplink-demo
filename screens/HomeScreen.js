import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Linking, StyleSheet} from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Home Screen</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Chat', { user: 'adrian' })
          }}
        >
          <Text style={styles.buttonText}>{`this.props.navigation.navigate('Chat', { user: 'adrian' })`}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Linking.openURL('mychat://chat/adrian');
          }}
        >
          <Text style={styles.buttonText}>{`Linking.openURL('mychat://chat/adrian')`}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#3498db'
  },
  buttonText: {
    color: '#fff'
  }
})