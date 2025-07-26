// src/components/StructuredData.tsx
export function OrganizationStructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "古窯グループ",
    "legalName": "株式会社旅館古窯",
    "url": "https://koyo-prototype.vercel.app",
    "logo": "https://koyo-prototype.vercel.app/images/logo.png",
    "description": "山形県で旅館・レストラン事業を展開する古窯グループ。日本の宿古窯、おやど森の音など複数の宿泊施設を運営。",
    "foundingDate": "1970", // 推定
    "numberOfEmployees": "103",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "葉山5-20",
      "addressLocality": "上山市",
      "addressRegion": "山形県",
      "postalCode": "999-3145",
      "addressCountry": "JP"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+81-570-00-5454",
      "contactType": "customer service",
      "areaServed": "JP",
      "availableLanguage": "Japanese"
    },
    "sameAs": [
      "https://www.koyoga.com/",
      "https://mori-ne.com/",
      "https://www.dosayusa.jp/",
      "https://www.bankokuya.jp/",
      "https://yamagata-purin.com/"
    ],
    "employee": [
      {
        "@type": "Person",
        "name": "佐藤太一",
        "jobTitle": "代表取締役専務"
      }
    ],
    "location": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "葉山5-20",
        "addressLocality": "上山市",
        "addressRegion": "山形県",
        "postalCode": "999-3145",
        "addressCountry": "JP"
      }
    },
    "brand": [
      {
        "@type": "Brand",
        "name": "日本の宿 古窯"
      },
      {
        "@type": "Brand", 
        "name": "おやど 森の音"
      },
      {
        "@type": "Brand",
        "name": "悠湯の郷 ゆさ"
      },
      {
        "@type": "Brand",
        "name": "あつみ温泉 萬国屋"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  )
}

export function LocalBusinessStructuredData() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "日本の宿 古窯",
    "image": "https://koyo-prototype.vercel.app/images/img_koyo.jpg",
    "url": "https://koyo-prototype.vercel.app",
    "telephone": "+81-570-00-5454",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "葉山5-20",
      "addressLocality": "上山市",
      "addressRegion": "山形県",
      "postalCode": "999-3145",
      "addressCountry": "JP"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "38.1506",
      "longitude": "140.2668"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "¥¥¥"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
    />
  )
}

export function BreadcrumbStructuredData({ items }: { items: Array<{ name: string; url: string }> }) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  )
}