export default function ReviewNotFoundSection() {
  return (
    <div className="flex min-h-[50rem] w-full flex-col items-center justify-center gap-[1.2rem] self-stretch py-[6rem]">
      <p className="jp-body1 font-bold text-gray-800">検索結果がありません。</p>
      <p className="jp-caption font-bold text-gray-600">
        ほかのキーワードを入力してください。
      </p>
    </div>
  );
}
