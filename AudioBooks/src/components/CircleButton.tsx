/* eslint-disable react/require-default-props */
import React, {useCallback, useEffect, useState} from 'react';
import {Pressable, StyleSheet, View, Text} from 'react-native';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {Colors} from '@src/styles';
type Props = {
  label?: string;
  onPress?: () => void;
};

const CircleButton = (props: Props) => {
  const {label, onPress} = props;

  const animatedValue1 = useSharedValue(0);
  const animatedValue2 = useSharedValue(0);
  const animatedValue3 = useSharedValue(0);

  const [isHolding, setHolding] = useState(false);

  const [isDone, setDone] = useState(false);

  const goBack = useCallback(() => {
    animatedValue3.value = withSpring(0, {duration: 1000});
    animatedValue2.value = withSpring(0, {duration: 700});
    animatedValue1.value = withSpring(0, {duration: 400});
  }, [animatedValue1, animatedValue2, animatedValue3]);

  const handlePressIn = useCallback(() => {
    setHolding(true);
    setDone(false);
    animatedValue1.value = withSpring(1, {duration: 1000});
    animatedValue2.value = withSpring(1, {duration: 700});
    animatedValue3.value = withSpring(1, {duration: 400}, () => {
      runOnJS(setDone)(true);
    });
  }, [animatedValue1, animatedValue2, animatedValue3]);

  const handlePressOut = useCallback(() => {
    setHolding(false);
  }, []);

  const animatedStyle1 = useAnimatedStyle(() => ({
    backgroundColor: Colors.primary,
    transform: [{scale: interpolate(animatedValue1.value, [0, 1], [1, 0.9])}],
    width: 100,
    zIndex: 3,
  }));
  const animatedStyle2 = useAnimatedStyle(() => ({
    backgroundColor: Colors.frenchLilacViolet,
    transform: [{scale: interpolate(animatedValue2.value, [0, 1], [1, 0.9])}],
    width: 150,
    zIndex: 2,
  }));
  const animatedStyle3 = useAnimatedStyle(() => ({
    backgroundColor: Colors.amourViolet,
    transform: [{scale: interpolate(animatedValue3.value, [0, 1], [1, 0.9])}],
    width: 200,
    zIndex: 1,
  }));

  useEffect(() => {
    if (isDone && !isHolding) {
      goBack();
    }
  }, [isHolding, isDone, goBack]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.center, animatedStyle3]} />
      <Animated.View style={[styles.center, animatedStyle2]} />
      <Animated.View style={[styles.center, animatedStyle1]}>
        <Pressable
          onPress={onPress}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={styles.pressableStyle}>
          <Text style={styles.labelText}>{label}</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    aspectRatio: 1,
    borderRadius: 1000,
    justifyContent: 'center',
    position: 'absolute',
  },
  container: {
    alignItems: 'center',
    aspectRatio: 1,
    justifyContent: 'center',
    position: 'relative',
    width: 200,
  },
  labelText: {color: Colors.white},
  pressableStyle: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
});

export default CircleButton;
