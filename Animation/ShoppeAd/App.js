import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Image
        source={require("./assets/shpper.jpeg")}
        style={{ width: 100, height: 100 }}
      />
        <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Shopee cái gì cũng có...</Text>
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <Image
        source={require('./assets/my.jpeg')}
        style={{ width: 80, height: 80 }}
      />
      <Image
        source={require('./assets/coca.jpg')}
        style={{ width: 80, height: 80 }}
      />
      <Image
        source={require('./assets/banh.jpg')}
        style={{ width: 80, height: 80 }}
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
