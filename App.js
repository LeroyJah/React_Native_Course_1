import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={{margin: 16, padding: 40, borderWidth: 2, backgroundColor: 'white'}}>Greetings Master Jah. 😀Open up App.js to start working on your app!</Text>
      </View>
      <View style={{flex: 2, backgroundColor: 'skyblue'}}>
        <Text>Hello again!</Text>
      </View>
      <View style={{flex: 3, backgroundColor: 'powderblue'}}>
        <Button title='Tensorflow.js'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'steelblue'
  },
});
