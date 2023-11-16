import { Dimensions, Pressable, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    
      <View style={styles.conatiner}>
        <ImageBackground source={require('../assets/mantwo.png')} style={styles.backgroundpic}>
        <Pressable style={styles.buttonContainer}>
          <View style={styles.button}>
            <Text>Login</Text>
          </View>
        </Pressable> 
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: "center",
  
  },

  buttonContainer: {
    position: 'absolute',
    bottom: 90, 
    width: '100%',
    alignItems: 'center',
  },

  button: {
    width: Dimensions.get("window").width - 100,
    height: 60,
    marginVertical: 10,
    borderRadius: 30,
    backgroundColor: "#20f54a",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    shadowOffset: {width: 2, height: 10},
    shadowColor: "red", 
    shadowOpacity: 9.3, 
    shadowRadius: 3,
  }, 

  backgroundpic: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
    width: Dimensions.get("screen").width,
    justifyContent: 'center',
  },
});
