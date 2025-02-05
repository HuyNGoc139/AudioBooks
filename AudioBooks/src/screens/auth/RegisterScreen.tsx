import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HeaderComponent from '@src/components/HeaderComponent';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Images} from '@src/assets';
import {FloatingLabelInput} from '@src/components/FloatingLabelInput';
import SpaceComponent from '@src/components/SpaceComponent';
import {useNavigation} from '@react-navigation/native';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {useMemo} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TAuthStackParamList} from '@src/types/routes/auth.route';
import {Colors} from '@src/styles';
import {AppText} from '@src/components/AppText';
import {TickCircle} from 'iconsax-react-native';

const RegisterScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<TAuthStackParamList>>();

  const RegisterSchema = useMemo(
    () =>
      yup.object().shape({
        accountname: yup.string().required('Vui lòng không để trống'),
        email: yup
          .string()
          .required('Vui lòng không để trống ô email')
          .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email chưa đúng định dạng'),
        password: yup
          .string()
          .required('Vui lòng không để trống các ô mật khẩu')
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%*?&!.-_> </^~`])[A-Za-z\d@#$%*?&!.-_> </^~`]{6,15}$/,
            'Vui lòng nhập đúng định dạng',
          ),
        confirmPassword: yup
          .string()
          .required('Vui lòng không để trống các ô mật khẩu')
          .oneOf([yup.ref('password')], 'Mật khẩu xác nhận không chính xác'),
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
      email: '',
      confirmPassword: '',
    },
    resolver: yupResolver(RegisterSchema),
    mode: 'all',
  });
  const checkOne =
    watch('password')?.length >= 6 && watch('password')?.length <= 15;

  const checkTwo =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%*?&!.-_> </^~`])/.test(
      watch('password'),
    );

  const onSubmit = (data: {
    accountname: string;
    password: string;
    email: string;
    confirmPassword: string;
  }) => {
    if (checkOne && checkTwo) {
      console.log('Tài khoản:', data.accountname);
      console.log('Mật khẩu:', data.password);
      console.log('Mật khẩu:', data.email);
      console.log('Mật khẩu:', data.confirmPassword);
      Alert.alert(
        'Thông tin đăng nhập',
        `Tài khoản: ${data.accountname}\nMật khẩu: ${data.password}`,
      );
    }
  };

  const textColor = (check: boolean) =>
    watch('password')
      ? check
        ? Colors.kellyGreen
        : Colors.mediumCarmine
      : Colors.nero;

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <HeaderComponent title="Đăng Ký" />
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
          label={'Email'}
          isRequired
          wrapperStyle={{marginTop: 10}}
          value={watch('email')}
          onChangeText={text => setValue('email', text)}
          errorMessages={errors?.email?.message}
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

        <FloatingLabelInput
          label={'Nhập Lại Mật Khẩu'}
          isRequired
          wrapperStyle={{marginTop: 10}}
          isSecure
          value={watch('confirmPassword')}
          onChangeText={text => setValue('confirmPassword', text)}
          errorMessages={errors?.confirmPassword?.message}
        />

        <View style={styles.validationTextContainer}>
          <View style={styles.validationTextRow}>
            <TickCircle color={textColor(checkOne)} />

            <AppText
              style={[styles.validationText, {color: textColor(checkOne)}]}>
              {'Độ dài mật khẩu phải từ 6 đến 15 ký tự'}
            </AppText>
          </View>

          <View style={styles.validationTextRow}>
            <TickCircle color={textColor(checkTwo)} />

            <AppText
              style={[styles.validationText, {color: textColor(checkTwo)}]}>
              {
                'Mật khẩu phải bao gồm chữ viết hoa, chữ viết thường, số và ít nhất 1 kí tự đặc biệt.'
              }{' '}
              {'\n'}
              {'@#$%*?&!.-_> </^~`'}{' '}
            </AppText>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Đăng Ký</Text>
        </TouchableOpacity>
        <SpaceComponent height={80} />
        <View style={{flexDirection: 'row'}}>
          <View style={styles.line}></View>
        </View>
        <SpaceComponent height={40} />
        <View style={styles.textContainer}>
          <Text style={styles.textforgot}>
            Bạn đã có tài khoản?
            <Text
              style={{color: Colors.acentorange}}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              {' '}
              Đăng Nhập
            </Text>
          </Text>
        </View>
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
  validationTextContainer: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 10,
  },

  validationTextRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },

  validationText: {
    fontSize: 14,
    flex: 1,
    color: Colors.nero,
    marginLeft: 15,
    textAlign: 'justify',
    lineHeight: 20,
  },
});
export default RegisterScreen;
