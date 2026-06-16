"use client";

import { useState } from "react";
import { Check, MessageCircle, Sparkles } from "lucide-react";
import Link from "next/link";

interface PricingDetails {
  pricePerMonth: string;
  originalPricePerMonth: string;
  totalPrice: string;
  whatsappMessage: string;
}

interface Package {
  id: number;
  name: string;
  englishName: string;
  description: string;
  popular: boolean;
  features: string[];
  pricing: {
    "3_months": PricingDetails;
    "5_months": PricingDetails;
  };
}

const packages: Package[] = [
  {
    id: 1,
    name: "باقة التأسيس والتطبيق الذكي",
    englishName: "Smart Coding Path",
    description: "الخيار المثالي لتأسيس برمجيات قوي وتطوير مشاريع حقيقية ومهام عملية تدعم ملفك المهني.",
    popular: false,
    features: [
      "كورسات أونلاين مسجلة بجودة عالية ومتاحة 24/7",
      "تطبيقات وتطوير مشاريع حقيقية لكل كورس",
      "مهام وتحديات برمجية (Tasks) بعد كل محاضرة لترسيخ الفهم",
      "دعم فني ومساعدة لحل المشاكل البرمجية (Errors)",
      "مجتمع CodeCody الخاص للطلاب لمشاركة المعرفة",
      "شهادة إتمام معتمدة بعد إنهاء المسار بنجاح",
    ],
    pricing: {
      "3_months": {
        pricePerMonth: "500",
        originalPricePerMonth: "1000",
        totalPrice: "1500",
        whatsappMessage: "أهلاً، أريد الاشتراك في (باقة التأسيس والتطبيق الذكي) لمدة 3 أشهر بسعر 500 ج.م/شهرياً (الإجمالي 1500 ج.م بدلاً من 3000 ج.م) وأريد تفاصيل خطة الدفع وبدء الدراسة.",
      },
      "5_months": {
        pricePerMonth: "300",
        originalPricePerMonth: "600",
        totalPrice: "1500",
        whatsappMessage: "أهلاً، أريد الاشتراك في (باقة التأسيس والتطبيق الذكي) لمدة 5 أشهر بسعر 300 ج.م/شهرياً (الإجمالي 1500 ج.م بدلاً من 3000 ج.م) وأريد تفاصيل خطة الدفع وبدء الدراسة.",
      },
    },
  },
  {
    id: 2,
    name: "باقة الاحتراف والتوجيه الشخصي",
    englishName: "Pro Mentor Path",
    description: "باقة النخبة (سوبر) التي تمنحك متابعة شخصية 1-on-1 وتقييمات مستمرة لكودك وتأهيل كامل لسوق العمل.",
    popular: true,
    features: [
      "جميع مميزات باقة التأسيس والتطبيق الذكي",
      "متابعة شخصية مستمرة 1-on-1 مع مهندس برمجيات محترف لتوجيهك",
      "تقييمات دورية مخصصة لمستوى الطالب وتحديد نقاط القوة والضعف",
      "جلسات مراجعة كود فردية (Code Review) لضمان كتابة كود احترافي",
      "جلسات استشارية للتحضير لسوق العمل وبناء السيرة الذاتية وLinkedIn",
      "أولوية قصوى للدعم والرد الفوري على الاستفسارات وحل المشاكل المعقدة",
    ],
    pricing: {
      "3_months": {
        pricePerMonth: "600",
        originalPricePerMonth: "1200",
        totalPrice: "1800",
        whatsappMessage: "أهلاً، أريد الاشتراك في (باقة الاحتراف والتوجيه الشخصي - السوبر) لمدة 3 أشهر بسعر 600 ج.م/شهرياً (الإجمالي 1800 ج.م بدلاً من 3600 ج.م) وأريد تفاصيل خطة الدفع وبدء الدراسة.",
      },
      "5_months": {
        pricePerMonth: "400",
        originalPricePerMonth: "800",
        totalPrice: "2000",
        whatsappMessage: "أهلاً، أريد الاشتراك في (باقة الاحتراف والتوجيه الشخصي - السوبر) لمدة 5 أشهر بسعر 400 ج.م/شهرياً (الإجمالي 2000 ج.م بدلاً من 4000 ج.م) وأريد تفاصيل خطة الدفع وبدء الدراسة.",
      },
    },
  },
];

