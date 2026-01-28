'use client';

import Link from 'next/link';

import { useTranslations } from 'next-intl';

import {
  SvgArrowRight,
  SvgInstagramFill,
  SvgMailFill,
  SvgXTwitterFill,
} from '@lococo/icons';

export default function Footer() {
  const t = useTranslations('legacy.footer');
  const tCategories = useTranslations('legacy.categories');

  const FOOTER = {
    title: 'Lococo',
    desc: t('description'),
    menu: [
      {
        title: t('categories'),
        option: [
          {
            name: tCategories('skincare.name'),
            href: '/search?middleCategory=FACIAL_CARE&searchType=PRODUCT',
          },
          {
            name: tCategories('face.name'),
            href: '/search?middleCategory=FACE_MAKEUP&searchType=PRODUCT',
          },
          {
            name: tCategories('eye.name'),
            href: '/search?middleCategory=EYE_MAKEUP&searchType=PRODUCT',
          },
          {
            name: tCategories('lip.name'),
            href: '/search?middleCategory=LIP_MAKEUP&searchType=PRODUCT',
          },
        ],
      },
      {
        title: t('support'),
        option: [
          { name: t('faq'), href: '' },
          { name: t('contact'), href: '' },
          { name: t('notice'), href: '' },
        ],
      },
      {
        title: t('information'),
        option: [
          {
            name: t('privacyPolicy'),
            href: 'https://pricey-sheep-acd.notion.site/233dc4218399800eaa99e2d52d0de45f',
          },
          {
            name: t('termsOfService'),
            href: 'https://pricey-sheep-acd.notion.site/233dc4218399800285a4e44918ecf132',
          },
        ],
      },
    ],
    copyright: '© 2025 Lococo. All rights reserved.',
  };

  return (
    <footer className="px-auto bottom-0 hidden w-full min-w-[1366px] flex-col items-center justify-center bg-pink-100">
      <div className="mx-auto flex w-[1366px] gap-4 px-4 py-16 md:gap-8 lg:gap-[12rem]">
        <FooterLeft title={FOOTER.title} desc={FOOTER.desc} accessInstagram={t('accessInstagram')} accessX={t('accessX')} sendEmail={t('sendEmail')} />
        <FooterRight menu={FOOTER.menu} />
      </div>
      <FooterBottom copyright={FOOTER.copyright} />
    </footer>
  );
}

interface FooterLeftProps {
  title: string;
  desc: string;
  accessInstagram: string;
  accessX: string;
  sendEmail: string;
}

function FooterLeft({ title, desc, accessInstagram, accessX, sendEmail }: FooterLeftProps) {
  return (
    <div className="flex flex-1 flex-col items-start gap-8 bg-pink-100 md:gap-12 lg:gap-[5.6rem]">
      <div className="flex w-full flex-col items-start gap-4 md:gap-6 lg:gap-[2.4rem]">
        <p className="title3 font-bold leading-loose">{title}</p>
        <p className="body2 font-medium text-gray-600">{desc}</p>
      </div>
      <div className="flex items-center gap-2 md:gap-[0.8rem]">
        <Link
          href="https://www.instagram.com/lococo.official/"
          className="flex h-[4.4rem] w-[4.4rem] items-center justify-center p-1"
          aria-label={accessInstagram}
          title={accessInstagram}
        >
          <SvgInstagramFill className="text-pink-500" />
        </Link>
        <Link
          href="https://x.com/Lococo_official"
          className="flex h-[4.4rem] w-[4.4rem] items-center justify-center p-1"
          aria-label={accessX}
          title={accessX}
        >
          <SvgXTwitterFill className="text-pink-500" />
        </Link>
        <Link
          href="mailto:lococo.official@gmail.com"
          className="flex h-[4.4rem] w-[4.4rem] items-center justify-center p-1"
          aria-label={sendEmail}
          title={sendEmail}
        >
          <SvgMailFill className="text-pink-500" />
        </Link>
      </div>
    </div>
  );
}

interface FooterBottomProps {
  copyright: string;
}

function FooterBottom({ copyright }: FooterBottomProps) {
  return (
    <div className="flex min-h-[5.2rem] w-full items-center justify-center gap-4 border-t border-dashed border-pink-500 bg-pink-100 px-4 py-4">
      <p className="body1 bg-pink-100 text-center font-medium text-pink-500">
        {copyright}
      </p>
    </div>
  );
}

type MenuItem = {
  name: string;
  href: string;
};

type Menu = {
  title: string;
  option: MenuItem[];
};

interface FooterRightProps {
  menu: Menu[];
}

function FooterRight({ menu }: FooterRightProps) {
  return (
    <div className="flex flex-1 items-start gap-4 bg-pink-100 md:gap-6 lg:gap-[2.4rem]">
      {menu.map(({ title, option }) => (
        <div
          key={title}
          className="flex min-w-0 flex-1 flex-col items-start gap-4 md:gap-6 lg:w-[16.8rem] lg:gap-[2.4rem]"
        >
          <p className="body1 font-bold">{title}</p>
          <div className="flex w-full flex-col items-start justify-start gap-2 md:gap-[0.8rem]">
            {option.map((item) =>
              item.href ? (
                <Link
                  href={item.href}
                  key={item.name}
                  className="flex h-[3.2rem] w-full items-center gap-2 py-[1rem] md:gap-[0.8rem]"
                >
                  <p className="body2 whitespace-nowrap font-medium">
                    {item.name}
                  </p>
                  <SvgArrowRight />
                </Link>
              ) : (
                <div
                  key={item.name}
                  className="flex h-[3.2rem] w-full cursor-default items-center gap-2 py-[1rem] md:gap-[0.8rem]"
                >
                  <p className="body2 cursor-not-allowed whitespace-nowrap font-medium">
                    {item.name}
                  </p>
                  <SvgArrowRight className="text-gray-400" />
                </div>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
