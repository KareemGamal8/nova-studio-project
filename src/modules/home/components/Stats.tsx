"use client";

import { BookOpen, Briefcase, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const statsData = [
  {
    id: 1,
    label: "طالب مسجل",
    value: 15000,
    icon: Users,
    suffix: "+",
  },
  {
    id: 2,
    label: "دورة تعليمية",
    value: 75,
    icon: BookOpen,
    suffix: "+",
  },
  {
    id: 3,
    label: "مشروع تطبيقي",
    value: 1200,
    icon: Briefcase,
    suffix: "+",
  },
];

function AnimatedCounter({ value, duration = 2000 }: { value: number, duration?: number }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // easeOutExpo for smooth deceleration
      const easeProgress = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);

      const currentCount = Math.floor(easeProgress * value);

      if (countRef.current !== currentCount) {
        setCount(currentCount);
        countRef.current = currentCount;
      }

      if (percentage < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration, isVisible]);

  return <span ref={elementRef}>{count.toLocaleString("en-US")}</span>;
}

export function Stats() {
  return (
    <section className="border-y border-border bg-secondary/30 py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {statsData.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="group flex flex-col items-center justify-center space-y-4 rounded-3xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="flex items-center justify-center gap-1 text-4xl font-extrabold text-foreground md:text-5xl" dir="ltr">
                    <span className="text-primary">{stat.suffix}</span>
                    <AnimatedCounter value={stat.value} />
                  </h3>
                  <p className="text-lg font-bold text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
