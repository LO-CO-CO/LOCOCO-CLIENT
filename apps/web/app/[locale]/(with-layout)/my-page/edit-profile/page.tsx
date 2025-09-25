'use client';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useTranslations } from 'next-intl';

import { zodResolver } from '@hookform/resolvers/zod';
import LoadingSvg from 'components/loading/loading-svg';

import { Button } from '@lococo/design-system/button';

import {
  CommunityName,
  HomeAddress,
  PersonalDetails,
  SkinInfo,
} from '../../sign-up/creator/components';
import {
  type CreatorSignupForm,
  creatorSignupSchema,
} from '../../sign-up/creator/utils/signup';
import { SaveFormModal } from '../@modal/(.)save-form-modal/SaveFormModal';
import ProfilePhoto from '../components/edit-profile/profile-photo';
import {
  useCheckIdAvailability,
  usePresignedUrl,
  useProfile,
  useUpdateProfile,
} from '../hooks/use-profile-api';

export default function EditProfile() {
  const [isSaveFormModalOpen, setIsSaveFormModalOpen] = useState(false);
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [profileImageError, setProfileImageError] = useState<string>('');
  const t = useTranslations('creatorSignup.validation');
  const form = useForm<CreatorSignupForm>({
    resolver: zodResolver(creatorSignupSchema(t)),
    mode: 'onBlur',
    defaultValues: {
      id: '',
      birthMonth: '',
      birthDay: '',
      birthYear: '',
      gender: '',
      firstName: '',
      lastName: '',
      phoneCountryCode: '',
      phoneNumber: '',
      contentLanguage: '',
      country: '',
      stateRegion: '',
      city: '',
      addressLine1: '',
      addressLine2: '',
      zipCode: '',
      skinType: '',
      skinTone: '',
    },
  });

  const profileQuery = useProfile();
  const updateProfileMutation = useUpdateProfile();
  const checkIdMutation = useCheckIdAvailability();
  const presignedUrlMutation = usePresignedUrl({
    file: profileImage || new File([], 'profile-image.jpg'),
  });

  useEffect(() => {
    if (profileQuery.data?.data) {
      const profileData = profileQuery.data.data;
      const {
        creatorAddressInfo,
        creatorBasicInfo,
        creatorContactInfo,
        creatorFaceInfo,
      } = profileData;
      // firstName에서 first/last name 분리
      const fullName = creatorBasicInfo.creatorName || '';
      const nameParts = fullName.trim().split(' ');

      const firstName = creatorBasicInfo.firstName || nameParts[0] || '';
      const lastName =
        creatorBasicInfo.lastName || nameParts.slice(1).join(' ') || '';
      const fullBirthDate = creatorBasicInfo.birthDate || '';
      const birthMonth = fullBirthDate.split('-')[1] || '';
      const birthDay = fullBirthDate.split('-')[2] || '';
      const birthYear = fullBirthDate.split('-')[0] || '';
      form.reset({
        id: creatorBasicInfo.creatorName || '',
        birthMonth: birthMonth,
        birthDay: birthDay,
        birthYear: birthYear,
        gender: creatorBasicInfo.gender || '',
        firstName: firstName,
        lastName: lastName,
        phoneCountryCode: creatorContactInfo.countryCode || '',
        phoneNumber: creatorContactInfo.phoneNumber || '',
        contentLanguage: profileData.contentLanguage || '',
        country: creatorAddressInfo.country || '',
        stateRegion: creatorAddressInfo.stateOrProvince || '',
        city: creatorAddressInfo.cityOrTown || '',
        addressLine1: creatorAddressInfo.addressLine1 || '',
        addressLine2: creatorAddressInfo.addressLine2 || '',
        zipCode: creatorAddressInfo.postalCode || '',
        skinType: creatorFaceInfo.skinType || '',
        skinTone: creatorFaceInfo.skinTone || '',
      });

      if (creatorBasicInfo.profileImageUrl) {
        fetch(creatorBasicInfo.profileImageUrl)
          .then((response) => response.blob())
          .then((blob) => {
            const file = new File([blob], 'profile-image.jpg', {
              type: blob.type,
            });
            setProfileImage(file);
          })
          .catch((error) => {
            console.error('프로필 이미지 로드 실패:', error);
            setProfileImage(null);
          });
      }
    }
  }, [profileQuery.data, form]);

  const handleCheckAvailability = async () => {
    const id = form.getValues('id');
    if (!id.trim()) {
      form.setError('id', { message: 'ID is required' });
      return;
    }

    try {
      const isAvailable = await checkIdMutation.mutateAsync(id);
      if (isAvailable) {
        // TODO: 성공 메시지 표시
      } else {
        form.setError('id', { message: '이미 사용 중인 ID입니다.' });
      }
    } catch (error) {
      console.error('ID 중복 체크 실패:', error);
      form.setError('id', { message: 'ID 중복 체크에 실패했습니다.' });
    }
  };

  const handleSubmitForm = async () => {
    const isValid = await form.trigger();

    if (isValid) {
      const formData = form.getValues();
      const profileImageUrl = profileImage
        ? await presignedUrlMutation.mutateAsync()
        : null;
      await updateProfileMutation.mutateAsync({ formData, profileImageUrl });
      setIsSaveFormModalOpen(true);
    }
  };

  if (profileQuery.isPending) {
    return (
      <div className="flex h-[50rem] w-full items-center justify-center">
        <LoadingSvg />
      </div>
    );
  }

  if (profileQuery.error) {
    throw profileQuery.error;
  }

  return (
    <>
      <SaveFormModal
        open={isSaveFormModalOpen}
        onOpenChange={setIsSaveFormModalOpen}
      />
      <div className="flex w-full flex-col items-center gap-[3.2rem] bg-gray-100 px-[9.4rem] py-[6.4rem]">
        <div className="flex w-[84rem] items-center justify-between gap-[4.8rem] border border-gray-400 bg-white p-[4.8rem]">
          <div className="flex w-full flex-col items-start gap-[4.8rem]">
            <ProfilePhoto
              value={profileImage}
              onChange={setProfileImage}
              error={profileImageError}
              setProfileImageError={setProfileImageError}
            />

            <CommunityName
              form={form}
              handleCheckAvailability={handleCheckAvailability}
            />

            <PersonalDetails form={form} />

            <HomeAddress form={form} locale="ko" />

            <SkinInfo form={form} />
          </div>
        </div>
        <div className="flex w-[84rem] items-center justify-between gap-[1.6rem]">
          <Button
            variant="outline"
            color="primary"
            size="lg"
            className="w-[41.2rem]"
            onClick={() => form.reset()}
          >
            Cancel
          </Button>
          <Button
            variant="filled"
            color="primary"
            size="lg"
            className="w-[41.2rem]"
            onClick={handleSubmitForm}
          >
            Save
          </Button>
        </div>
      </div>
    </>
  );
}
