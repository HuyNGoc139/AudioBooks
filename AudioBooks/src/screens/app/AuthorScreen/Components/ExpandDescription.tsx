import {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {LinearGradient} from 'react-native-linear-gradient';

import {Colors, Fonts} from '@src/styles';

interface Props {
  title: string;
  description: string;
}

const ExpandDescription = (props: Props) => {
  const [expanded, setExpanded] = useState(false);
  const {description, title} = props;

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={{position: 'relative'}}>
        <Text
          style={styles.description}
          numberOfLines={expanded ? undefined : 3}>
          {description}
        </Text>

        {!expanded && (
          <LinearGradient
            colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
            style={styles.fadeEffect}
          />
        )}
      </View>
      <TouchableOpacity onPress={toggleExpand} style={styles.toggleButton}>
        <View
          style={{
            backgroundColor: Colors.primary2,
            height: 1,
            width: '48%',
          }}></View>
        <View style={styles.iconWrapper}>
          <Feather
            name={expanded ? 'chevron-up' : 'chevron-down'}
            size={16}
            color={Colors.primary2}
          />
        </View>
        <View
          style={{
            backgroundColor: Colors.primary2,
            height: 1,
            width: '48%',
          }}></View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // borderRadius: 10,
    // shadowColor: '#000',
    // shadowOpacity: 0.1,
    // shadowOffset: {width: 0, height: 2},
    // shadowRadius: 4,
    // elevation: 3,
    marginBottom: 36,
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
    color: Colors.primary2,
    fontFamily: Fonts.bold,
  },
  description: {
    fontSize: 14,
    color: '#444',
  },
  fadeEffect: {
    position: 'absolute',
    height: 30,
    bottom: 0,
    left: 0,
    right: 0,
  },
  toggleButton: {
    alignItems: 'center',
    marginTop: 8,
    flexDirection: 'row',
  },
  iconWrapper: {
    width: 24,
    height: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.primary2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ExpandDescription;
