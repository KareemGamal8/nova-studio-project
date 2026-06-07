import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  // قم بتغيير هذا الرابط إلى رابط الدومين الفعلي الخاص بك
  const baseUrl = 'https://codekody.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
