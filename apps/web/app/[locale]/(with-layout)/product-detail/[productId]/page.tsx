import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getProductDetail, getReviewList } from './apis';
import ClientPage from './page.client';

export default async function Page({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  let productDetailData;
  try {
    const productDetailResponse = await getProductDetail(Number(productId));
    productDetailData = productDetailResponse;
  } catch {
    // TODO: 에러 핸들링 로직 추가
    notFound();
  }
  const reviewListData = await getReviewList(Number(productId));
  // JSON-LD 스키마 마크업 생성
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: productDetailData.productName,
    image: productDetailData.imageUrls,
    brand: {
      '@type': 'Brand',
      name: productDetailData.brandName,
    },
    description: productDetailData.productDetail,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: productDetailData.rating,
      reviewCount: productDetailData.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviewListData.imageReviews.slice(0, 20).map((review) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: review.authorName },
      datePublished: new Date(review.writtenTime).toISOString(),
      reviewBody: `${review.positiveComment} ${review.negativeComment}`,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: Number(review.rating),
        bestRating: 5,
      },
      image: review.images || [],
    })),
  };
  if (!productDetailData) {
    notFound();
  }

  return (
    <>
      <ClientPage productData={productDetailData} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ productId: string }>;
}): Promise<Metadata> {
  const productId = (await params).productId;

  try {
    const productDetail = await getProductDetail(Number(productId));

    return {
      title: productDetail.productName,
      description: productDetail.productDetail,
      openGraph: {
        title: productDetail.productName + ' | ' + productDetail.brandName,
        description: productDetail.productDetail,
        images: productDetail.imageUrls[0],
      },
    };
  } catch {
    // 에러 발생 시 기본 메타데이터 반환
    return {
      title: '商品詳細',
      description: '商品情報が見つかりません。',
    };
  }
}
