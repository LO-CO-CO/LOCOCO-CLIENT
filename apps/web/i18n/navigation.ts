import { createNavigation } from 'next-intl/navigation';

import { routing } from './routing';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
