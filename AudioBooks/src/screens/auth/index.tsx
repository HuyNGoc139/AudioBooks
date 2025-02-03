import React, {useEffect} from 'react';
// import BootSplash from 'react-native-bootsplash';
// import LoginScreen from './LoginScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import RegisterScreen from './RegisterScreen';
import {TAuthStackParamList} from '@src/types/routes/auth.route';

const AuthStack = createNativeStackNavigator<TAuthStackParamList>();
const AuthNavigator = () => {
  //   useEffect(() => {
  //     BootSplash.hide({ fade: true });
  //   }, []);

  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
      />
      <AuthStack.Screen name="RegisterScreen" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
