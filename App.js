import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={{margin: 16, padding: 40, borderWidth: 2, backgroundColor: 'white'}}>Greetings Master Jah. 😀Open up App.js to start working on your app!</Text>
      </View>
      <View style={{flex: 2, backgroundColor: 'skyblue'}}>
        <Text>Hello again!</Text>
      </View>
      <View style={{flex: 3, backgroundColor: 'powderblue'}}>
        <Button title='Tensorflow.js'/>
      </View>
    </ScrollView>
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

const Cat = () => {
  const name = 'Maru';
  return <Text style={{margin: 20}}>Hello, I am {name}!</Text>;
};

export default Cat;
