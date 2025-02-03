import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppState, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Home, Profile2User, Menu, Message} from 'iconsax-react-native';
import {Provider, useSelector} from 'react-redux';
import store, {RootState} from './src/hooks/store';
import {PaperProvider} from 'react-native-paper';
import RNBootSplash from 'react-native-bootsplash';
import {createNotifications} from 'react-native-notificated';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RootNavigator from '@src/navigators';
const {NotificationsProvider, useNotifications, ...events} =
  createNotifications();

const App: React.FC = () => {
  // useEffect(() => {
  //   // Ẩn màn hình khởi động sau khi ứng dụng đã tải xong
  //   RNBootSplash.hide({ fade: true });
  // }, []);
  return (
    <PaperProvider>
      <Provider store={store}>
        <GestureHandlerRootView style={{flex: 1}}>
          <NotificationsProvider>
            <SafeAreaView style={{flex: 1}}>
              <RootNavigator />
            </SafeAreaView>
          </NotificationsProvider>
        </GestureHandlerRootView>
      </Provider>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    right: 0,
    top: -4,
    backgroundColor: 'red',
    borderRadius: 12,
    paddingHorizontal: 6,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
  },
});
