import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://moonlorddev.vercel.app'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },

    host: baseUrl,
    sitemap: baseUrl + '/sitemap.xml',
  }
}
