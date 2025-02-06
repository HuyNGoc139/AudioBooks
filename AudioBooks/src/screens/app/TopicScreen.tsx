import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ButtonComponent from '@src/components/ButtonComponent';
import Container from '@src/components/Container';
import HeaderComponent from '@src/components/HeaderComponent';
import SpaceComponent from '@src/components/SpaceComponent';
import {Colors} from '@src/styles';
import {TAppStackParamList} from '@src/types/routes/app.route';
import React, {useCallback, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {API_ENDPOINT} from '@env';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '@src/hooks/store';
import {updateFavorite} from '@src/hooks/authAction';

const TopicScreen = () => {
  const [selectedTopics, setSelectedTopics] = useState<any>([]);
  const navigation =
    useNavigation<NativeStackNavigationProp<TAppStackParamList>>();
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();
  console.log(user);
  const topics = [
    'Tâm Lý Học',
    'Khoa Học',
    'Kinh dị',
    'Bí Ẩn',
    'Sức Khoẻ',
    'Tình Cảm',
    'Giả tưởng và khoa học viễn tưởng',
    'Truyện Ngắn',
    'Lịch Sử',
    'Trinh Thám',
    'Truyền cảm hứng',
    'Khác',
  ];

  const handleTopicPress = (topic: any) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t: any) => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const onSkip = useCallback(() => {
    navigation.replace('HomeTab');
  }, [navigation]);

  const onContinue = useCallback(() => {
    if (selectedTopics.length == 0) {
      Alert.alert('Vui lòng chọn một chủ đề!');
    } else {
      dispatch(
        updateFavorite({
          userId: user?.id || '',
          favorite: selectedTopics,
        }) as any,
      );
      navigation.replace('HomeTab');
    }
  }, [navigation, selectedTopics, user?.id, dispatch]);

  return (
    <Container>
      <HeaderComponent title="Chủ Đề Quan Tâm" noBack />

      <View style={styles.searchContainer}>
        <Text style={styles.searchText}>Tìm kiếm chủ đề yêu thích</Text>
      </View>

      <SpaceComponent height={40} />

      <View style={styles.topicsContainer}>
        {topics.map(topic => (
          <TouchableOpacity
            key={topic}
            style={[
              styles.topicButton,
              selectedTopics.includes(topic) && styles.selectedTopicButton,
            ]}
            onPress={() => handleTopicPress(topic)}>
            <Text style={[styles.topicText]}>{topic}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.instruction}>
        * Chọn ít nhất 1 chủ đề để Mọt giúp bạn tìm những đầu sách phù hợp với
        bạn.
      </Text>

      <ButtonComponent
        title="Tiếp Tục"
        onPress={onContinue}
        bgcolor={Colors.primary2}
      />

      <ButtonComponent
        title="Bỏ Qua"
        onPress={onSkip}
        bgcolor={Colors.white}
        color={Colors.black}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  searchText: {
    color: 'gray',
  },
  topicsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
    flex: 1,
  },
  topicButton: {
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 16,
    margin: 5,
    borderWidth: 1,
    borderColor: Colors.black15,
  },
  selectedTopicButton: {
    backgroundColor: Colors.select,
  },
  topicText: {
    textAlign: 'center',
  },
  instruction: {
    marginBottom: 20,
    fontSize: 15,
  },
});

export default TopicScreen;
