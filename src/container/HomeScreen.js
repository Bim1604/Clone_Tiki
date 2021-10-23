/* eslint-disable prettier/prettier */
import React, {useLayoutEffect} from 'react';
import {HomeComponent} from '../components/home/index';
import {createStackNavigator} from '@react-navigation/stack';
import {SearchComponent} from '../components/search/index';
import {DetailsComponent} from '../components/details/index';
import {getFocusedRouteNameFromRoute} from '@react-navigation/core';

const Stack = createStackNavigator();

const HomeScreen = ({navigation, route}) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'DetailsComponent') {
      navigation.setOptions({
        tabBarStyle: {
          display: 'none',
        },
      });
    } else {
      navigation.setOptions({
        tabBarStyle: {
          display: 'flex',
        },
      });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeComponent" component={HomeComponent} />
      <Stack.Screen name="SearchComponent" component={SearchComponent} />
      <Stack.Screen name="DetailsComponent" component={DetailsComponent} />
    </Stack.Navigator>
  );
};

export default HomeScreen;
