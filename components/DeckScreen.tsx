import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { topicData } from "@/types/topic-data";
import DeckHeader from "@/components/DeckHeader";
import DeckButtons from "./DeckButtons";

interface DeckScreenProps {
  topic: topicData;
}

const DeckScreen = ({topic}: DeckScreenProps) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleViewClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <View style={styles.container}>
      <DeckHeader  topic={topic}/>
      <Text style={styles.progress}>
        {currentCardIndex + 1} of {topic.flashcards.length} cards
      </Text>
      <TouchableOpacity onPress={handleViewClick} style={styles.card}>
        <Text style={styles.question}>
          {showAnswer ? topic.flashcards[currentCardIndex].answer : topic.flashcards[currentCardIndex].question}
        </Text>
      </TouchableOpacity>
      <DeckButtons topic={topic} setShowAnswer={setShowAnswer} showAnswer={showAnswer} setCurrentCardIndex={setCurrentCardIndex} currentCardIndex={currentCardIndex} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 30,
    backgroundColor: "#fff",
  },
  header: {
    display: 'flex',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between'
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: "600",
    textAlign: 'center'
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
    height: 400
  },
  question: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "600",
  },
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

export default DeckScreen;
