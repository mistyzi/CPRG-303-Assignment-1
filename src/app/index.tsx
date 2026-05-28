import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView style={styles.container}>

      {/* Header */}

      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Group Profile</Text>
          <Text style={styles.handle}>ootd_everyday</Text>
        </View>

        <Text style={styles.back}>{"く"}</Text>
      </View>

      {/* Profile Pic + Stats Bar */}
      <View style={styles.profileRow}>
        <Image source={{ uri: "https://img.magnific.com/free-photo/water-drops-background_23-2148098971.jpg?semt=ais_hybrid&w=740&q=80" }} style={styles.profilePic} />

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
            <Text style={styles.label}>Admins</Text>
          </View>
        </View>
      </View>

      {/* Username + Bio */}
      <View style={styles.profileTextContainer}>
        <Text style={styles.username}>OOTD Everyday</Text>
        <Text style={styles.bio}>Fit check! 👕{"\n"}You know we’ll hype you up.</Text>
      </View>

      {/* Dropdown */}
      <View style={styles.dropdown}>
        <Text style={styles.dropdownText}>Member ˅</Text>
      </View>

      {/* Photo Grid */}
      <View style={styles.grid}>
        {/* Placeholder for photos */}
      </View>

    </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff"
  },
  header: {
    height: 50,
    justifyContent: "center",
  },
  back: {
    position: "absolute",
    left: 0,
    fontSize: 28,
    fontWeight: "bold",
  },
  titleContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  handle: {
    fontSize: 12,
    color: "#777777",
    marginTop: -2,
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  profilePic: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15
  },
  profileTextContainer: {
    marginTop: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 2,
  },
  bio: {
    fontSize: 13,
    marginTop: 2,
    lineHeight: 18,
    color: "#555",
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 6,
    width: "70%",
    marginLeft: 10,
  },
  box: {
    alignItems: 'center'
  },
  number: {
    fontSize: 18,
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
    color: "#555",
    marginTop: -4,
  },
  dropdown: {
    marginTop: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    alignSelf: "auto",
  },
  dropdownText: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },

});
