import { getTranslations } from 'next-intl/server';

import ClientSideBar from './components/client-sidebar/client-sidebar';

export default async function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const t = await getTranslations('myPage.menus');
  const menuItems = [
    { label: t('myCampaign'), value: 'my-campaign' },
    { label: t('editProfile'), value: 'edit-profile' },
    { label: t('connectSNS'), value: 'connect-sns' },
    { label: t('contentSubmissions'), value: 'content-submissions' },
  ];

  return (
    <div className="mx-auto flex w-[112.8rem]">
      <ClientSideBar menus={menuItems} defaultActiveMenu="my-campaign" />
      {children}
      {modal}
    </div>
  );
}
