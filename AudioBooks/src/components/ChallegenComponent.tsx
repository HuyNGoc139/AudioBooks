import {Colors, Fonts} from '@src/styles';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {CircularProgress} from 'react-native-circular-progress';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface ChallengeItemProps {
  title: string;
  description: string;
  progress?: number;
  total?: number;
  points: number;
  onPress?: () => void;
}

const DailyChallengeItem: React.FC<ChallengeItemProps> = ({
  title,
  description,
  progress,
  total,
  points,
  onPress,
}) => {
  return (
    <View style={styles.challengeItem}>
      <View style={styles.progressContainer}>
        {progress !== undefined && total !== undefined && progress !== total ? (
          <CircularProgress
            size={60}
            width={5}
            fill={(progress / total) * 100}
            tintColor={Colors.primary2}
            backgroundColor="#ddd">
            {() => (
              <Text style={styles.progressText}>{`${progress}/${total}`}</Text>
            )}
          </CircularProgress>
        ) : (
          <TouchableOpacity onPress={onPress}>
            <CircularProgress
              size={60}
              width={5}
              fill={100}
              tintColor={Colors.primary}
              backgroundColor="#ddd">
              {() => (
                <Text
                  style={[
                    styles.progressText,
                    {
                      color:
                        progress === total ? Colors.primary : Colors.primary2,
                    },
                  ]}>
                  Nhận
                </Text>
              )}
            </CircularProgress>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.challengeContent}>
        <Text style={styles.challengeTitle}>{title}</Text>
        <Text style={styles.challengeDescription}>{description}</Text>
      </View>
      <View style={styles.pointsContainer}>
        <Text style={styles.pointsText}>{points}</Text>
        <AntDesign name="star" size={28} color={Colors.gold} />
      </View>
    </View>
  );
};

const ChallengeScreen: React.FC = () => {
  const dailyChallenges: ChallengeItemProps[] = [
    {
      title: '45 phút mỗi ngày',
      description: 'Đọc sách 45 phút mỗi ngày tạo thói quen đọc sách hàng ngày',
      progress: 32,
      total: 45,
      points: 200,
    },
    {
      title: 'Hoàn thành 3 chương sách bất kì',
      description: 'Thử thách sách "The Design Of Everyday Things"',
      progress: 2,
      total: 3,
      points: 200,
    },
    {
      title: 'Pomodoro',
      description: 'Thử thách hoàn thành. Nhấn để nhận phần thưởng.',
      points: 200,
    },
  ];

  const weeklyChallenge: ChallengeItemProps = {
    title: '250 phút mỗi tuần',
    description: '',
    points: 2000,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Thử thách hàng ngày</Text>
      {dailyChallenges.map((challenge, index) => (
        <DailyChallengeItem key={index} {...challenge} />
      ))}

      <Text style={styles.sectionTitle}>Thử thách hàng tuần</Text>
      <DailyChallengeItem {...weeklyChallenge} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: Fonts.italicBold,
    marginTop: 10,
    color: Colors.primary2,
  },
  challengeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  progressContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  progressText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  emptyProgress: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  challengeContent: {
    flex: 1,
  },
  challengeTitle: {
    fontSize: 16,
    color: Colors.primary2,
    fontFamily: Fonts.bold,
  },
  challengeDescription: {
    fontSize: 14,
    color: '#666',
  },
  pointsContainer: {
    alignItems: 'center',
  },
  pointsText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  pointsUnit: {
    fontSize: 16,
  },
});

export default ChallengeScreen;
