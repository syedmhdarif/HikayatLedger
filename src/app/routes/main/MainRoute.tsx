import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { MainNavigation } from '../routeTypes';
import {
  ACTIVITY_ROUTE,
  CASHFLOW_ROUTE,
  HOME_ROUTE,
  SETTINGS_ROUTE,
} from '../routeName';
import HomeRoute from './HomeRoute';
import { useTranslation } from 'react-i18next';
import {
  ActivityIcon,
  CreditCardIcon,
  HomeIcon,
  ProfileIcon,
} from '../../../common/components/Icon';
import ActivityRoute from './ActivityRoute';
import SettingsRoute from './SettingsRoute';
import { HomeScreen } from '../../../modules/main/home/screens';
import { Colors, typography } from '../../../theme';
import CustomBotttomTab from '../../../common/components/CustomBottomTab/CustomBottomTab';
import CashFlowRoute from './CashFlowRoute';

const Tab = createBottomTabNavigator<MainNavigation>();

const MainRoute: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      initialRouteName={HOME_ROUTE}
      screenOptions={tabBarOptions}
      tabBar={props => <CustomBotttomTab {...props} />}
    >
      <Tab.Screen
        name={HOME_ROUTE}
        component={HomeScreen}
        options={{
          tabBarLabel: t('navigation.home'),
          tabBarIcon: ({ focused, color, size }) => (
            <HomeIcon focused={focused} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={ACTIVITY_ROUTE}
        component={ActivityRoute}
        options={{
          tabBarLabel: t('navigation.activity'),
          tabBarIcon: ({ focused, color, size }) => (
            <ActivityIcon focused={focused} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={CASHFLOW_ROUTE}
        component={CashFlowRoute}
        options={{
          tabBarLabel: t('navigation.cashFlow'),
          tabBarIcon: ({ focused, color, size }) => (
            <CreditCardIcon focused={focused} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={SETTINGS_ROUTE}
        component={SettingsRoute}
        options={{
          tabBarLabel: t('navigation.profile'),
          tabBarIcon: ({ focused, color, size }) => (
            <ProfileIcon focused={focused} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const tabBarOptions: BottomTabNavigationOptions = {
  lazy: true,
  headerShown: false,
  tabBarActiveTintColor: Colors.primary600,
  tabBarInactiveTintColor: Colors.grey500,
  // Custom tab bar handles its own styling
  // tabBarActiveTintColor: Colors.primary200,
  // tabBarInactiveTintColor: Colors.grey500,
};

export default MainRoute;
