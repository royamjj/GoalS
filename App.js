import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {

  const [text,changeText] = useState('Yo boi!');

  return (
    <View style={styles.main}>
      <View style={styles.title}>
        <Text style={{fontSize:50, color:'#a058ed'}}>GoalS</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder='Add Goal!'/>
          <Button style={styles.button} color='#a058ed' title='Add' />
        </View>
      </View>
      
    </View>

  );
}

const styles = StyleSheet.create({
  main:{
    paddingTop:80,
  },
  container:{
    paddingTop:30,
    paddingLeft:20,
    paddingRight:40,
  },
  title:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  inputContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:10,
  },
  button: {
  },
  input:{
    borderBottomColor:'black',
    borderBottomWidth:2,
    width:'90%',
    marginRight:10,
  },
 
});


const names= [
  {'name': 'Ben', 'id': 1},
  {'name': 'Susan', 'id': 2},
  {'name': 'Robert', 'id': 3},
  {'name': 'Mary', 'id': 4},
  {'name': 'Daniel', 'id': 5},
  {'name': 'Laura', 'id': 6},
  {'name': 'John', 'id': 7},
  {'name': 'Debra', 'id': 8},
  {'name': 'Aron', 'id': 9},
  {'name': 'Ann', 'id': 10},
  {'name': 'Steve', 'id': 11},
  {'name': 'Olivia', 'id': 12}
]