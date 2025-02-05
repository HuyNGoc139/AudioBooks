import React, {useEffect, useState} from 'react';
// import BootSplash from 'react-native-bootsplash';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import HomeScreen from './HomScreen';
import ChallengeScreen from './ChallengeScreen';
import LibraryScreen from './LibraryScreen';
import NotificationScreen from './NotificationScreen';
import ProfileScreen from './ProfileScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TopicScreen from './TopicScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  TAppStackParamList,
  TBottomTabParamList,
} from '@src/types/routes/app.route';
import {Colors} from '@src/styles';

const AppStack = createNativeStackNavigator<TAppStackParamList>();
const Tab = createBottomTabNavigator<TBottomTabParamList>();

const HomeTab = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#ffffff',
        borderTopColor: 'transparent',
        elevation: 0,
        height: 56,
        marginBottom: 2,
      },
      tabBarIcon: ({focused}) => {
        let icon;
        const iconColor = focused ? Colors.primary2 : Colors.black30; // Màu xanh Facebook khi được chọn, màu xám khi không được chọn

        switch (route.name) {
          case 'Home':
            icon = <Ionicons name="home" size={28} color={iconColor} />;
            break;
          case 'Challenge':
            icon = <Ionicons name="ribbon-sharp" size={28} color={iconColor} />;
            break;
          case 'Library':
            icon = <Ionicons name="library" size={28} color={iconColor} />;
            break;
          case 'Notification':
            icon = (
              <Ionicons name="notifications" size={28} color={iconColor} />
            );
            break;
          case 'Profile':
            icon = (
              <Ionicons
                name="person-circle-sharp"
                size={28}
                color={iconColor}
              />
            );
            break;
        }
        return icon;
      },
      tabBarLabel: ({focused}) => {
        let label;
        switch (route.name) {
          case 'Home':
            label = 'Trang Chủ';
            break;
          case 'Challenge':
            label = 'Thử Thách';
            break;
          case 'Library':
            label = 'Thư Viện';
            break;
          case 'Notification':
            label = 'Thông Báo';
            break;
          case 'Profile':
            label = 'Cá Nhân';
            break;
        }
        return (
          <Text
            style={{
              color: focused ? Colors.primary2 : Colors.black30,
              fontSize: 14,
              fontWeight: '500',
            }}>
            {label}
          </Text>
        );
      },
    })}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Challenge" component={ChallengeScreen} />
    <Tab.Screen name="Library" component={LibraryScreen} />
    <Tab.Screen name="Notification" component={NotificationScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

const AppNavigator = () => {
  const [firstLogin, setFirstLogin] = useState(true);

  // useEffect(() => {
  //   const checkFirstLogin = async () => {
  //     const isFirstLogin = await AsyncStorage.getItem('firstLogin');
  //     if (isFirstLogin === null) {
  //       await AsyncStorage.setItem('firstLogin', 'false'); // Đánh dấu là đã đăng nhập lần đầu
  //       setFirstLogin(true);
  //     } else {
  //       setFirstLogin(false);
  //     }
  //   };

  //   checkFirstLogin();
  // }, []);

  // if (firstLogin === null) return null;
  return (
    <AppStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={firstLogin ? 'Topic' : 'HomeTab'}>
      <AppStack.Screen name="Topic" component={TopicScreen} />
      <AppStack.Screen name="HomeTab" component={HomeTab} />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
