import React, {Component} from 'react'; 
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './src/Screens/Home';
import Note from './src/Screens/Note';
import {Provider} from 'react-redux';
import store from './src/publics/redux/store';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Note: {
    screen: Note,
  } 
},{
  defaultNavigationOptions: {
    title:'Note'
  }
});

const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component {
  render(){
    return (
      <Provider store = {store}>
        <AppContainer/>
      </Provider>
    )
  }
}