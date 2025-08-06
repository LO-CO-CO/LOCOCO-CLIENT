import { MainHeader } from './mainHeader';
import TopUtil from './topUtil';

interface HeaderProps {
  authStatus: boolean;
}

export function Header({ authStatus }: HeaderProps) {
  return (
    <>
      <TopUtil authStatus={authStatus} />
      <MainHeader />
    </>
  );
}
