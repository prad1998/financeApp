import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.headerConationer}>
      <Text style={styles.headerTitle}>FINANCE APP</Text>
    </View>
  );
}

const styles = StyleSheet.create({

   headerConationer: {
    width: "100%",
    height: "13%",
    backgroundColor: "black",
    paddingTop: 30,
   }, 

   headerTitle: {
     color: "white",
     fontSize: 30,
     fontWeight: "bold",
     padding: 10, 
     marginTop: 10, 
     textAlign: "center"

   }
})