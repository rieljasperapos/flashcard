import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { DeckButtonsInterface } from "@/types/topic-data";
import Entypo from '@expo/vector-icons/Entypo';

export default function DeckButtons({
  topic,
  showAnswer,
  currentCardIndex,
  handleShuffle,
  handleShow,
  handleAutoPlay,
  handlePrevCard,
  handleNextCard,
  isAutoPlaying,
}: DeckButtonsInterface) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={handleAutoPlay}>
        {isAutoPlaying ? <FontAwesome name="pause-circle-o" size={36} color="#6366F1" /> : <FontAwesome name="play-circle-o" size={36} color="#6366F1" />} 
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handlePrevCard}
        disabled={currentCardIndex === 0}
      >
        <FontAwesome
          name="arrow-left"
          size={36}
          color={currentCardIndex === 0 ? "#E2E8F0" : "#6366F1"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.showAnswerButton}
        onPress={handleShow}
      >
        <Text style={styles.showAnswerText}>
          {showAnswer ? "Hide answer" : "Show answer"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleNextCard}
        disabled={currentCardIndex === topic.flashcards.length - 1}
      >
        <FontAwesome
          name="arrow-right"
          size={36}
          color={
            currentCardIndex === topic.flashcards.length - 1
              ? "#E2E8F0"
              : "#6366F1"
          }
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleShuffle}>
        <Entypo 
          name="shuffle"
          size={36}
          color="#6366F1"
        />
      </TouchableOpacity>
    </View>
  );
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
});
