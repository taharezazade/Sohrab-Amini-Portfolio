import { motion } from "framer-motion";
import { ArrowLeft2, Code1, Flash, ShieldSecurity } from "iconsax-reactjs";

import { containerVariants, fadeUp, badgeVariant } from "./hero.animations";

const badges = [
  {
    id: 1,
    title: "قالب اختصاصی",
    icon: Code1,
  },
  {
    id: 2,
    title: "سرعت بالا",
    icon: Flash,
  },
  {
    id: 3,
    title: "امنیت",
    icon: ShieldSecurity,
  },
];

function HeroContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center lg:items-start text-center lg:text-right gap-2"
    >
      <motion.h1
        variants={fadeUp}
        className="
          text-5xl
          md:text-6xl
          xl:text-7xl
          font-black
          leading-tight
        "
      >
        سهراب امینی
      </motion.h1>

      <motion.h2
        variants={fadeUp}
        className="
          text-xl
          md:text-2xl
          xl:text-3xl
          text-primary
          font-bold
        "
      >
        توسعه‌دهنده حرفه‌ای وردپرس
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="
          max-w-xl
          text-base
          md:text-lg
          leading-9
          text-base-content/70
        "
      >
        طراحی و توسعه وب‌سایت‌های اختصاصی با تمرکز بر{" "}
        <span className="text-primary font-semibold">
          عملکرد، امنیت و تجربه کاربری.
        </span>
        <br />
        از طراحی قالب‌های اختصاصی و توسعه افزونه‌های سفارشی گرفته تا بهینه‌سازی
        سرعت و توسعه Backend با PHP.
      </motion.p>

      <motion.div
        variants={containerVariants}
        className="
          flex
          flex-wrap
          justify-center
          lg:justify-start
          gap-3
        "
      >
        {badges.map(({ id, title, icon: Icon }) => (
          <motion.div
            key={id}
            variants={badgeVariant}
            whileHover={{
              y: -2,
              scale: 1.0,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-base-300
              bg-base-200/60
              backdrop-blur-xl
              px-3
              py-1
              transition-all
            "
          >
            <Icon variant="Bulk" size={28} className="text-primary" />

            <span className="font-medium">{title}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="
          flex
          flex-col
          sm:flex-row
          items-center
          font-normal
          gap-4
          pt-2
        "
      >
        <button className="btn font-light text-lg btn-primary rounded-full px-8 shadow-none">
          شروع همکاری
          <ArrowLeft2 variant="Outline" size={18} />
        </button>

        <button className="btn font-light text-lg btn-ghost rounded-full px-8">
          مشاهده نمونه‌کارها
        </button>
      </motion.div>
    </motion.div>
  );
}

export default HeroContent;
