import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{margin: 16, borderWidth: 1}}>Greetings Master Jah. 😀Open up App.js to start working on your app!</Text>
      <Text>Hello again!</Text>
      <Button title='Tensorflow.js'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
