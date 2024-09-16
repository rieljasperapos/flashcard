import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router";
import { useDeck } from "@/contexts/DeckContext";

export default function HomePage() {
  const { topics } = useDeck();
  
  return (
    <View style={styles.content}>
      <Text style={styles.sectionTitle}>Topics</Text>
      <View style={styles.cardsContainer}>
        {topics.map((topic, idx) => (
          <Link 
            key={idx} 
            href={{
              pathname: '/decks/[id]',
              params: { id: topic.id }
            }} 
            asChild
          >
            <TouchableOpacity style={styles.card}>
              <Image
                source={{
                  uri: topic.uri,
                }}
                style={styles.icon}
              />
              <Text style={styles.cardTitle}>{topic.title}</Text>
              <Text style={styles.cardCount}>{topic.numberOfCards} cards</Text>
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: "100%",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#fff",
    width: "45%",
    height: 150,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 10,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 10,
    textAlign: 'center'
  },
  cardCount: {
    fontSize: 14,
    color: "#718096",
  },
});
