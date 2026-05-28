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
      <View style={{marginHorizontal: -20}}>
      <View style={styles.grid}>
        {[
          "https://images.unsplash.com/photo-1603217192412-c933ccfac0fa?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1619042823674-4f4ad8484b08?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://plus.unsplash.com/premium_photo-1669138520397-9147a0a55fff?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1700026883924-b7cf6f300747?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1707302919663-b6a3f72530b6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://plus.unsplash.com/premium_photo-1695575576052-7c271876b075?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1623682536941-2fadcc797b09?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1737491220179-ef20cfb2497a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ].map((uri, index) => (
          <Image key={index} source={{ uri }} style={styles.gridImage} />
        ))}
      </View>
      </View>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
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
    marginBottom: 12,
    gap: 14,
    marginTop: 20,
  },
  profilePic: {
    width: 75,
    height: 75,
    borderRadius: 36,
  },
  profileTextContainer: {
    marginTop: 1,
  },
  username: {
    fontSize: 15,
    fontWeight: "600",
  },
  bio: {
    fontSize: 13,
    fontWeight: "400",
    marginTop: 2,
    lineHeight: 18,
    color: "#262626",
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: "70%",
  },
  box: {
    alignItems: 'center'
  },
  number: {
    fontSize: 18,
    fontWeight: "bold",
  },
  label: {
    fontSize: 12,
    fontWeight: "400",
    color: "#737373",
    marginTop: -2,
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
    fontWeight: "500",
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingHorizontal: 0,
    paddingBottom: 40,
  },
  gridImage: {
    width: '33.1%',
    aspectRatio: 1,
    borderRadius: 2,
  },

});
