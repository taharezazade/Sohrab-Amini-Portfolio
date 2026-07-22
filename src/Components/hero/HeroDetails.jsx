import { motion } from "framer-motion";
import { ShieldSecurity, Flash, Code1, ArrowLeft2 } from "iconsax-reactjs";

import { containerVariants, fadeLeft, badgeVariant } from "./hero.animations";

const services = [
  {
    id: 1,
    title: "امنیت وردپرس",
    description: "افزایش امنیت، رفع آسیب‌پذیری‌ها و محافظت در برابر حملات.",
    icon: ShieldSecurity,
  },
  {
    id: 2,
    title: "بهینه‌سازی سرعت",
    description: "افزایش سرعت بارگذاری، Core Web Vitals و تجربه کاربری بهتر.",
    icon: Flash,
  },
  {
    id: 3,
    title: "توسعه اختصاصی",
    description: "طراحی قالب، افزونه و توسعه Backend با PHP و MySQL.",
    icon: Code1,
  },
];

const techs = ["PHP", "MySQL", "WordPress", "JavaScript", "REST API", "Git"];

function HeroDetails() {
  return (
    <motion.aside
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-2"
    >
      {/* Header */}
      <motion.div variants={fadeLeft}>
        <span className="text-primary font-semibold">تخصص‌ها</span>

        <h3 className="mt-2 text-3xl font-black">خدمات حرفه‌ای</h3>

        <p className="mt-3 text-base-content/70 leading-8">
          طراحی، توسعه و بهینه‌سازی وب‌سایت‌های وردپرسی با تمرکز بر کیفیت، امنیت
          و عملکرد.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div variants={containerVariants} className="space-y-2">
        {services.map(({ id, title, description, icon: Icon }) => (
          <motion.div
            key={id}
            variants={badgeVariant}
            // whileHover={{
            //   y: -6,
            //   scale: 1.02,
            // }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 18,
            }}
            className="
              group
              rounded-3xl
              border
              border-base-300
              bg-base-200/40
              backdrop-blur-xl
              p-2
              cursor-default
            "
          >
            <div className="flex items-start gap-3">
              <div
                className="
                  flex
                  p-1
                  items-center
                  justify-center
                  rounded-2xl
                  bg-primary/10
                  text-primary
                  transition-all
                  duration-300
                  group-hover:bg-primary
                  group-hover:text-primary-content
                "
              >
                <Icon variant="Bulk" size={38} />
              </div>

              <div className="flex-1">
                <h4 className="font-bold text-lg">{title}</h4>

                <p className="mt-1 text-sm leading-7 text-base-content/70">
                  {description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Technologies */}
      <motion.div variants={fadeLeft}>
        <h4 className="font-bold text-lg mb-4">تکنولوژی‌ها</h4>

        <div className="flex flex-wrap gap-2">
          {techs.map((tech) => (
            <motion.span
              key={tech}
              variants={badgeVariant}
              whileHover={{
                scale: 1.08,
              }}
              className="
                badge
                badge-outline
                badge-primary  
                pt-1           
                rounded-full
              "
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.button
        variants={fadeLeft}
        className="
          btn
          btn-primary
          shadow-none
          rounded-full
          font-light
          w-fit
        "
      >
        مشاهده خدمات
        <ArrowLeft2 variant="Outline" size={18} />
      </motion.button>
    </motion.aside>
  );
}

export default HeroDetails;