export function Packages() {
  const WHATSAPP_NUMBER = "201063231619";
  const [duration, setDuration] = useState<"3_months" | "5_months">("5_months");

  return (
    <section id="packages" className="bg-background py-20 lg:py-32 relative overflow-hidden font-cairo">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[var(--grad-purble-dark)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-12 flex flex-col items-center space-y-4 text-center">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
            الباقات والأسعار
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            استثمر في <span className="text-primary dark:bg-linear-to-r dark:from-[var(--grad-purble-dark)] dark:to-[var(--grad-purble-light)] dark:bg-clip-text dark:text-transparent">مستقبلك المهني</span>
          </h2>
          <p className="max-w-[42rem] text-lg leading-relaxed text-muted-foreground sm:text-xl">
            اختر الباقة التي تناسب أهدافك وميزانيتك. جميع باقاتنا مصممة لتمنحك أفضل قيمة تعليمية وتأهيلية لسوق العمل.
          </p>
        </div>

        {/* Dynamic Switcher Toggle */}
        <div className="mb-16 flex flex-col items-center gap-3">
          <div className="relative flex rounded-full bg-secondary p-1 dark:bg-[#130a33]/60 border border-border/40">
            <button
              type="button"
              onClick={() => setDuration("5_months")}
              className={`relative z-10 rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-300 cursor-pointer ${
                duration === "5_months"
                  ? "text-white bg-primary dark:bg-linear-to-r dark:from-[var(--grad-purble-dark)] dark:to-[var(--grad-purble-light)] shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              باقة الـ ٥ أشهر
            </button>
            <button
              type="button"
              onClick={() => setDuration("3_months")}
              className={`relative z-10 rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-300 cursor-pointer ${
                duration === "3_months"
                  ? "text-white bg-primary dark:bg-linear-to-r dark:from-[var(--grad-purble-dark)] dark:to-[var(--grad-purble-light)] shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              باقة الـ ٣ أشهر
            </button>
          </div>
          <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 animate-pulse">
            🔥 خصم خاص لفترة محدودة 50% على جميع الاشتراكات
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {packages.map((pkg) => {
            const activePricing = pkg.pricing[duration];
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(activePricing.whatsappMessage)}`;
            
            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col overflow-hidden rounded-[2.5rem] border transition-all duration-300 hover:-translate-y-2 p-8 sm:p-10 ${
                  pkg.popular
                    ? "border-primary bg-card dark:bg-[#1a1235]/65 dark:border-[var(--grad-purble-dark)]/50 dark:hover:border-[var(--grad-purble-light)]/60 shadow-2xl shadow-primary/10 dark:shadow-[var(--grad-purble-dark)]/15 dark:shadow-[0_0_50px_-12px_rgba(0,0,0,0.4)]"
                    : "border-border bg-card dark:bg-[#0e0722]/50 dark:border-border/30 dark:hover:border-primary/20 shadow-lg"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute right-0 top-0 rounded-bl-[2rem] bg-primary dark:bg-linear-to-r dark:from-[var(--grad-purble-dark)] dark:to-[var(--grad-purble-light)] px-6 py-2 text-sm font-bold text-primary-foreground flex items-center gap-1.5">
                    <Sparkles className="size-4 animate-pulse" />
                    الباقة السوبر / الموصى بها
                  </div>
                )}
                
                <div className={`mb-8 ${pkg.popular ? "mt-4" : ""}`}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-foreground">{pkg.name}</h3>
                  </div>
                  <span className="text-xs font-semibold text-primary dark:text-[var(--grad-purble-light)] uppercase tracking-wider block mt-1">
                    {pkg.englishName}
                  </span>
                  <p className="mt-4 leading-relaxed text-muted-foreground text-sm">{pkg.description}</p>
                </div>
                
                <div className="mb-2 flex items-baseline gap-1.5">
                  <span className="text-5xl font-extrabold tracking-tight text-foreground">{activePricing.pricePerMonth}</span>
                  <span className="text-xl font-bold text-muted-foreground">ج.م</span>
                  <span className="text-muted-foreground text-sm">/ شهرياً</span>
                </div>

                <div className="mb-8 flex flex-col gap-1.5">
                  <span className="text-sm text-muted-foreground">
                    بدلاً من <span className="line-through font-semibold text-foreground/70">{activePricing.originalPricePerMonth} ج.م</span>
                  </span>
                  <span className="inline-flex self-start rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    وفرت {parseInt(activePricing.originalPricePerMonth) - parseInt(activePricing.pricePerMonth)} ج.م شهرياً
                  </span>
                  <span className="text-xs font-medium text-foreground/80 mt-2 bg-secondary/50 dark:bg-white/5 rounded-lg px-3 py-1.5 self-start">
                    إجمالي الدورة كاملة: <span className="font-bold text-primary dark:text-[var(--grad-purble-light)]">{activePricing.totalPrice} ج.م</span>
                  </span>
                </div>
                
                <div className="mb-10 flex-1 space-y-4 font-sans">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-[var(--grad-purble-dark)]/20 dark:text-[var(--grad-purble-light)] mt-0.5">
                        <Check className="size-4" />
                      </div>
                      <span className="text-muted-foreground text-sm leading-relaxed font-cairo">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex h-14 items-center justify-center gap-2 rounded-2xl px-8 text-base font-bold transition-all cursor-pointer ${
                    pkg.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 dark:bg-linear-to-r dark:from-[var(--grad-purble-dark)] dark:to-[var(--grad-purble-light)] dark:hover:from-[var(--grad-purble-dark)]/90 dark:hover:to-[var(--grad-purble-light)]/90 dark:shadow-lg dark:shadow-[var(--grad-purble-dark)]/20"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:border dark:border-white/10"
                  }`}
                >
                  <MessageCircle className="size-5" />
                  الاشتراك والاستفسار عبر واتساب
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
