import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import ImageButton from "./ImageButton";
import SwipeGesture from "react-native-swipe-gestures";
import { useState } from "react";

const setOfImages = [
  require("./assets/jake1.jpg"),
  require("./assets/jake2.jpg"),
  require("./assets/jake3.jpg"),
  require("./assets/jake4.jpg"),
];

export default function App() {
  var [currentIndex, setCurrentIndex] = useState(0);

  const handlePress = (e) => {
    // Handle button press here
    console.log(e);
  };

  const onSwipeLeft = () => {
    if (currentIndex >= setOfImages.length - 1) {
      setCurrentIndex(setOfImages.length - 1);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const onSwipeRight = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trinder App</Text>
      <SwipeGesture
        style={styles.images}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
        config={{
          velocityThreshold: 0.3,
          directionalOffsetThreshold: 80,
        }}
      >
        <Image source={setOfImages[currentIndex]} style={styles.image} />
      </SwipeGesture>
      <View style={styles.row}>
        <View style={{ alignItems: "center" }}>
          <ImageButton
            onPress={handlePress}
            source={require("./assets/icon_dislike.png")}
            title="DISLIKE"
          />
        </View>
        <View style={styles.buttonSeparator} />
        <View>
          <ImageButton
            onPress={handlePress}
            source={require("./assets/icon_like.png")}
            title="LIKE"
          />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#F5DAD2",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  contentText: {
    fontWeight: "bold",
  },
  images: {
    width: "80%",
    height: "70%",
    resizeMode: "cover",
    borderRadius: 20,
    borderColor: "#75A47F",
    borderWidth: 8,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  row: {
    width: "50%",
    top: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSeparator: {
    width: "50%",
  },
});
