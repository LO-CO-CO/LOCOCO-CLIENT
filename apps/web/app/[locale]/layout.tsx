import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getTimeZone, setRequestLocale } from 'next-intl/server';
import { Noto_Sans_JP } from 'next/font/google';
import localFont from 'next/font/local';
import { notFound } from 'next/navigation';

import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

import { Providers } from '../../components/providers';
import { routing } from '../../i18n/routing';
import './../globals.css';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  weight: ['700', '500', '400'],
  display: 'swap',
});

const pretendard = localFont({
  src: './../fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  weight: '500 700',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Lococo',
    template: 'Lococo | %s',
  },
  description:
    '日本最大級の韓国コスメレビューサイトLococo(ロココ)。話題のK-ビューティー商品をチェックして、Qoo10でそのまま購入可能!',
  keywords: [
    'Lococo',
    'ロココ',
    'Kビューティー',
    'ダイソー',
    'オリーブヤング',
    "d'Alba",
    'anua',
    'medicube',
    'VT cosmetics',
    'rom&nd',
    'round lab',
    '韓国メイク',
    'Lips',
    '@cosme',
  ],
  verification: {
    google: 'kSp4ZBLdAObw2vrbpzFmceC7CaPyk4m15BLxUpbu',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    title: {
      default: 'Lococo',
      template: ' %s | Lococo',
    },
    description: 'Kコスメと出会う 一番の近道',
    images: '/images/home-banner.png',
    url: 'https://lococo.beauty',
    siteName: 'Lococo',
    locale: 'ja_JP',
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const timeZone = await getTimeZone();

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  return (
    <html lang="ja" suppressHydrationWarning>
      <GoogleAnalytics gaId="G-GT92YY193R" />
      <GoogleTagManager gtmId="GTM-5QMBC6SP" />

      <body
        className={`${notoSansJP.variable} ${pretendard.variable} min-h-screen lg:flex lg:justify-center`}
      >
        <NextIntlClientProvider locale={locale} timeZone={timeZone}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
