import {Fonts} from '@src/styles';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  LogBox,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  isShowTitle?: boolean;
  isSave?: boolean;
  isProgress?: boolean;
  books: any;
  isColumn?: boolean;
}

const BookList = (props: Props) => {
  const {isShowTitle, isSave, books, isProgress, isColumn} = props;
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const BookItem = ({item}: {item: any}) => {
    const [saveBook, setSaveBook] = useState<boolean>(true);
    return (
      <TouchableOpacity onPress={() => {}} style={{marginHorizontal: 10}}>
        <View
          style={[
            styles.bookContainer,
            {width: isColumn ? 100 : 120, height: isColumn ? 150 : 180},
          ]}>
          <Image
            source={{uri: item.image}}
            style={[styles.bookImage, {height: isProgress ? '92%' : '100%'}]}
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
          <View style={[styles.center, {marginBottom: isColumn ? 0 : 0}]}>
            <Text style={[styles.title, {width: isColumn ? 100 : 120}]}>
              {item.title}
            </Text>
          </View>
        ) : (
          <></>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={[
        styles.container,
        {
          justifyContent: books.length >= 3 ? 'center' : 'flex-start',
          alignItems: books.length >= 3 ? 'center' : 'flex-start',
        },
      ]}>
      <FlatList
        data={books}
        key={isColumn ? 'column' : 'row'}
        numColumns={isColumn ? 3 : 1} // Nếu isColumn = true, hiển thị 2 cột
        horizontal={!isColumn}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={isColumn}
        keyExtractor={item => item.id}
        renderItem={({item}) => <BookItem item={item} />}
        contentContainerStyle={[
          styles.listContainer,
          {
            justifyContent: 'space-between',
          },
        ]}
        nestedScrollEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  listContainer: {
    paddingHorizontal: 10,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookContainer: {
    backgroundColor: '#A9A9A9',
    borderRadius: 10,
    // marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    elevation: 5,
  },
  bookImage: {
    width: '100%',
    resizeMode: 'stretch',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  progressBar: {
    width: '86%',
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
    textAlign: 'center',
    fontFamily: Fonts.medium,
    fontSize: 14,
    marginTop: 4,
  },
});

export default BookList;
