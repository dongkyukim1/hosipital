import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_DATA } from "@/constants/site-data";

// 사이트 URL (프로덕션 환경에서 실제 도메인으로 변경)
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://smrehab.kr";

export const metadata: Metadata = {
  // 기본 메타데이터
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE_DATA.name} | 전문 재활치료`,
    template: `%s | ${SITE_DATA.name}`,
  },
  description: "전문 의료진과 함께하는 1:1 맞춤 재활 프로그램. 도수치료, 운동재활, 통증치료, 체형교정 전문. 서울 강남구 위치.",
  
  // OpenGraph
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: SITE_DATA.name,
    title: `${SITE_DATA.name} | 전문 재활치료`,
    description: "전문 의료진과 함께하는 1:1 맞춤 재활 프로그램. 도수치료, 운동재활, 통증치료, 체형교정 전문.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_DATA.name} - 전문 재활치료 센터`,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: `${SITE_DATA.name} | 전문 재활치료`,
    description: "전문 의료진과 함께하는 1:1 맞춤 재활 프로그램",
    images: ["/twitter-image.jpg"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // 기타
  alternates: {
    canonical: siteUrl,
  },
  
  // 앱 관련
  applicationName: SITE_DATA.name,
  authors: [{ name: SITE_DATA.name }],
  generator: "Next.js",
  
  // 아이콘
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1d1d1f",
};

// JSON-LD 구조화 데이터
const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: SITE_DATA.name,
  description: "전문 재활치료 센터",
  url: siteUrl,
  telephone: SITE_DATA.phone,
  email: SITE_DATA.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_DATA.address,
    addressLocality: "강남구",
    addressRegion: "서울",
    addressCountry: "KR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "18:00",
    },
  ],
  medicalSpecialty: [
    "PhysicalTherapy",
    "Rehabilitation",
    "SportsMedicine",
  ],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* JSON-LD 구조화 데이터 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="antialiased font-sans">
        {/* Skip Navigation Link - 접근성 */}
        <a
          href="#main-content"
          className="skip-link"
        >
          메인 콘텐츠로 이동
        </a>
        {children}
      </body>
    </html>
  );
}
