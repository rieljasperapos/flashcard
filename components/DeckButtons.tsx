import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Entypo from '@expo/vector-icons/Entypo';
import { useDeck } from "@/contexts/DeckContext";

export default function DeckButtons() {
  const {
    topic,
    currentCardIndex,
    handleShuffle,
    handleAutoPlay,
    handlePrevCard,
    handleNextCard,
    isAutoPlaying,
  } = useDeck();

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={handleAutoPlay}>
        {isAutoPlaying ? (
          <FontAwesome name="pause-circle-o" size={36} color="#6366F1" />
        ) : (
          <FontAwesome name="play-circle-o" size={36} color="#6366F1" />
        )}
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
        <Entypo name="shuffle" size={36} color="#6366F1" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 28,
  },
});
