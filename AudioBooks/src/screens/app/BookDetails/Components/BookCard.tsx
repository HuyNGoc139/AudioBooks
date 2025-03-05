import {Colors, Fonts} from '@src/styles';
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';
import {Rating} from 'react-native-ratings';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface BookCardProps {
  book?: any;
  onPressReview?: () => void;
  onPressReadBook?: () => void;
  onPressAudioBook?: () => void;
}

const BookCard = (props: BookCardProps) => {
  const {book, onPressAudioBook, onPressReadBook, onPressReview} = props;
  return (
    <View style={styles.card}>
      <Image source={{uri: book.imageUrl}} style={styles.bookImage} />

      <View style={styles.content}>
        <Text style={styles.title}>{book.title}</Text>
        <View style={styles.authorContainer}>
          <Image source={{uri: book.imageUrl}} style={styles.avatarImage} />
          <Text style={styles.author}>{book.author}</Text>
        </View>

        <View style={styles.ratingContainer}>
          <Rating
            type="custom"
            ratingCount={5}
            readonly
            imageSize={20}
            style={{paddingVertical: 10}}
            jumpValue={0.1}
            startingValue={book.rating}
            fractions={1}
          />
          <TouchableOpacity onPress={onPressReview}>
            <Text style={styles.reviews}>({book.reviews})</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={onPressReadBook} style={styles.button}>
            <FontAwesome name="book" size={16} color="white" />
            <Text style={styles.buttonText}> Đọc sách</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressAudioBook} style={styles.button}>
            <AntDesign name="play" size={16} color="white" />
            <Text style={styles.buttonText}> Nghe sách</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    elevation: 3,
    margin: 10,
    alignItems: 'center',
  },
  avatarImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  bookImage: {
    width: 140,
    height: 210,
    borderRadius: 8,
    resizeMode: 'stretch',
  },
  content: {
    flex: 1,
    marginLeft: 15,
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.bold,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  author: {
    marginLeft: 5,
    color: '#555',
    fontSize: 14,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  reviews: {
    marginLeft: 5,
    color: '#777',
    fontSize: 14,
  },
  button: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: Colors.primary2,
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    marginLeft: 5,
  },
});

export default BookCard;
