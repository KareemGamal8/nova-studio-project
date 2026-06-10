import { Logo } from "@/src/design-system/components";
import { URLS } from "@/src/shared/urls";
import { IconBrandFacebook, IconBrandWhatsapp, IconBrandYoutube } from "@tabler/icons-react";
import Link from "next/link";

const socialLinks = [
  {
    name: "فيسبوك",
    href: "https://www.facebook.com/moSalem22/",
    icon: (
      <IconBrandFacebook className="size-5" />
    ),
  },
  {
    name: "يوتيوب",
    href: "https://www.youtube.com/@codekody",
    icon: (
      <IconBrandYoutube className="size-5" />
    ),
  },
  {
    name: "واتساب",
    href: "https://wa.me/201063231619",
    icon: (
      <IconBrandWhatsapp className="size-5" />
    ),
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-primary/15 bg-secondary/30 pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-8">
          <div className="flex flex-col items-center md:items-start max-w-sm text-center md:text-start">
            <Link
              href={URLS.home}
              className="flex items-center gap-3 mb-4 rounded-md outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              <Logo />
              <span className="text-xl font-bold text-primary">Code Kody</span>
            </Link>
            <p className="text-muted-foreground mb-6">
              المنصة الأولى لتعليم البرمجة في العالم العربي. نوفر لك أفضل الدورات التدريبية لتبدأ مسيرتك المهنية في مجال التكنولوجيا.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-background text-foreground transition-all hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-8 text-center md:text-start">
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-lg mb-2">روابط سريعة</h3>
              <Link href={URLS.home} className="text-muted-foreground hover:text-primary transition-colors">الرئيسية</Link>
              <Link href={URLS.about} className="text-muted-foreground hover:text-primary transition-colors">من نحن</Link>
              <Link href={URLS.courses} className="text-muted-foreground hover:text-primary transition-colors">الدورات</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-lg mb-2">المساعدة</h3>
              <Link href={URLS.packages} className="text-muted-foreground hover:text-primary transition-colors">الباقات</Link>
              <Link href={URLS.testimonials} className="text-muted-foreground hover:text-primary transition-colors">آراء الطلاب</Link>
              <a href="mailto:support@codekody.com" className="text-muted-foreground hover:text-primary transition-colors">تواصل معنا</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/15 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center">
            جميع الحقوق محفوظة &copy; {currentYear} Code Kody.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">الشروط والأحكام</Link>
            <Link href="#" className="hover:text-primary transition-colors">سياسة الخصوصية</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

