import Image from 'next/image';

import { ProductItem } from 'types/product';

export default function ProductInfo({
  productName,
  imageUrl,
  brandName,
}: Pick<ProductItem, 'productName' | 'imageUrl' | 'brandName'>) {
  return (
    <div className="flex min-h-[8.4rem] items-center gap-[1.2rem] border-b border-dashed border-pink-500 bg-white p-[2rem]">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={productName}
          width={60}
          height={60}
          className="rounded-lg"
        />
      )}
      <div className="flex flex-col items-start gap-[0.4rem]">
        <h3 className="jp-body1 font-bold text-gray-800">{productName}</h3>
        <p className="jp-body2 text-gray-800">{brandName}</p>
      </div>
    </div>
  );
}
