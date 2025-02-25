import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const AuthorItem: React.FC<{item: any}> = ({item}) => {
  return (
    <TouchableOpacity onPress={() => {}} style={styles.container}>
      <Image source={{uri: item.avatar}} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.role}>{item.role}</Text>
      </View>
      <Text style={styles.bookCount}>{item.bookCount} sách</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    padding: 12,
    borderRadius: 16,
    marginVertical: 6,
    marginHorizontal: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  role: {
    fontSize: 14,
    color: '#888',
  },
  bookCount: {
    fontSize: 14,
    color: '#555',
    fontWeight: 'bold',
  },
});

export default AuthorItem;
