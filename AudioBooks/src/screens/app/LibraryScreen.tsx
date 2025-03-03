import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import BookList from './HomeComponent/BookReadMore';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors, Fonts} from '@src/styles';

const books = [
  {
    id: '1',
    title: 'Company of One',
    image:
      'https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    id: '2',
    title: 'PSALMS',
    image: 'https://images.unsplash.com/photo-1526289032122-5440e6dbb27b',
  },
  {
    id: '3',
    title: 'The Psychology of Money',
    image:
      'https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    id: '4',
    title: 'The Picture of Dorian Gray',
    image:
      'https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    id: '5',
    title: 'How Innovation Works',
    image:
      'https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UF1000,1000_QL80_.jpg',
  },
];
const books2 = [
  {
    id: '1',
    title: 'ádaaaaaaaaaaaaaaaaaaaaaaa',
    image:
      'https://www.nxbtre.com.vn/Images/Book/NXBTreStoryFull_02482010_104821.jpg',
  },
  {
    id: '2',
    title: 'ádaaaaaaaaaaaaaaaaaaaaaaa',
    image:
      'https://www.nxbtre.com.vn/Images/Book/NXBTreStoryFull_02482010_104821.jpg',
  },
  {
    id: '3',
    title: 'ádaaaaaaaaaaaaaaaaaaaaaaa',
    image:
      'https://www.nxbtre.com.vn/Images/Book/NXBTreStoryFull_02482010_104821.jpg',
  },
];

// Component hiển thị danh sách sách

const LibraryScreen = () => {
  const [selectedTab, setSelectedTab] = useState('favorite'); // Mặc định chọn tab "Yêu thích"

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Thư viện</Text>
        <TouchableOpacity>
          <Ionicons name="search" size={24} color={Colors.primary2} />
        </TouchableOpacity>
      </View>

      {/* Thanh tab */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'favorite' && styles.activeTab]}
          onPress={() => setSelectedTab('favorite')}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 'favorite' && styles.activeTabText,
            ]}>
            Yêu thích
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, selectedTab === 'library' && styles.activeTab]}
          onPress={() => setSelectedTab('library')}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 'library' && styles.activeTabText,
            ]}>
            Thư viện
          </Text>
        </TouchableOpacity>
      </View>

      {/* Nội dung hiển thị dựa trên tab được chọn */}
      <View style={styles.contentContainer}>
        {selectedTab === 'favorite' ? (
          <BookList books={books2} isSave isColumn isShowTitle />
        ) : (
          <BookList books={books} isColumn isShowTitle />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.bgcolor, padding: 18},
  title: {
    fontSize: 20,
    fontFamily: Fonts.bold,
    textAlign: 'center',
    flex: 1,
    color: Colors.primary2,
  },
  tabContainer: {
    flexDirection: 'row',
    borderRadius: 16,
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#3a5a40',
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#3a5a40',
  },
  tabText: {
    fontSize: 16,
    fontFamily: Fonts.semiBold,
    color: '#3a5a40',
  },
  activeTabText: {
    color: '#fff',
  },
  contentContainer: {
    flex: 1,
  },
  bookItem: {
    flex: 1,
    margin: 8,
    alignItems: 'center',
  },
  bookImage: {
    width: 120,
    height: 180,
    borderRadius: 8,
  },
  bookTitle: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
});

export default LibraryScreen;
