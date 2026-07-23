import { motion } from "framer-motion";
import { ShieldSecurity, Flash, Code1 } from "iconsax-reactjs";

const cards = [
  {
    id: 1,
    icon: ShieldSecurity,
    title: "امنیت",
    value: "بسیار بالا",
    top: "12%",
    right: "-30px",
  },
  {
    id: 2,
    icon: Flash,
    title: "عملکرد",
    value: "98%",
    bottom: "18%",
    left: "-40px",
  },
  {
    id: 3,
    icon: Code1,
    title: "بک‌اند",
    value: "PHP",
    top: "62%",
    right: "-60px",
  },
];

function HeroFloatingCards() {
  return (
    <>
      {cards.map(
        ({ id, icon: Icon, title, value, top, left, right }) => (
          <motion.div
            key={id}
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -8, 0],
            }}
            transition={{
              duration: 0.6,
              delay: id * 0.12,
              type: "spring",
              stiffness: 220,
              damping: 20,
            }}
            style={{
              top,
              left,
              right,
            }}
            className="
              absolute
              z-30
              hidden
              lg:flex
              items-center
              gap-3
              rounded-2xl
              border
              border-base-300
              bg-base-100/50
              backdrop-blur-xl
              py-2
              px-3
              shadow-xl
              xl:flex
            "
          >
            <div
              className="
                p-2
                rounded-xl
                bg-primary/10
                flex
                items-center
                justify-center
                text-primary
              "
            >
              <Icon variant="Bulk" size={22} />
            </div>

            <div>
              <p className="text-md text-base-content/60">{title}</p>

              <h4 className="font-bold">{value}</h4>
            </div>
          </motion.div>
        ),
      )}
    </>
  );
}

export default HeroFloatingCards;
