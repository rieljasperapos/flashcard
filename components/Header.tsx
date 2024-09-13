import { Text, View, StyleSheet } from "react-native"

export default function Header() {
  return (
    <View style={styles.header}>
        <Text style={styles.title}>QuickCards</Text>
        <Text style={styles.subtitle}>Happy Learning! <Text style={styles.username}>User</Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%'
  },
  header: {
    backgroundColor: '#5A67D8',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#fff',
    marginTop: 20,
    marginBottom: 20,
    fontSize: 16,
  },
  username: {
    fontWeight: 'bold',
  },
});