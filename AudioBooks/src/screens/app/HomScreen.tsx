import {RootState} from '@src/hooks/store';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const HomeScreen = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  console.log(user);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};
export default HomeScreen;
