import {
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useCallback, useMemo, useState} from 'react';
import {Lock, Sms} from 'iconsax-react-native';
import {Image} from 'react-native';

import {
  validateEmail,
  validatePassword,
  validatePasswordLogin,
} from './validate';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '@src/hooks/store';
import {sendResetPasswordEmail} from '@src/utils/ultils';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errText, setErrorText] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const errorMessage = useMemo(() => errText, [errText]);
  const [user, setUser] = useState<any>();
  const handleLogin = useCallback(async () => {
    if (!email || !password) {
      setErrorText('Please enter your email and password!!!');
    } else if (!validateEmail(email)) {
      setErrorText('Please enter the correct email format');
    } else if (!validatePasswordLogin(password)) {
      setErrorText('Password must be at least 6 characters');
    } else {
      setErrorText('');
      try {
      } catch (error) {
        if (error instanceof Error) {
          setErrorText(error.message || 'Login failed. Please try again.');
        } else {
          setErrorText('An unknown error occurred. Please try again.');
        }
      }
    }
  }, [email, password, navigation]);

  const handleResetPassword = async () => {
    try {
      await sendResetPasswordEmail(email);
      Alert.alert('Thành công', 'Email đặt lại mật khẩu đã được gửi!');
    } catch (error: any) {
      Alert.alert('Lỗi', error.message);
    }
  };

  return <View></View>;
};

const Style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fcf3de',
  },
  imag: {
    width: 400,
    height: 300,
    marginTop: 20,
  },
});

export default LoginScreen;
