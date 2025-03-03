import {Images} from '@src/assets';
import HeaderComponent from '@src/components/HeaderComponent';
import {Colors, Fonts} from '@src/styles';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Progress from 'react-native-progress';
import SpaceComponent from '@src/components/SpaceComponent';
import BarChartComponent from './ProfileComponent/BarChartComponent';

const ProfileScreen = () => {
  const totalHours = 1500;
  const completedHours = 1000;
  const totalBooks = 10;
  const completedBooks = 7;
  return (
    <ScrollView style={styles.container}>
      <HeaderComponent title="Cá Nhân" padding noBack />
      <View style={styles.containerprofile}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={Images.avatar} />
          <TouchableOpacity style={styles.iconWrapper}>
            <FontAwesome5 name="camera" size={16} color={Colors.white} />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Quang Huy</Text>
        <TouchableOpacity style={styles.inform}>
          <Text style={styles.text}>Chỉnh sửa thông tin cá nhân</Text>
          <FontAwesome5
            name="chevron-right"
            size={16}
            color={Colors.primary2}
          />
        </TouchableOpacity>
        <View style={styles.inform}>
          <Text style={styles.textrank}>Thành viên hạng vàng</Text>
          <FontAwesome5 name="crown" size={18} color={Colors.gold} />
        </View>
      </View>
      <View style={styles.containerBook}>
        <View style={[styles.inform, {alignItems: 'center'}]}>
          <Text style={styles.title2}>Hạng thành viên</Text>
          <TouchableOpacity>
            <FontAwesome
              name="question-circle-o"
              size={20}
              color={Colors.primary2}
            />
          </TouchableOpacity>
        </View>
        <Text style={[styles.text, {marginTop: 16}]}>
          Đọc 1500 giờ và 10 đầu sách để thăng hạng thành viên
        </Text>
        <View style={styles.containerProgress}>
          <Progress.Bar
            progress={completedHours / totalHours}
            width={300}
            color={Colors.primary2}
          />
          <Text
            style={[
              styles.text,
              {marginVertical: 10},
            ]}>{`${completedHours} giờ / ${totalHours} giờ`}</Text>

          {/* Thanh tiến trình cho sách */}
          <Progress.Bar
            progress={completedBooks / totalBooks}
            width={300}
            color={Colors.primary2}
          />
          <Text
            style={[
              styles.text,
              {marginVertical: 10},
            ]}>{`${completedBooks} sách / ${totalBooks} sách`}</Text>
        </View>
        <Text style={styles.title2}>Thành tựu</Text>
        <View style={styles.row}>
          <View style={styles.card}>
            <Image style={styles.img} source={Images.book} />
            <Text style={styles.value}>24 sách</Text>
            <Text style={styles.subLabel}>đã đọc</Text>
          </View>

          {/* Thành tựu 2: Giờ đã đọc */}
          <View style={styles.card}>
            <Image style={styles.img} source={Images.clock} />
            <Text style={styles.value}>2234 giờ</Text>
            <Text style={styles.subLabel}>đã đọc</Text>
          </View>

          {/* Thành tựu 3: Giờ đã nghe */}
          <View style={styles.card}>
            <Image style={styles.img} source={Images.audiobook} />
            <Text style={styles.value}>30 giờ</Text>
            <Text style={styles.subLabel}>đã nghe</Text>
          </View>
        </View>
        <Text style={styles.title2}>Thời gian đọc sách trong tuần</Text>
        <BarChartComponent />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgcolor,
  },
  containerprofile: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerBook: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    paddingHorizontal: 16,
    overflow: 'hidden',

    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
    borderRadius: 64,
  },
  imageContainer: {
    borderWidth: 3,
    borderRadius: 64,
    borderColor: Colors.primary2,
  },
  iconWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 6,
    backgroundColor: Colors.primary2,
    borderRadius: 50,
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.italicBold,
    marginTop: 10,
    color: Colors.primary2,
  },
  text: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.neroGrey,
    lineHeight: 16,
    marginRight: 4,
  },
  inform: {
    flexDirection: 'row',
    marginTop: 10,
  },
  textrank: {
    fontFamily: Fonts.semiBold,
    fontSize: 16,
    color: Colors.primary2,
    marginRight: 4,
  },
  title2: {
    fontFamily: Fonts.italicBold,
    fontSize: 20,
    flex: 1,
    color: Colors.primary2,
  },
  containerProgress: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 8,
    borderRadius: 10,
    width: 100,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  subLabel: {
    fontSize: 14,
    color: '#777',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  img: {
    width: 60,
    height: 60,
  },
});
export default ProfileScreen;
