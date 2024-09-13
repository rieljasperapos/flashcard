import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, RouteProp } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import { topicData } from "@/types/topic-data";

interface DeckScreenProps {
  topic: topicData;
}

const DeckScreen = ({topic}: DeckScreenProps) => {
  const navigation = useNavigation();
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

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

  const handleViewClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={24} color="#718096" />
        </TouchableOpacity>
        <Text style={styles.title}>{topic.title}</Text>
      </View>
      <Text style={styles.progress}>
        {currentCardIndex + 1} of {topic.flashcards.length} cards
      </Text>
      <TouchableOpacity onPress={handleViewClick} style={styles.card}>
        <Text style={styles.question}>
          {showAnswer ? topic.flashcards[currentCardIndex].answer : topic.flashcards[currentCardIndex].question}
        </Text>
      </TouchableOpacity>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    display: 'flex',
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
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
