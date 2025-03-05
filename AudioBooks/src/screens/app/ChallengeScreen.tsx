import {Images} from '@src/assets';
import ChallengeComponent from '@src/components/ChallegenComponent';
import HeaderComponent from '@src/components/HeaderComponent';
import {Colors, Fonts} from '@src/styles';
import {useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ChallengeScreen = () => {
  const [readingMinutes, setReadingMinutes] = useState(32); // Số phút đọc hiện tại
  const [completedChapters, setCompletedChapters] = useState(2); // Số chương đã hoàn thành
  return (
    <ImageBackground style={{flex: 1}} source={Images.bgchalleggen}>
      <HeaderComponent title="Thử thách" padding noBack />
      <View style={styles.container}>
        <Text style={styles.text}>Sao của bạn:</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.textStar}>400</Text>
          <AntDesign name="star" size={28} color={Colors.gold} />
        </View>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            paddingHorizontal: 50,
            paddingVertical: 10,
            backgroundColor: Colors.primary2,
            borderRadius: 40,
            marginTop: 10,
          }}>
          <Text
            style={{fontFamily: Fonts.bold, fontSize: 16, color: Colors.white}}>
            Đổi Sao
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerBook}>
        <ChallengeComponent />
      </View>
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
  container: {
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontFamily: Fonts.regular,
    color: Colors.primary2,
    fontSize: 15,
  },
  textStar: {
    textAlign: 'center',
    fontFamily: Fonts.bold,
    color: Colors.primary2,
    fontSize: 28,
    marginRight: 6,
  },
});
export default ChallengeScreen;
