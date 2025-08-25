'use client';

import { useRef, useState } from 'react';

import Image from 'next/image';

import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IconButton } from '@lococo/design-system/icon-button';
import { SvgArrowLeft, SvgArrowRight } from '@lococo/icons';

interface ImageCarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const navBtnClass = 'border-1 size-[3.2rem] border-gray-200 bg-white';

  return (
    <>
      <Swiper
        direction="horizontal"
        onSwiper={(s) => (swiperRef.current = s)}
        onSlideChange={(s) => setCurrentIndex(s.activeIndex)}
        className="absolute inset-0 h-full w-full"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <Image
              src={img}
              alt="review image"
              fill
              className="relative h-full w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {currentIndex > 0 && (
        <div className="absolute left-[1.2rem] top-1/2 z-20 -translate-y-1/2">
          <IconButton
            icon={<SvgArrowLeft />}
            size="sm"
            rounded
            color="secondary"
            aria-label="previous image"
            onClick={() => swiperRef.current?.slidePrev()}
            className={navBtnClass}
          />
        </div>
      )}
      {currentIndex < images.length - 1 && (
        <div className="absolute right-[1.2rem] top-1/2 z-20 -translate-y-1/2">
          <IconButton
            icon={<SvgArrowRight />}
            size="sm"
            rounded
            color="secondary"
            aria-label="next image"
            onClick={() => swiperRef.current?.slideNext()}
            className={navBtnClass}
          />
        </div>
      )}
    </>
  );
}
