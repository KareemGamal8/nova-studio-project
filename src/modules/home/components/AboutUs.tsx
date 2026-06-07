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
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            لماذا تختار <span className="text-primary">CodeKody</span>؟
          </h2>
          <p className="max-w-[42rem] text-lg leading-relaxed text-muted-foreground sm:text-xl">
            نحن لسنا مجرد منصة تعليمية، بل شريكك في رحلة النجاح. نقدم لك كل ما تحتاجه للبدء في عالم البرمجة وبناء مسيرة مهنية ناجحة.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl"
              >
                {/* Decorative background element on hover */}
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-[2.5]" />
                
                <div className="relative z-10 flex flex-col space-y-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
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
