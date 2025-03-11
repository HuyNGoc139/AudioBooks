import {Colors, Fonts} from '@src/styles';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ExpandDescription from '../AuthorScreen/Components/ExpandDescription';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useCallback, useMemo, useRef, useState} from 'react';
import TopicsComponent from '@src/components/Topics';
import BookCard from './Components/BookCard';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Rating} from 'react-native-ratings';
import BottomSheetChapter from './Components/BottomSheetChapter';
import {TAppStackParamList} from '@src/types/routes/app.route';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const BookDetailsScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<TAppStackParamList>>();
  const [saveBook, setSaveBook] = useState<boolean>(true);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const readBookRef = useRef<BottomSheetModal>(null);
  const audioBookModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['50%', '90%'], []);

  const handleOpenModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleOpenReadBookModal = useCallback(() => {
    readBookRef.current?.present();
  }, []);
  const handleOpenAudioBookModal = useCallback(() => {
    audioBookModalRef.current?.present();
  }, []);

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
    {title: 'Đừng bắt tôi suy nghĩ'},
    {title: 'Cách người dùng sử dụng trang Web trên thực tế'},
    {title: 'Usability testing quan trọng, chỉ 1k cần'},
    {title: 'Usability testing quan trọng, chỉ 1k cần'},
    {title: 'Usability testing quan trọng, chỉ 1k cần'},
    {title: 'Usability testing quan trọng, chỉ 1k cần'},
    {title: 'Usability testing quan trọng, chỉ 1k cần'},
  ];
  const reviews = [
    {
      id: 1,
      title: 'Sách hay',
      rating: 5,
      comment: 'Đọc mà chẳng hiểu gì hết. Nhưng mà vẫn thích :)',
      user: {
        name: 'Nguyễn Văn A',
        avatar: 'https://i.pravatar.cc/150?img=1', // Avatar ngẫu nhiên
      },
    },
    {
      id: 2,
      title: 'Cũng được',
      rating: 4,
      comment: 'Cũng được nhưng chả hiểu gì hết...',
      user: {
        name: 'Trần Thị B',
        avatar: 'https://i.pravatar.cc/150?img=2',
      },
    },
    {
      id: 3,
      title: 'Sách rất hay =))',
      rating: 2,
      comment:
        'Sách hay nhưng cho 5 sao thành Trung Quốc nên để 1 sao cho nó Việt Nam =))',
      user: {
        name: 'Lê Văn C',
        avatar: 'https://i.pravatar.cc/150?img=3',
      },
    },
    {
      id: 4,
      title: 'Sách hay',
      rating: 3,
      comment: 'Đọc mà chẳng hiểu gì hết. Nhưng mà vẫn thích :)',
      user: {
        name: 'Phạm Thị D',
        avatar: 'https://i.pravatar.cc/150?img=4',
      },
    },
    {
      id: 5,
      title: 'Sách rất hay =))',
      rating: 2,
      comment:
        'Sách hay nhưng cho 5 sao thành Trung Quốc nên để 1 sao cho nó Việt Nam =))',
      user: {
        name: 'Lê Văn C',
        avatar: 'https://i.pravatar.cc/150?img=3',
      },
    },
    {
      id: 6,
      title: 'Sách hay6',
      rating: 3,
      comment: 'Đọc mà chẳng hiểu gì hết. Nhưng mà vẫn thích :)',
      user: {
        name: 'Phạm Thị D',
        avatar: 'https://i.pravatar.cc/150?img=4',
      },
    },
    {
      id: 7,
      title: 'Sách hay7',
      rating: 3,
      comment: 'Đọc mà chẳng hiểu gì hết. Nhưng mà vẫn thích :)',
      user: {
        name: 'Phạm Thị D',
        avatar: 'https://i.pravatar.cc/150?img=4',
      },
    },
    {
      id: 8,
      title: 'Sách hay8',
      rating: 3,
      comment: 'Đọc mà chẳng hiểu gì hết. Nhưng mà vẫn thích :)',
      user: {
        name: 'Phạm Thị D',
        avatar: 'https://i.pravatar.cc/150?img=4',
      },
    },
    {
      id: 9,
      title: 'Sách hay9',
      rating: 3,
      comment: 'Đọc mà chẳng hiểu gì hết. Nhưng mà vẫn thích :)',
      user: {
        name: 'Phạm Thị D',
        avatar: 'https://i.pravatar.cc/150?img=4',
      },
    },
    {
      id: 10,
      title: 'Sách hay10',
      rating: 3,
      comment: 'Đọc mà chẳng hiểu gì hết. Nhưng mà vẫn thích :)',
      user: {
        name: 'Phạm Thị D',
        avatar: 'https://i.pravatar.cc/150?img=4',
      },
    },
    {
      id: 11,
      title: 'Sách hay11',
      rating: 3,
      comment: 'Đọc mà chẳng hiểu gì hết. Nhưng mà vẫn thích :)',
      user: {
        name: 'Phạm Thị D',
        avatar: 'https://i.pravatar.cc/150?img=4',
      },
    },
  ];
  const [selectedTab, setSelectedTab] = useState('all');

  const [visibleCount, setVisibleCount] = useState(5); // Số comment hiển thị ban đầu
  const [rating, setRating] = useState(0);
  const [isShowReview, setIsShowReview] = useState(false);
  const reviewRef = useRef('');
  const titleRef = useRef('');

  const handleCloseModal = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
    setVisibleCount(5);
    setRating(0);
    setIsShowReview(false);
    titleRef.current = '';
    reviewRef.current = '';
  }, []);

  const handleLoadMore = useCallback(() => {
    setVisibleCount(prevCount => Math.min(prevCount + 5, reviews.length));
  }, [reviews.length]);

  const onSendreview = useCallback(() => {
    console.log(titleRef.current, reviewRef.current);
  }, []);

  const onDismiss = useCallback(() => {
    setVisibleCount(5);
    setRating(0);
    setIsShowReview(false);
    titleRef.current = '';
    reviewRef.current = '';
  }, []);

  const ReviewList = ({data, isAll}: {data: any; isAll: boolean}) => (
    <View>
      {isAll ? (
        <View style={{paddingHorizontal: 16}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.title, {marginLeft: 0}]}>Viết đánh giá</Text>
            <TouchableOpacity onPress={() => setIsShowReview(!isShowReview)}>
              <FontAwesome5 name="edit" size={20} color={Colors.primary2} />
            </TouchableOpacity>
          </View>
          {isShowReview == true ? (
            <>
              <Text style={styles.label}>Chạm để xếp hạng:</Text>
              <View style={styles.stars}>
                {[1, 2, 3, 4, 5].map(star => (
                  <TouchableOpacity
                    style={{marginHorizontal: 4}}
                    key={star}
                    onPress={() => setRating(star)}>
                    <AntDesign
                      name="star"
                      size={24}
                      color={star <= rating ? Colors.gold : '#ccc'}
                    />
                  </TouchableOpacity>
                ))}
              </View>
              {/* Ô nhập Tiêu đề */}
              <View
                style={[
                  styles.inputContainer,
                  {
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    borderBottomWidth: 1,
                    borderColor: '#ccc',
                  },
                ]}>
                <Text style={styles.inputLabel}>Tiêu đề</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Tùy chọn"
                  placeholderTextColor="#A0A0A0"
                  defaultValue={titleRef.current}
                  onChangeText={text => (titleRef.current = text)}
                />
              </View>

              {/* Ô nhập Đánh giá */}
              <View
                style={[
                  styles.inputContainer,
                  {borderBottomLeftRadius: 16, borderBottomRightRadius: 16},
                ]}>
                <Text style={styles.inputLabel}>Đánh giá</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Tùy chọn"
                  placeholderTextColor="#A0A0A0"
                  defaultValue={reviewRef.current}
                  onChangeText={text => (reviewRef.current = text)}
                />
              </View>

              <TouchableOpacity
                style={styles.submitButton}
                onPress={onSendreview}>
                <Text style={styles.submitText}>Gửi</Text>
              </TouchableOpacity>
            </>
          ) : (
            <></>
          )}
        </View>
      ) : (
        <View style={{paddingHorizontal: 16}}>
          <Text style={styles.label}>Đánh giá nhanh</Text>
          <View style={styles.stars}>
            {[1, 2, 3, 4, 5].map(star => (
              <TouchableOpacity
                style={{marginHorizontal: 4}}
                key={star}
                onPress={() => setRating(star)}>
                <AntDesign
                  name="star"
                  size={24}
                  color={star <= rating ? Colors.gold : '#ccc'}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
      {data.slice(0, visibleCount).map((item: any) => (
        <View key={item.id} style={styles.reviewItem}>
          {/* Avatar + Tên user */}
          <View style={styles.userContainer}>
            <Image source={{uri: item.user.avatar}} style={styles.avatar} />
            <Text style={styles.userName}>{item.user.name}</Text>
          </View>

          {/* Tiêu đề + Đánh giá sao */}
          <Text style={styles.reviewTitle}>{item.title}</Text>
          <View style={styles.ratingContainer}>
            {[...Array(5)].map((_, index) => (
              <AntDesign
                key={index}
                name="star"
                size={16}
                color={index < item.rating ? 'gold' : 'gray'}
              />
            ))}
          </View>

          {/* Nội dung bình luận */}
          {item.comment && (
            <Text style={styles.reviewText}>{item.comment}</Text>
          )}
        </View>
      ))}
    </View>
  );
  return (
    <BottomSheetModalProvider>
      <ScrollView
        style={styles.container}
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps="handled">
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
        <BookCard
          book={bookData}
          onPressReview={handleOpenModal}
          onPressReadBook={handleOpenReadBookModal}
          onPressAudioBook={handleOpenAudioBookModal}
        />
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
            <View key={index}>
              <Text style={styles.name}>
                <Text style={{fontFamily: Fonts.bold}}>Chương {index}:</Text>{' '}
                {chapter.title}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <BottomSheetModal
        snapPoints={snapPoints}
        index={0}
        ref={bottomSheetModalRef}
        onDismiss={onDismiss}>
        <BottomSheetScrollView style={styles.contentContainer}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.title}>Đánh giá & nhận xét</Text>
            <TouchableOpacity
              style={{marginRight: 16}}
              onPress={handleCloseModal}>
              <AntDesign name="close" size={20} color={Colors.primary2} />
            </TouchableOpacity>
          </View>
          <View style={styles.tabContainer}>
            <TouchableOpacity
              onPress={() => setSelectedTab('all')}
              style={[
                styles.tabItem,
                selectedTab === 'all' && styles.tabItemActive,
              ]}>
              <Text
                style={[
                  styles.tabText,
                  selectedTab === 'all' && styles.tabTextActive,
                ]}>
                Tất cả ( {reviews.length} )
              </Text>
              <AntDesign name="star" size={16} color={'gold'} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectedTab('stars')}
              style={[
                styles.tabItem,
                selectedTab === 'stars' && styles.tabItemActive,
              ]}>
              <Text
                style={[
                  styles.tabText,
                  selectedTab === 'stars' && styles.tabTextActive,
                ]}>
                5
              </Text>
              <AntDesign name="star" size={16} color={'gold'} />
              <Text
                style={[
                  styles.tabText,
                  selectedTab === 'stars' && styles.tabTextActive,
                ]}>
                ( {reviews.length} )
              </Text>
            </TouchableOpacity>
          </View>

          {/* Nội dung của từng tab */}
          <View style={styles.tabContent}>
            {selectedTab === 'all' ? (
              <ReviewList data={reviews} isAll />
            ) : (
              <ReviewList
                data={reviews.map(r => ({...r, comment: ''}))}
                isAll={false}
              />
            )}
          </View>

          {visibleCount <= reviews.length ? (
            <TouchableOpacity style={styles.genreItem} onPress={handleLoadMore}>
              <Text style={styles.genreText}>Xem Thêm</Text>
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </BottomSheetScrollView>
      </BottomSheetModal>
      <BottomSheetChapter
        filterArray={chapters}
        ref={readBookRef}
        title="Chương Sách Đọc"
        onPress={() => {
          navigation.navigate('Chapter');
          readBookRef.current?.dismiss();
        }}
      />
      <BottomSheetChapter
        filterArray={chapters}
        ref={audioBookModalRef}
        title="Chương Sách Nói"
      />
    </BottomSheetModalProvider>
  );
};
const styles = StyleSheet.create({
  stars: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center',
  },
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
    fontFamily: Fonts.semiBold,
    color: '#333',
    fontSize: 15,
  },
  value: {
    color: '#666',
    flex: 1,
  },
  reviewButton: {
    backgroundColor: '#FF5722',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  modalBackground: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalContent: {flex: 1, padding: 20},
  headerTitle: {fontSize: 18, fontWeight: 'bold', marginBottom: 10},
  reviewItem: {
    backgroundColor: Colors.primary3,
    padding: 15,
    borderRadius: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginHorizontal: 16,
  },
  reviewTitle: {fontWeight: 'bold', fontSize: 16},
  ratingContainer: {flexDirection: 'row', marginVertical: 5},
  reviewText: {color: '#555'},
  contentContainer: {
    flex: 1,
    // alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: Fonts.italicBold,
    marginBottom: 10,
    color: Colors.primary2,
    marginLeft: 10,
    flex: 1,
  },
  genreItem: {
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  genreText: {
    fontSize: 16,
    color: Colors.primary,
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tabItem: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tabItemActive: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary2,
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  tabTextActive: {
    fontWeight: 'bold',
    color: Colors.primary2,
  },
  tabContent: {
    marginTop: 10,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  submitButton: {
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  submitText: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    padding: 10,
  },
  inputLabel: {
    fontSize: 15,
    fontFamily: Fonts.semiBold,
    width: 86,
    color: Colors.primary2,
  },
  input: {
    flex: 1,
    fontSize: 15,
    // color: '#A0A0A0',
  },
});
export default BookDetailsScreen;
