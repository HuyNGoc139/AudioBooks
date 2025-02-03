import React, {useEffect} from 'react';
// import BootSplash from 'react-native-bootsplash';
// import LoginScreen from './LoginScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AuthStack = createNativeStackNavigator();
const AuthNavigator = () => {
  //   useEffect(() => {
  //     BootSplash.hide({ fade: true });
  //   }, []);

  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
      <AuthStack.Screen name="Login" component={LoginScreen} />
      {/* <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
      /> */}
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
