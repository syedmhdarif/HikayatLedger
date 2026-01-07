import { SafeAreaView } from 'react-native-safe-area-context';
import {
  StatusBar,
  StatusBarStyle,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { ReactNode, useCallback } from 'react';
import { Colors, typography } from '../../../theme';
import { useNavigation } from '@react-navigation/native';
import Text from '../Text';
import { ChevronLeftIcon } from '../Icon';

interface BackScreenProps {
  children: ReactNode;
  title?: string;
  titlePosition?: 'left' | 'center';
  fullWidth?: boolean;
  onBack?: () => void;
  showBackButton?: boolean;
  backgroundColor?: string;
  statusBarStyle?: StatusBarStyle;
  statusBarBackgroundColor?: string;
  useSafeArea?: boolean;
  safeAreaEdges?: Array<'top' | 'bottom' | 'left' | 'right'>;
  headerStyle?: ViewStyle;
  contentStyle?: ViewStyle;
}

const BackScreenBase: React.FC<BackScreenProps> = ({
  title,
  titlePosition = 'left',
  fullWidth = false,
  onBack,
  showBackButton = true,
  backgroundColor = Colors.grey100,
  statusBarStyle = 'dark-content',
  statusBarBackgroundColor,
  useSafeArea = true,
  safeAreaEdges = ['top'],
  contentStyle,
  headerStyle,
  children,
}) => {
  const navigation = useNavigation();

  const handleBack = useCallback(() => {
    if (onBack) {
      onBack();
    } else if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }, [onBack, navigation]);

  const renderHeader = () => {
    return (
      <View style={[styles.header, headerStyle]}>
        {/* Left Section - Back Button */}
        <View style={styles.headerLeft}>
          {showBackButton && (
            <TouchableOpacity
              onPress={handleBack}
              style={styles.backButton}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <ChevronLeftIcon />
            </TouchableOpacity>
          )}
          {titlePosition === 'left' && title && (
            <Text style={[typography.bodySmall, styles.titleLeft]}>
              {title}
            </Text>
          )}
        </View>

        {/* Center Section - Title (if centered) */}
        {titlePosition === 'center' && title && (
          <View style={styles.headerCenter}>
            <Text style={[typography.bodySmall, styles.titleCenter]}>
              {title}
            </Text>
          </View>
        )}
      </View>
    );
  };
  const content = (
    <View style={[styles.container, { backgroundColor }]}>
      <StatusBar
        barStyle={statusBarStyle}
        backgroundColor={statusBarBackgroundColor || backgroundColor}
      />
      {renderHeader()}
      <View
        style={[
          styles.content,
          fullWidth && styles.contentFullWidth,
          contentStyle,
        ]}
      >
        {children}
      </View>
    </View>
  );
  if (useSafeArea) {
    return (
      <SafeAreaView style={styles.safeArea} edges={safeAreaEdges}>
        {content}
      </SafeAreaView>
    );
  }

  return content;
};

export default BackScreenBase;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  contentFullWidth: {
    paddingHorizontal: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 56,
  },
  headerFullWidth: {
    paddingHorizontal: 0,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  titleLeft: {
    color: Colors.black500,
    flex: 1,
  },
  titleCenter: {
    color: Colors.black500,
    textAlign: 'center',
  },
  headerCenter: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  backButton: {
    marginRight: 8,
  },
});
