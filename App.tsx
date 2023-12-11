import {View, Text} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 22, fontWeight: 'bold', textAlign: 'center'}}>
        How to connect firebase to React Native apps
      </Text>
      <Text style={{fontSize: 32, fontWeight: 'bold', textAlign: 'center'}}>
        2023
      </Text>
      <Text style={{fontSize: 22, fontWeight: 'bold', textAlign: 'center'}}>
        Android | iOS
      </Text>
    </View>
  );
};

export default App;
