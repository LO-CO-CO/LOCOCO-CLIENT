import { ChangeEvent, useEffect, useState } from 'react';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { Button } from '@lococo/design-system/button';
import { ErrorNotice } from '@lococo/design-system/error-notice';
import { SvgAvatar, SvgCamera } from '@lococo/icons';

import {
  FILE_ERROR_MESSAGE_KEYS,
  isImageFile,
} from '../../../../../../hooks/useFileUploader';

interface ProfilePhotoProps {
  value?: File | null;
  onChange: (profileImage: File | null) => void;
  error: string;
  setProfileImageError: (error: string) => void;
}

export default function ProfilePhoto({
  value,
  onChange,
  error,
  setProfileImageError,
}: ProfilePhotoProps) {
  const t = useTranslations('myPage.editProfile.profilePhoto');
  const tFileUploader = useTranslations('fileUploader');
  const [profileImage, setProfileImage] = useState<string | undefined>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (isImageFile(selectedFile)) {
        onChange(selectedFile);
        setProfileImageError('');
      } else {
        onChange(null);
        setProfileImageError(
          tFileUploader(FILE_ERROR_MESSAGE_KEYS.NOT_ALLOWED_FILE_TYPE)
        );
      }
    } else {
      onChange(null);
    }
    e.target.value = '';
  };

  useEffect(() => {
    if (value) {
      const url = URL.createObjectURL(value);
      setProfileImage(url);

      return () => {
        URL.revokeObjectURL(url || '');
      };
    } else {
      setProfileImage(undefined);
    }
  }, [value]);

  return (
    <section className="flex w-full flex-col gap-[2.5rem]">
      <h2 className="title2 font-bold text-gray-800">{t('title')}</h2>
      <div className="flex w-full flex-col items-center gap-[3.2rem]">
        {profileImage ? (
          <div className="relative h-[7.2rem] w-[7.2rem] overflow-hidden rounded-full">
            <Image
              src={profileImage}
              alt="profile photo"
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <SvgAvatar size={72} className="rounded-full" />
        )}
        <div className="flex flex-col items-center gap-[0.8rem]">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            id="profile-photo-input"
          />
          <Button
            variant="outline"
            color="secondary"
            size="sm"
            iconLeft={<SvgCamera size={24} />}
            className="h-auto whitespace-nowrap rounded-[0.8rem] px-[1.6rem] py-[0.8rem]"
            onClick={() =>
              document.getElementById('profile-photo-input')?.click()
            }
          >
            {t('changePhoto')}
          </Button>
          {error && <ErrorNotice message={error} />}
        </div>
      </div>
    </section>
  );
}
