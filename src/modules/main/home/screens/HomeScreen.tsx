import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, MainScreen, Text, Toast } from '../../../../common/components';
import { useAuth } from '../../../../common/context/AuthContext';

export default function HomeScreen() {
  const { t } = useTranslation();
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      Toast({ message: error, type: 'error' });
    }
  };
  return (
    <MainScreen>
      <Text variant="h1">{t('navigation.home')}</Text>

      <Button title={t('auth.logout')} onPress={handleSignOut} />
    </MainScreen>
  );
}
