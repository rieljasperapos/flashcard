import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import DeckHeader from "@/components/DeckHeader";
import DeckButtons from "./DeckButtons";
import FlipCard from "./FlipCard";
import { useDeck } from "@/contexts/DeckContext";

export default function DeckScreen() {
  const {
    topic,
    isFlipped,
    currentCardIndex,
    shuffledDeck,
    handleShow,
  } = useDeck();

  if (!topic) {
    return (
      <View style={styles.container}>
        <Text>No topic available</Text>
      </View>
    );
  }

  const FrontContent = () => (
    <View style={styles.card}>
      <Text style={styles.question}>{shuffledDeck[currentCardIndex].question}</Text>
    </View>
  );

  const BackContent = () => (
    <View style={styles.card}>
      <Text style={styles.question}>{shuffledDeck[currentCardIndex].answer}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <DeckHeader />
      <Text style={styles.progress}>
        {currentCardIndex + 1} of {shuffledDeck.length} cards
      </Text>
      <TouchableOpacity onPress={handleShow}>
        <FlipCard
          isFlipped={isFlipped}
          cardStyle={styles.flipCard}
          direction="y"
          duration={500}
          FrontContent={FrontContent}
          BackContent={BackContent}
        />
      </TouchableOpacity>
      <DeckButtons/>
    </View>
  );
}

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
    lineHeight: 30,
  },
  flipCard: {
    width: "100%",
  },
});
