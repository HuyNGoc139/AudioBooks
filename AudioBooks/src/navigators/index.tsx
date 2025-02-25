import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React, {useEffect} from 'react';
import AuthNavigator from '@src/screens/auth';
import AppNavigator from '@src/screens/app';
import {useSelector} from 'react-redux';
import {RootState} from '@src/hooks/store';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  // const isAuthenticated = useSelector(
  //   (state: RootState) => state.auth.isAuthenticated,
  // );
  const isAuthenticated = true;
  //   useEffect(() => {
  //     if (!authQuery.isLoading && isAuth) {
  //       BootSplash.hide({ fade: true });
  //     }
  //   }, [authQuery.isLoading, isAuth]);

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {isAuthenticated ? (
          <RootStack.Screen name="App" component={AppNavigator} />
        ) : (
          <RootStack.Screen name="Auth" component={AuthNavigator} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
