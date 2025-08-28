import { apiRequest } from 'app/api/apiRequest';
import {
  ApiResponseReviewMediaResponse,
  ApiResponseReviewReceiptResponse,
  ReviewMediaRequest,
  ReviewReceiptRequest,
} from 'swagger-codegen/data-contracts';

export const getMediaPresignedUrl = async (request: ReviewMediaRequest) => {
  return await apiRequest<ApiResponseReviewMediaResponse>({
    endPoint: '/api/reviews/media',
    method: 'POST',
    data: request,
  });
};

export const getReceiptPresignedUrl = async (request: ReviewReceiptRequest) => {
  return await apiRequest<ApiResponseReviewReceiptResponse>({
    endPoint: '/api/reviews/receipt',
    method: 'POST',
    data: request,
  });
};

// 파일 업로드 통합 함수
export const uploadFiles = async (
  presignedUrls: string[],
  files: File[],
  fileType: string
) => {
  const uploadPromises = presignedUrls.map(async (presignedUrl, index) => {
    const file = files[index];
    if (!presignedUrl || !file) return;

    try {
      const response = await fetch(presignedUrl, {
        method: 'PUT',
        body: file,
        headers: {
          'Content-Type': file.type,
        },
      });

      if (response.ok) {
        console.log(`${fileType} 파일 ${index + 1} 업로드 완료`);
      } else {
        console.error(
          `${fileType} 파일 ${index + 1} 업로드 실패:`,
          response.status
        );
      }
    } catch (error) {
      console.error(`${fileType} 파일 ${index + 1} 업로드 에러:`, error);
    }
  });

  await Promise.all(uploadPromises);
};
