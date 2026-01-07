import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ActivityNavigation } from '../routeTypes';
import { ActivityScreen } from '../../../modules/main/activity/screens';
import { ACTIVITY_SCREEN } from '../routeName';

const Stack = createNativeStackNavigator<ActivityNavigation>();

const ActivityRoute: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ACTIVITY_SCREEN} component={ActivityScreen} />
    </Stack.Navigator>
  );
};

export default ActivityRoute;
