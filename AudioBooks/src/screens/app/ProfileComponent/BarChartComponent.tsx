import {Colors} from '@src/styles';
import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {BarChart} from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const BarChartComponent = () => {
  return (
    <View style={styles.container}>
      <BarChart
        data={{
          labels: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
          datasets: [
            {
              data: [20, 45, 35, 25, 50, 40, 80],
            },
          ],
        }}
        width={screenWidth - 40}
        height={300}
        yAxisLabel=""
        yAxisSuffix=" phút"
        chartConfig={{
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          fillShadowGradient: Colors.primary2,
          fillShadowGradientOpacity: 1, // Độ trong suốt đổ bóng
          decimalPlaces: 0,
          color: (opacity = 1) => Colors.primary2,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForLabels: {
            fontSize: 14,
          },
          propsForBackgroundLines: {
            strokeWidth: 0.5,
            stroke: '#ddd',
          },
          barRadius: 8,
          barPercentage: 0.5,
        }}
        style={{
          marginVertical: 10,
          borderRadius: 16,
        }}
        fromZero={true}
        showBarTops={false}
        withInnerLines={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default BarChartComponent;
