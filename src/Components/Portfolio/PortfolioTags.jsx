/** @format */

import {
  Code1,
  Hierarchy,
  Global,
  Cloud,
  Brush2,
  Shop,
  Html5,
  JavaScript,
} from "iconsax-reactjs";

const iconMap = {
  WordPress: Global,
  PHP: Code1,
  MySQL: Hierarchy,
  "REST API": Cloud,
  JavaScript,
  HTML5: Html5,
  CSS3: Brush2,
  WooCommerce: Shop,
};

function PortfolioTags({ technologies = [], className = "" }) {
  if (!Array.isArray(technologies) || technologies.length === 0) {
    return null;
  }

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {technologies.map((tech) => {
        const Icon = iconMap[tech] || Code1;

        return (
          <div
            key={tech}
            className="
              badge
              badge-md
              rounded-full
              gap-1
              bg-base-200
              pb-4 pt-5
              transition-all
              border-transparent
              duration-300
              hover:border-primary
              hover:bg-primary/60
              hover:text-primary-content
            "
          >
            <Icon variant="Linear" size={16} />
            <span>{tech}</span>
          </div>
        );
      })}
    </div>
  );
}

export default PortfolioTags;
