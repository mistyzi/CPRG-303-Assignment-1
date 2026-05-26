import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>OOTD Everyday</Text>
        <Text style={styles.handle}>@ootd_everyday</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff"
  },
  header: {
    marginBottom: 10,
  },
    title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  handle: {
    fontSize: 12,
    color: "#555",
  },
});
