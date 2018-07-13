import React from 'react';

import {
  TabNavigator,
  StackNavigator,
  StackRouter
} from 'react-navigation';

import TagSelect from './TagSelect'
import Splash from './Splash'

const AppNavigator = StackNavigator({
  tag: {
    screen: TagSelect,
  },
},{
  headerMode: 'none',
});

const MainNavigator = StackNavigator(
  {
    Splash: { screen: Splash },
    Main: { screen: AppNavigator },    
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

export default MainNavigator;
