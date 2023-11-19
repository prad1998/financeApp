import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./components/Footer";
import { useState } from "react";
import { ScreenType } from "./constants/constants";
import LoginScreen from "./screens/LoginScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import UserScreen from "./screens/UserScreen";
import BackButton from "./components/BackButton";
import GuestScreen from "./screens/GuestScreen";

export default function App() {
  const [screen, setScreen] = useState(ScreenType.home);
  let content;

  if (screen === ScreenType.Login) {
    content = <LoginScreen OnButtonClick ={(data) => setScreen(data)}/>;
  } else if (screen === ScreenType.About) {
    content = <AboutScreen />;
  } else if (screen === ScreenType.Contact) {
    content = (
      <ContactScreen
        onExit={(data) => {
          setScreen(data);
        }}
      />
    );
  } else if (screen === ScreenType.home) {
    content = (
      <HomeScreen
        onExit={(data) => {
          setScreen(data);
        }}
      />
    );
  } else if (screen === ScreenType.User) {
    content = <UserScreen />;
  } else if (screen === ScreenType.Guest) {
    content = <GuestScreen OnButtonClick ={(data) => setScreen(data)} />;
  } 

  return (
    <View style={styles.container}>
      <Header></Header>
      {content}
      <Footer></Footer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
