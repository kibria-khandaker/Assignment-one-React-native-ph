import { SafeAreaView, StyleSheet, Image, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.headerBox}>
        <Image style={{ width: 110, height: 110, backgroundColor: "#D4E6F1", borderRadius: 100, marginRight: 20 }} source={require("./assets/github_logo.png")} />
        <View style={{}} >
          <Text style={{ fontWeight: "bold", fontSize: 28, textTransform: "capitalize" }} >The Octocat </Text>
          <Text style={{ fontSize: 23, color: "#6495ED", paddingBottom: 12, textTransform: "lowercase" }} >AOctocat </Text>
          <Text style={{ fontSize: 22, color: "#5D6D7E", textTransform: "capitalize" }}>Joined 25 jan 2011 </Text>
        </View>
      </View>

      <View style={styles.textContentBox} >
        <Text style={{ fontSize: 22, color: "#5D6D7E", paddingBottom: 12,lineHeight:35,letterSpacing:0.08 }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis fugit impedit modi. Sequi? </Text>
      </View>
      <View style={styles.reactionBox}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "#5D6D7E", fontSize: 15 }}> Repos </Text>
          <Text style={{ fontWeight: "bold", color: "#333333", fontSize: 26 }}> 8 </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "#5D6D7E", fontSize: 15 }}> Followers </Text>
          <Text style={{ fontWeight: "bold", color: "#333333", fontSize: 26 }}> 3938 </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "#5D6D7E", fontSize: 15 }}> Following </Text>
          <Text style={{ fontWeight: "bold", color: "#333333", fontSize: 26 }}> 9 </Text>
        </View>
      </View>
      <View style={styles.linkBox}>
        <View style={{ flexDirection: "row", alignItems: "center", paddingVertical:10 }} >
          <Image source={require("./assets/mark2.png")} />
          <Text style={{ fontSize: 21, color: "#5D6D7E" }} > San Francisco </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", paddingVertical:10 }} >
          <Image style={{}} source={require("./assets/link2.png")} />
          <Text style={{ fontSize: 21, color: "#5D6D7E" }} > https://github.blog </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", paddingVertical:10 }} >
          <Image style={{ opacity: 0.3 }} source={require("./assets/twitter2.png")} />
          <Text style={{ fontSize: 21, color: "#5D6D7E", opacity: 0.3 }} > Not Available </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", paddingVertical:10 }} >
          <Image source={require("./assets/house2.png")} />
          <Text style={{ fontSize: 21, color: "#5D6D7E" }} > agithub </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:50,
    paddingHorizontal:30
  },
  headerBox: {
    // backgroundColor: "yellow",
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContentBox: {
    // backgroundColor: "green",
    flex: 1.2,
    flexDirection: "column",
    alignSelf: "stretch",
    justifyContent: 'center',
  },
  reactionBox: {
    backgroundColor: "#D4E6F1",
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-around",
    alignItems: "center"
  },
  linkBox: {
    // backgroundColor: "red",
    flex: 2,
    flexDirection: "column",
    alignSelf: "stretch",
    alignItems: "flex-start",
    justifyContent: "center"
  },

});

