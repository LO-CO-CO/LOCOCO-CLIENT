import { useState } from 'react';

export const useCampaignUploadMedia = () => {
  const [thumbnailFiles, setThumbnailFiles] = useState<File[]>([]);
  const [detailFiles, setDetailFiles] = useState<File[]>([]);
  return { thumbnailFiles, detailFiles, setThumbnailFiles, setDetailFiles };
};
