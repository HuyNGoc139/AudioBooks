import {Images} from '@src/assets';
import Container from '@src/components/Container';
import {RootState} from '@src/hooks/store';
import {Colors, Fonts} from '@src/styles';
import {useEffect, useState} from 'react';
import {
  FlatList,
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
import ReadMoreButton from '@src/screens/app/HomeComponent/ReadMoreButton';
import BookList from '@src/screens/app/HomeComponent/BookReadMore';
import SectionHeader from './HomeComponent/MoreButton';
import AuthorList from './HomeComponent/Author';
import AuthorItem from './HomeComponent/Author';
import BookCard from './HomeComponent/BookCard';

const HomeScreen = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const currentTime = new Date();
  const [selectedTopics, setSelectedTopics] = useState<string | null>(null);

  const bookData = {
    image:
      'https://www.nxbtre.com.vn/Images/Book/NXBTreStoryFull_02482010_104821.jpg',
    title: 'The Design Of Everyday Things',
    author: 'Luke Wroblewski',
    rating: 4.5,
    description:
      'Được xem là 1 trong những cuốn sách nền tảng nhất, căn bản nhất dành cho những ai muốn tìm hiểu về UI/UX Design...',
    isSaved: true,
  };

  const books = [
    {
      id: '1',
      title: 'The Psychology of Money',
      image:
        'https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UF1000,1000_QL80_.jpg',
      progress: 60, // % đọc
    },
    {
      id: '2',
      title: 'PSALMS',
      image: 'https://images.unsplash.com/photo-1526289032122-5440e6dbb27b',
      progress: 40,
    },
    {
      id: '3',
      title: 'Design Anthology',
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765',
      progress: 80,
    },
    {
      id: '4',
      title: 'Design Anthology',
      image:
        'https://www.nxbtre.com.vn/Images/Book/NXBTreStoryFull_02482010_104821.jpg',
      progress: 80,
    },
  ];

  const users: any[] = [
    {
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      name: 'Jon Yablonski',
      role: 'Senior UX Designer',
      bookCount: 32,
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
      name: 'Jon Yablonski',
      role: 'Senior UX Designer',
      bookCount: 32,
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
      name: 'Jon Yablonski',
      role: 'Senior UX Designer',
      bookCount: 32,
    },
  ];

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

  const handleTopicPress = (topic: string) => {
    setSelectedTopics(topic);
  };

  return (
    <ScrollView style={styles.container}>
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
      <View>
        <ReadMoreButton />
        <View style={{marginTop: 10}}>
          <BookList books={books} isProgress={true} />
        </View>
      </View>
      <View style={styles.containerBook}>
        <Text style={styles.textTitle}>Chủ đề bạn quan tâm</Text>
        <FlatList
          data={topics}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item: any) => item}
          contentContainerStyle={styles.topicsContainer}
          renderItem={({item}: {item: any}) => (
            <TouchableOpacity
              style={[
                styles.topicButton,
                selectedTopics === item && styles.selectedTopicButton,
              ]}
              onPress={() => handleTopicPress(item)}>
              <Text style={styles.topicText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
        <BookList books={books} isSave isShowTitle />
        <SectionHeader
          title="Sách hay trong tuần"
          onPress={() => console.log('Xem thêm được bấm!')}
        />

        <BookCard book={bookData} />

        <SectionHeader
          title="Tác giả nổi tiếng"
          onPress={() => console.log('Xem thêm được bấm!')}
        />
        <FlatList
          data={users}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <AuthorItem item={item} />}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.homebg,
  },
  textTitle: {
    color: Colors.primary2,
    fontSize: 20,
    fontFamily: Fonts.italicBold,
    paddingLeft: 16,
    marginBottom: 16,
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
    paddingVertical: 20,
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
  topicsContainer: {
    marginLeft: 16,
    marginBottom: 16,
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
});
export default HomeScreen;
