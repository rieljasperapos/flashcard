import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import { useNavigation, RouteProp } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import { topicData } from "@/types/topic-data";

interface DeckHeaderProps {
  topic: topicData;
}

export default function DeckHeader({topic}: DeckHeaderProps) {
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
    justifyContent: 'space-between'
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: "600",
    textAlign: 'center'
  },
})