import React, {Component} from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';

const SimpleApp = createAppContainer(createStackNavigator({
  Home: { screen: HomeScreen },
  Chat: {
    screen: ChatScreen,
    path: 'chat/:user'
  },
}));

export default class App extends Component {
  render() {
    const prefix = 'mychat://';

    return <SimpleApp uriPrefix={prefix} />;
  }
}
