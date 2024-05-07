import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import ImageButton from "./ImageButton";
import SwipeGesture from 'react-native-swipe-gestures';

export default function App() {
  const handlePress = (e) => {
    // Handle button press here
  };

  const onSwipeLeft = () => {
    console.log('Swiped left!');
    // Handle swipe left event
  };

  const onSwipeRight = () => {
    console.log('Swiped right!');
    // Handle swipe right event
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
        }}>
        <Image source={require("./assets/jake1.jpg")} style={styles.image} />
      </SwipeGesture>
      <View style={styles.row}>
        <View style={{ alignItems: "center" }}>
          <ImageButton
            onPress={handlePress}
            source={require("./assets/icon_dislike.png")}
            title="DISLIKE"
          />
          <Text style={styles.contentText}>← Swipe Left</Text>
        </View>
        <View style={styles.buttonSeparator}/>
        <View>
          <ImageButton
            onPress={handlePress}
            source={require("./assets/icon_like.png")}
            title="LIKE"
          />
          <Text style={styles.contentText}>Swipe Right →</Text>
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
    overflow: 'hidden'
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
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
