import { useLocalSearchParams } from "expo-router"
import { View, StyleSheet, Text } from "react-native"
import DeckScreen from "@/components/DeckScreen";
import { useDeck } from "@/contexts/DeckContext";
import { useEffect } from "react";

export default function FlashCard() {
  const { selectTopic } = useDeck();
  const { id } = useLocalSearchParams();

  useEffect(() => {
    if (id) {
      selectTopic(Number(id)); // Select topic based on id param
    }
  }, [id]);

  return (
    <View style={styles.container}>
      <DeckScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  }
})