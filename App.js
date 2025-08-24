import { StyleSheet, Text, View, Button, ScrollView, Image, TextInput } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
        <Text style={{flex: 6, backgroundColor: 'white'}}>Greetings 😀</Text>
        <Text style={{flex: 6, backgroundColor: 'skyblue'}}>Hello again!</Text>
      <View>
        <Button title='Tensorflow.js' style={{flex:6, backgroundColor: 'powderblue'}}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'steelblue',
    // flexDirection: 'row'
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

const GoalApp = () => {
  return (
    <View style={styles.container}>
      <View>
        <TextInput placeholder='Your Dail y Profit'/>
        <Button title='Add Win'/>
      </View>
      <View>
        <Text style={{backgroundColor: 'white'}}>Tell us about your win/loss ratio</Text>
      </View>
    </View>
  )
}

export default GoalApp;
