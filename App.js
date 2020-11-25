import React, { Component } from "react";

import { StyleSheet, Text, TextInput, View, TouchableOpacity, 
          Platform, ActivityIndicator, StatusBar, Button
          } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAppContainer, createSwitchNavigator, withNavigation  } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import { Router, Route, Link } from "./react-router";
import About from './pageComponents/About.js';
import { render } from "react-dom";
import MyList from './pageComponents/MyList.js';
import Login from './pageComponents/Login.js';



const userInfo = {username: 'admin', password: 'pass12345'}
class HomeScreen extends Component {
  static navigationOptions = {
    //header: null,
    headerShown: false
  }
  constructor(props) {
      super(props);
      this.state = {
          username: '',
          password: ''
      }
  }
  render() {
    return(
      <View style={styles.loginContainer}>
        <StatusBar 
          backgroundColor="#25d366"
          barStyle="light-content"
        />
        <View >
          <Login navigation={this.props.navigation} />
        </View>
      </View>
      
    );
  }

  _login = async() => {
    //let history = useHistory();
    if(userInfo.username === this.state.username && userInfo.password === this.state.password) {
        //alert('Logged In');
        await AsyncStorage.setItem('isLoggedIn','1');
        this.props.navigation.navigate('List');
    } else {
        alert('Usuario o contrase;a es incorrecto.')
    }
  }
}

class ListScreen extends Component {
  static navigationOptions = {
    title: 'Listado',
  }
  render() {
    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <MyList navigation={this.props.navigation} />

        <View style={styles.btnContainer}>
          <Button style={styles.btnMenu}
                title="Details"
                navigation={this.props.navigation}
                onPress={() => this.props.navigation.navigate('Details',{
                    itemId: 4,
                    otherParam: 'Bici04',
                })} />
          <Button style={styles.btnMenu}
            title="Nosotros"
            onPress={() => this.props.navigation.navigate('Nosotros')}
            />
          <Button style={styles.btnMenu} 
            onPress={this._logout} title="Logout" />
        </View>
        
      </View>
    );
  }

  _logout = async() => {
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
    //alert(isLoggedIn);
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
        
  }
}
class DetailsScreen extends Component {
  static navigationOptions = {
    title: 'Details Screen',
  }
  constructor(props) {
      super(props);    
    }
    
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');
      return (
          <View style={styles.container} >
              <Text>This is DetailsScreen </Text>
              <Text>ID: {JSON.stringify(itemId)}</Text>
              <Text>Nombre: {JSON.stringify(otherParam)}</Text>
              
          </View>
  
      )
  }
}

const RootStack = createStackNavigator(
  {
    //Home: HomeScreen,
    List: ListScreen,
    Details: DetailsScreen,
    Nosotros: About
  },
  {
    //initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#25d366'
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        flex: 1
      }
    }
  }
);

const AuthStack = createStackNavigator({Home: HomeScreen});

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this._loadData();
  }

  render() {
    return(
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
  _loadData = async() => {
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
    this.props.navigation.navigate(isLoggedIn !== '1'? 'Auth' : 'App');
  }
}



export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: RootStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading',
  }

));





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
    padding: 25
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

