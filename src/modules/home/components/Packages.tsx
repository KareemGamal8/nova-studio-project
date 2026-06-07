import { Check, MessageCircle } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    id: 1,
    name: "الباقة المكثفة",
    price: "550",
    currency: "ج.م",
    duration: "3 أشهر",
    description: "الخيار الأفضل لمن يرغب في إتقان البرمجة في وقت قصير مع دعم مكثف.",
    features: [
      "الوصول لجميع الدورات المتقدمة",
      "دعم فني وإرشاد أكاديمي 24/7",
      "مراجعة المشاريع والتقييم المباشر",
      "شهادة معتمدة عند إتمام المسار",
    ],
    popular: true,
    whatsappMessage: "أهلاً، أريد الاستفسار عن الباقة المكثفة (550 جنيه لمدة 3 أشهر) وأريد معرفة المزيد من التفاصيل.",
  },
  {
    id: 2,
    name: "الباقة المرنة",
    price: "330",
    currency: "ج.م",
    duration: "5 أشهر",
    description: "مثالية لمن يفضل التعلم بخطوات هادئة مع ميزانية اقتصادية.",
    features: [
      "الوصول لجميع الدورات الأساسية",
      "دعم فني خلال أوقات العمل الرسمية",
      "مجتمع خاص بالطلاب لتبادل الخبرات",
      "شهادة إتمام لكل دورة",
    ],
    popular: false,
    whatsappMessage: "أهلاً، أريد الاستفسار عن الباقة المرنة (330 جنيه لمدة 5 أشهر) وأريد معرفة المزيد من التفاصيل.",
  },
];

export function Packages() {
  const WHATSAPP_NUMBER = "201063231619";

  return (
    <section id="packages" className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16 flex flex-col items-center space-y-4 text-center">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
            الباقات والأسعار
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            استثمر في <span className="text-primary">مستقبلك</span>
          </h2>
          <p className="max-w-[42rem] text-lg leading-relaxed text-muted-foreground sm:text-xl">
            اختر الباقة التي تناسب أهدافك وميزانيتك. جميع باقاتنا مصممة لتمنحك أفضل قيمة تعليمية ممكنة.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {packages.map((pkg) => {
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(pkg.whatsappMessage)}`;
            
            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col overflow-hidden rounded-[2.5rem] border ${
                  pkg.popular ? "border-primary shadow-2xl shadow-primary/10" : "border-border shadow-lg"
                } bg-card p-8 transition-transform duration-300 hover:-translate-y-2 sm:p-10`}
              >
                {pkg.popular && (
                  <div className="absolute right-0 top-0 rounded-bl-[2rem] bg-primary px-6 py-2 text-sm font-bold text-primary-foreground">
                    الأكثر طلباً
                  </div>
                )}
                
                <div className={`mb-8 ${pkg.popular ? "mt-4" : ""}`}>
                  <h3 className="text-2xl font-bold text-foreground">{pkg.name}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{pkg.description}</p>
                </div>
                
                <div className="mb-8 flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold tracking-tight text-foreground">{pkg.price}</span>
                  <span className="text-xl font-bold text-muted-foreground">{pkg.currency}</span>
                  <span className="text-muted-foreground">/ {pkg.duration}</span>
                </div>
                
                <div className="mb-10 flex-1 space-y-4">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="size-4" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex h-14 items-center justify-center gap-2 rounded-2xl px-8 text-base font-bold transition-all ${
                    pkg.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  <MessageCircle className="size-5" />
                  الاشتراك عبر واتساب
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
