import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Keyboard, TextInput, Modal, ScrollView, Alert, FlatList } from 'react-native';
import firebase from 'firebase';
import db from '../config';
import { render } from 'react-dom';
import Header from '../Components/Header'

import {ListItem} from 'react-native-elements';
export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            requesteditems: [],
        }
        this.requestref = null;
    }
    getrequesteditem=()=>{
        this.requestref = db.collection('Barter_Items').onSnapshot((snapshot)=>{
            var items = snapshot.docs.map(document=>document.data()
            )
            this.setState({
                requesteditems: items
            })
        })
    }
    componentDidMount(){
        this.getrequesteditem()
    }
    componentWillUnmount(){
        this.requestref;
    }
    keyExtractor=(item,index)=>{
    index.toString()
    }
    renderItem=({item,i})=>{
    console.log(item)
    return(
        <ListItem
        key={i}
        title={item.ItemName}
        subtitle={item.Description}
        titleStyle={{color:"#26a5f6"}}
        // rightElement={
        // <TouchableOpacity style={{width:30, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius:10 }}
        // onPress={()=>{
        //     this.item;
            
        // }}
        // >
        // <Text style={{color:"orange"}}>
        //     View
        // </Text>
        // </TouchableOpacity>
        // }    
        bottomDivider
        >
        </ListItem>
    )
    }
    render(){
        return(
            <View style={{flex:1}}>
            <Header title="Items Requested:"></Header>
            <View style={{flex:1}}>
            {
              this.state.requesteditems.length===0
              ?
              (<View style={{flex:1, fontSize: 20, justifyContent: 'center', alignItems: 'center'}}>
              <Text>{"The list of items generally requested by our users, like you, " + firebase.auth().currentUser.email + "would appear here. Currently, there are no pending item requests. To make one, go to the Exchange screen."}</Text>
              </View>)  
              :
              (
              <FlatList keyExtractor={this.keyExtractor} 
              data={this.state.requesteditems}
              renderItem={
                  this.renderItem
              }
              >
              </FlatList>
              )
            }    
            </View></View>
        )
    }
}
