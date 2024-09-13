import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { questionData } from "@/constants/staticData";
import { useState } from "react";

export default function Card() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const questionCount = questionData.length - 1;

  const onClick = () => {
    if (currentIndex < questionCount) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
    }
  };

  const handleViewClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <TouchableOpacity onPress={handleViewClick} style={styles.container}>
      <Text style={styles.font}>
        {showAnswer
          ? questionData[currentIndex].answer
          : questionData[currentIndex].question}
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          onPress={() => currentIndex > 0 ? setCurrentIndex(currentIndex - 1) : ""}
          title="Prev"
        />
        <Text>{currentIndex} / {questionCount}</Text>
        <Button 
          onPress={onClick}
          title="Next" 
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    elevation: 10,
    backgroundColor: '#fff',
    padding: 20,
    margin: 20,
    maxWidth: 500,
    height: 300
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    width: '100%'
  },

  font: {
    fontSize: 20,
    padding: 20,
    textAlign: "center",
    lineHeight: 40,
    height: 200
  }
});
