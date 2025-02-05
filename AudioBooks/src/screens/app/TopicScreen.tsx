import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TAppStackParamList} from '@src/types/routes/app.route';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Container from '@src/components/Container';
import HeaderComponent from '@src/components/HeaderComponent';

const TopicScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<TAppStackParamList>>();

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       navigation.replace('HomeTab');
  //     }, 3000);

  //     return () => clearTimeout(timer);
  //   }, []);

  return (
    <Container>
      <HeaderComponent title="Chủ Đề Quan Tâm" noBack />
      <View style={styles.container}>
        <Text>Welcome to Topic Screen! Redirecting to HomeTab...</Text>
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TopicScreen;
