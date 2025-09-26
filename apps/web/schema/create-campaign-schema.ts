import { SOCIAL_PLATFORMS } from 'app/[locale]/(with-layout)/brand/component/create-campaign/social-chip';
import { z } from 'zod';

const isBrowser = typeof window !== 'undefined';

export const createCampaignSchema = z
  .object({
    title: z.string().min(1, 'campaignTitle'),
    language: z.enum(['EN', 'ES', '']).refine((val) => val !== '', {
      message: 'campaignLanguage',
    }),
    type: z
      .enum(['GIVEAWAY', 'CONTENTS', 'EXCLUSIVE', ''])
      .refine((val) => val !== '', {
        message: 'campaignType',
      }),
    category: z
      .enum(['SKINCARE', 'SUNCARE', 'MAKEUP', ''])
      .refine((val) => val !== '', {
        message: 'campaignCategory',
      }),
    creatorCount: z.string().min(1, 'campaignCreatorCount'),

    startDate: z.object({
      year: z.string().min(1, 'campaignStartDay'),
      month: z.string().min(1, 'campaignStartDay'),
      day: z.string().min(1, 'campaignStartDay'),
    }),
    startTime: z.object({
      period: z.enum(['AM', 'PM']),
      hour: z.string().min(1, 'campaignStartTime'),
      minute: z.string().min(1, 'campaignStartTime'),
    }),
    endDate: z.object({
      year: z.string().min(1, 'campaignEndDay'),
      month: z.string().min(1, 'campaignEndDay'),
      day: z.string().min(1, 'campaignEndDay'),
    }),
    endTime: z.object({
      period: z.enum(['AM', 'PM']),
      hour: z.string().min(1, 'campaignEndTime'),
      minute: z.string().min(1, 'campaignEndTime'),
    }),
    announceDate: z.object({
      year: z.string().min(1, 'campaignAnnounceDay'),
      month: z.string().min(1, 'campaignAnnounceDay'),
      day: z.string().min(1, 'campaignAnnounceDay'),
    }),
    announceTime: z.object({
      period: z.enum(['AM', 'PM']),
      hour: z.string().min(1, 'campaignAnnounceTime'),
      minute: z.string().min(1, 'campaignAnnounceTime'),
    }),
    dueDate: z.object({
      year: z.string().min(1, 'campaignDueDay'),
      month: z.string().min(1, 'campaignDueDay'),
      day: z.string().min(1, 'campaignDueDay'),
    }),
    dueTime: z.object({
      period: z.enum(['AM', 'PM']),
      hour: z.string().min(1, 'campaignDueTime'),
      minute: z.string().min(1, 'campaignDueTime'),
    }),

    // 동적 입력 필드들 - 기존 메시지 그대로 유지
    joinConditions: z.array(z.string().min(1, '조건을 입력해주세요')),
    submitConditions: z.array(z.string().min(1, '조건을 입력해주세요')),
    joinRewards: z.array(z.string().min(1, '보상을 입력해주세요')),

    // 플랫폼 선택
    firstContents: z.record(z.enum(SOCIAL_PLATFORMS), z.boolean()),
    secondContents: z.record(z.enum(SOCIAL_PLATFORMS), z.boolean()),

    // 파일 업로드
    thumbnailFiles: isBrowser
      ? z
          .array(z.instanceof(File))
          .min(1, 'campaignMediaThumbnail')
          .max(5, 'thumbnailMaxFiles')
      : z
          .array(z.any())
          .min(1, 'campaignMediaThumbnail')
          .max(5, 'thumbnailMaxFiles'),
    detailFiles: isBrowser
      ? z
          .array(z.instanceof(File))
          .min(1, 'campaignMediaDetail')
          .max(15, 'detailMaxFiles')
      : z
          .array(z.any())
          .min(1, 'campaignMediaDetail')
          .max(15, 'detailMaxFiles'),
  })
  .refine(
    (data) => {
      const firstSelected = Object.values(data.firstContents).filter(
        Boolean
      ).length;
      return firstSelected >= 1;
    },
    {
      message: 'campaignPlatformSelect',
      path: ['firstContents'],
    }
  )
  .refine(
    (data) => {
      const firstSelected = Object.values(data.firstContents).filter(
        Boolean
      ).length;
      return firstSelected <= 2;
    },
    {
      message: 'firstContentMaxExceeded',
      path: ['firstContents'],
    }
  )
  .refine(
    (data) => {
      const secondSelected = Object.values(data.secondContents).filter(
        Boolean
      ).length;
      return secondSelected <= 2;
    },
    {
      message: 'secondContentMaxExceeded',
      path: ['secondContents'],
    }
  );

export type CampaignFormData = z.infer<typeof createCampaignSchema>;
