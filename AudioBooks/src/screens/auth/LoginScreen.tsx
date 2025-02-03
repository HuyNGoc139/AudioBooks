import {
  Alert,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useCallback, useMemo, useState} from 'react';
import {Lock, Sms} from 'iconsax-react-native';
import {Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  validateEmail,
  validatePassword,
  validatePasswordLogin,
} from './validate';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '@src/hooks/store';
import {sendResetPasswordEmail} from '@src/utils/ultils';
import HeaderComponent from '@src/components/HeaderComponent';
import {Colors, Fonts} from '@src/styles';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {FloatingLabelInput} from '@src/components/FloatingLabelInput';
import {AppButton} from '@src/components/AppButton';
import {Images} from '@src/assets';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
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

  const LoginSchema = useMemo(
    () =>
      yup.object().shape({
        accountname: yup.string().required('Vui lòng không để trống'),
        password: yup
          .string()
          .required('Vui lòng không để trống các ô mật khẩu')
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%*?&!.-_> </^~`])[A-Za-z\d@#$%*?&!.-_> </^~`]{6,15}$/,
            'Vui lòng nhập đúng định dạng',
          ),
      }),
    [],
  );

  const {
    setValue,
    watch,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      accountname: '',
      password: '',
    },
    resolver: yupResolver(LoginSchema),
    mode: 'all',
  });
  const checkOne =
    watch('password')?.length >= 6 && watch('password')?.length <= 15;

  const checkTwo =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%*?&!.-_> </^~`])/.test(
      watch('password'),
    );

  const onSubmit = (data: {accountname: string; password: string}) => {
    if (checkOne && checkTwo) {
      console.log('Tài khoản:', data.accountname);
      console.log('Mật khẩu:', data.password);
      Alert.alert(
        'Thông tin đăng nhập',
        `Tài khoản: ${data.accountname}\nMật khẩu: ${data.password}`,
      );
    }
  };

  const navToFogotPassWord = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.safeAreaView}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={{flexGrow: 1}}>
        <HeaderComponent title="Đăng Nhập" />
        <Image
          style={{
            width: 300,
            height: 300,
            backgroundColor: 'white',
            alignSelf: 'center',
          }}
          source={Images.logo}
        />
        <FloatingLabelInput
          label={'Tài Khoản'}
          isRequired
          value={watch('accountname')}
          onChangeText={text => setValue('accountname', text)}
          errorMessages={errors?.accountname?.message}
        />

        <FloatingLabelInput
          label={'Mật Khẩu'}
          isRequired
          isSecure
          wrapperStyle={{marginTop: 10}}
          value={watch('password')}
          onChangeText={text => setValue('password', text)}
          errorMessages={errors?.password?.message}
        />
        <View>
          <TouchableOpacity onPress={navToFogotPassWord}>
            <Text
              style={{
                marginTop: 16,
                textAlign: 'right',
                fontSize: 16,
                fontWeight: '400',
              }}>
              Quên Mật Khẩu?
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Đăng Nhập</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  imag: {
    width: 400,
    height: 300,
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 20,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 100,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
