import {Fonts} from '@src/styles';
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  isShowTitle?: boolean;
  isSave?: boolean;
  isProgress?: boolean;
  books: any;
}

const BookList = (props: Props) => {
  const {isShowTitle, isSave, books, isProgress} = props;

  const BookItem = ({item}: {item: any}) => {
    const [saveBook, setSaveBook] = useState<boolean>(true);
    return (
      <View style={{}}>
        <View style={styles.bookContainer}>
          <Image
            source={{uri: item.image}}
            style={[styles.bookImage, {height: isProgress ? '90%' : '100%'}]}
          />
          {isSave ? (
            <TouchableOpacity
              onPress={() => setSaveBook(!saveBook)}
              style={{
                padding: 4,
                backgroundColor: '#F3F4F9',
                borderRadius: 16,
                position: 'absolute',
                top: 10,
                right: 10,
              }}>
              {saveBook ? (
                <Ionicons name="bookmark" size={16} color={'#FF5722'} />
              ) : (
                <Ionicons name="bookmark-outline" size={16} color={'#000'} />
              )}
            </TouchableOpacity>
          ) : (
            <></>
          )}
          {isProgress ? (
            <View style={styles.progressBar}>
              <View
                style={[styles.progressFill, {width: `${item.progress}%`}]}
              />
            </View>
          ) : (
            <></>
          )}
        </View>
        {isShowTitle ? (
          <View style={styles.center}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        ) : (
          <></>
        )}
      </View>
    );
  };

  return (
    <FlatList
      data={books}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={({item}) => <BookItem item={item} />}
      contentContainerStyle={styles.listContainer}
      nestedScrollEnabled={true}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 10,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookContainer: {
    width: 120,
    height: 180,
    backgroundColor: '#A9A9A9',
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    elevation: 5,
  },
  bookImage: {
    width: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  progressBar: {
    width: '80%',
    height: 5,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginTop: 5,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FF5722',
    borderRadius: 5,
  },
  title: {
    width: 120,
    textAlign: 'center',
    fontFamily: Fonts.medium,
    fontSize: 14,
    marginTop: 4,
  },
});

export default BookList;
