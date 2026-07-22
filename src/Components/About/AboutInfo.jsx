import { motion } from "framer-motion";
import { Location, Calendar, Teacher, Code1, Briefcase } from "iconsax-reactjs";

import { personalInfo } from "./about.data";
import { fadeLeft, cardHover } from "./about.animations";

const icons = [Location, Calendar, Teacher, Code1, Briefcase];

function AboutInfo() {
  return (
    <motion.div
      variants={fadeLeft}
      className="
        grid
        grid-cols-1
        gap-4
        sm:grid-cols-2
      "
    >
      {personalInfo.map((item, index) => {
        const Icon = icons[index];

        return (
          <motion.div
            key={item.title}
            whileHover={cardHover}
            className="
              group
              rounded-2xl
              border
              border-base-300
              bg-base-100/60
              backdrop-blur-xl
              p-2
              transition-all
              duration-300

            "
          >
            <div
              className="flex items-start gap-4 hover:text-white"
            >
              <div
                className="
                  flex
                  p-3
                  items-center
                  justify-center
                  rounded-xl
                  bg-primary/10
                  text-primary
                  transition-all
                  group-hover:scale-110
                "
              >
                <Icon variant="Bulk" size={36} />
              </div>

              <div className="space-y-1">
                <p
                  className="
                    text-sm
                    text-base-content/55
                  "
                >
                  {item.title}
                </p>

                <h3
                  className="
                    text-base
                    font-bold
                    text-base-content
                  "
                >
                  {item.value}
                </h3>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default AboutInfo;
