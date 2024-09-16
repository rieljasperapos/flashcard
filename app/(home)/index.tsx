import { View, StyleSheet } from "react-native";
import HomePage from "@/components/Home";
import Header from "@/components/Header";

export default function Index() {
  return (
    <View style={styles.container}>
      <Header />
      <HomePage />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#5A67D8'
  }
})