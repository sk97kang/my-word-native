import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '~/screens/Home';
import User from '~/screens/User';
import {Icon} from 'react-native-elements';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const UserTab = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
};

const MainTabs = () => {
  return (
    <BottomTab.Navigator tabBarOptions={{showLabel: false}}>
      <BottomTab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon name={focused ? 'home' : 'home-outline'} type="ionicon" />
          ),
        }}
      />
      <BottomTab.Screen
        name="User"
        component={UserTab}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon name={focused ? 'person' : 'person-outline'} type="ionicon" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default () => {
  const [words, setWords] = useState<string[]>(['하루를 되돌아보라']);
``
  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
};
