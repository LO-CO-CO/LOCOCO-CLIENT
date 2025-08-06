import Footer from 'components/footer/footer';
import { Header } from 'components/header/header';
import { getUserStatus } from './(home)/utils/getUserStatus';

export default async function WithLayoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isUserLogin = await getUserStatus();
  return (
    <div className="mx-auto flex min-h-screen w-screen flex-col">
      <Header authStatus={isUserLogin} />
      <div className="flex w-full flex-1 flex-col">{children}</div>
      <Footer />
    </div>
  );
}
