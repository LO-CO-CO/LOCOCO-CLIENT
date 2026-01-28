import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import {
  getMessages,
  getTimeZone,
  getTranslations,
  setRequestLocale,
} from 'next-intl/server';
import { Inter, Noto_Sans_JP, Noto_Sans_KR } from 'next/font/google';
import localFont from 'next/font/local';
import { notFound } from 'next/navigation';

import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import TimezoneInjector from 'components/timezone-injector';

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

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  variable: '--font-noto-sans-kr',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const timeZone = await getTimeZone();
  const messages = await getMessages();

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" sizes="any" />
      </head>
      <GoogleAnalytics gaId="G-GT92YY193R" />
      <GoogleTagManager gtmId="GTM-5QMBC6SP" />

      <body
        className={`${notoSansJP.variable} ${pretendard.variable} ${inter.variable} ${notoSansKR.variable} w-full`}
      >
        <TimezoneInjector />
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
          timeZone={timeZone}
        >
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata');
  const messages = await getMessages();
  const keywords = Object.values(messages.metadata.keywords) as string[];

  return {
    title: t('title'),
    description: t('description'),
    keywords: keywords,
  };
}
