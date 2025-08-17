import { CardSkeleton } from 'components/card/card-skeleton';
import { CATEGORY_NAME } from 'constants/category';

import { Tab, TabContainer } from '@lococo/design-system/tab';

export default function HomeProductFallback() {
  return (
    <div className="flex w-full flex-col gap-4">
      <TabContainer className="flex w-full items-end">
        {Object.keys(CATEGORY_NAME).map((key) => {
          const categoryKey = key as keyof typeof CATEGORY_NAME;
          const name = CATEGORY_NAME[categoryKey];
          return (
            <Tab
              key={key}
              label={name}
              variant="primary"
              active={categoryKey === 'FACIAL_CARE'}
              className="jp-title3 cursor-default opacity-50"
            />
          );
        })}
        <div className="h-full flex-1 border-b" />
      </TabContainer>

      <div className="grid grid-cols-4 gap-[2.4rem]">
        {Array.from({ length: 4 }, (_, index) => (
          <CardSkeleton key={index} type="PRODUCT" />
        ))}
      </div>
    </div>
  );
}
