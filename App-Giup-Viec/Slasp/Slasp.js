import React, { Component } from 'react';
import { View, Text , Image , StyleSheet, Dimensions} from 'react-native';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
export default class Slasp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {styles.slasp}>
        <Image 
            source = {require('../Img/logo.png')}      
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slasp:{ 
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //flexDirection:'row',
    paddingTop:Height/3,

  }
});