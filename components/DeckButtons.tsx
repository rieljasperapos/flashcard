import { View, TouchableOpacity, StyleSheet, Text } from "react-native"
import { useState } from "react";
import { topicData } from "@/types/topic-data";
import { FontAwesome } from '@expo/vector-icons';

interface DeckButtonsInterface {
  topic: topicData,
  setShowAnswer: any,
  showAnswer: boolean,
  setCurrentCardIndex: any,
  currentCardIndex: number,
}

export default function DeckButtons({topic, setShowAnswer, showAnswer, setCurrentCardIndex, currentCardIndex}: DeckButtonsInterface) {
  // const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const handleNextCard = () => {
    if (currentCardIndex < topic.numberOfCards - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setShowAnswer(false);
    }
  };

  const handlePrevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setShowAnswer(false);
    }
  };
  return (
    <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handlePrevCard} disabled={currentCardIndex === 0}>
          <FontAwesome name="arrow-left" size={36} color={currentCardIndex === 0 ? "#E2E8F0" : "#6366F1"} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.showAnswerButton} onPress={() => setShowAnswer(!showAnswer)}>
          <Text style={styles.showAnswerText}>
            {showAnswer ? "Hide answer" : "Show answer"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNextCard} disabled={currentCardIndex === topic.flashcards.length - 1}>
          <FontAwesome name="arrow-right" size={36} color={currentCardIndex === topic.flashcards.length - 1 ? "#E2E8F0" : "#6366F1"} />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  showAnswerButton: {
    backgroundColor: "#6366F1",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  showAnswerText: {
    color: "#fff",
    fontSize: 16,
  },
})