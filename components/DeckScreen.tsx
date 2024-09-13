import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import DeckHeader from "@/components/DeckHeader";
import DeckButtons from "./DeckButtons";
import { TopicProps } from "@/types/topic-data";

export default function DeckScreen({ topic }: TopicProps) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  return (
    <View style={styles.container}>
      <DeckHeader topic={topic} />
      <Text style={styles.progress}>
        {currentCardIndex + 1} of {topic.flashcards.length} cards
      </Text>
      <TouchableOpacity onPress={() => setShowAnswer(!showAnswer)} style={styles.card}>
        <Text style={styles.question}>
          {showAnswer
            ? topic.flashcards[currentCardIndex].answer
            : topic.flashcards[currentCardIndex].question}
        </Text>
      </TouchableOpacity>
      <DeckButtons
        topic={topic}
        setShowAnswer={setShowAnswer}
        showAnswer={showAnswer}
        setCurrentCardIndex={setCurrentCardIndex}
        currentCardIndex={currentCardIndex}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  progress: {
    fontSize: 16,
    color: "#718096",
    textAlign: "center",
    marginVertical: 20,
  },
  card: {
    backgroundColor: "#F7FAFC",
    borderRadius: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    height: 400,
  },
  question: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "400",
    lineHeight: 30
  },
});
