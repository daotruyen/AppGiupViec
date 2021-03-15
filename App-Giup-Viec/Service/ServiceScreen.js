import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Service from './Service'
class ServiceScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Service/>
      </View>
    );
  }
}

export default ServiceScreen;
