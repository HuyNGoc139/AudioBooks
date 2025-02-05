import {Colors} from '@src/styles';
import React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';

interface ContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const Container: React.FC<ContainerProps> = ({children, style}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary3, // Màu nền
    padding: 20,
  },
});

export default Container;
