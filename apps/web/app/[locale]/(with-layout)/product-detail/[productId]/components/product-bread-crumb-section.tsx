import { CATEGORY_NAME, CATEGORY_OPTIONS } from 'constants/category';
import { CategoryNameEng, CategoryOptionEng } from 'types/category';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@lococo/design-system/breadcrumb';
import { SvgHomeFill } from '@lococo/icons';

type ProductBreadCrumbSectionProps = {
  middleCategory: CategoryNameEng | '';
  subCategory: CategoryOptionEng | '';
  productName: string;
};

export default function ProductBreadCrumbSection({
  middleCategory,
  subCategory,
  productName,
}: ProductBreadCrumbSectionProps) {
  const getSubCategoryName = (
    categoryKey: CategoryNameEng,
    subCategoryKey: CategoryOptionEng
  ) => {
    const options = CATEGORY_OPTIONS[categoryKey];
    return options[subCategoryKey as keyof typeof options];
  };

  return (
    <>
      {middleCategory && (
        <Breadcrumb className="flex h-[5.2rem] min-w-[1366px] items-center self-stretch bg-gray-100 opacity-80">
          <BreadcrumbList className="jp-body2 mx-auto w-[1366px] px-[11.9rem] text-gray-600">
            <BreadcrumbItem className="flex aspect-square h-[4.4rem] w-[4.4rem] items-center justify-center p-[1rem]">
              <SvgHomeFill />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="flex h-[3.2rem] items-center justify-center gap-[1rem] px-[1.6rem] py-[1rem]">
              {CATEGORY_NAME[middleCategory]}
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="flex h-[3.2rem] items-center justify-center gap-[1rem] px-[1.6rem] py-[1rem]">
              {subCategory && getSubCategoryName(middleCategory, subCategory)}
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="flex h-[3.2rem] items-center justify-center gap-[1rem] px-[1.6rem] py-[1rem]">
              {productName}
            </BreadcrumbItem>{' '}
          </BreadcrumbList>
        </Breadcrumb>
      )}
    </>
  );
}
