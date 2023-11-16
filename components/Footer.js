import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React from 'react';

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <View >
            <Text style={styles.textColor}>Contact</Text>
          </View>
        </Pressable>

        <Pressable style={styles.button}>
          <View >
            <Text style={styles.textColor}>About</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: '100%',
    backgroundColor: "black",
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get("window").width,
    height: '100%',
    marginVertical: 5,
    
    
  },
  button: {
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
   
  },

  textColor: {
    color: "white"
  }
});
 