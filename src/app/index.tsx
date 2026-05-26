import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Group Profile</Text>
        <Text style={styles.handle}>ootd_everyday</Text>
      </View>

      {/* Followers Bar */}
      <View style={styles.row}>
        <View style={styles.box}>
          <Text style={styles.number}>53</Text>
          <Text style={styles.label}>Posts</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.number}>12</Text>
          <Text style={styles.label}>Members</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.number}>1</Text>
          <Text style={styles.label}>Admin</Text>
        </View>
      </View>

      {/* Bio */}

      {/* Dropdown */}

      {/* Photo Grid */}

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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  box: {
    alignItems: 'center'
  },
  number: {
    fontSize: 20,
    fontWeight: "bold",
  },
  label: {
    fontSize: 20,
    color: "#555",
  }

});
