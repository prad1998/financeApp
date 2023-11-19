import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState } from 'react';

const GuestScreen = () => {
  const socket = new WebSocket(
    'wss://ws.finnhub.io?token=clckec1r01qk5dvqpkegclckec1r01qk5dvqpkf0'
  );

  const [index, onIndexChange] = React.useState(1);

  const data = [
    { label: 'AAPL', value: 'AAPL' },
    { label: 'BINANCE:BTCUSDT', value: 'BINANCE:BTCUSDT' },
    { label: 'IC MARKETS:1', value: 'IC MARKETS:1' },
  ];

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus]}>
          
        </Text>
      );
    }
    return null;
  };

  const [extractedValues, setExtractedValues] = useState([]);

  socket.addEventListener('open', function (event) {
    socket.send(JSON.stringify({ type: 'subscribe', symbol: 'AAPL' }));
    socket.send(JSON.stringify({ type: 'subscribe', symbol: 'BINANCE:BTCUSDT' }));
    socket.send(JSON.stringify({ type: 'subscribe', symbol: 'IC MARKETS:1' }));
  });

  socket.addEventListener('message', function (event) {
    const parsedData = JSON.parse(event.data);

    // Extract values
    console.log(event.data) 
    
    console.log(parsedData)
    const { data } = parsedData;
    
    if (data && Array.isArray(data)) {
      const newData = data.map((item) => {
        const { p, s, t, v } = item;
        return { p, s, t, v };
      });

      setExtractedValues((prevValues) => [...prevValues, ...newData]);
    }
  });

  // Unsubscribe
  const unsubscribe = function (symbol) {
    socket.send(JSON.stringify({ type: 'unsubscribe', symbol: symbol }));
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    valueContainer: {
      marginTop: 10,
    },
    dropdownContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 999, 
    },
    dropdown: {
      height: 40,
      borderColor: 'gray',
      backgroundColor: '#3AB4BA',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    scrollView: {
      flex: 1,
      width: '100%',
    },
  });

  return (
    <View style={styles.container}>
      <Text>{value}</Text>
      <View style={styles.dropdownContainer}>
        {renderLabel()}
        <Dropdown
          style={styles.dropdown}
          data={data}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Trade' : '...'}
          search
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus ? 'blue' : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />
        <Text> </Text>
      </View>
      <ScrollView style={styles.scrollView}>
        {extractedValues.map((item, index) => (
          <View key={index} style={styles.valueContainer}>
            <Text>{`p: ${item.p}, s: ${item.s}, t: ${item.t}, v: ${item.v}`}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default GuestScreen;
