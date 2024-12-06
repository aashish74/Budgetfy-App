import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Navigation from './src/navigation';

const Tab = createBottomTabNavigator();

const App =() => {
  return (
    <Navigation />
  );
}

export default App;
