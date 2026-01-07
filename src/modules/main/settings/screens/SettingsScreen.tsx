import React from 'react';
import { useTranslation } from 'react-i18next';
import { MainScreen, Text } from '../../../../common/components';

export default function SettingsScreen() {
  const { t } = useTranslation();

  return (
    <MainScreen>
      <Text variant="h1">{t('activity.title')}</Text>
    </MainScreen>
  );
}
