'use client';

import React, { useCallback, useEffect, useState } from 'react';

import { useFormatter, useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { notFound, useSearchParams } from 'next/navigation';

import {
  type ColumnFiltersState,
  type RowSelectionState,
} from '@tanstack/react-table';
import LoadingSvg from 'components/loading/loading-svg';
import dayjs from 'dayjs';
import { usePathname, useRouter } from 'i18n/navigation';

import { Button } from '@lococo/design-system/button';
import { Checkbox } from '@lococo/design-system/checkbox';
import { Pagenation } from '@lococo/design-system/pagenation';
import { SvgCalender, SvgCheck, SvgDownload } from '@lococo/icons';

import ApplicantsTable from './components/applicants-table';
import ApproveStatusSelect, {
  ApproveStatusWithAll,
} from './components/approve-status-select';
import CampaignSelect from './components/campaign-select';
import { useApplicants, useApproveApplicantsMutation } from './hooks/query';
import { koDateRangeFormatter } from './utils/ko-date-range-formatter';

interface CampaignInfo {
  campaignId: number;
  campaignTitle: string;
  startDate: string;
  endDate: string;
}

interface BrandApplicantsPageClientProps {
  campaignInfos: CampaignInfo[];
}

export default function BrandApplicantsPageClient({
  campaignInfos,
}: BrandApplicantsPageClientProps) {
  const format = useFormatter();
  const locale = useLocale();
  const t = useTranslations('brandApplicants');

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const campaignIdQueryString = searchParams.get('campaignId');

  // URL에서 page 쿼리 파라미터 읽기, 없으면 1로 기본값 설정
  const pageFromQuery = searchParams.get('page');
  const [page, setPage] = useState(() => {
    const parsedPage = pageFromQuery ? parseInt(pageFromQuery, 10) : 1;
    return parsedPage > 0 ? parsedPage : 1; // 1 이상의 값만 허용
  });

  const [selectedCampaign, setSelectedCampaign] = useState<
    CampaignInfo | undefined
  >(undefined);

  // URL에서 approveStatus 쿼리 파라미터 읽기
  const approveStatusFromQuery = searchParams.get('approveStatus');
  const [selectedApproveStatus, setSelectedApproveStatus] =
    useState<ApproveStatusWithAll>(() => {
      return (approveStatusFromQuery as ApproveStatusWithAll) || '';
    });
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const { data, isFetching, isError } = useApplicants(
    campaignIdQueryString ? parseInt(campaignIdQueryString, 10) : undefined,
    10,
    page - 1,
    selectedApproveStatus === '' || selectedApproveStatus === 'ALL'
      ? undefined
      : (selectedApproveStatus as 'PENDING' | 'APPROVED' | 'REJECTED'),
    !!campaignIdQueryString
  );

  const approveApplicantsMutation = useApproveApplicantsMutation(
    Object.keys(rowSelection)
      .map((key) => parseInt(key, 10))
      .filter(() =>
        data?.data?.applicants.find(
          (applicant) => applicant.approveStatus === 'PENDING'
        )
      ),
    campaignIdQueryString ? parseInt(campaignIdQueryString, 10) : undefined
  );

  // 승인상태 변경 시 필터 업데이트 및 URL 변경
  const handleApproveStatusChange = useCallback(
    (status: ApproveStatusWithAll) => {
      const params = new URLSearchParams(searchParams.toString());

      // URL 파라미터 업데이트
      if (status === '' || status === 'ALL') {
        params.delete('approveStatus');
      } else {
        params.set('approveStatus', status);
      }

      params.set('page', '1');
      router.replace(`${pathname}?${params.toString()}`);
      setSelectedApproveStatus(status);
      setPage(1); // 페이지를 1로 리셋
      setRowSelection({});

      if (status === '' || status === 'ALL') {
        setColumnFilters([]);
      } else {
        setColumnFilters([{ id: 'approveStatus', value: status }]);
      }
    },
    [pathname, router, searchParams]
  );

  const latestCampaignId = [...campaignInfos]
    .sort((campaignA, campaignB) =>
      dayjs(campaignB.startDate).diff(dayjs(campaignA.startDate))
    )[0]
    ?.campaignId.toString();

  const handleCampaignChange = useCallback(
    (campaignId: string) => {
      const params = new URLSearchParams(searchParams.toString());
      const campaign = campaignInfos.find(
        (campaign) => campaign.campaignId.toString() === campaignId
      );
      setSelectedCampaign(campaign);
      params.set('campaignId', campaignId);

      params.delete('page');
      params.delete('approveStatus');
      router.replace(`${pathname}?${params.toString()}`);

      setSelectedApproveStatus('');
      setPage(1); // 페이지를 1로 리셋
      setRowSelection({});
    },
    [pathname, router, searchParams, campaignInfos]
  );

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    setPage(newPage);
    params.set('page', newPage.toString());
    setRowSelection({});
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handleAllSelectChange = (checked: boolean) => {
    if (checked) {
      // 현재 페이지의 모든 row 선택 (전체 선택 상태 유지)
      const currentPageRows: Record<string, boolean> = {
        ...rowSelection,
      };

      data?.data?.applicants
        ?.filter((applicant) => applicant.approveStatus === 'PENDING')
        .forEach((applicant) => {
          currentPageRows[applicant.creatorCampaignId.toString()] = true;
        });
      setRowSelection(currentPageRows);
    } else {
      // 현재 페이지의 모든 row 해제 (다른 페이지 선택 상태 유지)
      // APPROVED 상태가 아닌 항목들만 해제
      const currentPageRows: Record<string, boolean> = {
        ...rowSelection,
      };
      data?.data?.applicants?.forEach((applicant) => {
        if (applicant.approveStatus === 'PENDING') {
          delete currentPageRows[applicant.creatorCampaignId.toString()];
        }
      });

      setRowSelection(currentPageRows);
    }
  };

  // URL의 page 쿼리 파라미터 변경 시 state 동기화
  useEffect(() => {
    const pageFromQuery = searchParams.get('page');
    const newPage = pageFromQuery ? parseInt(pageFromQuery, 10) : 1;
    const validPage = newPage > 0 ? newPage : 1;

    if (validPage !== page) {
      setPage(validPage);
    }
  }, [searchParams, page]);

  // URL의 approveStatus 쿼리 파라미터 변경 시 state 동기화
  useEffect(() => {
    const approveStatusFromQuery = searchParams.get('approveStatus');
    const newApproveStatus = approveStatusFromQuery as ApproveStatusWithAll;

    if (newApproveStatus !== selectedApproveStatus) {
      setSelectedApproveStatus(newApproveStatus);

      // 컬럼 필터도 동기화
      if (newApproveStatus === '' || newApproveStatus === 'ALL') {
        setColumnFilters([]);
      } else {
        setColumnFilters([{ id: 'approveStatus', value: newApproveStatus }]);
      }
    }
  }, [searchParams, selectedApproveStatus]);

  useEffect(() => {
    // campaign값이 없고 최신 캠페인이 존재할 때 최신 캠페인 자동 지정
    if (latestCampaignId && !campaignIdQueryString) {
      const params = new URLSearchParams(searchParams.toString());

      params.set('campaignId', latestCampaignId);
      router.replace(`${pathname}?${params.toString()}`);
      handleCampaignChange(latestCampaignId);
      return;
    }
    // campaign query 값이 존재하거나 변경될 때 Select 값 동기화
    if (campaignIdQueryString) {
      setSelectedCampaign(
        campaignInfos.find(
          (campaign) => campaign.campaignId.toString() === campaignIdQueryString
        )
      );
    }
  }, [
    campaignIdQueryString,
    pathname,
    router,
    latestCampaignId,
    searchParams,
    handleCampaignChange,
    campaignInfos,
  ]);

  if (isError) {
    notFound();
  }

  return isFetching ? (
    <div className="flex h-screen w-full items-center justify-center">
      <LoadingSvg />
    </div>
  ) : campaignInfos.length > 0 && data?.data ? (
    <div className="flex w-full flex-col gap-[1.6rem] px-[1.6rem]">
      <div className="flex w-full justify-between">
        <CampaignSelect
          campaignInfos={campaignInfos}
          selectedCampaign={selectedCampaign}
          handleCampaignChange={handleCampaignChange}
        />
        <Button
          variant="outline"
          color="primary"
          size="sm"
          rounded="sm"
          className="grow-0"
          disabled={
            campaignIdQueryString === null || data?.data.applicants.length === 0
          }
          onClick={() => {
            alert(t('comingSoon'));
          }}
        >
          <SvgDownload />
          {t('excelExport')}
        </Button>
      </div>

      <div className="flex flex-col gap-[3.2rem]">
        <div className="flex justify-between">
          <div className="flex items-center gap-[0.8rem]">
            <SvgCalender className="size-[2rem] text-gray-600" />
            <p className="text-inter-body3 text-gray-600">
              {selectedCampaign?.startDate && selectedCampaign?.endDate
                ? locale === 'ko'
                  ? koDateRangeFormatter(
                      selectedCampaign.startDate,
                      selectedCampaign.endDate,
                      format
                    )
                  : `${format.dateTime(
                      dayjs(selectedCampaign.startDate).toDate(),
                      {
                        month: 'short',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: '2-digit',
                      }
                    )} ~ ${format.dateTime(
                      dayjs(selectedCampaign.endDate).toDate(),
                      {
                        month: 'short',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: '2-digit',
                      }
                    )}`
                : ''}
            </p>
          </div>
          <ApproveStatusSelect
            selectedStatus={selectedApproveStatus}
            onStatusChange={handleApproveStatusChange}
          />
        </div>
      </div>
      {data.data.applicants.length > 0 ? (
        <>
          <div className="flex justify-between bg-gray-100 px-[1.6rem] py-[0.8rem]">
            <div className="flex items-center gap-[0.8rem]">
              <Checkbox
                id="all-select"
                checked={
                  Object.keys(rowSelection).length ===
                    data?.data?.applicants?.filter(
                      (applicant) => applicant.approveStatus === 'PENDING'
                    ).length && Object.keys(rowSelection).length > 0
                }
                onCheckedChange={handleAllSelectChange}
              />
              <label
                htmlFor="all-select"
                className="text-inter-body1 cursor-pointer font-bold text-gray-600"
              >
                {t('allSelect')}(
                {data?.data?.applicants?.filter(
                  (applicant) =>
                    rowSelection[applicant.creatorCampaignId.toString()] &&
                    applicant.approveStatus === 'PENDING'
                ).length || 0}
                /
                {data?.data?.applicants?.filter(
                  (applicant) => applicant.approveStatus === 'PENDING'
                ).length || 0}
                )
              </label>
            </div>
            <Button
              onClick={() => approveApplicantsMutation.mutate()}
              variant="outline"
              color="primary"
              size="sm"
              rounded="md"
              className="grow-0"
              disabled={
                data?.data?.applicants?.filter(
                  (applicant) =>
                    rowSelection[applicant.creatorCampaignId.toString()]
                ).length === 0 || approveStatusFromQuery === 'APPROVED'
              }
            >
              <SvgCheck size={20} />
              <span className="text-[1.4rem]">{t('approve')}</span>
            </Button>
          </div>

          <ApplicantsTable
            rowSelection={rowSelection}
            onRowSelectionChange={setRowSelection}
            columnFilters={columnFilters}
            onColumnFiltersChange={setColumnFilters}
            data={data.data.applicants}
          />

          <div className="my-[6.4rem] flex w-full items-center justify-center">
            <Pagenation
              currentPage={page}
              totalPages={data?.data.pageInfo.totalPages || 1}
              handlePageChange={handlePageChange}
            />
          </div>
        </>
      ) : (
        <div className="flex h-[38.5rem] flex-col items-center justify-center gap-[3.2rem]">
          <Image
            src="/applicants-empty.svg"
            alt={t('noApplicants')}
            width={100}
            height={100}
          />
          <p className="text-inter-title2 font-bold text-gray-700">
            {t('noApplicants')}
          </p>
        </div>
      )}
    </div>
  ) : (
    <div className="flex h-[52.4rem] w-full flex-col items-center justify-center gap-[3.2rem]">
      <Image
        src="/campaign-empty.svg"
        alt={t('noCampaign')}
        width={100}
        height={100}
      />
      <p className="text-inter-title2 font-bold text-gray-700">
        {t('noCampaign')}
      </p>
    </div>
  );
}
