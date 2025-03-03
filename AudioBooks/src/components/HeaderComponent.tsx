import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AppText} from './AppText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ArrowLeft2} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '@src/styles';
interface Props {
  title: string;
  color?: string;
  noBack?: boolean;
  padding?: boolean;
}

const HeaderComponent = (props: Props) => {
  const {title, color, noBack, padding} = props;
  const navigation = useNavigation();
  return (
    <View style={[styles.container, {paddingHorizontal: padding ? 18 : 0}]}>
      {!noBack ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft2 size="24" color="black" />
        </TouchableOpacity>
      ) : (
        <></>
      )}
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          flex: 1,
          paddingRight: 12,
          fontWeight: '600',
          color: color ? color : Colors.primary2,
        }}>
        {title}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    marginTop: 16,
  },
});
export default HeaderComponent;
