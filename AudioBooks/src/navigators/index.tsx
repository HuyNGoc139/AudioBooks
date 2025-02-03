import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React, {useEffect} from 'react';
import AuthNavigator from '@src/screens/auth';
import AppNavigator from '@src/screens/app';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  //   const { isAuth, authQuery } = useAuth();

  //   useEffect(() => {
  //     if (!authQuery.isLoading && isAuth) {
  //       BootSplash.hide({ fade: true });
  //     }
  //   }, [authQuery.isLoading, isAuth]);

  const isAuth = true;

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!isAuth ? (
          <RootStack.Screen name="Auth" component={AuthNavigator} />
        ) : (
          <>
            <RootStack.Screen name="App" component={AppNavigator} />
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
