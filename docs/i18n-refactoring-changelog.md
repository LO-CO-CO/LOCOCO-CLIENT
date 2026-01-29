# i18n Refactoring Changelog

## Overview

This document describes the internationalization (i18n) refactoring changes made to the LOCOCO-CLIENT project. All hardcoded Japanese text has been migrated to use the `next-intl` translation system, and the default site language has been changed from English to Korean.

## Summary of Changes

- **Default language**: Changed from `en` (English) to `ko` (Korean)
- **Supported locales**: `ko`, `en`, `es`, `ja`
- **Files modified**: 41 files
- **New translation keys**: ~130 keys added to the `legacy` namespace

---

## Configuration Changes

### i18n Routing Configuration

**File**: `i18n/routing.ts`

```typescript
// Before
export const routing = defineRouting({
  locales: ['en', 'ko', 'es', 'ja'],
  defaultLocale: 'en',
  localePrefix: 'always',
});

// After
export const routing = defineRouting({
  locales: ['ko', 'en', 'es', 'ja'],
  defaultLocale: 'ko',
  localePrefix: 'always',
  localeDetection: false,
});
```

### Language Selector Order

**File**: `constants/language.ts`

The `GNB_LANGUAGE_KEYS` array was reordered to place Korean first:

```typescript
// Before
export const GNB_LANGUAGE_KEYS = ['en', 'es', 'ja', 'ko'] as const;

// After
export const GNB_LANGUAGE_KEYS = ['ko', 'en', 'es', 'ja'] as const;
```

---

## Translation Files

All four translation files received new keys under the `legacy` namespace:

- `messages/ko.json` - Korean translations
- `messages/en.json` - English translations
- `messages/es.json` - Spanish translations
- `messages/ja.json` - Japanese translations

### New Translation Key Structure

```json
{
  "legacy": {
    "home": {
      "updateDate": "Update Date",
      "year": "Year",
      "month": "Month",
      "day": "Day"
    },
    "footer": {
      "description": "...",
      "categories": "Categories",
      "support": "Support",
      "information": "Information",
      "faq": "FAQ",
      "contact": "Contact",
      "notice": "Notice",
      "privacyPolicy": "Privacy Policy",
      "termsOfService": "Terms of Service",
      "accessInstagram": "Visit Instagram",
      "accessX": "Visit X (Twitter)",
      "sendEmail": "Send Email"
    },
    "search": {
      "searchResultsFor": "Search results for \"{keyword}\"",
      "all": "All",
      "product": "Product",
      "review": "Review",
      "videoReviews": "Video Reviews",
      "photoReviews": "Photo Reviews",
      "noResults": "No results found",
      "tryOtherKeywords": "Please try other keywords"
    },
    "productDetail": {
      "addToLikes": "Add to likes",
      "removeFromLikes": "Remove from likes",
      "selectOption": "Select Option",
      "writeReview": "Write Review",
      "productInfo": "Product Info",
      "reviews": "Reviews",
      "koreanYoutuberReview": "Korean YouTuber Reviews",
      "videoReviews": "Video Reviews",
      "noKoreanYoutuberReviews": "No Korean YouTuber reviews available",
      "noVideoReviews": "No video reviews available",
      "previousVideo": "Previous video",
      "nextVideo": "Next video"
    },
    "review": {
      "positiveLabel": "Positive",
      "negativeLabel": "Negative",
      "likeCount": "Likes",
      "commentCount": "Comments",
      "purchaseDate": "Purchase Date",
      "skinType": "Skin Type",
      "receipt": "Receipt"
    },
    "writeReviewModal": {
      "title": "Write Review",
      "submit": "Submit",
      "positiveReview": "Positive Review",
      "positiveReviewPlaceholder": "Share what you liked about this product",
      "negativeReview": "Negative Review",
      "negativeReviewPlaceholder": "Share any concerns about this product",
      "selectOption": "Select Option",
      "selectRating": "Select Rating",
      "uploadMedia": "Upload Photos/Videos",
      "uploadMediaDescription": "Upload up to 5 photos or videos",
      "uploadReceipt": "Upload Receipt",
      "uploadReceiptDescription": "Upload receipt for verified purchase badge"
    },
    "categories": {
      "skincare": { "name": "Skincare" },
      "face": { "name": "Face" },
      "eye": { "name": "Eye" },
      "lip": { "name": "Lip" }
    }
  }
}
```

---

## Component Changes

### Search Components

