import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignUpFormData {
  email: string;
  password: string;
  confirmPassword: string;
  profileName: string;
  dateOfBirth: string;
}

export const useAuthSchemas = () => {
  const { t } = useTranslation();

  const loginSchema = useMemo(
    () =>
      Yup.object({
        email: Yup.string()
          .required(t('validation.emailRequired'))
          .email(t('validation.emailInvalid')),
        password: Yup.string()
          .required(t('validation.passwordRequired'))
          .min(6, t('validation.passwordMin')),
      }),
    [t],
  );

  const signUpSchema = useMemo(
    () =>
      Yup.object({
        profileName: Yup.string()
          .required(t('validation.profileNameRequired'))
          .min(2, t('validation.profileNameMin')),
        email: Yup.string()
          .required(t('validation.emailRequired'))
          .email(t('validation.emailInvalid')),
        dateOfBirth: Yup.string().required(t('validation.dateOfBirthRequired')),
        password: Yup.string()
          .required(t('validation.passwordRequired'))
          .min(6, t('validation.passwordMin')),
        confirmPassword: Yup.string()
          .required(t('validation.passwordRequired'))
          .oneOf([Yup.ref('password')], t('validation.passwordMatch')),
      }),
    [t],
  );

  return {
    loginSchema,
    signUpSchema,
  };
};

export default useAuthSchemas;
