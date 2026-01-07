import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CashFlowNavigation } from '../routeTypes';
import { CASHFLOW_SCREEN } from '../routeName';
import CashFlowScreen from '../../../modules/main/cashflow/screens/CashFlowScreen';

const Stack = createNativeStackNavigator<CashFlowNavigation>();

const CashFlowRoute: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={CASHFLOW_SCREEN} component={CashFlowScreen} />
    </Stack.Navigator>
  );
};

export default CashFlowRoute;
