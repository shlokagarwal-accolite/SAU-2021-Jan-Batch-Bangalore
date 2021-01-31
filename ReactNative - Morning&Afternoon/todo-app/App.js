import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'; 
import { createAppContainer } from 'react-navigation';  
import Main from './src/components/main';
import Login from './src/components/Login';
const AppNavigator = createStackNavigator(  
  {  
      "Login Screen": Login,  
      "Todo List": Main 
  } 
);  
const AppContainer = createAppContainer(AppNavigator);  
export default class App extends React.Component {
  render(){
    return (
      <AppContainer/>
    );
  }
}
