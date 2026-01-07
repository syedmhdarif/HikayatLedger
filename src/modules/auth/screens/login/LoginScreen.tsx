import React, { useCallback, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
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
import { LoginFormData, useAuthSchemas } from '../../hooks';
import { useTranslation } from 'react-i18next';
import { typography } from '../../../../theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootNavigation } from '../../../../app/routes/routeTypes';
import { useNavigation } from '@react-navigation/native';
import { SIGN_UP_SCREEN } from '../../../../app/routes/routeName';
import { useAuth } from '../../../../common/context/AuthContext';

type NavigationProp = NativeStackNavigationProp<RootNavigation>;

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const { t } = useTranslation();

  const [showPassword, setShowPassword] = useState(false);
  const { loginSchema } = useAuthSchemas();
  const { signIn } = useAuth();

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword(prev => !prev);
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = useCallback(
    async (data: LoginFormData) => {
      const { error } = await signIn(data);
      if (error) {
        Toast({ message: error, type: 'error' });
      }
    },
    [signIn],
  );

  return (
    <MainScreen>
      <Spacer unit="md" />
      <View style={{ alignItems: 'center' }}>
        <Image
          style={styles.logo}
          source={require('../../../../assets/images/Logo/HikayatLedgerLogo.png')}
        />
      </View>

      <Spacer unit="md" />

      <>
        <Text style={typography.headlineLarge} color="primary">
          {t('auth.loginTitle')}
        </Text>
        <Spacer unit={2} />
        <Text style={[typography.bodyMedium]} color="secondary">
          {t('auth.loginSubtitle')}
        </Text>
      </>

      <Spacer unit="lg" />
      <>
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
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder={t('form.passwordPlaceholder')}
              label={t('form.password')}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.password?.message}
              secureTextEntry={!showPassword}
              rightIcon={
                <Text>
                  {showPassword ? (
                    <EyeIcon size={16} />
                  ) : (
                    <EyeOffIcon size={16} />
                  )}
                </Text>
              }
              onRightIconPress={togglePasswordVisibility}
            />
          )}
        />

        <TouchableOpacity
          style={styles.forgotPassword}
          onPress={() => {}}
          activeOpacity={0.7}
        >
          <Text style={[typography.clickable]} color="primary">
            {t('auth.forgotPassword')}
          </Text>
        </TouchableOpacity>
      </>

      <Spacer unit="lg" />

      <Button
        activeOpacity={0.7}
        title={t('auth.login')}
        onPress={handleSubmit(onSubmit)}
      />

      <Spacer unit="md" />

      <View style={styles.signUpContainer}>
        <Text variant="bodySmall">{t('auth.noAccount')} </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(SIGN_UP_SCREEN);
          }}
          activeOpacity={0.7}
        >
          <Text
            color="primary"
            variant="bodySmall"
            style={typography.clickable}
          >
            {t('auth.signUp')}
          </Text>
        </TouchableOpacity>
      </View>
    </MainScreen>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    alignSelf: 'flex-end',
  },
  logo: {
    width: 160,
    height: 160,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
