import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SIgnIn from "./SIgnIn";
import OTPSignIn from "./OTPSignIn";
import CreatePassword from "./CreatePassword";
import Referral from "./ Referral";
class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Referral/>
      </View>
    );
  }
}

export default SignInScreen;
