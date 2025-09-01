import { StyleSheet, Text, View, Button, ScrollView, Image, TextInput } from 'react-native';

const Separator = () => <View style={styles.separator} />;

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
      <View style={styles.inputContainer}>
        <TextInput style={{backgroundColor: 'white',padding: 5}} placeholder='Your Daily Profit'/>
        <Button 
          onPress={() => Alert.alert('testing out JavaScript alert API')}
          color='#841584'
          title='Add Win'
         />
      </View>
      <View>
        <Text style={{backgroundColor: 'skyblue',padding: 5, margin: 5,borderRadius: 5}}>Tell us about your win/loss ratio</Text>
        <Separator/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    // justifyContent: 'space-between',
    backgroundColor: 'steelblue',
    // flexDirection: 'row'
  }, inputContainer: {
    flexDirection: 'row-reverse',
    // justifyContent: 'space-between',
  }, submitButton: {
    color: '#841584'
  }, separator: {
    marginVertical: 8,
    padding: 5,
    borderBottomColor: '#841584',
    borderBottomWidth: 1,
  },
});

export default GoalApp;
