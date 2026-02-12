import { useEffect, useRef, useState } from 'react';

import { Button } from '@lococo/design-system/button';
import { SvgAdd, SvgBad, SvgGoodFill, SvgRemove } from '@lococo/icons';
import { cn } from '@lococo/utils';

interface CommentBoxProps {
  text: string;
  type: 'positive' | 'negative';
}
export default function CommentBox({ text, type }: CommentBoxProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isShowButton, setIsShowButton] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  // TODO: 추후 커스텀 훅 분리
  useEffect(() => {
    if (textRef.current) {
      const element = textRef.current;
      const lineHeight = parseFloat(getComputedStyle(element).lineHeight);
      const threeLineHeight = lineHeight * 3;

      // 실제 내용 높이가 3줄보다 큰지 확인
      const isOverflowing = element.scrollHeight > threeLineHeight;
      setIsShowButton(isOverflowing);
    }
  }, [text]);

  return (
    <div className="flex w-fit flex-col gap-[1.2rem]">
      {/* 긍정 부정 리뷰 */}
      <div className="flex items-center gap-[1rem]">
        {type === 'positive' ? (
          <SvgGoodFill className="text-pink-500" />
        ) : (
          <SvgBad />
        )}
        <span className="body1 font-bold text-gray-600">
          {type === 'positive' ? 'Good' : 'Bad'}
        </span>
      </div>

      {/* 리뷰 내용 */}
      <div
        ref={textRef}
        className={cn(
          'body2 break-all text-gray-800',
          !isExpanded && 'line-clamp-3 max-h-[6.6rem] overflow-hidden'
        )}
      >
        {text}
      </div>

      {isShowButton && !isExpanded && (
        <Button
          color="primary"
          variant="text"
          size="md"
          className="w-fit px-0"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <SvgAdd />
          <span className="title3 font-bold">もっと見る</span>
        </Button>
      )}
      {isExpanded && (
        <Button
          color="primary"
          variant="text"
          size="md"
          className="w-fit px-0"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <SvgRemove />
          <span className="title3 font-bold">閉じる</span>
        </Button>
      )}
    </div>
  );
}
