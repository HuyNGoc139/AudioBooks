import React, {useEffect} from 'react';
// import BootSplash from 'react-native-bootsplash';
// import LoginScreen from './LoginScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../auth/LoginScreen';

const AppStack = createNativeStackNavigator();
const AppNavigator = () => {
  //   useEffect(() => {
  //     BootSplash.hide({ fade: true });
  //   }, []);

  return (
    <AppStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
      <AppStack.Screen name="Login" component={LoginScreen} />
      {/* <AppStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
      /> */}
    </AppStack.Navigator>
  );
};

export default AppNavigator;
