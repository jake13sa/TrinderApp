import React, {useRef} from 'react';
import { Animated, Text, View, StyleSheet, Button, SafeAreaView} from 'react-native';

export const likeReact = () => {
  const img = require("./assets/icon_like.png")
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
});