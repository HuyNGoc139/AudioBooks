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
import SpaceComponent from '@src/components/SpaceComponent';
import {TAuthStackParamList} from '@src/types/routes/auth.route';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Container from '@src/components/Container';
import ButtonComponent from '@src/components/ButtonComponent';
import {loginUser} from '@src/hooks/authAction';

const LoginScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<TAuthStackParamList>>();
  const dispatch = useDispatch<AppDispatch>();
  const LoginSchema = useMemo(
    () =>
      yup.object().shape({
        accountname: yup.string().required('Vui lòng không để trống'),
        password: yup
          .string()
          .required('Vui lòng không để trống các ô mật khẩu')
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%*?&!.-_> </^~`])[A-Za-z\d@#$%*?&!.-_> </^~`]{6,30}$/,
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
    watch('password')?.length >= 6 && watch('password')?.length <= 30;

  const checkTwo =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%*?&!.-_> </^~`])/.test(
      watch('password'),
    );

  const onSubmit = async (data: {accountname: string; password: string}) => {
    if (checkOne && checkTwo) {
      await dispatch(
        loginUser({
          accountname: data.accountname,
          password: data.password,
        }) as any,
      );
    }
  };

  const navToFogotPassWord = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <Container>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={{flexGrow: 1}}>
        <HeaderComponent title="Đăng Nhập" />
        <Image
          style={{
            width: 300,
            height: 300,
            backgroundColor: Colors.primary3,
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
            <Text style={styles.textforgot}>Quên Mật Khẩu?</Text>
          </TouchableOpacity>
        </View>
        <ButtonComponent title="Đăng Nhập" onPress={handleSubmit(onSubmit)} />
        <SpaceComponent height={80} />
        <View style={{flexDirection: 'row'}}>
          <View style={styles.line}></View>
        </View>
        <SpaceComponent height={40} />
        <View style={styles.textContainer}>
          <Text style={styles.textforgot}>
            Bạn chưa có tài khoản?
            <Text
              style={{color: Colors.acentorange}}
              onPress={() => {
                navigation.navigate('RegisterScreen');
              }}>
              {' '}
              Đăng Ký
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'black',
  },
  textforgot: {
    marginTop: 16,
    textAlign: 'right',
    fontSize: 16,
    fontWeight: '400',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'flex-end',
    marginBottom: 20,
  },
});

export default LoginScreen;
