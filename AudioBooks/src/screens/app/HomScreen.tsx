import {Images} from '@src/assets';
import Container from '@src/components/Container';
import {RootState} from '@src/hooks/store';
import {Colors} from '@src/styles';
import {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const currentTime = new Date();

  const getGreeting = () => {
    const hours = currentTime.getHours();

    if (hours >= 6 && hours < 12) {
      return 'Chào buổi sáng';
    } else if (hours >= 12 && hours < 18) {
      return 'Chào buổi chiều';
    } else {
      return 'Chào buổi tối';
    }
  };
  return (
    <View style={styles.container}>
      <Image style={styles.imagebg} source={Images.home}></Image>
      <View style={{flexDirection: 'row', position: 'absolute', top: 16}}>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>
            "Cùng dành chút thời gian đọc sách nhé!"
          </Text>
          <Text style={styles.authorText}>
            {getGreeting()}, {user?.username}
          </Text>
        </View>
        <View style={[styles.quoteBox2]}>
          <TouchableOpacity>
            <Ionicons name="search" size={24} color={'#858c88'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerBook}>
        <Text>adas</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.homebg,
  },
  imagebg: {
    width: '100%',
    height: 400,
    backgroundColor: Colors.homebg,
    alignSelf: 'center',
  },
  containerBook: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    padding: 20,
    overflow: 'hidden',
    marginTop: 10,
  },
  quoteBox: {
    backgroundColor: '#dfe3e2',
    paddingHorizontal: 16,
    borderRadius: 48,
    elevation: 5, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginLeft: 16,
    marginTop: 16,
    paddingVertical: 4,
    flex: 1,
  },
  quoteBox2: {
    backgroundColor: '#dfe3e2',
    paddingHorizontal: 16,
    borderRadius: 100,
    elevation: 5, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginRight: 16,
    marginLeft: 8,
    marginTop: 16,
    justifyContent: 'center',
  },
  quoteText: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#333',
  },
  authorText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    textAlign: 'right',
  },
});
export default HomeScreen;
