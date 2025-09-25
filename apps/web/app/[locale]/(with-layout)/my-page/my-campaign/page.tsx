'use client';

import React, { useEffect, useState } from 'react';

import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';

import { AddressModal } from '../@modal/(.)address-modal/AddressModal';
import Empty from '../components/empty/Empty';

export default function MyCampaign() {
  const t = useTranslations('myPage.myCampaign');
  const searchParams = useSearchParams();
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

  useEffect(() => {
    const openAddressModal = searchParams.get('openAddressModal');
    if (openAddressModal === 'true') {
      setIsAddressModalOpen(true);

      const url = new URL(window.location.href);
      url.searchParams.delete('openAddressModal');
      window.history.replaceState({}, '', url.toString());
    }
  }, [searchParams]);

  return (
    <div className="mx-auto flex w-auto flex-col items-center justify-center pb-[6.4rem]">
      <p className="title1 w-[93.8rem] py-[1.6rem] text-start font-bold text-gray-800">
        {t('title')}
      </p>
      <Empty translationKey="myPage.myCampaign.empty" />
      <div className="grid w-[93.8rem] grid-cols-3 gap-[4rem] gap-y-[3.2rem]">
        {
          //TODO: api
        }
      </div>
      <AddressModal
        open={isAddressModalOpen}
        onOpenChange={setIsAddressModalOpen}
      />
    </div>
  );
}
