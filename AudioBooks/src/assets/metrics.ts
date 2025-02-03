import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');
const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export default {
  screen: {
    width,
    height,
  },
  window: {
    width: windowWidth,
    height: windowHeight,
  },
};
