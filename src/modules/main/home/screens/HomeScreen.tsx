import React from 'react';
import { FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Divider,
  MainScreen,
  Spacer,
  Text,
  Toast,
} from '../../../../common/components';
import { useAuth } from '../../../../common/context/AuthContext';
import { useAppSelector } from '../../../../app/store/hooks';
import { RootState } from '../../../../app/store';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { Colors, spacing } from '../../../../theme';
import { formatAmount, formatDate } from '../../../../utils';
import { INVOICE_DATA } from '../services/invoiceService';

interface InvoiceSummary {
  key: string;
  label: string;
  description: string;
  value: number | string;
}

const GAP = 6;
const NUM_COLUMNS = 2;

export default function HomeScreen() {
  const { t } = useTranslation();
  const { signOut } = useAuth();
  const { width } = useWindowDimensions();

  const profile = useAppSelector((state: RootState) => state.auth?.profile);

  const itemSize =
    (width - spacing.md * 2 - GAP * (NUM_COLUMNS - 1)) / NUM_COLUMNS;

  const INVOICE_SUMMARY: InvoiceSummary[] = [
    {
      key: 'total',
      label: 'Total',
      description: 'Total Number of Invoices',
      value: INVOICE_DATA.length,
    },
    {
      key: 'cancelled',
      label: 'Cancelled',
      description: 'Number of Cancelled Invoices',
      value: INVOICE_DATA.filter(inv => inv.status === 'cancelled').length,
    },
    {
      key: 'sent',
      label: 'Sent',
      description: 'Amount of Invoices awaiting payment (RM)',
      value: formatAmount(
        INVOICE_DATA.filter(inv => inv.status === 'sent').reduce(
          (sum, inv) => sum + inv.total,
          0,
        ),
      ),
    },
    {
      key: 'paid',
      label: 'Paid',
      description: 'Amount of Completed payments (RM)',
      value: formatAmount(
        INVOICE_DATA.filter(inv => inv.status === 'paid').reduce(
          (sum, inv) => sum + inv.total,
          0,
        ),
      ),
    },
  ];

  const renderItem = ({ item }: { item: InvoiceSummary }) => (
    <View
      key={item.key}
      style={[
        styles.summaryContainer,
        { width: itemSize, height: itemSize * 0.6 },
      ]}
    >
      <Text variant="caption" style={styles.label}>
        {item.description}
      </Text>
      <Text variant="body" style={styles.value}>
        {item.value}
      </Text>
    </View>
  );

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      Toast({ message: error, type: 'error' });
    }
  };
  return (
    <MainScreen fullWidth>
      <View style={styles.padding}>
        <Text variant="h3" weight="bold">
          {profile?.profile_name}
        </Text>
        <Text variant="bodySmall" style={styles.textProfile}>
          {formatDate(profile?.date_of_birth as string)}
        </Text>
        <Text variant="bodySmall" style={styles.textProfile}>
          {profile?.email}
        </Text>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          numColumns={2}
          data={INVOICE_SUMMARY}
          renderItem={renderItem}
          columnWrapperStyle={styles.columnWrapper}
        />
      </View>

      <Spacer />

      <Divider color={Colors.grey200} thickness={8} />

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
  listContainer: {
    paddingHorizontal: spacing.md,
  },
  columnWrapper: {
    gap: GAP,
    marginBottom: GAP,
  },
  summaryContainer: {
    backgroundColor: Colors.grey100,
    padding: spacing.md,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.md,
  },
  label: {
    textAlign: 'center',
    color: Colors.black500,
  },
  value: {
    textAlign: 'center',
  },
  textProfile: {
    color: Colors.black500,
  },
});
