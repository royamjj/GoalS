import { StyleSheet } from "react-native";

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
      justifyContent:'space-around',
    },
    button: {
        width:'20%',
    },
    input:{
      borderBottomColor:'black',
      borderBottomWidth:2,
      width:'80%',
      marginRight:10,
    },
    goalItem:{
        borderColor:'black',
        marginTop:10,
        borderWidth:1,
        padding:10,
        borderRadius:5,
        backgroundColor:'#ecdefa',
        width:'100%',
    }
  });

export default styles;