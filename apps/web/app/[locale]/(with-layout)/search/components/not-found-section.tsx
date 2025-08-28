import { cn } from '@lococo/utils';

interface NotFoundSectionProps {
  variant?: 'product' | 'review';
}

export default function NotFoundSection({
  variant = 'product',
}: NotFoundSectionProps) {
  return (
    <div
      className={cn(
        variant == 'review' && 'gap-[1.2rem] self-stretch',
        variant == 'product' && 'min-h-[50rem]',
        'flex w-full flex-col items-center justify-center py-[6rem]'
      )}
    >
      <p className="jp-body1 font-bold text-gray-800">検索結果がありません。</p>
      <p className="jp-caption font-bold text-gray-600">
        ほかのキーワードを入力してください。
      </p>
    </div>
  );
}
