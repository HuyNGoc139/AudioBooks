import {Colors, Fonts} from '@src/styles';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface SectionHeaderProps {
  title: string;
  onPress?: () => void;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.moreText}>Xem thêm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: Fonts.bold,
    color: Colors.primary2,
  },
  moreText: {
    fontSize: 14,
    color: '#FF6F61',
    fontWeight: '500',
  },
});

export default SectionHeader;
