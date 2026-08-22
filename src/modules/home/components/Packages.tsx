"use client";

import { Check, MessageCircle, Sparkles, ThumbsUp } from "lucide-react";
import Link from "next/link";

interface Package {
  id: string;
  name: string;
  badgeText: string;
  pace: string;
  lectures: string;
  monthlyPriceText: string;
  numericPrice: string;
  followup: string;
  popular?: boolean;
  whatsappMessage: string;
}

const packagesData: Package[] = [
  {
    id: "7_months",
    name: "نظام 7 شهور",
    badgeText: "نظام عادي",
    pace: "نظام عادي",
    lectures: "محاضرة واحدة أسبوعيا",
    monthlyPriceText: "الشهر 250 ج",
    numericPrice: "250",
    followup: "يشمل المتابعة الفردية",
    popular: false,
    whatsappMessage:
      "أهلاً، أريد الاشتراك في كورس Front-End (نظام 7 شهور) بسعر 250 EGP/شهرياً. أريد الاستفسار عن التفاصيل وطريقة البدء.",
  },
  {
    id: "5_months",
    name: "نظام 5 شهور",
    badgeText: "نظام متوسط",
    pace: "نظام متوسط",
    lectures: "محاضرتين أسبوعيا",
    monthlyPriceText: "الشهر 400 ج",
    numericPrice: "400",
    followup: "يشمل المتابعة الفردية",
    popular: true,
    whatsappMessage:
      "أهلاً، أريد الاشتراك في كورس Front-End (نظام 5 شهور) بسعر 400 EGP/شهرياً. أريد الاستفسار عن التفاصيل وطريقة البدء.",
  },
  {
    id: "3_months",
    name: "نظام 3 شهور",
    badgeText: "نظام مكثف",
    pace: "نظام مكثف",
    lectures: "3 محاضرات أسبوعيا",
    monthlyPriceText: "الشهر 600 ج",
    numericPrice: "600",
    followup: "يشمل متابعة فردية مكثفة",
    popular: false,
    whatsappMessage:
      "أهلاً، أريد الاشتراك في كورس Front-End (نظام 3 شهور) بسعر 600 EGP/شهرياً. أريد الاستفسار عن التفاصيل وطريقة البدء.",
  },
];

export function Packages() {
  const WHATSAPP_NUMBER = "201273790351";

  const DISPLAY_PHONE = "01273790351";

  return (
    <section id="packages" className="bg-background pb-32  relative overflow-hidden font-cairo">
      {/* Dynamic Background Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Top Header Section */}
        <div className="mb-16 flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary dark:bg-primary/20">
            <Sparkles className="size-4 animate-pulse" />
            أنظمة الكورس
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl  leading-tight">
            وفرنالك <span className="text-primary">3 باقات</span> اختار اللي يناسبك
          </h2>

        </div>

        {/* 3 Packages Cards */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3 lg:gap-8 items-stretch pt-6">
          {packagesData.map((pkg) => {
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              pkg.whatsappMessage
            )}`;

            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col rounded-[2.5rem] transition-all duration-300 hover:-translate-y-2 p-8 sm:p-9 ${pkg.popular
                  ? "bg-[#29255a] text-white dark:bg-[#1e1b43] shadow-2xl shadow-purple-900/40 border-2 border-purple-400/50 md:-translate-y-4 z-20"
                  : "bg-card border border-border/80 dark:border-border/40 text-card-foreground shadow-xl hover:shadow-2xl"
                  }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-5 inset-x-0 mx-auto w-max flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-4 py-1.5 text-xs font-extrabold text-slate-950 shadow-lg">
                    <ThumbsUp className="size-4" />
                    الباقة الأكثر طلباً
                  </div>
                )}

                {/* Package Header */}
                <div className="text-center pb-6 border-b border-current/15 mb-6">
                  <h3
                    className={`text-2xl sm:text-3xl font-black tracking-tight ${pkg.popular ? "text-white" : "text-foreground"
                      }`}
                  >
                    {pkg.name}
                  </h3>
                </div>

                {/* Feature Bullet List */}
                <div className="flex-1 space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${pkg.popular
                        ? "bg-white/20 text-white"
                        : "bg-primary/15 text-primary"
                        }`}
                    >
                      <Check className="size-4 stroke-[3]" />
                    </div>
                    <span className="font-semibold text-base sm:text-lg">{pkg.pace}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${pkg.popular
                        ? "bg-white/20 text-white"
                        : "bg-primary/15 text-primary"
                        }`}
                    >
                      <Check className="size-4 stroke-[3]" />
                    </div>
                    <span className="font-semibold text-base sm:text-lg">{pkg.lectures}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${pkg.popular
                        ? "bg-white/20 text-white"
                        : "bg-primary/15 text-primary"
                        }`}
                    >
                      <Check className="size-4 stroke-[3]" />
                    </div>
                    <span className="font-semibold text-base sm:text-lg">{pkg.monthlyPriceText}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${pkg.popular
                        ? "bg-white/20 text-white"
                        : "bg-primary/15 text-primary"
                        }`}
                    >
                      <Check className="size-4 stroke-[3]" />
                    </div>
                    <span className="font-semibold text-base sm:text-lg">{pkg.followup}</span>
                  </div>
                </div>

                {/* Price Display */}
                <div className="pt-4 border-t border-current/15 mb-6 text-center">
                  <div className="flex items-baseline justify-center gap-1.5">
                    <span className="text-4xl sm:text-5xl font-black tracking-tight">
                      {pkg.numericPrice}
                    </span>
                    <span className="text-lg font-bold opacity-90">EGP</span>
                    <span className="text-sm opacity-75">/month</span>
                  </div>
                </div>

                {/* WhatsApp Action Button */}
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex h-12 items-center justify-center gap-2 rounded-2xl px-6 text-sm sm:text-base font-bold transition-all duration-200 cursor-pointer shadow-md ${pkg.popular
                    ? "bg-white text-[#29255a] hover:bg-slate-100 hover:shadow-lg"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
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

