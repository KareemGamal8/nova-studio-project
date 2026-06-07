import {
  Code2,
  Database,
  Megaphone,
  Palette,
  ShieldCheck,
  Smartphone
} from "lucide-react";

const courses = [
  {
    id: 1,
    title: "برمجة وتطوير الويب",
    description: "تعلم بناء مواقع ويب تفاعلية ومتجاوبة باستخدام أحدث التقنيات مثل React و Next.js و Tailwind CSS.",
    icon: Code2,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    id: 2,
    title: "تصميم واجهات المستخدم (UI/UX)",
    description: "احترف تصميم واجهات وتجارب مستخدم استثنائية وجذابة باستخدام أدوات التصميم الحديثة مثل Figma.",
    icon: Palette,
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
  {
    id: 3,
    title: "تطوير تطبيقات الهواتف",
    description: "ابنِ تطبيقات أصلية تعمل على أنظمة iOS و Android بكفاءة عالية باستخدام Flutter أو React Native.",
    icon: Smartphone,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    id: 4,
    title: "علم البيانات والذكاء الاصطناعي",
    description: "اكتشف عالم البيانات وتعلم كيفية بناء نماذج ذكاء اصطناعي تتنبأ بالمستقبل باستخدام Python.",
    icon: Database,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    id: 5,
    title: "الأمن السيبراني",
    description: "تعلم أحدث أساليب حماية الأنظمة والشبكات واكتشاف الثغرات لضمان أمان البيانات.",
    icon: ShieldCheck,
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
  {
    id: 6,
    title: "التسويق الرقمي",
    description: "استراتيجيات فعالة لإدارة الحملات الإعلانية وزيادة المبيعات والوصول للجمهور المستهدف.",
    icon: Megaphone,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
];

export function Courses() {
  return (
    <section id="courses" className="bg-secondary/30 py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16 flex flex-col items-center space-y-4 text-center">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
            مجالات التعلم
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            تصفح <span className="text-primary">دوراتنا</span> المتاحة
          </h2>
          <p className="max-w-[42rem] text-lg leading-relaxed text-muted-foreground sm:text-xl">
            اختر المسار الذي يناسب طموحك وابدأ في بناء مهاراتك من خلال مجموعة متنوعة من الدورات التدريبية.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <div
                key={course.id}
                className="group flex flex-col justify-between overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div>
                  <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${course.bg} ${course.color}`}>
                    <Icon className="size-8" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-foreground">
                    {course.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {course.description}
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
