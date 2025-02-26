import {Colors, Fonts} from '@src/styles';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface AuthorInfoProps {
  hometown: string;
  birthDate: string;
  occupation: string;
}

const AuthorInfo: React.FC<AuthorInfoProps> = ({
  hometown,
  birthDate,
  occupation,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.row}>
          <Text style={styles.label}>Quê quán:</Text>
          <Text style={styles.value}>{hometown}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Ngày sinh:</Text>
          <Text style={styles.value}>{birthDate}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Nghề nghiệp:</Text>
          <Text style={styles.value}>{occupation}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    // paddingVertical: 8,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: Colors.primary2,
    paddingLeft: 12,
    borderRadius: 4,
  },
  infoContainer: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 4,
    justifyContent: 'center',
  },
  label: {
    fontFamily: Fonts.semiBold,
    color: Colors.primary2,
    minWidth: 128,
    fontSize: 14,
  },
  value: {
    color: '#666',
    flex: 1,
    fontSize: 14,
  },
});

export default AuthorInfo;
