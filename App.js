import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';

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

const Cat = (props) => {
  return(
    <View>
      <Image
        source={{uri: 'https://cdnb.artstation.com/p/assets/images/images/018/469/985/large/ksop-sanji-psd2-da.jpg?1559513757'}}
        style={{width: 100, height: 100}}
      />
      <Text style={{margin: 20}}>Hello, I am {props.name}!</Text>
    </View>
  )
};

const Cafe = () => {
  return (
    <View>
      <Text>Pepsi</Text>
      <Cat name="hanma"/>
      <Cat name="baki"/>
      <Cat name="ippo"/>
    </View>
  )
}

export default Cafe;
