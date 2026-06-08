import { URLS } from "@/src/shared/urls";
import { ArrowLeft, Code2, Rocket, Sparkles, Terminal } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <main className="flex min-h-[calc(100vh-5rem)] flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pb-32 pt-20 lg:pb-40 lg:pt-32">
        {/* Decorative Gradients */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute right-[-10%] top-[-10%] h-150 w-150 rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-[-20%] left-[-10%] h-125 w-125 rounded-full bg-primary/10 blur-[100px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-8">
            
            {/* Text Content */}
            <div className="flex flex-col items-center space-y-8 text-center lg:items-start lg:text-start">
              <div className="inline-flex animate-pulse items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-bold text-primary shadow-sm">
                <Sparkles className="size-4" />
                <span>أهلاً بك في منصة المستقبل</span>
              </div>
              
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                تعلم البرمجة بذكاء مع
                <span className="mt-2 block bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  CodeKody
                </span>
              </h1>
              
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
                نقدم لك أفضل الدورات التعليمية التفاعلية لبناء مهاراتك البرمجية من الصفر وحتى الاحتراف. ابدأ رحلتك اليوم وكن جزءاً من مجتمع المطورين.
              </p>
              
              <div className="flex w-full flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <Link
                  href={URLS.courses}
                  className="inline-flex h-12 sm:h-14 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-base font-bold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  ابدأ التعلم الآن
                  <ArrowLeft className="size-5" />
                </Link>
                <Link
                  href={URLS.packages}
                  className="inline-flex h-12 sm:h-14 items-center justify-center gap-2 rounded-xl border-2 border-border bg-transparent px-8 text-base font-bold text-foreground transition-all hover:border-primary/50 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  استكشف الباقات
                </Link>
              </div>
              
              <div className="flex items-center gap-4 text-lg font-bold text-muted-foreground">
                <p>انضم إلى +1000 طالب</p>
              </div>
            </div>

            {/* Visual Illustration */}
            <div className="relative mx-auto w-full max-w-125 lg:max-w-none">
              <div className="relative w-full rounded-[2rem] border border-border bg-card p-2 shadow-2xl">
                
                {/* Floating Elements */}
                <div className="absolute right-4 -top-4 sm:-right-4 sm:-top-4 md:-right-6 md:-top-6 z-20 rounded-xl md:rounded-2xl bg-primary p-2.5 md:p-4 shadow-xl transition-transform hover:scale-110 motion-safe:animate-bounce">
                  <Code2 className="size-6 md:size-8 text-primary-foreground" />
                </div>
                <div className="absolute left-4 -bottom-4 sm:-left-4 sm:-bottom-4 md:-left-6 md:-bottom-6 z-20 rounded-xl md:rounded-2xl border border-border bg-secondary p-2.5 md:p-4 shadow-xl transition-transform hover:scale-110 motion-safe:animate-bounce" style={{ animationDelay: "150ms" }}>
                  <Terminal className="size-6 md:size-8 text-primary" />
                </div>
                <div className="absolute -bottom-4 right-12 sm:-bottom-6 sm:right-8 md:-bottom-8 md:right-12 z-20 rounded-full border border-border bg-background p-2 md:p-3 shadow-xl motion-safe:animate-pulse">
                  <Rocket className="size-6 md:size-8 text-destructive" />
                </div>
                
                {/* Fake IDE Editor */}
                <div dir="ltr" className="relative min-h-100 w-full flex-col overflow-hidden rounded-[1.5rem] bg-secondary/50">
                  {/* IDE Header */}
                  <div className="flex items-center gap-2 border-b border-border bg-secondary/80 px-4 py-3 backdrop-blur-sm">
                    <div className="size-3 rounded-full bg-destructive/80" />
                    <div className="size-3 rounded-full bg-[#EAB308]/80" />
                    <div className="size-3 rounded-full bg-[#22C55E]/80" />
                    <div className="ms-4 font-mono text-xs font-medium text-muted-foreground">main.ts</div>
                  </div>
                  
                  {/* IDE Content */}
                  <div className="flex-1 p-4 sm:p-6 font-mono text-sm leading-relaxed text-foreground/90 sm:text-base">
                    <div className="flex gap-2 sm:gap-3">
                      <span className="text-primary">const</span> 
                      <span>platform</span> 
                      <span>=</span> 
                      <span className="text-[#22C55E]">"CodeKody"</span>
                      <span>;</span>
                    </div>
                    
                    <div className="mt-4 flex gap-2 sm:gap-3">
                      <span className="text-primary">function</span> 
                      <span className="text-[#3B82F6]">startLearning</span>
                      <span>() {"{"}</span>
                    </div>
                    
                    <div className="mt-2 flex gap-2 sm:gap-3 ps-4 sm:ps-6">
                      <span className="text-primary">return</span> 
                      <span>{"{"}</span>
                    </div>
                    
                    <div className="mt-2 flex gap-2 sm:gap-3 ps-8 sm:ps-12">
                      <span>success:</span> 
                      <span className="text-primary">true</span>
                      <span>,</span>
                    </div>
                    
                    <div className="mt-2 flex gap-2 sm:gap-3 ps-8 sm:ps-12">
                      <span>skills:</span> 
                      <span>[</span>
                      <span className="text-[#22C55E]">"React"</span>
                      <span>,</span> 
                      <span className="text-[#22C55E]">"Next.js"</span>
                      <span>,</span> 
                      <span className="text-[#22C55E]">"TS"</span>
                      <span>]</span>
                    </div>
                    
                    <div className="mt-2 flex gap-2 sm:gap-3 ps-4 sm:ps-6">
                      <span>{"}"}</span>
                      <span>;</span>
                    </div>
                    
                    <div className="mt-2 flex gap-2 sm:gap-3">
                      <span>{"}"}</span>
                    </div>
                    
                    <div className="mt-6 flex gap-3 text-muted-foreground motion-safe:animate-pulse">
                      <span>// جاري تحميل المستقبل...</span>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
