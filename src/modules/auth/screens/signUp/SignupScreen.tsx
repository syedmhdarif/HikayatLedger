import React, { useCallback, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import DatePicker from 'react-native-date-picker';
import {
  Button,
  EyeIcon,
  EyeOffIcon,
  MainScreen,
  Spacer,
  Text,
  TextInput,
  Toast,
} from '../../../../common/components';
import { SignUpFormData, useAuthSchemas } from '../../hooks';
import { useTranslation } from 'react-i18next';
import { typography } from '../../../../theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootNavigation } from '../../../../app/routes/routeTypes';
import { useNavigation } from '@react-navigation/native';
import { LOGIN_SCREEN } from '../../../../app/routes/routeName';
import { useAuth } from '../../../../common/context/AuthContext';

type NavigationProp = NativeStackNavigationProp<RootNavigation>;

const SignUpScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const { t } = useTranslation();

  const [showPassword, setShowPassword] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { signUpSchema } = useAuthSchemas();

  const {
    watch,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      profileName: '',
      dateOfBirth: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const password = watch('password');
  const dateOfBirth = watch('dateOfBirth');

  const maxDate = useMemo(() => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 13); // Minimum 13 years old
    return date;
  }, []);

  const minDate = useMemo(() => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 100);
    return date;
  }, []);

  const selectedDate = useMemo(() => {
    if (dateOfBirth) {
      return new Date(dateOfBirth);
    }
    return maxDate;
  }, [dateOfBirth, maxDate]);

  const formattedDate = useMemo(() => {
    if (!dateOfBirth) return '';
    const date = new Date(dateOfBirth);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }, [dateOfBirth]);

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword(prev => !prev);
  }, []);

  const openDatePicker = useCallback(() => {
    setShowDatePicker(true);
  }, []);

  const { signUp } = useAuth();

  const onSubmit = useCallback(
    async (data: SignUpFormData) => {
      const { error } = await signUp(data);
      if (error) {
        Toast({ message: error, type: 'error' });
      }
    },
    [signUp],
  );

  return (
    <MainScreen>
      <ScrollView style={styles.container}>
        <Spacer unit="md" />

        <>
          <Text style={typography.headlineLarge} color="primary">
            {t('common.welcome')}
          </Text>
          <Spacer unit={2} />

          <View style={styles.signUpContainer}>
            <Text style={[typography.bodyMedium]} color="secondary">
              {t('auth.haveAccount')}
              {', '}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(LOGIN_SCREEN)}
              activeOpacity={0.7}
            >
              <Text color="primary" style={typography.clickable}>
                {t('auth.loginHere')}
              </Text>
            </TouchableOpacity>
          </View>
        </>

        <Spacer unit="lg" />

        <Controller
          control={control}
          name="profileName"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label={t('form.profileName')}
              placeholder={t('form.profileNamePlaceholder')}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.profileName?.message}
              autoCapitalize="none"
              autoCorrect={false}
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label={t('form.email')}
              placeholder={t('form.emailPlaceholder')}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.email?.message}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          )}
        />

        <Controller
          control={control}
          name="dateOfBirth"
          render={() => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={openDatePicker}
              style={{ width: '100%' }}
            >
              <View pointerEvents="none">
                <TextInput
                  label={t('form.dateOfBirth')}
                  placeholder={t('form.dateOfBirthPlaceholder')}
                  value={formattedDate}
                  error={errors.dateOfBirth?.message}
                  editable={false}
                />
              </View>
            </TouchableOpacity>
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label={t('form.password')}
              placeholder={t('form.passwordPlaceholder')}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.password?.message}
              secureTextEntry={!showPassword}
              rightIcon={
                showPassword ? <EyeIcon size={20} /> : <EyeOffIcon size={20} />
              }
              onRightIconPress={togglePasswordVisibility}
            />
          )}
        />

        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label={t('form.confirmPassword')}
              placeholder={t('form.confirmPasswordPlaceholder')}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.confirmPassword?.message}
              secureTextEntry={!showPassword}
              rightIcon={
                showPassword ? <EyeIcon size={20} /> : <EyeOffIcon size={20} />
              }
              onRightIconPress={togglePasswordVisibility}
            />
          )}
        />

        <Spacer unit="lg" />

        <Button
          activeOpacity={0.7}
          title={t('auth.signUp')}
          onPress={handleSubmit(onSubmit)}
        />
      </ScrollView>

      <DatePicker
        modal
        open={showDatePicker}
        date={selectedDate}
        mode="date"
        onConfirm={date => {
          setShowDatePicker(false);
          setValue('dateOfBirth', date.toISOString(), { shouldValidate: true });
        }}
        onCancel={() => {
          setShowDatePicker(false);
        }}
        maximumDate={maxDate}
        minimumDate={minDate}
      />
    </MainScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SignUpScreen;
