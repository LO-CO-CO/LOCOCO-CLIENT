'use client';

// 실제 경로에 맞게 수정
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { useParams, useRouter } from 'next/navigation';

import { useMutation, useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';

import { Button } from '@lococo/design-system/button';

import { apiRequest } from '../../../../web/app/api/apiRequest';
import {
  AdminCampaignBasicResponse,
  CampaignImageRequest,
  CampaignImageResponse,
  CampaignPublishRequest,
} from '../../../../web/swagger-codegen/data-contracts';
import DynamicInputAdmin from '../components/DynamicInputAdmin';

type AdminCampaignFormValues = {
  brandName: string;
  campaignTitle: string;
  language: 'EN' | 'ES';
  campaignType: 'GIVEAWAY' | 'CONTENTS' | 'EXCLUSIVE';
  campaignProductType: 'SKINCARE' | 'SUNCARE' | 'MAKEUP';
  recruitmentNumber: number;
  participationRewards: string[];
  deliverableRequirements: string[];
  eligibilityRequirements: string[];
};

async function fetchAdminCampaignDetail(
  campaignId: number
): Promise<AdminCampaignBasicResponse> {
  const response = await apiRequest<{
    data?: AdminCampaignBasicResponse;
  }>({
    endPoint: `/api/admin/campaigns/${campaignId}`,
    method: 'GET',
  });

  if (!response?.data) {
    throw new Error('캠페인 정보를 불러오지 못했습니다.');
  }

  return response.data;
}

function buildPublishPayload(
  source: AdminCampaignBasicResponse,
  values: AdminCampaignFormValues
): CampaignPublishRequest {
  const mapImages = (imgs?: CampaignImageResponse[]) =>
    (imgs ?? []).map(
      (img): CampaignImageRequest => ({
        url: img.url,
        displayOrder: img.displayOrder,
        imageType: 'THUMBNAIL',
      })
    );

  return {
    campaignTitle: values.campaignTitle,
    language: values.language,
    campaignType: values.campaignType,
    campaignProductType: values.campaignProductType,
    thumbnailImages: mapImages(source.thumbnailImages),
    detailImages: mapImages(source.detailImages),
    applyStartDate: source.applyStartDate,
    applyDeadline: source.applyDeadline,
    creatorAnnouncementDate: source.creatorAnnouncementDate,
    reviewSubmissionDeadline: source.reviewSubmissionDeadline,
    recruitmentNumber: values.recruitmentNumber,
    participationRewards: values.participationRewards,
    deliverableRequirements: values.deliverableRequirements,
    eligibilityRequirements: values.eligibilityRequirements,
    firstContentType: source.firstContentType,
    secondContentType: source.secondContentType,
  };
}

export default function AdminCampaignDetailPage() {
  const params = useParams<{ campaignId: string }>();
  const router = useRouter();
  const campaignId = Number(params.campaignId);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['admin-campaign-detail', campaignId],
    queryFn: () => fetchAdminCampaignDetail(campaignId),
    enabled: Number.isFinite(campaignId),
  });

  const methods = useForm<AdminCampaignFormValues>({
    defaultValues: {
      brandName: '',
      campaignTitle: '',
      language: 'EN',
      campaignType: 'GIVEAWAY',
      campaignProductType: 'SKINCARE',
      recruitmentNumber: 0,
      participationRewards: [''],
      deliverableRequirements: [''],
      eligibilityRequirements: [''],
    },
  });

  const { register, reset } = methods;

  useEffect(() => {
    if (data) {
      reset({
        brandName: data.brandName,
        campaignTitle: data.campaignTitle,
        language: data.language,
        campaignType: data.campaignType,
        campaignProductType: data.campaignProductType,
        recruitmentNumber: data.recruitmentNumber,
        participationRewards:
          data.participationRewards && data.participationRewards.length > 0
            ? data.participationRewards
            : [''],
        deliverableRequirements:
          data.deliverableRequirements &&
          data.deliverableRequirements.length > 0
            ? data.deliverableRequirements
            : [''],
        eligibilityRequirements:
          data.eligibilityRequirements &&
          data.eligibilityRequirements.length > 0
            ? data.eligibilityRequirements
            : [''],
      });
    }
  }, [data, reset]);

  const updateMutation = useMutation({
    mutationFn: async (values: AdminCampaignFormValues) => {
      if (!data) throw new Error('캠페인 정보가 없습니다.');
      const payload = buildPublishPayload(data, values);
      await apiRequest({
        endPoint: `/api/admin/campaigns/${campaignId}`,
        method: 'PATCH',
        data: payload,
      });
    },
    onSuccess: () => {
      alert('캠페인이 수정되었습니다.');
      router.refresh();
    },
    onError: (error) => {
      console.error(error);
      alert('캠페인 수정에 실패했습니다.');
    },
  });

  const onSubmit = (values: AdminCampaignFormValues) => {
    updateMutation.mutate(values);
  };

  if (!Number.isFinite(campaignId)) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="text-inter-title1 text-red">
          잘못된 캠페인 ID 입니다.
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="text-inter-title1">캠페인 정보를 불러오는 중...</div>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="text-inter-title1 text-red">
          캠페인 정보를 불러오지 못했습니다.
        </div>
      </div>
    );
  }

  return (
    <FormProvider {...methods}>
      <main className="min-h-screen bg-gray-100 p-8">
        <div className="shadow-button mx-auto max-w-5xl rounded-xl bg-white p-8">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">캠페인 상세</h1>
            <p className="mt-2 text-gray-600">
              캠페인 정보를 확인하고 필요한 내용을 수정할 수 있습니다.
            </p>
          </div>
          <div className="text-right text-sm text-gray-500">
            <div>캠페인 ID: {data.campaignId}</div>
            <div>브랜드: {data.brandName}</div>
          </div>
        </header>

        <section className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-semibold text-gray-700">
              브랜드 이름
            </label>
            <input
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              {...register('brandName')}
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold text-gray-700">
              캠페인 제목
            </label>
            <input
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              {...register('campaignTitle')}
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold text-gray-700">
              캠페인 언어
            </label>
            <select
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              {...register('language')}
            >
              <option value="EN">영어 (EN)</option>
              <option value="ES">스페인어 (ES)</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold text-gray-700">
              캠페인 타입
            </label>
            <select
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              {...register('campaignType')}
            >
              <option value="GIVEAWAY">기브어웨이 (GIVEAWAY)</option>
              <option value="CONTENTS">컨텐츠 (CONTENTS)</option>
              <option value="EXCLUSIVE">독점 (EXCLUSIVE)</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold text-gray-700">
              상품 카테고리
            </label>
            <select
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              {...register('campaignProductType')}
            >
              <option value="SKINCARE">스킨케어 (SKINCARE)</option>
              <option value="SUNCARE">선케어 (SUNCARE)</option>
              <option value="MAKEUP">메이크업 (MAKEUP)</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold text-gray-700">
              모집 인원
            </label>
            <input
              type="number"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              {...register('recruitmentNumber', {
                valueAsNumber: true,
                min: 1,
              })}
            />
          </div>
        </section>

        <section className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-semibold text-gray-700">
              신청 기간
            </label>
            <div className="rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm">
              {dayjs(data.applyStartDate).format('YYYY-MM-DD HH:mm')} ~{' '}
              {dayjs(data.applyDeadline).format('YYYY-MM-DD HH:mm')}
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold text-gray-700">
              발표 일시
            </label>
            <div className="rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm">
              {dayjs(data.creatorAnnouncementDate).format('YYYY-MM-DD HH:mm')}
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold text-gray-700">
              리뷰 제출 마감일
            </label>
            <div className="rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm">
              {dayjs(data.reviewSubmissionDeadline).format('YYYY-MM-DD HH:mm')}
            </div>
          </div>
        </section>

        <section className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div>
            <h2 className="mb-2 text-sm font-semibold text-gray-700">
              참여 보상
            </h2>
            <DynamicInputAdmin fieldName="participationRewards" />
          </div>
          <div>
            <h2 className="mb-2 text-sm font-semibold text-gray-700">
              제출물 요구 사항
            </h2>
            <DynamicInputAdmin fieldName="deliverableRequirements" />
          </div>
          <div>
            <h2 className="mb-2 text-sm font-semibold text-gray-700">
              자격 요건
            </h2>
            <DynamicInputAdmin fieldName="eligibilityRequirements" />
          </div>
        </section>

        <section className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <h2 className="mb-2 text-sm font-semibold text-gray-700">
              첫 번째 컨텐츠 타입
            </h2>
            <div className="rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm">
              {data.firstContentType}
            </div>
          </div>
          <div>
            <h2 className="mb-2 text-sm font-semibold text-gray-700">
              두 번째 컨텐츠 타입
            </h2>
            <div className="rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm">
              {data.secondContentType}
            </div>
          </div>
        </section>

        <div className="mt-8 flex justify-end gap-[0.8rem]">
          <Button
            variant="outline"
            color="primary"
            size="sm"
            rounded="md"
            onClick={() => router.back()}
            disabled={updateMutation.isPending}
          >
            목록으로
          </Button>
          <Button
            variant="filled"
            color="primary"
            size="sm"
            rounded="md"
            onClick={methods.handleSubmit(onSubmit)}
            disabled={updateMutation.isPending}
          >
            {updateMutation.isPending ? '수정하기...' : '수정하기'}
          </Button>
        </div>
      </div>
      </main>
    </FormProvider>
  );
}
