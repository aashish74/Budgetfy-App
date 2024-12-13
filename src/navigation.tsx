import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ExpensesScreen from './screens/ExpensesScreen';
import AddExpensesScreen from './screens/AddExpensesScreen';
import IMAGES from './assets/images';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TripExpensesScreen from './screens/TripExpensesScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
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
              <Image source={IMAGES.HOME} style = {{height:35, width: 35, tintColor: focused ? 'blue': 'grey' }} />
          ),
        }}
      />
      <Tab.Screen
        name="Expenses"
        component={ExpensesScreen}
        options={{
          tabBarIcon:({focused}) => (
              <Image source={IMAGES.PLUS} style = {{height:35, width:35, tintColor: focused ? 'blue': 'grey'}}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Navigation = () => {
  return(
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name='Welcome' component={WelcomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name='SignUp' component={SignUpScreen} options={{headerShown: false}}/>
        <Stack.Screen name="MainTabs" component={TabNavigator} options={{ headerShown: false }}/>
        <Stack.Screen name="TripExpenses" component={TripExpensesScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="AddExpenses" component={AddExpensesScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;