| File | Changes |
|------|---------|
| `app/[locale]/(with-layout)/search/page.client.tsx` | Added `useTranslations`, replaced search results text |
| `app/[locale]/(with-layout)/search/components/option-selector.tsx` | Tab labels now use translations |
| `app/[locale]/(with-layout)/search/components/search-reviews-section.tsx` | Video/photo review labels use translations |
| `app/[locale]/(with-layout)/search/components/review-not-found.tsx` | Empty state messages use translations |
| `app/[locale]/(with-layout)/search/components/product-not-found.tsx` | Empty state messages use translations |

### Product Detail Components

| File | Changes |
|------|---------|
| `app/[locale]/(with-layout)/product-detail/[productId]/components/product-info.tsx` | Like button labels, option placeholder, write review button |
| `app/[locale]/(with-layout)/product-detail/[productId]/components/product-info-tab.tsx` | Tab labels use translations |
| `app/[locale]/(with-layout)/product-detail/[productId]/components/youtube-carousel.tsx` | Section title, navigation aria-labels, empty state |
| `app/[locale]/(with-layout)/product-detail/[productId]/components/user-upload-video-carousel.tsx` | Section title, empty state message |

### Review Modal Components

| File | Changes |
|------|---------|
| `app/[locale]/review-modal/components/review/comment.tsx` | Positive/negative labels |
| `app/[locale]/review-modal/components/review/review-info.tsx` | All review metadata labels |

### Write Review Modal Components

| File | Changes |
|------|---------|
| `app/[locale]/(with-layout)/product-detail/[productId]/@modal/(.)write-review/page.tsx` | Modal title and submit button |
| `app/[locale]/(with-layout)/product-detail/[productId]/@modal/(.)write-review/components/positive-review.tsx` | Label and placeholder |
| `app/[locale]/(with-layout)/product-detail/[productId]/@modal/(.)write-review/components/negative-review.tsx` | Label and placeholder |
| `app/[locale]/(with-layout)/product-detail/[productId]/@modal/(.)write-review/components/product-option.tsx` | Select option label |
| `app/[locale]/(with-layout)/product-detail/[productId]/@modal/(.)write-review/components/product-rating.tsx` | Rating label |
| `app/[locale]/(with-layout)/product-detail/[productId]/@modal/(.)write-review/components/media-upload.tsx` | Upload label and description |
| `app/[locale]/(with-layout)/product-detail/[productId]/@modal/(.)write-review/components/receipt-certification.tsx` | Upload label and description |

### Other Components

| File | Changes |
|------|---------|
| `app/[locale]/(with-layout)/(home)/components/home-update-date.tsx` | Date format labels (Year, Month, Day) |
| `components/legacy/footer/footer.tsx` | All menu items, descriptions, aria-labels |

---

## Usage Guide

### Using Translations in Components

```tsx
'use client';

import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('legacy.productDetail');

  return (
    <div>
      <h1>{t('writeReview')}</h1>
      <p>{t('selectOption')}</p>
    </div>
  );
}
```

### Using Translations with Parameters

```tsx
const t = useTranslations('legacy.search');

// Translation key: "searchResultsFor": "Search results for \"{keyword}\""
return <p>{t('searchResultsFor', { keyword: searchQuery })}</p>;
```

### Using Multiple Translation Namespaces

```tsx
const t = useTranslations('legacy.writeReviewModal');
const tReview = useTranslations('legacy.review');

return (
  <div>
    <label>{t('uploadReceipt')}</label>
    <img alt={tReview('receipt')} />
  </div>
);
```

---

## Migration Notes

### For Developers

1. **No breaking changes** - Existing functionality remains intact
2. **Translation keys** - All new keys are under the `legacy` namespace to avoid conflicts
3. **Default locale** - Users visiting the root URL will now see Korean content instead of English

### Adding New Translations

When adding new hardcoded text:

1. Add the key to all four translation files (`ko.json`, `en.json`, `es.json`, `ja.json`)
2. Use `useTranslations` hook in client components
3. For server components, use `getTranslations` from `next-intl/server`

### Testing

After making translation changes, verify:

1. All four locales display correctly
2. Language switcher works properly
3. No missing translation keys (check console for warnings)

---

## Commit Information

- **Commit hash**: `50dfc935`
- **Branch**: `develop`
- **Files changed**: 41
- **Insertions**: 2085+
- **Message**: Refactor hardcoded Japanese text to use i18n translation system
