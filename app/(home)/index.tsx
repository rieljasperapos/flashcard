import { View, StyleSheet } from "react-native";
import HomePage from "@/components/Home";
import Header from "@/components/Header";
import { staticTopicData } from "@/constants/staticData";


export default function Index() {
  return (
    <View style={styles.container}>
      <Header />
      <HomePage topics={staticTopicData} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#547DF4'
  }
})