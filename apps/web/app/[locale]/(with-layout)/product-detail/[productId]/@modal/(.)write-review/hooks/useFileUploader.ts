import {
  REVIEW_MEDIA_ERROR_MESSAGE,
  REVIEW_MEDIA_MAX_COUNT,
} from 'constants/review';
import z from 'zod';

export const ALLOWED_IMAGE_TYPES = [
  'image/jpg',
  'image/jpeg',
  'image/png',
  'image/webp',
];
export const ALLOWED_VIDEO_TYPES = [
  'video/mp4',
  'video/avi',
  'video/mkv',
  'video/quicktime',
];
export const ALLOWED_MEDIA_TYPES = [
  ...ALLOWED_IMAGE_TYPES,
  ...ALLOWED_VIDEO_TYPES,
];

export const isImageFile = (file: File): boolean => {
  return ALLOWED_IMAGE_TYPES.includes(file.type);
};

export const isVideoFile = (file: File): boolean => {
  return ALLOWED_VIDEO_TYPES.includes(file.type);
};

export const isReceiptFile = (file: File): boolean => {
  return ALLOWED_IMAGE_TYPES.includes(file.type);
};

export const createFileTypeValidator = (allowedTypes: string[]) => {
  return z.instanceof(File).refine((file) => allowedTypes.includes(file.type), {
    message: `not allowed file type`,
  });
};

export const mediaFilesValidator = z
  .array(createFileTypeValidator(ALLOWED_MEDIA_TYPES))
  .refine(
    (files) => {
      if (files.length === 0) return true;

      const imageFiles = files.filter(isImageFile);
      const videoFiles = files.filter(isVideoFile);

      if (imageFiles.length > 0 && videoFiles.length > 0) {
        return false;
      }

      if (imageFiles.length > REVIEW_MEDIA_MAX_COUNT.IMAGE) {
        return false;
      }

      if (videoFiles.length > REVIEW_MEDIA_MAX_COUNT.VIDEO) {
        return false;
      }

      return true;
    },
    {
      message: REVIEW_MEDIA_ERROR_MESSAGE.NOT_ALLOWED_FILE_TYPE,
    }
  );
