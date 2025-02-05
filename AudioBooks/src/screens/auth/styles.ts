import {Colors} from '@src/styles';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
  },

  contentContainerList: {
    flex: 1,
  },

  contentContainer: {
    marginTop: 40,
  },

  loginText: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.primary,
  },

  forgotPassWrapper: {
    marginTop: 32,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },

  forgotPassTxt: {
    fontSize: 14,
    color: Colors.primary,
  },

  textBtn: {
    fontSize: 12,
    color: Colors.white,
  },

  button: {
    width: 150,
    alignSelf: 'center',
    marginTop: 68,
    borderRadius: 20,
  },

  language: {
    position: 'absolute',
    top: -15,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },

  versionBuildText: {
    color: Colors.primary,
    fontSize: 12,
    alignSelf: 'center',
    marginTop: 'auto',
  },
  sendForgotSuccessText: {
    textAlign: 'center',
    color: Colors.neroGrey,
    marginTop: 25,
  },
});

export default styles;
