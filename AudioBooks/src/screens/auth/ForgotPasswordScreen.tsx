import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import {AppButton} from '@src/components/AppButton';
import {AppText} from '@src/components/AppText';
import {FloatingLabelInput} from '@src/components/FloatingLabelInput';
import {Colors} from '@src/styles';
import {useMutation} from '@tanstack/react-query';
import React, {useMemo, useState} from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as yup from 'yup';

import styles from './styles';
import {ArrowLeft2} from 'iconsax-react-native';
import HeaderComponent from '@src/components/HeaderComponent';
import SpaceComponent from '@src/components/SpaceComponent';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [sendSuccess, setSendSuccess] = useState(false);
  const [responseEmail, setResponseEmail] = useState<string>('');

  const forgotSchema = useMemo(
    () =>
      yup.object().shape({
        userName: yup.string().required('Vui lòng không để trống'),
      }),
    [],
  );

  const {
    setValue,
    watch,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(forgotSchema),
    mode: 'all',
  });

  const onSubmit = (data: any) => {
    console.log(data.userName);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}>
        <View>
          <HeaderComponent title="Quên Mật Khẩu" color={Colors.primary2} />
          <SpaceComponent height={36} />
          {sendSuccess ? (
            <AppText
              style={[styles.forgotPassTxt, styles.sendForgotSuccessText]}>
              Đã gửi thông báo đến QTV. Vui lòng chờ đến khi nhận được thông báo
              mật khẩu mới tại email {responseEmail}!
            </AppText>
          ) : (
            <>
              <FloatingLabelInput
                label="Vui lòng nhập tên tài khoản để xác thực"
                wrapperStyle={{marginTop: 25}}
                outlineColor={Colors.black23}
                value={watch('userName')}
                onChangeText={text =>
                  setValue('userName', text, {
                    shouldValidate: true,
                  })
                }
                errorMessages={errors?.userName?.message}
              />
            </>
          )}

          <AppButton
            label={sendSuccess ? 'Xong' : 'Gửi'}
            additionalStyles={[
              styles.button,
              {
                width: 93,
              },
            ]}
            contentStyle={{}}
            mode="contained"
            onPress={() => {
              if (sendSuccess) {
                navigation.goBack();
              } else {
                handleSubmit(onSubmit)();
              }
            }}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  sendForgotSuccessText: {
    textAlign: 'center',
    color: Colors.black666,
    marginTop: 25,
  },
});
export default ForgotPasswordScreen;
