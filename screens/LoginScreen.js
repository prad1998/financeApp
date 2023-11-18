import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import { ScreenType } from "../constants/constants";

const LoginScreen = ({ OnButtonClick }) => {
  return (
    <View style={styles.conatiner}>
      
      
      <ImageBackground
        source={require("../assets/mantwo.png")}
        style={styles.backgroundpic}
        
      >  
       <View style={styles.buttonContainer}>
          <Button
            onPress={() => OnButtonClick(ScreenType.home)}
            color={"#3AB4BA"}
            title="< Back"
          />
        </View>

         
    

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Username"
            placeholderTextColor="#003f5c"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="#003f5c"
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({

  conatiner: {
    flex: 1,
  },

  form: {
    alignItems: "center",
    backgroundColor: "black",
    height: "80%",
  },

  forgot: {
    color: "white",
    fontSize: 11,
  },

  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },

  color: {
    backgroundColor: "red",
    color: "red",
    marginTop: 20,
    height: "100%",
    width: "100%",
  },

  inputView: {
    width: "80%",
    backgroundColor: "#3AB4BA",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },

  buttonContainer: {
    alignSelf: "flex-start",
    backgroundColor: "white",
    marginBottom: 280,
  },

  backgroundpic: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
    width: Dimensions.get("screen").width,
    justifyContent: 'center',
    alignItems: "center"

  },
});
