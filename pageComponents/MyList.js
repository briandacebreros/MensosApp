import React, { Component } from "react";
import 'react-native-gesture-handler';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, 
          Platform, ActivityIndicator, StatusBar, Button
          } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
 import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';



export default class MyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['ID', 'Nombre', 'Otro','Editar'],
      /*
      tableData: [
        ['1', 'bici01', 'abc','1'],
        ['2', 'bici02', 'def','2'],
        ['3', 'bici03', 'ghi','3'],
        ['4', 'bici04', 'jkl','4']
      ]
      */
      tableData: [
        ['1', 'bici01', 'abc',<Button styles={styles.btnEditar}
            title="Details"
            navigation={this.props.navigation}
            onPress={() => this.props.navigation.navigate('Details',{
              itemId: 1,
              nombre: 'Bici01',
            })}
          />],
        ['2', 'bici02', 'def',<Button styles={styles.btnEditar}
        title="Details"
        navigation={this.props.navigation}
        onPress={() => this.props.navigation.navigate('Details',{
          itemId: 2,
          nombre: 'Bici02',
        })}
      />],
        ['3', 'bici03', 'ghi',<Button styles={styles.btnEditar}
        title="Details"
        navigation={this.props.navigation}
        onPress={() => this.props.navigation.navigate('Details',{
          itemId: 3,
          nombre: 'Bici03',
        })}
      />],
        ['4', 'bici04', 'jkl',<Button styles={styles.btnEditar}
        title="Details"
        navigation={this.props.navigation}
        onPress={() => this.props.navigation.navigate('Details',{
          itemId: 4,
          nombre: 'Bici04',
        })}
      />]
      ]

    }
  }
 
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
        
        
      </View>
      
      
    )
  }
}









const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff', width:'100%', height:"90%" },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  btnEditar: { backgroundColor: "#FFF", color: "#25d366", }
});