import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, spacing, typography } from '../../../theme';
import Text from '../Text';
import { useCallback, useEffect, useRef } from 'react';

interface TabItemProps {
  route: any;
  index: number;
  state: any;
  descriptors: any;
  navigation: any;
}

const TabItem: React.FC<TabItemProps> = ({
  route,
  index,
  state,
  descriptors,
  navigation,
}: TabItemProps) => {
  const { options } = descriptors[route.key];
  const label = options.tabBarLabel ?? options.title ?? route.title;
  const isFocused = state.index === index;
  const color = isFocused
    ? options.tabBarActiveTintColor
    : options.tabBarInactiveTintColor;
  const icon = options.tabBarIcon;
  const size = options.tabBarIconSize;

  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (isFocused) {
      Animated.spring(scaleAnim, {
        toValue: 1.05,
        friction: 5,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  }, [isFocused]);

  const onPressIn = useCallback(() => {
    Animated.spring(scaleAnim, {
      toValue: 0.9,
      friction: 5,
      useNativeDriver: true,
    }).start();
  }, [scaleAnim]);

  return (
    <TouchableOpacity
      activeOpacity={1}
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      onPress={() => navigation.navigate(route.name)}
      onPressIn={onPressIn}
      style={styles.tabItem}
    >
      <Animated.View
        style={[
          styles.tabItemContent,
          isFocused && styles.itemActive,
          { transform: [{ scale: scaleAnim }] },
        ]}
      >
        {icon({
          focused: isFocused,
          color: isFocused ? Colors.white : color,
          size,
        })}
        {!isFocused && <Text style={[styles.text, { color }]}>{label}</Text>}
      </Animated.View>
    </TouchableOpacity>
  );
};

const CustomBotttomTab: React.FC<BottomTabBarProps> = ({
  state,
  navigation,
  descriptors,
}) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        styles.bottomTab,
        { marginBottom: insets.bottom },
      ]}
    >
      <View style={styles.row}>
        {state.routes.map((route, index) => {
          return (
            <TabItem
              key={route.key}
              route={route}
              index={index}
              state={state}
              descriptors={descriptors}
              navigation={navigation}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    marginHorizontal: spacing.xl,
    backgroundColor: Colors.primary800,
  },
  bottomTab: {
    flexDirection: 'row',
    height: 66,
    alignItems: 'center',
    borderRadius: 28,
    overflow: 'hidden',
    paddingHorizontal: spacing.xs,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    ...typography.labelSmall,
    paddingTop: 2,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabItemContent: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
  },
  itemActive: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 70,
    height: 48,
    backgroundColor: Colors.primary700,
    borderRadius: 20,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
});

export default CustomBotttomTab;
