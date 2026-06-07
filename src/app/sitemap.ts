import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  // قم بتغيير هذا الرابط إلى رابط الدومين الفعلي الخاص بك
  const baseUrl = 'https://codekody.vercel.app/';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // يمكنك إضافة صفحات أخرى هنا في المستقبل إذا قمت بإنشاء صفحات جديدة (مثل صفحة المدونة أو دورة مخصصة)
    // {
    //   url: `${baseUrl}/about`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ]
}
