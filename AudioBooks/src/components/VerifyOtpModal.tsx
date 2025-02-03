import React, {useEffect, useMemo, useState} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Modal from 'react-native-modal';
import {OtpInput} from 'react-native-otp-entry';
import {MODAL_HEIGHT, MODAL_WIDTH, scaleSize} from '@src/utils/ultils';
import {useDispatch} from 'react-redux';
import {handleSendOTP} from '@src/utils/OTP';
import axios from 'axios';
import {AppText} from './AppText';
import {Colors} from '@src/styles';
import {AppDispatch} from '@src/hooks/store';
import {CountdownText} from './account/CountdownText';
const {width, height} = Dimensions.get('window');
export type TVerifyOTPModalProps = {
  isVisible: boolean;
  onClose: () => void;
  email: string;
  password: string;
  isActive?: boolean;
  userId?: string;
  emailOTP: string;
  isVerifyEmail?: boolean;
  newEmail?: string;
  updateUser2?: any;
};

export const VerifyOTPModal = (props: TVerifyOTPModalProps) => {
  const {
    isVisible,
    onClose,
    email,
    password,
    isActive,
    userId,
    emailOTP,
    isVerifyEmail,
    newEmail,
    updateUser2,
  } = props;
  const [otpCode, setOtpCode] = useState('');
  const [timer, setTimer] = useState(300);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const [verifyError, setVerifyError] = useState<string>('');
  const [hasSentCode, setHasSentCode] = useState(true);
  const {widthScale, heightScale} = scaleSize(MODAL_WIDTH, MODAL_HEIGHT);
  const dispatch = useDispatch<AppDispatch>();
  const addEmailOTPActive = async () => {
    try {
      console.log('Added emailOTPActive successfully for user:', userId);
    } catch (error: any) {
      console.error('Error adding emailOTPActive:', error.message);
    }
  };

  const handleVerifyOTP = async (
    email: string,
    otpCode: any,
    password: string,
  ) => {
    const otp = parseInt(otpCode, 10);
    try {
      const response: any = await axios.post(
        'http://172.20.10.2:3000/api/otp/verify',
        {
          email: emailOTP,
          otp,
        },
      );
      if (response?.status == 200) {
      } else {
        console.log('OTP verification failed.');
      }
    } catch (error) {
      console.log('Error verifying OTP.');
    }
  };

  const closeModal = () => {
    onClose();
    setVerifyError('');
    setOtpCode('');
    setTimer(300);
  };

  const errorVerifyMessageMap = useMemo(
    () =>
      new Map([
        ['error.wrong-authentication-code', 'auth.otp code wrong'],
        ['error.otp-code-is-expired', 'auth.otp code expired'],
        ['internal server error', 'auth.error occurred'],
      ]),
    [],
  );

  const modalScaleStyle: StyleProp<ViewStyle> = {
    width: widthScale,
    minHeight: heightScale,
  };

  return (
    <Modal
      isVisible={isVisible}
      onModalShow={() => {
        setIsTimerActive(true);
      }}
      onModalHide={closeModal}>
      <View style={[styles.container, modalScaleStyle]}>
        <TouchableOpacity style={styles.closeIcon} onPress={closeModal}>
          <Image
            source={require('../../assets/close.png')}
            style={{width: 24, height: 24}}
          />
        </TouchableOpacity>
        <AppText fontFamily="bold" style={styles.verifyText}>
          Xác thực hay yếu tố
        </AppText>

        <Image source={require('../../assets/otp.png')} />

        <AppText
          style={[
            styles.verifyDescription,
            {
              marginTop: 5,
            },
          ]}>
          Để đăng nhập, vui lòng điền mã xác nhận được gửi tới email:
        </AppText>

        <AppText
          style={[
            styles.verifyDescription,
            {
              marginTop: 16,
            },
          ]}>
          {emailOTP}
        </AppText>

        <View style={styles.otpPinWrapper}>
          <OtpInput
            numberOfDigits={6}
            onTextChange={text => {
              if (verifyError) {
                setVerifyError('');
              }
              setOtpCode(text);
            }}
            textInputProps={{
              value: otpCode,
            }}
            theme={{
              containerStyle: {
                alignSelf: 'center',
              },
              pinCodeTextStyle: styles.pinCodeTextStyle,
              pinCodeContainerStyle: styles.pinCodeContainerStyle,
            }}
            onFilled={text => {}}
          />
        </View>

        {verifyError !== '' && (
          <AppText style={[styles.verifyDescription, styles.verifyErrorText]}>
            {errorVerifyMessageMap.get(verifyError)}
          </AppText>
        )}

        <TouchableOpacity
          style={[
            styles.button,
            {backgroundColor: otpCode.length !== 6 ? 'gray' : 'green'},
          ]}
          disabled={otpCode.length !== 6}
          onPress={() => handleVerifyOTP(email, otpCode, password)}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: '700',
              textAlign: 'center',
            }}>
            Verify
          </Text>
        </TouchableOpacity>

        <View style={{marginTop: 15, marginBottom: 50}}>
          {isTimerActive ? (
            <>
              <AppText style={styles.verifyDescription}>
                {hasSentCode
                  ? 'Đã gửi mã xác thực. Vui lòng kiểm tra tin nhắn!'
                  : 'Vui lòng thử lại sau vài phút!'}
              </AppText>
              <CountdownText
                seconds={timer}
                onCountdownEnd={() => {
                  handleSendOTP(email);
                  setIsTimerActive(false);
                }}
                textStyle={styles.timerText}
              />
            </>
          ) : (
            <AppText style={styles.verifyDescription}>
              Chưa nhận được mã?{' '}
              <AppText
                style={[styles.verifyDescription, {color: Colors.primary}]}
                onPress={() => {
                  //code
                  setIsTimerActive(true);
                }}>
                Gửi lại
              </AppText>
            </AppText>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    minHeight: height * 0.6,
    borderRadius: 15,
    alignItems: 'center',
    padding: 20,
    alignSelf: 'center',
  },

  closeIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 9999,
  },

  verifyText: {
    fontSize: 18,
    marginTop: 30,
    marginBottom: 16,
    textAlign: 'center',
    color: Colors.nero,
  },

  verifyErrorText: {
    color: Colors.mediumCarmine,
    marginTop: 10,
  },

  verifyDescription: {
    fontSize: 14,
    color: Colors.nero,
    textAlign: 'center',
  },

  otpPinWrapper: {
    width: '60%',
    marginTop: 10,
    alignSelf: 'center',
  },

  textBtn: {
    fontSize: 12,
    color: Colors.white,
  },

  timerText: {
    fontSize: 14,
    color: Colors.primary,
    textAlign: 'center',
  },

  button: {
    width: 150,
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 20,
    height: 36,
    justifyContent: 'center',
  },

  contentButton: {
    width: 150,
  },

  resendText: {
    fontSize: 14,
    color: Colors.primary,
  },

  pinCodeTextStyle: {
    fontSize: 28,
  },

  pinCodeContainerStyle: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomWidth: 2,
    width: 18,
    borderBottomColor: Colors.black,
  },
});
