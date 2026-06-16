import {
  Award,
  CodeSquare,
  Compass,
  HelpCircle,
  MonitorPlay,
  UsersRound
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "تعلم تفاعلي",
    description: "دروس تفاعلية ومسارات تعليمية مصممة خصيصاً لتسهيل فهم المفاهيم البرمجية المعقدة وتطبيقها عملياً.",
    icon: MonitorPlay,
  },
  {
    id: 2,
    title: "توجيه ودعم مستمر",
    description: "احصل على دعم مباشر من خبراء وموجهين في المجال لمساعدتك في التغلب على التحديات البرمجية.",
    icon: HelpCircle,
  },
  {
    id: 3,
    title: "مشاريع تطبيقية",
    description: "قم ببناء مشاريع حقيقية تحاكي متطلبات سوق العمل لتعزيز معرض أعمالك (Portfolio).",
    icon: CodeSquare,
  },
  {
    id: 4,
    title: "شهادات معتمدة",
    description: "احصل على شهادات إتمام معتمدة بعد كل دورة تثبت كفاءتك وتزيد من فرص توظيفك.",
    icon: Award,
  },
  {
    id: 5,
    title: "مجتمع مبرمجين",
    description: "انضم إلى مجتمع نشط من المتعلمين والمحترفين لتبادل الخبرات وبناء علاقات مهنية قوية.",
    icon: UsersRound,
  },
  {
    id: 6,
    title: "إرشاد مهني",
    description: "نقدم لك نصائح وإرشادات حول كيفية التحضير للمقابلات الشخصية وبناء سيرة ذاتية احترافية.",
    icon: Compass,
  },
];

export function AboutUs() {
  return (
    <section id="about" className="relative overflow-hidden bg-background py-20 lg:py-32">
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="mb-16 flex flex-col items-center space-y-4 text-center">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
            من نحن
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            لماذا تختار <span className="text-primary">CodeKody</span>؟
          </h2>
          <p className="max-w-[42rem] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-muted-foreground">
            نحن لسنا مجرد منصة تعليمية، بل شريكك في رحلة النجاح. نقدم لك كل ما تحتاجه للبدء في عالم البرمجة وبناء مسيرة مهنية ناجحة.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-[2rem] border border-border bg-card dark:bg-[#0c0722]/50 dark:border-border/30 dark:hover:border-primary/20 p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl dark:hover:shadow-[var(--grad-purble-dark)]/10"
              >
                {/* Decorative background element on hover */}
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 dark:bg-[var(--grad-purble-dark)]/5 transition-transform duration-500 group-hover:scale-[2.5]" />
                
                <div className="relative z-10 flex flex-col space-y-5">
                  <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-primary/10 text-primary dark:bg-[var(--grad-purble-dark)]/10 dark:text-[var(--grad-purble-light)] transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground dark:group-hover:bg-linear-to-r dark:group-hover:from-[var(--grad-purble-dark)] dark:group-hover:to-[var(--grad-purble-light)]">
                    <Icon className="size-6 sm:size-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {service.description}
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
