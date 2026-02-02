'use client';

import { useState } from 'react';

import { useTranslations } from 'next-intl';

import { useQuery } from '@tanstack/react-query';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { convertToEmbedUrl, validateYoutubeVideoList } from 'utils/youtube';

import { IconButton } from '@lococo/design-system/icon-button';
import { SvgArrowRight, SvgImgVideo, SvgKoreanReview } from '@lococo/icons';

import { YoutubeListData } from '../types';
import './youtube-carousel.css';

interface YoutubeCarouselProps {
  youtubeListData: YoutubeListData;
}

export default function YoutubeCarousel({
  youtubeListData,
}: YoutubeCarouselProps) {
  const t = useTranslations('legacy.productDetail');
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);
  const [isNextButton, setIsNextButton] = useState(true);
  const [isPrevButton, setIsPrevButton] = useState(false);

  const { data: validatedYoutubeListData } = useQuery({
    queryKey: ['validateYoutubeVideos', youtubeListData.youtubeUrls],
    queryFn: () => validateYoutubeVideoList(youtubeListData.youtubeUrls, 25),
    enabled: !!youtubeListData.youtubeUrls?.length,
  });

  const handleSwiper = (swiper: SwiperType) => {
    setSwiperRef(swiper);
    if (
      validatedYoutubeListData &&
      validatedYoutubeListData.length - 2 <= swiper.activeIndex
    ) {
      setIsNextButton(false);
    } else {
      setIsNextButton(true);
    }
    if (swiper.activeIndex === 0) {
      setIsPrevButton(false);
    } else {
      setIsPrevButton(true);
    }
  };

  return (
    <div className="flex flex-col gap-[3.2rem]">
      <h2 className="head2 inline-flex items-center gap-[1.2rem] font-bold text-gray-800">
        <SvgKoreanReview size={24} /> {t('koreanYoutuberReview')}
      </h2>
      <div className="relative h-[31.1rem]">
        {validatedYoutubeListData && validatedYoutubeListData.length > 0 ? (
          <>
            <Swiper
              onSwiper={handleSwiper}
              slidesPerView={2.5}
              slidesPerGroup={1}
              onSlideChange={handleSwiper}
              centeredSlides={false}
              centerInsufficientSlides={false}
              spaceBetween={0}
              pagination={{
                type: 'fraction',
                clickable: true,
              }}
              navigation={false}
              modules={[Navigation]}
              className={`youtube-swiper absolute ${validatedYoutubeListData.length <= 2 ? 'insufficient-slides' : ''}`}
            >
              {validatedYoutubeListData?.map((video) => (
                <SwiperSlide key={video}>
                  <iframe
                    width="552"
                    height="311"
                    src={convertToEmbedUrl(video)}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </SwiperSlide>
              ))}
            </Swiper>

            {isPrevButton && (
              <IconButton
                className="absolute bottom-[1rem] left-4 top-1/2 z-10 size-[3.2rem] -translate-y-1/2 bg-white p-0"
                onClick={() => swiperRef?.slidePrev()}
                size="md"
                icon={<SvgArrowRight className="rotate-180" />}
                color="tertiary"
                rounded
                ariaLabel={t('previousVideo')}
              />
            )}

            {isNextButton && (
              <IconButton
                className="absolute right-4 top-1/2 z-10 size-[3.2rem] shrink-0 -translate-y-1/2 bg-white p-0"
                onClick={() => swiperRef?.slideNext()}
                size="md"
                icon={<SvgArrowRight />}
                rounded
                color="tertiary"
                ariaLabel={t('nextVideo')}
              />
            )}
          </>
        ) : (
          <div className="flex h-[31.1rem] w-full flex-col items-center justify-center gap-[2.4rem]">
            <SvgImgVideo size={100} className="fill-pink-300" />
            <p className="body1 font-[700]">
              {t('noKoreanYoutuberReviews')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
