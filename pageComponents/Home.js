import React from 'react';
import {View, Text, TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
        };
    
      }
    render() {
        return (
            <View style={styles.container} >
                <Text>Mi Home</Text>
            </View>
    
        )
    }
    


}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: "90%",
        fontSize:32
    },
    logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"#fb5b5a",
        marginBottom:40
      }

});



export default Home;