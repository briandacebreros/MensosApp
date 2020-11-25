import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, 
    Platform, ActivityIndicator, StatusBar, Button
    } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const userInfo = {username: 'admin', password: 'pass12345'}
export default class MyList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: ''
        }
    }
   
    render() {
      const state = this.state;
      return (
        <View style={styles.loginContainer} >
            <StatusBar backgroundColor="#25d366" 
                    barStyle="light-content"/>
            <Text style={styles.welcome}>Iniciar Sesion</Text>
            <TextInput 
                style={styles.input}
                placeholder="Usuario"
                onChangeText = {(username)=>this.setState({username})}
                value = {this.state.username}
                autoCapitalize="none"
            />
            <TextInput 
                style={styles.input}
                placeholder="Contrasena"
                secureTextEntry
                onChangeText = {(password)=>this.setState({password})}
                value = {this.state.password}
            />
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.userBtn}>
                    <Text style={styles.btnText}
                      //onPress={() => this.props.navigation.navigate('Details')}
                      onPress={this._login}
                     >Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userBtn}>
                    <Text style={styles.btnText}
                    onPress={() => alert('Signup Works')}>Crear cuenta</Text>
                </TouchableOpacity>
            </View>
            
        </View>
        
        
      )
    }
    _login = async() => {
        //let history = useHistory();
        if(userInfo.username === this.state.username && userInfo.password === this.state.password) {
            //alert('Logged In');
            await AsyncStorage.setItem('isLoggedIn','1');
            //alert(storageSample);
            this.props.navigation.navigate('List');
        } else {
            alert('Usuario o contrase;a es incorrecto.')
        }
      }
  }
  
  
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginContainer: {
      flex: 1,
      backgroundColor: '#25d366',
      alignItems: 'center',
      justifyContent: 'center',
    },
    nav:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 25,
      width: "100%",
      textAlign: "center",
      height: 30
    },
    inputView: {
      flex: 1,
      backgroundColor: '#25d366',
      alignItems: 'center',
      justifyContent: 'center',
      width: "90%"
      
  },
  welcome: {
      fontSize: 30,
      textAlign: 'center',
      margin: 10,
      color: "#FFF"
      
    },
    input:{
        width: "95%",
        backgroundColor: "#FFF",
        padding: 15,
        marginBottom: 10,
    },
    btnMenu: {
      backgroundColor: "#25d366",
      padding: 15,
      width: "25%"
    },
    userBtn: {
        backgroundColor: "#f3f3f3",
        padding: 15,
        width: "45%"
    },
    btnText: {
        fontSize: 18,
        textAlign: "center",
    },
    btnContainer: {
        flexDirection:"row",
        justifyContent: "space-between",
        width: "95%"
    }
    
  });
  
  