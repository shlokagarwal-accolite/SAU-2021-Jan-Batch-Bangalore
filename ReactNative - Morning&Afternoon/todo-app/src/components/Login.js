import React from 'react';
import { Text, TextInput, View, StyleSheet, Button} from "react-native";
const userInfo = { username: 'admin'}
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }  
  render() {  
      return (  
        <View style={Styles.container}>
        <Text style={Styles.loginTextStyle}>Login</Text>
        <TextInput style={Styles.textInputStyle}  placeholder="Please Enter Username" onChangeText={(username) => this.setState({username})} value={this.state.username}/>
        <Button title="Log In" onPress={this._login} />
      </View>
      );  
  }
  _login = async() => {
    if(userInfo.username === this.state.username )
      //alert('Logged in')
      this.props.navigation.navigate('Todo List')
    else
      alert('Username Incorrect')
  }  
} 
const Styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  },
  loginTextStyle: {
      fontSize: 25,
      fontWeight: "700",
      marginVertical: 20
  },
  textInputStyle: {
      borderColor: "black",
      borderWidth: 1,
      borderRadius: 5,
      fontSize: 20,
      padding: 5,
      width: "60%",
      marginBottom: 20
  }
})