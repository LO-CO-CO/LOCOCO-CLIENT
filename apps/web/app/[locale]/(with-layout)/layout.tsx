import Footer from 'components/footer/footer';
import Header from 'components/header/header';

export default async function WithLayoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex min-h-screen w-screen flex-col">
      <Header />
      <div className="flex w-full flex-1 flex-col">{children}</div>
      <Footer />
    </div>
  );
}
