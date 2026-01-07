// import { createNavigationContainerRef, NavigationContainer } from "@react-navigation/native";
// import { RootNavigation } from "./routeTypes";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { ActivityIndicator, StyleSheet, View } from "react-native";
// import { Colors } from "../../theme";
// import { useCallback, useEffect, useRef, useState } from "react";

import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import { RootNavigation } from './routeTypes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '../../theme';
import {
  FORGOT_PASSWORD_SCREEN,
  LOGIN_SCREEN,
  MAIN_ROUTE,
  SIGN_UP_SCREEN,
} from './routeName';
import MainRoute from './main/MainRoute';
import LoginScreen from '../../modules/auth/screens/login/LoginScreen';
import SignUpScreen from '../../modules/auth/screens/signUp/SignupScreen';
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';
import { useAuth } from '../../common/context/AuthContext';

export const navigationRef = createNavigationContainerRef<RootNavigation>();
const Stack = createNativeStackNavigator<RootNavigation>();

// const Stack = createNativeStackNavigator<RootNavigation>();

const SplashScreen: React.FC = () => (
  <View style={styles.splashContainer}>
    <Image
      source={require('../../assets/images/Logo/HikayatLedgerLogo.png')}
      style={styles.logo}
      resizeMode="contain"
    />
    <ActivityIndicator
      size="large"
      color={Colors.primary500}
      style={styles.loader}
    />
  </View>
);

// const AppStack = () => {
//   return (
//     <Stack.Navigator>

//     </Stack.Navigator>
//   );
// };

// const AppContent: React.FC = () => {

//     const handleNavigationReady = React.useCallback(() => {
//       dispatch(setIsNavigationReady());
//       routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
//     }, []);
//   return (
//     <>
//       <NavigationContainer
//         ref={navigationRef}
//         onReady={onNavigationReady}
//         onStateChange={onNavigationStateChange}
//       >
//         <AppStack />
//       </NavigationContainer>
//       <Loader visible={hasPendingNavigation} />
//     </>
//   );
// };

// const AppRoute = () => {
//   return <AppStack />;
// };

// const styles = StyleSheet.create({
//   splashContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: Colors.white,
//   },
//   loader: {
//     marginTop: 24,
//   },
// });

// export default AppRoute;

const MainStack: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: Colors.white,
      },
    }}
  >
    <Stack.Screen name={MAIN_ROUTE} component={MainRoute} />
  </Stack.Navigator>
);

const AuthStack: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: Colors.white,
      },
    }}
    initialRouteName={LOGIN_SCREEN}
  >
    <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
    <Stack.Screen name={SIGN_UP_SCREEN} component={SignUpScreen} />
    <Stack.Screen name={FORGOT_PASSWORD_SCREEN} component={LoginScreen} />
  </Stack.Navigator>
);

const Routes: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      {isAuthenticated ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  logo: {
    width: 180,
    height: 180,
  },
  loader: {
    marginTop: 24,
  },
});

export default Routes;
