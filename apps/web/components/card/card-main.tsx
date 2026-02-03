import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { InfoChip } from '@lococo/design-system/info-chip';
import { cn } from '@lococo/utils';

import BracketChip from './BracketChip';
import { formatBracketDate } from './utils/getChipVariantByDate';

interface CardMainProps {
  startTime?: string;
  endTime?: string;
  chipStatus?: 'default' | 'disabled' | 'approved' | 'declined' | 'progress';
  brandName?: string;
  campaignName?: string;
  campaignType?: string;
  campaignImageUrl?: string;
  recruitmentNumber?: number;
  applicantNumber?: number;
  campaignId: number;
  className?: string;
  priority?: boolean;
}

export default function CardMain({
  className,
  campaignName,
  campaignImageUrl,
  endTime,
  startTime,
  chipStatus,
  brandName,
  campaignType,
  applicantNumber,
  recruitmentNumber,
  campaignId,
  priority = false,
}: CardMainProps) {
  const card = useTranslations('card');
  const fallbackImage = '/logo.svg';
  const router = useRouter();
  const renderCampaignType = (type: string) => {
    if (!type) return '';
    if (type == 'GIVEAWAY') return 'Give away';
    return type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
  };
  return (
    <div
      className={cn(
        'group relative flex h-[33.1rem] w-[36rem] cursor-pointer flex-col overflow-hidden rounded-[2.4rem] border border-gray-200',
        className
      )}
      onClick={() => router.push(`/campaign-detail/${campaignId}`)}
    >
      <div className="relative flex-1">
        <Image
          fill
          priority={priority}
          className="object-cover"
          src={campaignImageUrl || fallbackImage}
          alt={`${campaignName}${card('campaignThumbnailImage')}`}
        />
        <BracketChip
          isUpcoming={Boolean(startTime)}
          content={formatBracketDate(
            startTime ? startTime : endTime || '',
            Boolean(startTime)
          )}
          chipVariant={chipStatus}
          className="absolute right-[1.6rem] top-[1.6rem]"
        />
      </div>
      <div className="flex h-[11.5rem] w-full flex-col bg-white p-[1.6rem] transition-all duration-300 group-hover:h-[17.9rem]">
        <div className="flex flex-col gap-[0.8rem]">
          <div>
            <p className="body4 font-[500]">{brandName}</p>
            <p className="title3 truncate font-[700]">{campaignName}</p>
          </div>
          <div className="flex items-center gap-[0.8rem]">
            {campaignType && (
              <InfoChip text={renderCampaignType(campaignType || '')} />
            )}
            <InfoChip
              icon={true}
              text={`${applicantNumber}/${recruitmentNumber}`}
            />
          </div>
        </div>

        <div
          className={
            'mt-[1.6rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100'
          }
        >
          <Link
            href={`/campaign-detail/${campaignId}`}
            className="body2 flex h-[4.8rem] w-full items-center justify-center rounded-[3.2rem] bg-pink-100 font-[700] text-pink-500"
          >
            {card('goToApply')}
          </Link>
        </div>
      </div>
    </div>
  );
}
