import { Text, View, TouchableOpacity} from "react-native";
import styles from './styles';



const GoalItem = props =>{
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.deleteItem.bind(this,props.id)}>
            <View id={props.id} style={styles.goalItem} on>
            <Text >{props.goal}</Text>
            </View>
        </TouchableOpacity>
    );
    
}

export default GoalItem;

