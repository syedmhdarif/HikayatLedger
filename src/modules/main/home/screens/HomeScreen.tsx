import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Divider,
  MainScreen,
  Text,
  Toast,
} from '../../../../common/components';
import { useAuth } from '../../../../common/context/AuthContext';
import { useAppSelector } from '../../../../app/store/hooks';
import { RootState } from '../../../../app/store';
import { StyleSheet, View } from 'react-native';
import { spacing } from '../../../../theme';
import { formatDate } from '../../../../utils';

export default function HomeScreen() {
  const { t } = useTranslation();
  const { signOut } = useAuth();

  const profile = useAppSelector((state: RootState) => state.auth.profile);

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      Toast({ message: error, type: 'error' });
    }
  };
  return (
    <MainScreen fullWidth>
      <View style={styles.padding}>
        <Text variant="h2" weight="bold">
          {profile?.profile_name}
        </Text>
        <Text variant="body">
          {formatDate(profile?.date_of_birth as string)}
        </Text>
        <Text variant="body">{profile?.email}</Text>
      </View>

      <Divider thickness={14} />
      <View style={styles.padding}>
        <Button title={t('auth.logout')} onPress={handleSignOut} />
      </View>
    </MainScreen>
  );
}

const styles = StyleSheet.create({
  padding: {
    padding: spacing.md,
  },
});
