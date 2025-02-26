import {Fonts} from '@src/styles';
import {Colors} from '@src/styles/colors';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  topics: any[];
  selectedTopics: string | null;
  onPress: (item: any) => void;
}

const TopicsComponent = (props: Props) => {
  const {topics, selectedTopics, onPress} = props;
  return (
    <View>
      <FlatList
        data={topics}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: any) => item}
        contentContainerStyle={styles.topicsContainer}
        renderItem={({item}: {item: any}) => (
          <TouchableOpacity
            style={[
              styles.topicButton,
              selectedTopics === item && styles.selectedTopicButton,
            ]}
            onPress={() => onPress(item)}>
            <Text style={styles.topicText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  topicsContainer: {
    marginBottom: 16,
  },
  topicButton: {
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 8,
    margin: 5,
    borderWidth: 1,
    borderColor: Colors.black15,
  },
  selectedTopicButton: {
    backgroundColor: Colors.select2,
    borderColor: Colors.black666,
  },
  topicText: {
    textAlign: 'center',
  },
});
export default TopicsComponent;
