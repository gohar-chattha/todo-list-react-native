import React, {Fragment} from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import * as util from '../utilities'
import Icon from 'react-native-vector-icons/FontAwesome';
import home from '../components/home/home';
import listings from '../components/listings/listings';
Icon.loadFont();
// Add all screens for Home Stack
const homeStack = createStackNavigator({
  home: home,
});
// Add all screens for Listing Stack
const listingStack = createStackNavigator({
  listings: listings,
});
const MainTab = createBottomTabNavigator({
  Home: {
    screen: homeStack,
    navigationOptions: ({navigation}) => {
      return {
        title: 'Home',
        tabBarIcon: ({focused}) => {
          return (
            <Icon
              name="home"
              size={util.WP(6)}
              type="font-awesome"
              color={focused?util.BASE_COLOR:"grey"}
            />
          );
        },
      };
    },
  },
  Listings: {
    screen: listingStack,
    navigationOptions: ({navigation}) => {
      return {
        title: 'Listings',
        tabBarIcon: ({focused}) => {
          return (
            <Icon
              name="bars"
              size={util.WP(6)}
              type="font-awesome"
              color={focused?util.BASE_COLOR:"grey"}
            />
          );
        },
      };
    },
  },
});

var SwitNav = createSwitchNavigator({
  // Create different switches for Auth stack and Onboarding screens if any
  app: MainTab,
});

export var AppContainer = createAppContainer(SwitNav);
