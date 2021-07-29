import React, {useState} from 'react';
import {Button, TextInput, View, Text, SafeAreaView, Alert} from 'react-native';
const App = () => {
  const [input, setInput] = useState('');
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text testID="title" style={{fontSize: 26, textAlign: 'center'}}>
          Hello there
        </Text>
        <TextInput
          testID="input"
          placeholder="Name"
          value={input}
          onChangeText={setInput}
          style={{padding: 5}}
        />
        <Button
          testID="button"
          title="Submit"
          onPress={() => Alert.alert(input)}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
