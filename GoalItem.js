import { Text, View } from "react-native";
import styles from './styles';



const GoalItem = props =>{
    return (
        <View key={props.goal} style={styles.goalItem}>
        <Text >{props.goal}</Text>
        </View>
    );
    
}

export default GoalItem;

