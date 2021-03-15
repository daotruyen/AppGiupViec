import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Login from './Login'
import ForgotPassword from "./ForgotPassword";
import OTP from './OTP'
import ResetPassword from "./ResetPassword";
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <ResetPassword/>
      </View>
    );
  }
}
