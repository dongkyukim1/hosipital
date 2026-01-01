import { MetadataRoute } from "next";

/**
 * 동적 robots.txt 생성
 * Next.js가 자동으로 /robots.txt 엔드포인트 생성
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://smrehab.kr";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/private/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

