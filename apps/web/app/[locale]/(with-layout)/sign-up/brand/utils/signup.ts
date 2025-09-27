import { z } from 'zod';

type TranslationFunction = (key: string) => string;

export const brandSignupSchema = (t: TranslationFunction) =>
  z
    .object({
      brandName: z
        .string()
        .trim()
        .min(1, t('brandNameRequired'))
        .max(30, t('brandNameMaxLength'))
        .regex(/^[a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ0-9\s]+$/, t('brandNameInvalidFormat')),
      contactName: z
        .string()
        .trim()
        .min(1, t('contactNameRequired'))
        .max(10, t('contactNameMaxLength'))
        .regex(/^[가-힣ㄱ-ㅎㅏ-ㅣ]+$/, t('contactNameInvalidFormat')),
      contactPosition: z
        .string()
        .trim()
        .min(1, t('contactPositionRequired'))
        .max(10, t('contactPositionMaxLength'))
        .regex(/^[가-힣ㄱ-ㅎㅏ-ㅣ]+$/, t('contactPositionInvalidFormat')),
      contactPhone: z.string().trim().min(1, t('contactPhoneRequired')),
      street: z.string().trim().min(1, t('streetAddressRequired')),
      detail: z
        .string()
        .trim()
        .min(1, t('detailAddressRequired'))
        .max(30, t('detailAddressMaxLength')),
    })
    .strict();

export type BrandSignupForm = z.infer<ReturnType<typeof brandSignupSchema>>;
