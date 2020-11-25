import React from 'react';
import {View, Text, TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native';

class About extends React.Component {
    constructor(props) {
        super(props);    
      }
    render() {
        return (
            <View style={styles.container} >
                <Text>Mi About</Text>
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
        width: "100%",
        padding: 15
    },
    logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"#fb5b5a",
        marginBottom:40
      }

});



export default About;