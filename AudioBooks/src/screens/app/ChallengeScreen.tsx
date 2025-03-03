import {Images} from '@src/assets';
import HeaderComponent from '@src/components/HeaderComponent';
import {Colors} from '@src/styles';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const ChallengeScreen = () => {
  return (
    <ImageBackground style={{flex: 1}} source={Images.bgchalleggen}>
      <HeaderComponent title="Thử thách" padding noBack />
      <View style={styles.containerBook}></View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  containerBook: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    paddingHorizontal: 16,
    overflow: 'hidden',

    marginTop: 10,
  },
});
export default ChallengeScreen;
