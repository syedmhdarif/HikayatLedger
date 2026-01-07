/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeNavigation, SettingsNavigation } from '../routeTypes';
import { HOME_SCREEN, SETTINGS_SCREEN } from '../routeName';
import { SettingsScreen } from '../../../modules/main/settings/screens';

const Stack = createNativeStackNavigator<SettingsNavigation>();

const SettingsRoute: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SETTINGS_SCREEN} component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default SettingsRoute;
