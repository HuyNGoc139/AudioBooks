import React, {useState, useRef, useCallback, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {IconButton} from 'react-native-paper';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {Images} from '@src/assets';
import CustomBottomSheetModal from '@src/components/BottomSheetModal';
import HeaderComponent from '@src/components/HeaderComponent';
import {Colors, Fonts} from '@src/styles';
import BookList from '../HomeComponent/BookReadMore';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchScreen = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const sortSheetRef = useRef<BottomSheetModal>(null);
  const books = [
    {
      id: '1',
      title: 'The Psychology of Money',
      image:
        'https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UF1000,1000_QL80_.jpg',
      progress: 60, // % đọc
      catelori: 'Kinh dị',
      rating: 1,
    },
    {
      id: '2',
      title: 'PSALMS',
      image: 'https://images.unsplash.com/photo-1526289032122-5440e6dbb27b',
      progress: 40,
      catelori: 'Kinh dị',
      rating: 2,
    },
    {
      id: '3',
      title: 'Design Anthology',
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765',
      progress: 80,
      catelori: 'Khoa Học',
      rating: 4,
    },
    {
      id: '4',
      title: 'Design Anthology',
      image:
        'https://www.nxbtre.com.vn/Images/Book/NXBTreStoryFull_02482010_104821.jpg',
      progress: 80,
      catelori: 'Bí Ẩn',
      rating: 4,
    },
    {
      id: '5',
      title: 'Quang Huy',
      image:
        'https://www.nxbtre.com.vn/Images/Book/NXBTreStoryFull_02482010_104821.jpg',
      progress: 80,
      catelori: 'Bí Ẩn',
      rating: 5,
    },
    {
      id: '6',
      title: 'Quang Hair',
      image:
        'https://www.nxbtre.com.vn/Images/Book/NXBTreStoryFull_02482010_104821.jpg',
      progress: 80,
      catelori: 'Bí Ẩn',
      rating: 5,
    },
    {
      id: '7',
      title: 'Xuan Kiet',
      image:
        'https://www.nxbtre.com.vn/Images/Book/NXBTreStoryFull_02482010_104821.jpg',
      progress: 80,
      catelori: 'Bí Ẩn',
      rating: 4.3,
    },
    {
      id: '7',
      title: 'The Hai',
      image:
        'https://www.nxbtre.com.vn/Images/Book/NXBTreStoryFull_02482010_104821.jpg',
      progress: 80,
      catelori: 'Bí Ẩn',
      rating: 4.2,
    },
  ];

  const [query, setQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string>('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<string | null>(null);
  const [filteredBooks, setFilteredBooks] = useState(books);

  const genres = [
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
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 1000);

    return () => clearTimeout(handler); // Hủy timeout khi query thay đổi trước 1.5s
  }, [query]);

  // Lọc sách dựa trên selectedGenre, debouncedQuery và sortOrder
  useEffect(() => {
    let results = books;

    // Lọc theo thể loại
    if (selectedGenre) {
      results = results.filter(book => book.catelori === selectedGenre);
    }

    // Sắp xếp A-Z hoặc Z-A
    if (sortOrder === 'A-Z') {
      results = [...results].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === 'Z-A') {
      results = [...results].sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortOrder === 'Rating Tăng Dần') {
      results = [...results].sort((a, b) => a.rating - b.rating);
    } else if (sortOrder === 'Rating Giảm Dần') {
      results = [...results].sort((a, b) => b.rating - a.rating);
    }
    // Lọc theo từ khóa tìm kiếm (sử dụng debouncedQuery thay vì query)
    if (debouncedQuery) {
      results = results.filter(book =>
        book.title.toLowerCase().includes(debouncedQuery.toLowerCase()),
      );
    }

    setFilteredBooks(results);
  }, [debouncedQuery, selectedGenre, sortOrder]); // Chạy lại khi có thay đổi

  // Chọn thể loại
  const handleSelectGenre = (genre: string) => {
    setSelectedGenre(genre);
    bottomSheetModalRef.current?.dismiss();
  };

  // Chọn kiểu sắp xếp
  const handleSort = (order: string) => {
    setSortOrder(order);
    sortSheetRef.current?.dismiss();
  };

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <HeaderComponent title="Tìm Kiếm" color={Colors.primary2} padding />
        <View style={styles.searchBar}>
          <Ionicons name="search" size={24} color={Colors.primary2} />
          <TextInput
            style={styles.input}
            placeholder="Tìm kiếm"
            value={query}
            onChangeText={setQuery}
            // onSubmitEditing={handleSearch}
          />
          {query ? (
            <Ionicons
              name="close-circle-outline"
              size={24}
              color={Colors.primary2}
              onPress={() => setQuery('')}
            />
          ) : (
            <></>
          )}
        </View>
        <View style={styles.filterSortContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => bottomSheetModalRef.current?.present()}>
            <Image source={Images.filterIcon}></Image>
            {selectedGenre ? <View style={styles.dot}></View> : <></>}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => sortSheetRef.current?.present()}>
            <Text style={styles.textButton}>A-Z</Text>
            <FontAwesome name="unsorted" size={20} />
            {sortOrder ? <View style={styles.dot}></View> : <></>}
          </TouchableOpacity>
        </View>
        <View style={styles.containerBook}>
          {filteredBooks.length === 0 ? (
            <View style={styles.noResults}>
              <Image source={Images.logo} style={styles.image} />
              <Text style={styles.title}>Không tìm được đầu sách nào</Text>
              <Text style={styles.subtitle}>
                Không có kết quả cho "{query}"
              </Text>
            </View>
          ) : (
            <BookList books={filteredBooks} isShowTitle isColumn />
          )}
        </View>
        {/* Bottom Sheet Bộ lọc */}
        <CustomBottomSheetModal
          ref={bottomSheetModalRef}
          title="Chọn Thể Loại"
          filterArray={genres}
          onSelectGenre={handleSelectGenre}
          selected={selectedGenre}
        />

        {/* Bottom Sheet Sắp xếp */}
        <CustomBottomSheetModal
          ref={sortSheetRef}
          title="Sắp xếp theo"
          filterArray={['A-Z', 'Z-A', 'Rating Tăng Dần', 'Rating Giảm Dần']}
          selected={sortOrder}
          onSelectGenre={handleSort}
        />
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgcolor,
    // padding: 16,
    paddingVertical: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 200,
    paddingHorizontal: 12,
    elevation: 2,
    marginHorizontal: 18,
    borderWidth: 1,
    borderColor: Colors.primary2,
  },
  input: {
    flex: 1,
    height: 40,
  },
  filterSortContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 18,
  },
  button: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 24,
  },
  noResults: {
    marginTop: 50,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
  containerBook: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    padding: 16,
    overflow: 'hidden',

    marginTop: 10,
  },
  textButton: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    marginRight: 4,
  },
  dot: {
    width: 12,
    height: 12,
    backgroundColor: Colors.primary,
    borderRadius: 12,
    position: 'absolute',
    top: 6,
    right: -4,
  },
});

export default SearchScreen;
