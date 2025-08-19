import { Suspense } from 'react';

import SearchPageClient from './page.client';

//TODO: loading 처리 필요
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchPageClient />
    </Suspense>
  );
}
