import React, {useEffect} from 'react';
// import BootSplash from 'react-native-bootsplash';
// import LoginScreen from './LoginScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
      {/* <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
      /> */}
    </AppStack.Navigator>
  );
};

export default AppNavigator;
