import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Animated } from "react-native";
import ImageButton from "./ImageButton"; // Assuming ImageButton component exists
import SwipeGesture from "react-native-swipe-gestures";
import { useState, useRef } from "react";
import { likeReact } from "./AnimateIcon";

const setOfImages = [
  // Replace these with the EXACT paths to your images (relative to this component file)
  // Ensure the image files are added as static assets in your React Native project
  require("./assets/jake1.jpg"),
  require("./assets/jake2.jpg"),
  require("./assets/jake3.jpg"),
  require("./assets/jake4.jpg"),
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const animatedValue = useRef(new Animated.Value(1)).current; // Create an Animated value
  const [valueLike, setValueLike] = useState(0)
  const [valueDislike, setValueDislike] = useState(0)
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;

  const [isVisible, setIsVisible] = useState(false);

  const pressLike = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1100,
      useNativeDriver: true,
    }).start();
  }, 1000); // Delay for 1000 milliseconds (1 second)
  };

  const pressDislike = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim2, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      Animated.timing(fadeAnim2, {
      toValue: 0,
      duration: 1100,
      useNativeDriver: true,
    }).start();
  }, 1000); // Delay for 1000 milliseconds (1 second)
  };

  const onSwipeLeft = () => {
    if (currentIndex >= setOfImages.length - 1) return;
    setCurrentIndex(currentIndex + 1);
    animateSwipe(1); // Animate swipe left
  };

  const onSwipeRight = () => {
    if (currentIndex <= 0) return;
    setCurrentIndex(currentIndex - 1);
    animateSwipe(-1); // Animate swipe right
  };

  const animateSwipe = (direction) => {
    Animated.timing(animatedValue, {
      toValue: direction,
      duration: 1000, // Adjust duration for animation speed
      useNativeDriver: true, // Improve performance for animations
    }).start();
  };

  const interpolateOpacity = animatedValue.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [1, 0, 1], // Adjust opacity values for fading effect
  });

  const interpolateTranslateX = animatedValue.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 999, 0], // Adjust translation values for swipe distance
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trinder App</Text>
      <Animated.View style={[styles.images, { opacity: interpolateOpacity }]}>
        <SwipeGesture
          onSwipeLeft={onSwipeLeft}
          onSwipeRight={onSwipeRight}
          config={{
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80,
          }}
        >
          <Animated.Image
            style={{ transform: [{ translateX: interpolateTranslateX }], width: '100%', height: '100%'}}
            // Consider adding an error handler for cases where the image fails to load
            onError={(error) => console.error("Error loading image:", error)}
            
            source={setOfImages[currentIndex]}
          />
        </SwipeGesture>
      </Animated.View>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim,
          },
        ]}>
        <Image source={require("./assets/icon_love.jpg")} style={{width: 200, height: 200, position: 'absolute', top: -300 }}/>
      </Animated.View>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim2,
          },
        ]}>
          <Image source={require("./assets/icon_hate.png")} style={{width: 275, height: 200, position: 'absolute', top: -300, left: -100 }}/>

      </Animated.View>
      <Image source={require("./assets/icon_hate.png")} style={{width: 200, height: 200, position: 'absolute', top: -300 }}/>
      <View style={styles.row}>
        <View style={{ alignItems: "center" }}>
          <ImageButton onPress={pressDislike} key={"dislike"} source={require("./assets/icon_dislike.png")} title="DISLIKE" />
        </View>
        <View style={styles.buttonSeparator} />
        <View>
          <ImageButton onPress={pressLike} key={"like"} source={require("./assets/icon_like.png")} title="LIKE" />
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
  imageReact: {
    position: 'absolute',
    top: 0,
    left: 0,
  }
  ,
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
