import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Animated,
  ImageBackground,
  Image,
} from "react-native";
import { useRef, useState } from "react";

export default function App() {
  const [imageColor, setImageColor] = useState("transparent");
  const appImage = useRef(new Animated.Value(0)).current;
  const app = useRef(new Animated.Value(0)).current;
  const spinValue = useRef(new Animated.Value(0)).current;
  const [isEditMode, setIsEditMode] = useState(false);
  const [isFadedIn, setIsFadedIn] = useState(false);
  const [deleteButtonColor, setDeleteButtonColor] = useState("gray");

  const appIn = () => {
    Animated.timing(app, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };
  const appInImage = () => {
    Animated.timing(appImage, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };
  const appOut = () => {
    Animated.timing(app, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  const appOutImange = () => {
    Animated.timing(appImage, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
    0;
  };
  const spin = appImage.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  const resetColor = () => {
    setIsFadedIn(false);
    setIsEditMode(false);
    setDeleteButtonColor("gray");
    setImageColor("transparent");
  };

  const generateRandomColor = () => {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
  };

  const handleEditImage = () => {
    setImageColor(generateRandomColor());
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      spinValue.setValue(0);
    });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/1.png")}
        resizeMode="contain"
        style={styles.image}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <Animated.View style={[{ opacity: app }, styles.styleAnimatedView]}>
            <Text style={{ color: "blue", fontSize: 24 }}> app view</Text>
          </Animated.View>
          <Animated.Image
            style={[
              { opacity: appImage },
              {
                width: 100,
                height: 100,
                Color: imageColor,
                transform: [{ rotate: spin }],
              },
            ]}
            source={require("./assets/2.jpg")}
          />
           <Animated.Image
          style={{
            width: 100,
            height: 100,
             tintColor: imageColor,
            transform: [{ rotate: spin }],
          }}
          source={require("./assets/2.jpg")}
        />
        </View>

        <View style={{ justifyContent: "space-evenly", flexBasis: 250 }}>
          <Button title="app in text " onPress={appIn} />
          <Button title="app in spin image" onPress={appInImage} />
          <Button title="app out image" onPress={appOutImange} />
          <Button title="app out" onPress={appOut} />
          <Button title="Reset Color" onPress={resetColor} />
          <Button title="Edit color Image" onPress={handleEditImage} />
        </View>
       
      </ImageBackground>
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
  styleAnimatedView: {
    backgroundColor: "pink",
    justifyContent: "center",
    alignContent: "center",
    height: 50,
  },

  image: {
    padding: 10,
    justifyContent: "center",
    height: 700,
    width: 700,
    resizeMode:'contain'
  },
});
