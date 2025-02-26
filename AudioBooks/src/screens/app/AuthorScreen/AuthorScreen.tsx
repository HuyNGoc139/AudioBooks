import Container from '@src/components/Container';
import HeaderComponent from '@src/components/HeaderComponent';
import {Colors, Fonts} from '@src/styles';
import {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ExpandDescription from './Components/ExpandDescription';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TopicsComponent from '@src/components/Topics';
import AuthorInfo from './Components/AuthorInfo';
import BookList from '../HomeComponent/BookReadMore';

const AuthorScreen = () => {
  const [selectedTopics, setSelectedTopics] = useState<string | null>(null);
  const topics = ['Tâm Lý Học', 'Khoa Học', 'Kinh dị'];

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

  const handleTopicPress = (topic: string) => {
    setSelectedTopics(topic);
  };

  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
      <View style={styles.containerHeader}>
        <HeaderComponent title="Tác giả" />
        <View style={styles.containerImage}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Coelhopaulo26012007-1.jpg/330px-Coelhopaulo26012007-1.jpg',
            }}
            style={styles.avatar}
          />
          <Text style={styles.name}>Tô Hoài</Text>
          <View style={styles.infoContainer}>
            <View style={styles.infoItem}>
              <Icon name="book-outline" size={16} color="#4A4A4A" />
              <Text style={styles.infoText}>80 sách</Text>
            </View>
            <View style={styles.infoItem}>
              <Icon name="eye-outline" size={16} color="#4A4A4A" />
              <Text style={styles.infoText}>80 lượt đọc</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.containerBook}>
        <Text style={styles.textTitle}>Thông tin</Text>
        <AuthorInfo
          hometown="Mỹ nhưng mà Mỹ Đình"
          birthDate="1975/05/14"
          occupation="Senior UX Designer"
        />
        <ExpandDescription
          title="Tiểu sử"
          description="The Design Of Everyday Things được xem là 1 trong những cuốn sách nền
          tảng nhất, cần bản nhất dành cho những ai muốn tìm hiểu về UI/UX
          Design. Chỉ qua vỏn vẹn 200 trang sách, Steve Krug đã diễn giải những
          cách tiếp cận mang tính thường thức tới quá trình phát triển 1 sản
          phẩm, qua đó góp phần biến những khái niệm mơ hồ như Usability & User
          Experience trở nên rõ ràng, dễ nắm bắt và đột..."
        />
        <Text style={styles.textTitle}>Sách nổi bật</Text>
        <TopicsComponent
          onPress={handleTopicPress}
          selectedTopics={selectedTopics}
          topics={topics}
        />
        <BookList books={books} isSave isColumn isShowTitle />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeae8',
  },
  textTitle: {
    fontSize: 18,
    marginBottom: 12,
    color: Colors.primary2,
    fontFamily: Fonts.bold,
  },
  containerHeader: {
    padding: 18,
  },
  containerBook: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    padding: 18,
    overflow: 'hidden',
    marginTop: 10,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#4A4A4A',
  },
  name: {
    fontSize: 18,
    fontFamily: Fonts.bold,
    color: Colors.primary2,
    marginVertical: 8,
  },
  infoContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  infoText: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.primary2,
  },
  containerImage: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
    minWidth: 100,
  },
  value: {
    color: '#666',
    flex: 1,
  },
});
export default AuthorScreen;
