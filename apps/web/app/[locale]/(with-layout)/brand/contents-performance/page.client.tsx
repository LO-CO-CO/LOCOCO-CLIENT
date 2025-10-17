'use client';

import { useState } from 'react';

import { useFormatter, useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { notFound, useSearchParams } from 'next/navigation';

import {
  type CellContext,
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import LoadingSvg from 'components/loading/loading-svg';
import dayjs from 'dayjs';
import { usePathname, useRouter } from 'i18n/navigation';

import { Avatar } from '@lococo/design-system/avatar';
import { Button } from '@lococo/design-system/button';
import { Pagenation } from '@lococo/design-system/pagenation';
import { SvgCalender, SvgDownload } from '@lococo/icons';
import { cn } from '@lococo/utils';

import CampaignSelect from '../applicants/components/campaign-select';
import { koDateRangeFormatter } from '../applicants/utils/ko-date-range-formatter';
import { CampaignInfo } from '../types';
import ContentType from './components/column/content-type-column';
import FollowerCount from './components/column/follower-count-column';
import NavigateColumn from './components/column/navigate-column';
import ReviewProgressStatus from './components/column/review-progress-status-column';
import UploadedDate from './components/column/uploaded-date-column';
import { useContentsPerformance } from './hooks/query';
import { CampaignReview, CreatorWithReviews, type ReviewStatus } from './types';

const getWidthClass = (size: number) => {
  const widthMap: { [key: number]: string } = {
    40: 'w-[40px]',
    88: 'w-[88px]',
    100: 'w-[100px]',
    120: 'w-[120px]',
  };

  return widthMap[size] || `w-[${size}px]`;
};

const createColumns = (
  t: (key: string) => string
): ColumnDef<CampaignReview>[] => [
  {
    id: 'contentType',
    accessorKey: 'contents',
    header: t('headers.contentType'),
    size: 50,
    cell: ({
      getValue,
    }: CellContext<CampaignReview, CampaignReview['contents']>) => {
      const contents = getValue();

      return <ContentType contentType={contents.contentType} />;
    },
  },
  {
    accessorKey: 'reviewStatus',
    header: t('headers.reviewStatus'),
    size: 120,
    cell: ({ getValue }) => {
      const status = getValue() as ReviewStatus;
      return <ReviewProgressStatus reviewStatus={status} />;
    },
  },
  {
    accessorKey: 'uploadedDate',
    header: t('headers.uploadedDate'),
    meta: {
      style: { textAlign: 'left' },
    },
    size: 100,
    cell: ({ getValue }) => {
      const date = getValue() as string;
      return <UploadedDate uploadedDate={date} />;
    },
  },
  {
    id: 'viewCount',
    accessorKey: 'contents',
    header: t('headers.viewCount'),
    meta: {
      style: { textAlign: 'left' },
    },
    size: 100,
    cell: ({
      getValue,
    }: CellContext<CampaignReview, CampaignReview['contents']>) => {
      const contents = getValue() as CampaignReview['contents'];
      return (
        <FollowerCount
          contentType={contents.contentType}
          count={contents.viewCount}
        />
      );
    },
  },
  {
    id: 'likeCount',
    accessorKey: 'contents',
    header: t('headers.likeCount'),
    meta: {
      style: { textAlign: 'left' },
    },
    size: 100,
    cell: ({
      getValue,
    }: CellContext<CampaignReview, CampaignReview['contents']>) => {
      const contents = getValue() as CampaignReview['contents'];
      return (
        <FollowerCount
          contentType={contents.contentType}
          count={contents.likeCount}
        />
      );
    },
  },
  {
    id: 'commentCount',
    accessorKey: 'contents',
    header: t('headers.commentCount'),
    meta: {
      style: { textAlign: 'left' },
    },
    size: 100,
    cell: ({
      getValue,
    }: CellContext<CampaignReview, CampaignReview['contents']>) => {
      const contents = getValue() as CampaignReview['contents'];
      return (
        <FollowerCount
          contentType={contents.contentType}
          count={contents.commentCount}
        />
      );
    },
  },
  {
    id: 'shareCount',
    accessorKey: 'contents',
    header: t('headers.shareCount'),
    meta: {
      style: { textAlign: 'left' },
    },

    size: 100,
    cell: ({
      getValue,
    }: CellContext<CampaignReview, CampaignReview['contents']>) => {
      const contents = getValue() as CampaignReview['contents'];
      return (
        <FollowerCount
          contentType={contents.contentType}
          count={contents.shareCount}
        />
      );
    },
  },
  {
    id: 'navigate',
    header: '',
    size: 40,
    cell: ({ row }: CellContext<CampaignReview, unknown>) => {
      const { reviewStatus, campaignReviewId, postUrl } = row.original;
      return (
        <NavigateColumn
          isActive={
            reviewStatus !== 'NOT_SUBMITTED' && reviewStatus !== 'IN_PROGRESS'
          }
          reviewStatus={reviewStatus}
          campaignReviewId={campaignReviewId}
          postUrl={postUrl}
        />
      );
    },
  },
];

interface CreatorReviewTableProps {
  creator: CreatorWithReviews;
}

function CreatorReviewTable({ creator }: CreatorReviewTableProps) {
  const t = useTranslations('brandContentsPerformance');

  const columns = createColumns(t);
  const table = useReactTable({
    data: creator.reviews,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex flex-col gap-[0.8rem]">
      <div className="flex gap-[0.8rem] bg-gray-100 px-[1.6rem] py-[0.8rem]">
        <Avatar src={creator.creator.profileImageUrl} />
        <div className="flex flex-col gap-[0.4rem]">
          <p className="text-inter-body1 font-bold text-gray-800">
            {creator.creator.creatorFullName}
          </p>
          <p className="text-inter-body3 text-gray-600">
            {creator.creator.creatorNickname}
          </p>
        </div>
      </div>

      <div className="relative">
        <table className="w-full">
          <thead className="border-b border-gray-400">
            {table.getHeaderGroups().map((hg) => (
              <tr key={hg.id} className="border-b border-gray-400">
                {hg.headers.map((header) => (
                  <th
                    key={header.id}
                    style={
                      (
                        header.column.columnDef.meta as {
                          style?: React.CSSProperties;
                        }
                      )?.style
                    }
                    className={cn(
                      `${getWidthClass(header.getSize())}`,
                      `truncate py-[0.8rem] pr-[1.6rem] text-[1.2rem] font-bold text-gray-600`
                    )}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length === 0 ? (
              <tr className="h-[9.6rem] w-full border-b border-gray-400 px-[1.6rem] py-[2.4rem]">
                <td colSpan={columns.length} className="text-center">
                  {t('noReviews')}
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="h-[9.6rem] w-full border-b border-gray-400 px-[1.6rem] py-[2.4rem]"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

interface ClientPageProps {
  campaignInfos: CampaignInfo[];
}
export default function ClientPage({ campaignInfos }: ClientPageProps) {
  const t = useTranslations('brandContentsPerformance');
  const locale = useLocale();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const format = useFormatter();
  const campaignIdQueryString = searchParams.get('campaignId');
  // URL에서 page 쿼리 파라미터 읽기, 없으면 1로 기본값 설정
  const pageFromQuery = searchParams.get('page');
  const [page, setPage] = useState(() => {
    const parsedPage = pageFromQuery ? parseInt(pageFromQuery, 10) : 1;
    return parsedPage > 0 ? parsedPage : 1; // 1 이상의 값만 허용
  });

  const [selectedCampaign, setSelectedCampaign] = useState<
    CampaignInfo | undefined
  >(
    campaignInfos.find(
      (campaign) => campaign.campaignId === Number(campaignIdQueryString)
    )
  );

  const handleCampaignChange = (campaignId: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const campaign = campaignInfos.find(
      (campaign) => campaign.campaignId.toString() === campaignId
    );

    setSelectedCampaign(campaign);
    params.set('campaignId', campaignId);
    params.delete('page');
    setPage(1); // 페이지를 1로 리셋
    router.replace(`${pathname}?${params.toString()}`);
  };
  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    setPage(newPage);
    params.set('page', newPage.toString());
    router.replace(`${pathname}?${params.toString()}`);
  };

  const { data, isFetching, isError } = useContentsPerformance(
    campaignIdQueryString || undefined,
    page - 1,
    5,
    !!campaignIdQueryString
  );

  if (isFetching) {
    return (
      <div className="flex h-[52rem] w-full items-center justify-center">
        <LoadingSvg />
      </div>
    );
  }
  if (isError) {
    notFound();
  }

  return (
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
            campaignIdQueryString === null || data?.data.creators.length === 0
          }
          onClick={() => {
            alert(t('comingSoon'));
          }}
        >
          <SvgDownload />
          {t('export')}
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
                    )} ~
                    ${format.dateTime(
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
        </div>
      </div>
      {campaignIdQueryString &&
        data &&
        (data.data.creators.length > 0 ? (
          <>
            <div className="flex flex-col gap-[4.8rem]">
              {data.data.creators.map((creator) => (
                <CreatorReviewTable
                  key={creator.creator.creatorId}
                  creator={creator}
                />
              ))}
            </div>
            <div className="my-[6.4rem] flex w-full items-center justify-center">
              <Pagenation
                currentPage={page}
                totalPages={data.data.pageableResponse.totalPages}
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
        ))}
    </div>
  );
}
