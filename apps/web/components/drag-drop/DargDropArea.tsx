import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

import { useTranslations } from 'next-intl';

import { ErrorNotice } from '@lococo/design-system/error-notice';
import { ImagePreview } from '@lococo/design-system/image-preview';
import { cn } from '@lococo/utils';

import {
  ALLOWED_MEDIA_TYPES,
  FILE_ERROR_MESSAGE_KEYS,
  isImageFile,
  isVideoFile,
} from '../../hooks/useFileUploader';

interface DragDropAreaProps {
  imageFiles: File[];
  videoFiles: File[];
  handleImageFilesChange: (files: File[]) => void;
  handleVideoFilesChange: (files: File[]) => void;
  maxFiles?: number;
  className?: string;
}

export default function DragDropArea({
  imageFiles,
  videoFiles,
  handleImageFilesChange,
  handleVideoFilesChange,
  maxFiles = 10,
  className,
}: DragDropAreaProps) {
  const t = useTranslations('fileUploader');
  const [isDragOver, setIsDragOver] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const urls = imageFiles.map((file) => URL.createObjectURL(file));
    const videoUrls = videoFiles.map((file) => URL.createObjectURL(file));
    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url));
      videoUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [imageFiles, videoFiles]);

  useEffect(() => {
    if (
      scrollContainerRef.current &&
      imageFiles.length > 0 &&
      videoFiles.length > 0
    ) {
      scrollContainerRef.current.scrollLeft =
        scrollContainerRef.current.scrollWidth;
    }
  }, [imageFiles.length, videoFiles.length]);

  const addFiles = (newFiles: File[]) => {
    const validImageFiles: File[] = [];
    const validVideoFiles: File[] = [];
    const invalidFiles: string[] = [];

    // 파일 타입별로 분류
    newFiles.forEach((file) => {
      if (isImageFile(file)) {
        validImageFiles.push(file);
      } else if (isVideoFile(file)) {
        validVideoFiles.push(file);
      } else {
        invalidFiles.push(file.name);
      }
    });

    if (validImageFiles.length === 0 && validVideoFiles.length === 0) {
      setErrorMessage(t(FILE_ERROR_MESSAGE_KEYS.EMPTY_FILE));
      return;
    }

    // 지원하지 않는 파일이 있으면 에러 메시지 표시
    if (invalidFiles.length > 0) {
      setErrorMessage(t(FILE_ERROR_MESSAGE_KEYS.NOT_ALLOWED_FILE_TYPE));
      return;
    }

    // 파일 개수 제한 확인
    const totalFiles =
      imageFiles.length +
      videoFiles.length +
      validImageFiles.length +
      validVideoFiles.length;
    if (totalFiles > maxFiles) {
      setErrorMessage(t(FILE_ERROR_MESSAGE_KEYS.CANNOT_UPLOAD_FILE));
      return;
    }

    // 유효한 파일들만 추가
    if (validImageFiles.length > 0) {
      handleImageFilesChange([...imageFiles, ...validImageFiles]);
    }
    if (validVideoFiles.length > 0) {
      handleVideoFilesChange([...videoFiles, ...validVideoFiles]);
    }
    setErrorMessage('');
  };

  const removeImageFile = (index: number) => {
    const updatedFiles = imageFiles.filter((_, i) => i !== index);
    handleImageFilesChange(updatedFiles);
  };

  const removeVideoFile = (index: number) => {
    const updatedFiles = videoFiles.filter((_, i) => i !== index);
    handleVideoFilesChange(updatedFiles);
  };

  const replaceFile = (indexToReplace: number, newFile: File) => {
    const updatedFiles = imageFiles.map((file, index) =>
      index === indexToReplace ? newFile : file
    );
    const updatedVideoFiles = videoFiles.map((file, index) =>
      index === indexToReplace ? newFile : file
    );
    handleImageFilesChange(updatedFiles);
    handleVideoFilesChange(updatedVideoFiles);
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    if (selectedFiles.length > 0) {
      addFiles(selectedFiles);
    }
    e.target.value = '';
  };

  const handleRemoveImageFile = (index: number) => (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    removeImageFile(index);
  };

  const handleRemoveVideoFile = (index: number) => (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    removeVideoFile(index);
  };

  const handleChangeFile =
    (indexToReplace: number) => (e: ChangeEvent<HTMLInputElement>) => {
      e.stopPropagation();
      e.preventDefault();
      const newFiles = Array.from(e.target.files || []);
      if (newFiles.length > 0) {
        const newFile = newFiles[0];
        if (newFile) {
          replaceFile(indexToReplace, newFile);
        }
      }
    };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    addFiles(droppedFiles);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      triggerFileInput();
    }
  };

  const hasFiles = imageFiles.length > 0 || videoFiles.length > 0;
  const canAddMoreFiles = imageFiles.length + videoFiles.length < maxFiles;

  return (
    <>
      {errorMessage && <ErrorNotice message={errorMessage} />}
      <div className="flex gap-[0.8rem]">
        <p className="body4 font-[500] text-gray-500">
          {t('dragDropDescription')}
        </p>
        <button
          className="body4 border-none border-pink-500 border-b-gray-100 font-[500] text-pink-500 underline"
          onClick={triggerFileInput}
        >
          {t('selectFile')}
        </button>
      </div>
      <div
        className={cn(
          'flex h-[22rem] w-full items-center rounded-lg border border-solid bg-pink-100 p-[1.2rem] transition-all duration-200',
          isDragOver
            ? 'border-dashed border-pink-500 bg-pink-200'
            : 'border-pink-300',
          hasFiles && 'border-pink-300',
          className
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={canAddMoreFiles ? triggerFileInput : undefined}
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {/* File Grid */}
        {hasFiles && (
          <div
            ref={scrollContainerRef}
            className="scrollbar-hide grid auto-cols-max grid-rows-2 gap-x-[1.2rem] gap-y-[1.5rem] overflow-x-scroll"
            style={{ gridAutoFlow: 'column' }}
          >
            {/* Image Files */}
            {imageFiles.map((file, index) => (
              <ImagePreview
                key={`image-${file.name}-${index}`}
                src={URL.createObjectURL(file)}
                alt={`Upload ${index + 1}: ${file.name}`}
                handleRemoveFile={handleRemoveImageFile(index)}
                handleFileChange={handleChangeFile(index)}
                className="h-[9.2rem] w-[9.2rem]"
              />
            ))}

            {/* Video Files */}
            {videoFiles.map((file, index) => (
              <ImagePreview
                key={`video-${file.name}-${index}`}
                src={URL.createObjectURL(file)}
                className="h-[9.2rem] w-[9.2rem]"
                alt={`Upload ${index + 1}: ${file.name}`}
                handleRemoveFile={handleRemoveVideoFile(index)}
                handleFileChange={handleChangeFile(index)}
              />
            ))}
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          multiple={true}
          accept={ALLOWED_MEDIA_TYPES.join(',')}
          className="hidden"
          onChange={handleFileInputChange}
        />
      </div>
    </>
  );
}
