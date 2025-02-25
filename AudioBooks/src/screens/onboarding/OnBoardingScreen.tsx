import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TAuthStackParamList} from '@src/types/routes/auth.route';
import {AppInfo} from '@src/utils/constants/AppInfo';
import App from 'App';
import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';

const OnboardingScreen = ({navigation}: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  const carouselItems = [
    {
      title: 'Nâng cao khả năng tập trung và đọc sách khoa học',
      description:
        'Sử dụng phương pháp pomodoro giúp bạn có khoảng thời gian đọc sách tập trung và hiệu quả xen kẽ những khoảng thời gian hợp lý.',
      image: require('../../assets/images/onboarding_1.png'), // Đặt ảnh của bạn ở đây
    },
    {
      title: 'Đọc sách mọi lúc mọi nơi trên thiết bị di động của bạn',
      description:
        'Dù ở bất cứ đâu bạn vẫn có thể đọc sách thông qua thiết bị di động của bạn mà không phải mang theo những cuốn sách dày và nặng.',
      image: require('../../assets/images/onboarding_2.png'), // Đặt ảnh của bạn ở đây
    },
    {
      title: 'Tính năng nghe sách nói thuận tiện',
      description:
        'Dễ dàng tận dụng những khoảng thời gian trống như khi làm việc nhà, đi trên đường hay nghỉ ngơi với chức năng sách nói độc đáo.',
      image: require('../../assets/images/onboarding_3.png'), // Đặt ảnh của bạn ở đây
    },
  ];

  const handleNext = () => {
    if (currentIndex < carouselItems.length - 1) {
      setCurrentIndex(currentIndex + 1);
      ref.current?.next();
    }
  };
  const handleLogin = () => {
    navigation.navigate('Auth', {screen: 'Login'});
  };

  const handleRegister = () => {
    navigation.navigate('Auth', {screen: 'RegisterScreen'});
  };
  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };
  return (
    <View style={styles.container}>
      <Carousel
        loop
        ref={ref}
        width={AppInfo.sizes.WIDTH}
        height={500}
        data={carouselItems}
        onProgressChange={progress}
        onSnapToItem={(index: any) => setCurrentIndex(index)}
        renderItem={({item}: {item: any}) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />

      <Pagination.Basic
        progress={progress}
        data={carouselItems}
        dotStyle={{backgroundColor: '#f1f1f1', borderRadius: 100}}
        activeDotStyle={{
          backgroundColor: '#262626',
          borderRadius: 100,
          overflow: 'hidden',
        }}
        containerStyle={{gap: 5, marginBottom: 10}}
        onPress={onPressPagination}
      />

      {currentIndex !== carouselItems.length - 1 ? (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#47544D'}]}
            onPress={handleNext}>
            <Text style={styles.buttonText}>Tiếp Tục</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, {backgroundColor: 'white'}]}
            onPress={handleLogin}>
            <Text style={[styles.buttonText, {color: '#d9993b'}]}>Bỏ qua</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#47544D'}]}
            onPress={handleLogin}>
            <Text style={styles.buttonText}>Đăng nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {borderWidth: 1, borderColor: '#42494f'}]}
            onPress={handleRegister}>
            <Text style={[styles.buttonText, {color: '#42494f'}]}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 350,
    height: 45,
    borderRadius: 18,
    marginBottom: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
  finalButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 'auto',
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
  indicatorContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#42494f',
    margin: 5,
  },
});

export default OnboardingScreen;
