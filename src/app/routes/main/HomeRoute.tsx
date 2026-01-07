/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeNavigation } from '../routeTypes';
import { HOME_SCREEN } from '../routeName';
import { HomeScreen } from '../../../modules/main/home/screens';

const Stack = createNativeStackNavigator<HomeNavigation>();

const HomeRoute: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeRoute;
