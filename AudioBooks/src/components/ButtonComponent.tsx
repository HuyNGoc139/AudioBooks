import {Colors} from '@src/styles';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
interface Props {
  onPress: () => void;
  title: string;
  color?: string;
  bgcolor?: string;
}

const ButtonComponent = (props: Props) => {
  const {onPress, title, bgcolor, color} = props;
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {backgroundColor: bgcolor ? bgcolor : Colors.primary},
      ]}
      onPress={onPress}>
      <Text style={[styles.buttonText, {color: color ? color : Colors.white}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 100,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ButtonComponent;
