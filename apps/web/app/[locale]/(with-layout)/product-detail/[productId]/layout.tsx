import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

export default function ProductDetailLayout({ children, modal }: LayoutProps) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
