import { Dimensions, Pressable, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScreenType } from "../constants/constants";

const HomeScreen = ({onExit}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/mantwo.png')} style={styles.backgroundpic}>
        <Pressable style={styles.buttonContainer} onPress={() => onExit(ScreenType.Login)}>
          <View style={styles.button}>
            <Text style={{fontSize: 15}}>LOGIN</Text>
          </View>
        </Pressable>

        <Pressable style={[styles.buttonContainer, styles.beneathButtonContainer]} onPress={() => onExit(ScreenType.Login)}> 
          <View style={styles.button}>
            <Text style={{fontSize: 15}}>GUEST</Text>
          </View>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const buttonCommon = {
  width: Dimensions.get("window").width - 100,
  height: 60,
  marginVertical: 10,
  borderRadius: 30,
  backgroundColor: "#3AB4BA",
  justifyContent: "center",
  alignItems: "center",
  elevation: 10,
  shadowOffset: {width: 2, height: 10},
  shadowColor: "red", 
  shadowOpacity: 9.3, 
  shadowRadius: 3,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  buttonContainer: {
    alignContent: "space-between",
    position: 'absolute',
    bottom: 140, 
    width: '100%',
    alignItems: 'center',
  },

  beneathButtonContainer: {
    bottom: 50,
  },

  button: {
    ...buttonCommon,
  }, 

  backgroundpic: {
    flex: 1,
    resizeMode: 'cover',
    width: Dimensions.get("screen").width,
    justifyContent: 'center',
  },
});
