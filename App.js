import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, Button, TextInput, ScrollView, KeyboardAvoidingView} from 'react-native';
import styles from './styles';
import GoalItem from './GoalItem';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');

  const changeGoal = e =>{
    setEnteredGoal(e);
  }

  const addGoal = () => {
    goals.push(enteredGoal);
    setEnteredGoal('');
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
        <View stlye={{flex:1}}>
          <KeyboardAvoidingView>
            <ScrollView stlye={{flex:1}}>
              {goals.map(x => <GoalItem goal={x} key={x}/>)}
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </View>
    </View>
  );
}

let goals = [];

