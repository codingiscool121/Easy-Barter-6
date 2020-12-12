import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ExchangeScreen from '../screens/ExchangeScreen';
import Home from '../screens/Home';

export const AppTabNavigator = createBottomTabNavigator({
    Home:{
    screen:Home,
    NavigationOptions:{
        tabBarIcon:
        <Image
        source={require('../assets/homeicon.png')} 
        style={{width:40, height: 40}}
        tabBarLabel="Home"
        />
    }
    },


    Exchange:{
        screen:ExchangeScreen,
        NavigationOptions:{
            tabBarIcon:
            <Image
            source={require('../assets/tradingicon.gif')}
            style={{width:40, height: 40}}
            tabBarLabel="Exchange An Item"
            />
        }
    },

})