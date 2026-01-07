import React from 'react';
import { useTranslation } from 'react-i18next';
import { MainScreen, Text } from '../../../../common/components';

export default function CashFlowScreen() {
  const { t } = useTranslation();

  return (
    <MainScreen>
      <Text variant="h1">{t('cashflow.title')}</Text>
    </MainScreen>
  );
}
