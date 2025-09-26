'use client';

import { useFormContext } from 'react-hook-form';

import { useTranslations } from 'next-intl';

import DragDropArea from 'components/drag-drop/DargDropArea';
import { FormSection } from 'components/forms';
import { CampaignFormData } from 'schema/create-campaign-schema';

export default function CampaignUploadMedia() {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<CampaignFormData>();

  const thumbnailFiles = watch('thumbnailFiles') || [];
  const detailFiles = watch('detailFiles') || [];

  const t = useTranslations('brandMyPageCreateCampaign');

  // 썸네일 파일 분리
  const thumbnailImageFiles = thumbnailFiles.filter((file) =>
    file.type.startsWith('image/')
  );
  const thumbnailVideoFiles = thumbnailFiles.filter((file) =>
    file.type.startsWith('video/')
  );

  // 디테일 파일 분리
  const detailImageFiles = detailFiles.filter((file) =>
    file.type.startsWith('image/')
  );
  const detailVideoFiles = detailFiles.filter((file) =>
    file.type.startsWith('video/')
  );

  // 썸네일 이미지 파일 변경 핸들러 (삭제 포함)
  const handleThumbnailImageFilesChange = (files: File[]) => {
    const allFiles = [...files, ...thumbnailVideoFiles];
    setValue('thumbnailFiles', allFiles);
  };

  // 썸네일 비디오 파일 변경 핸들러 (삭제 포함)
  const handleThumbnailVideoFilesChange = (files: File[]) => {
    const allFiles = [...thumbnailImageFiles, ...files];
    setValue('thumbnailFiles', allFiles);
  };

  // 디테일 이미지 파일 변경 핸들러 (삭제 포함)
  const handleDetailImageFilesChange = (files: File[]) => {
    const allFiles = [...files, ...detailVideoFiles];
    setValue('detailFiles', allFiles);
  };

  // 디테일 비디오 파일 변경 핸들러 (삭제 포함)
  const handleDetailVideoFilesChange = (files: File[]) => {
    const allFiles = [...detailImageFiles, ...files];
    setValue('detailFiles', allFiles);
  };

  return (
    <div className="flex w-full flex-col gap-[4.8rem]">
      <FormSection
        title={t('media.thumbnailTitle')}
        description={t('media.thumbnailDescription')}
      >
        <DragDropArea
          imageFiles={thumbnailImageFiles}
          videoFiles={thumbnailVideoFiles}
          handleImageFilesChange={handleThumbnailImageFilesChange}
          handleVideoFilesChange={handleThumbnailVideoFilesChange}
          maxFiles={5}
        />
        {errors.thumbnailFiles && (
          <p className="text-red caption3 font-[400]">
            {t(`errorMessage.${errors.thumbnailFiles.message}`)}
          </p>
        )}
      </FormSection>

      <FormSection
        title={t('media.detailTitle')}
        description={t('media.detailDescription')}
      >
        <DragDropArea
          imageFiles={detailImageFiles}
          videoFiles={detailVideoFiles}
          handleImageFilesChange={handleDetailImageFilesChange}
          handleVideoFilesChange={handleDetailVideoFilesChange}
          maxFiles={15}
        />
        {errors.detailFiles && (
          <p className="text-red caption3 font-[400]">
            {t(`errorMessage.${errors.detailFiles.message}`)}
          </p>
        )}
      </FormSection>
    </div>
  );
}
