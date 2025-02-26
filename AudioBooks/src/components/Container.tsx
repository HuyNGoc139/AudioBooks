import {Colors} from '@src/styles';
import React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';

interface ContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
  bgColor?: string;
}

const Container: React.FC<ContainerProps> = ({children, style, bgColor}) => {
  return (
    <View
      style={[
        styles.container,
        style,
        {backgroundColor: bgColor ? bgColor : Colors.primary3},
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
  },
});

export default Container;
