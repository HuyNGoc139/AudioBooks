import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BookItem from './BookItem';
import {Rating} from 'react-native-ratings';

interface BookProps {
  image: string;
  title: string;
  author: string;
  rating: number;
  description: string;
  isSaved?: boolean;
}

const BookCard: React.FC<{book: BookProps}> = ({book}) => {
  const [rating, setRating] = useState(4.8);
  return (
    <View style={styles.container}>
      <BookItem item={book} isSave />

      <TouchableOpacity style={styles.content}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>

        <View style={styles.ratingContainer}>
          {/* <StarRating
            rating={rating}
            onChange={setRating}
            enableSwiping={true} // Chỉ hiển thị, không cho chỉnh sửa
            starSize={20}
            color="#FFD700"
          /> */}
          <Rating
            ratingCount={5}
            readonly
            imageSize={24}
            style={{paddingVertical: 10}}
            jumpValue={0.1}
            startingValue={rating}
            fractions={1}
            onFinishRating={(value: number) => {
              setRating(value);
            }}
          />
        </View>

        <Text numberOfLines={3} style={styles.description}>
          {book.description}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    padding: 12,
    marginHorizontal: 16,
    alignItems: 'center',
    elevation: 2,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 80,
    height: 100,
    borderRadius: 8,
  },
  bookmarkIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 2,
  },
  content: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  author: {
    fontSize: 14,
    color: '#888',
    marginVertical: 2,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  description: {
    fontSize: 13,
    color: '#666',
  },
});

export default BookCard;
