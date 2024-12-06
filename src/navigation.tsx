import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ExpensesScreen from './screens/ExpensesScreen';
import SettingsScreen from './screens/SettingsScreen';
import AddExpensesScreen from './screens/AddExpensesScreen';
import IMAGES from './assets/images';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ExpensesStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ExpensesMain" component={ExpensesScreen} />
      <Stack.Screen name="AddExpenses" component={AddExpensesScreen} />
    </Stack.Navigator>
  );
}

const Navigation = () => {
  return(
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Tab.Navigator
        screenOptions={{ 
          headerShown: false,
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon:({focused}) => (
                <Image source={IMAGES.HOME} style = {{height:25, width: 25, tintColor: focused ? 'blue': 'grey' }} />
            ),
          }}
        />
        <Tab.Screen
          name="Expenses"
          component={ExpensesStack}
          options={{
            tabBarIcon:({focused}) => (
                <Image source={IMAGES.PLUS} style = {{height:35, width:35, tintColor: focused ? 'blue': 'grey'}}/>
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon:({focused}) => (
                <Image source={IMAGES.GRAPH} style = {{height:45, width:35, tintColor: focused ? 'blue': 'grey'}} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const Navigations = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;