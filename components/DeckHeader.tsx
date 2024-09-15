import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import { useDeck } from "@/contexts/DeckContext";

export default function DeckHeader() {
  const { topic } = useDeck();
  const navigation = useNavigation();
  
  return (
    <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={24} color="#718096" />
        </TouchableOpacity>
        <Text style={styles.title}>{topic.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    justifyContent: 'space-between'
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: "600",
    textAlign: 'center'
  },
})