import { useForm } from 'react-hook-form';

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';

import { registerBrandInfo } from '../apis/brand-form';
import { transformFormToApi } from '../utils/api-transformers';
import { type BrandSignupForm, brandSignupSchema } from '../utils/signup';

export const useBrandForm = () => {
  const router = useRouter();
  const t = useTranslations('brandSignup.validation');
  const form = useForm<BrandSignupForm>({
    resolver: zodResolver(brandSignupSchema(t)),
    mode: 'onBlur',
    defaultValues: {
      brandName: '',
      contactName: '',
      contactPosition: '',
      contactPhone: '',
      street: '',
      detail: '',
    },
  });

  const handleSubmit = async (data: BrandSignupForm) => {
    const apiData = transformFormToApi(data);
    const response = await registerBrandInfo(apiData);

    if (response.success) {
      router.push('/');
    }
  };

  const handleBack = () => {
    router.back();
  };

  return {
    form,
    handleSubmit,
    handleBack,
  };
};
