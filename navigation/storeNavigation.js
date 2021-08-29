import {createAppContainer} from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack';
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import homePageScreen from '../screens/homePage';
import categoryScreen from '../screens/category';
import formDatelisScreen from '../screens/formDatelis';
import orderRecivdScreen from '../screens/orderRecivd';
import prodactScreen from '../screens/prodact';
import shoppingCartScreen from '../screens/ShoppingCart';

import { createBottomTabNavigator } from "react-navigation-tabs";




const StoreNavigator = createStackNavigator({
    home: homePageScreen,
    prodact:prodactScreen,
    category:categoryScreen,
    formDatelis:formDatelisScreen,
    orderRecivd:orderRecivdScreen,

});

const storeFavTabNavigator = createBottomTabNavigator(
    {
      store: {
        screen: StoreNavigator,
        navigationOptions: {
          // define icon: tabBarIcon is a function that receives tabBar info:
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="arrow-undo"
                size={25}
                color={tabInfo.tintColor}
              />
            );
          },
        },
      },
      Favorites: {
        screen: shoppingCartScreen ,
        navigationOptions: {
          tabBarLabel: "shoping cart!",

          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
               name="card-outline"
               size={25}
               />
            );
          },
        },
      },
    },
   /* {
      tabBarOptions: {
        activeTintColor: Colors.primary,
       },
     }*/
  );
export default createAppContainer (storeFavTabNavigator);