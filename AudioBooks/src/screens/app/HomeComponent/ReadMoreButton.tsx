import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ReadMoreButton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flag}>
        <Text style={styles.text}>Đọc tiếp</Text>
      </View>
      <View style={styles.triangle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    backgroundColor: '#5F6D60',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'serif',
  },
  triangle: {
    width: 10,
    height: 10,
    borderTopWidth: 20,
    borderBottomWidth: 20,
    borderLeftWidth: 15,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: '#5F6D60',
  },
});

export default ReadMoreButton;
