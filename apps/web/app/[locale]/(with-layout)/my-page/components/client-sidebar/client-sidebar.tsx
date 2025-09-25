'use client';

import SideBar from '../../../../../../components/side-bar/side-bar';
import SideBarSkeleton from '../../../../../../components/side-bar/side-bar-skeleton';
import { useProfile } from '../../hooks/use-profile-api';

interface ClientSideBarProps {
  menus: Array<{ label: string; value: string }>;
  defaultActiveMenu: string;
}

export default function ClientSideBar({
  menus,
  defaultActiveMenu,
}: ClientSideBarProps) {
  const profileQuery = useProfile();

  // 프로필 데이터가 있으면 사용, 없으면 기본값 사용
  const profileData = profileQuery.data?.data?.creatorBasicInfo;
  const userName = profileData?.creatorName || 'User';
  //const userEmail = profileData?.email || '';
  const userProfileImage = profileData?.profileImageUrl;
  //TODO: email, instagram 추가

  const userType = profileQuery.data?.data?.creatorType || 'NORMAL';

  if (profileQuery.isLoading) {
    return <SideBarSkeleton />;
  }

  return (
    <SideBar
      name={userName}
      email={''}
      userType={userType}
      profileImage={userProfileImage}
      instagram={''}
      menus={menus}
      defaultActiveMenu={defaultActiveMenu}
    />
  );
}
