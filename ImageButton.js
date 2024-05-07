import React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';

const ImageButton = ({ onPress, source, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image source={source} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  title: {
    fontSize: 16,
  },
});

export default ImageButton;