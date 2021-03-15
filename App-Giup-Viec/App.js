/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Slasp from './Slasp/Slasp'
import LoginScreen from './Login/LoginScreen'
import SignInScreen from "./SignIn/SignInScreen";
import Home from './Home/Home'
import ServiceScreen from './Service/ServiceScreen'
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <SignInScreen/> */}
        {/* <LoginScreen/> */}
        {/* <Home/> */}
        <ServiceScreen/>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
