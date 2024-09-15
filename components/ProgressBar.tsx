import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ProgressBarProps {
  totalCards: number;
  currentCardIndex: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ totalCards, currentCardIndex }) => {
  return (
    <View style={styles.progressBarContainer}>
      {Array.from({ length: totalCards }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.progressSegment,
            index <= currentCardIndex ? styles.activeSegment : styles.inactiveSegment,
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    flexDirection: 'row',
    height: 10,
    marginTop: 10,
  },
  progressSegment: {
    flex: 1,
    marginHorizontal: 2,
    borderRadius: 5,
  },
  activeSegment: {
    backgroundColor: 'green',
  },
  inactiveSegment: {
    backgroundColor: 'gray',
  },
});

export default ProgressBar;