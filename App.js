import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import Footer from './components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <HomeScreen></HomeScreen> 
      <Footer></Footer>     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
