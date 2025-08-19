'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { apiRequest } from 'app/api/apiRequest';
import { useAuth } from 'hooks/use-auth';

import {
  SvgHistory,
  SvgLikeFill,
  SvgLogin,
  SvgMy,
  SvgOpen,
} from '@lococo/icons';

interface TopUtilItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

function TopUtilItem({
  icon,
  label,
  onClick,
  disabled = false,
}: TopUtilItemProps) {
  return (
    <button
      onClick={onClick}
      className="flex h-[3.2rem] cursor-pointer items-center justify-center gap-[0.8rem] whitespace-nowrap px-[1.6rem] py-[1rem] disabled:cursor-not-allowed"
      disabled={disabled}
    >
      {icon}
      <p className="jp-body2 text-gray-600">{label}</p>
    </button>
  );
}

export default function TopUtil() {
  const router = useRouter();
  const [loginLabel, setLoginLabel] = useState('ログイン');

  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      setLoginLabel('ログアウト');
    } else {
      setLoginLabel('ログイン');
    }
  }, [isLoggedIn]);

  const handleAuthClick = async () => {
    if (isLoggedIn) {
      try {
        await apiRequest({ endPoint: '/api/auth/logout', method: 'POST' });
        router.refresh();
      } catch {
        console.error('로그아웃 실패');
      }
    } else {
      router.push('/login');
    }
  };

  return (
    <nav className="mx-auto w-full bg-white">
      <div className="mx-auto flex w-[1366px] items-center justify-end bg-white px-[11.9rem] py-[2rem]">
        <TopUtilItem
          icon={<SvgMy className="text-gray-600" size={16} />}
          label="マイページ"
          onClick={() => console.log('마이페이지 클릭')}
          disabled={true}
        />
        <TopUtilItem
          icon={<SvgLikeFill className="text-gray-600" size={16} />}
          label="お気に入り"
          onClick={() => console.log('좋아요 클릭')}
          disabled={true}
        />
        <TopUtilItem
          icon={<SvgHistory className="text-gray-600" size={16} />}
          label="最近見た商품"
          onClick={() => console.log('내역 클릭')}
          disabled={true}
        />
        <TopUtilItem
          icon={
            isLoggedIn ? (
              <SvgOpen className="fill-gray-600" size={16} />
            ) : (
              <SvgLogin className="text-gray-600" size={16} />
            )
          }
          label={loginLabel}
          onClick={handleAuthClick}
        />
      </div>
    </nav>
  );
}
