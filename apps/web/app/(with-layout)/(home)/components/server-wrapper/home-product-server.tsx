import { apiRequest } from 'app/api/apiRequest';
import { ApiResponseNewProductsByCategoryResponse } from 'swagger-codegen/data-contracts';
import { CategoryNameEng } from 'types/category';

import HomeSectionProduct from '../home-section-product';

type ProductSortType = 'new' | 'popular';

interface HomeProductServerProps {
  productSortType: ProductSortType;
}

async function fetchInitialProducts(
  category: CategoryNameEng = 'FACIAL_CARE',
  sortType: ProductSortType = 'new'
) {
  const response = await apiRequest<ApiResponseNewProductsByCategoryResponse>({
    endPoint: `/api/products/categories/${sortType}?middleCategory=${category}&page=0&size=4`,
  });

  return response.data?.products || [];
}

export default async function HomeProductServer({
  productSortType,
}: HomeProductServerProps) {
  const initialProducts = await fetchInitialProducts(
    'FACIAL_CARE',
    productSortType
  );

  return (
    <HomeSectionProduct
      productSortType={productSortType}
      initialProducts={initialProducts}
    />
  );
}
