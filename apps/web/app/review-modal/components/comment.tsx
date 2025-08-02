import { SvgBad, SvgGoodFill } from '@lococo/icons';

interface CommentProps {
  children: React.ReactNode;
  type: 'positive' | 'negative';
}
export default function Comment({ children, type }: CommentProps) {
  return (
    <div className="flex w-fit flex-col gap-[1.2rem]">
      <div className="flex items-center gap-[1rem]">
        {type === 'positive' ? (
          <SvgGoodFill className="text-pink-500" />
        ) : (
          <SvgBad />
        )}
        <span className="jp-body1 font-bold text-gray-600">
          {type === 'positive' ? '良かったです' : '気になる点'}
        </span>
      </div>
      <div className="jp-body2 text-gray-800">{children}</div>
    </div>
  );
}
