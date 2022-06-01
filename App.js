import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import styles from './styles';
export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');

  const changeGoal = e =>{
    setEnteredGoal(e);
  }

  const addGoal = () => {
    goals.push(enteredGoal);
    setEnteredGoal('');
    console.log("DONE");
    goals.map(x=>console.log(x))
  }
  return (
    <View style={styles.main}>
      <View style={styles.title}>
        <Text style={{fontSize:50, color:'#a058ed'}}>GoalS</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} value={enteredGoal} placeholder='Add Goal!' onChangeText={changeGoal}/>
          <Button style={styles.button} color='#a058ed' title='Add' onPress={addGoal}/>
        </View>
        <View >
          {goals.map(x => <View style={styles.goalItem}>
            <Text key={x}>{x}</Text>
            </View>)}
        </View>
      </View>
      
    </View>

  );
}

let goals = [];

