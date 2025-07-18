'use client';

import { useQuery } from '@tanstack/react-query';
import CardReview from 'components/card/card-review';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { IconButton } from '@lococo/design-system';
import { SvgArrowRight } from '@/icons';
import { SvgImgVideo } from '@/icons';
import { getUserUploadedVideoList } from '../apis';
import './user-uploaded-video-carousel.css';

export default function UserUploadVideoCarousel() {
  const params = useParams();
  const router = useRouter();

  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);
  const [isNextButton, setIsNextButton] = useState(true);
  const [isPrevButton, setIsPrevButton] = useState(false);

  const { data: userUploadedVideoList } = useQuery({
    queryKey: ['userUploadedVideoList', Number(params.productId)],
    queryFn: () => getUserUploadedVideoList(Number(params.productId)),
  });

  const userUploadedVideoListData = userUploadedVideoList?.videoReviews;
  const handleSwiper = (swiper: SwiperType) => {
    setSwiperRef(swiper);
    if (
      userUploadedVideoListData &&
      userUploadedVideoListData.length - 4 <= swiper.activeIndex
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
      <h3 className="text-jp-head2 inline-flex items-center gap-[1.2rem] font-bold">
        動画レビュー
      </h3>
      <div className="relative h-[35.2rem] w-full">
        {userUploadedVideoListData && userUploadedVideoListData.length > 0 ? (
          <>
            <Swiper
              onSwiper={handleSwiper}
              slidesPerView={4.5}
              slidesPerGroup={1}
              centeredSlides={false}
              centerInsufficientSlides={false}
              onSlideChange={handleSwiper}
              spaceBetween={24}
              pagination={{
                type: 'fraction',
                clickable: true,
              }}
              navigation={false}
              modules={[Navigation]}
              className={`user-uploaded-video--swiper ${userUploadedVideoListData.length <= 4 ? 'insufficient-slides' : ''}`}
            >
              {userUploadedVideoListData?.map((video) => (
                <SwiperSlide key={video.reviewId}>
                  <CardReview
                    type="video"
                    brandName={video.brandName}
                    productName={video.productName}
                    likeCount={video.likeCount}
                    reviewId={video.reviewId}
                    mediaUrl={video.videoUrl}
                    handleCardClick={() => {
                      router.push(
                        `/review-modal/${video.reviewId}/detail/video?productId=${params.productId}`
                      );
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {isPrevButton && (
              <IconButton
                className="left absolute bottom-[3rem] top-1/2 z-10 size-[3.2rem] -translate-y-1/2 bg-white p-0"
                onClick={() => swiperRef?.slidePrev()}
                size="md"
                icon={<SvgArrowRight className="rotate-180" />}
                color="tertiary"
                rounded
              />
            )}

            {isNextButton && (
              <IconButton
                className="absolute bottom-[3rem] right-[0rem] top-1/2 z-10 size-[3.2rem] shrink-0 bg-white p-0"
                onClick={() => swiperRef?.slideNext()}
                size="md"
                icon={<SvgArrowRight />}
                rounded
                color="tertiary"
              />
            )}
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-[2.4rem]">
            <SvgImgVideo size={100} className="fill-pink-300" />
            <p className="jp-body1 font-[700]">
              登録された動画レビューはありません。
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
