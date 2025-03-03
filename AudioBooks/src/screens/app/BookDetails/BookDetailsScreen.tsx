import {Colors, Fonts} from '@src/styles';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ExpandDescription from '../AuthorScreen/Components/ExpandDescription';
import HeaderComponent from '@src/components/HeaderComponent';
import {useNavigation} from '@react-navigation/native';
import {ArrowLeft2} from 'iconsax-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useState} from 'react';
import TopicsComponent from '@src/components/Topics';
import BookCard from './Components/BookCard';

const BookDetailsScreen = () => {
  const navigation = useNavigation();
  const [saveBook, setSaveBook] = useState<boolean>(true);
  const topics = ['Tâm Lý Học', 'Khoa Học', 'Kinh dị'];
  const bookData = {
    imageUrl:
      'https://www.nxbtre.com.vn/Images/Book/NXBTreStoryFull_02482010_104821.jpg',
    title: 'The Design Of Everyday Things',
    author: 'Luke Wroblewski',
    rating: 4.5,
    reviews: '6.9k',
    isSaved: true,
  };
  const chapters = [
    {id: 1, title: 'Đừng bắt tôi suy nghĩ'},
    {id: 2, title: 'Cách người dùng sử dụng trang Web trên thực tế'},
    {id: 3, title: 'Usability testing quan trọng, chỉ 1k cần'},
    {id: 4, title: 'Usability testing quan trọng, chỉ 1k cần'},
    {id: 5, title: 'Usability testing quan trọng, chỉ 1k cần'},
    {id: 6, title: 'Usability testing quan trọng, chỉ 1k cần'},
    {id: 7, title: 'Usability testing quan trọng, chỉ 1k cần'},
  ];

  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
      <View style={styles.headerContainer}>
        {/* Nút Back */}
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>

        {/* Nút Bookmark và Menu */}
        <View style={styles.rightIcons}>
          <TouchableOpacity
            onPress={() => {
              setSaveBook(!saveBook);
            }}
            style={styles.iconSpacing}>
            {saveBook ? (
              <Ionicons name="bookmark" size={20} color={'#FF5722'} />
            ) : (
              <Ionicons name="bookmark-outline" size={20} color={'#000'} />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <BookCard book={bookData} />
      <View style={styles.containerBook}>
        <Text style={styles.textTitle}>Thể loại</Text>
        <TopicsComponent
          // onPress={handleTopicPress}
          disable
          topics={topics}
        />
        <ExpandDescription
          title="Mô tả"
          description="The Design Of Everyday Things được xem là 1 trong những cuốn sách nền
          tảng nhất, cần bản nhất dành cho những ai muốn tìm hiểu về UI/UX
          Design. Chỉ qua vỏn vẹn 200 trang sách, Steve Krug đã diễn giải những
          cách tiếp cận mang tính thường thức tới quá trình phát triển 1 sản
          phẩm, qua đó góp phần biến những khái niệm mơ hồ như Usability & User
          Experience trở nên rõ ràng, dễ nắm bắt và đột..."
        />
        <Text style={styles.textTitle}>Mục lục</Text>
        {chapters.map((chapter, index) => (
          <TouchableOpacity key={chapter.id}>
            <Text style={styles.name}>
              <Text style={{fontFamily: Fonts.bold}}>Chương {chapter.id}:</Text>{' '}
              {chapter.title}
            </Text>
          </TouchableOpacity>
        ))}
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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
    marginBottom: 0,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSpacing: {
    marginRight: 10,
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
  name: {
    fontSize: 16,
    fontFamily: Fonts.regular,
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
export default BookDetailsScreen;
