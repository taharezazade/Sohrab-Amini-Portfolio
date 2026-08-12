/** @format */

import {
  Setting2,
  Profile2User,
  Gallery,
  Briefcase,
  Call,
  Setting,
} from "iconsax-reactjs";

const cards = [
  {
    title: "Hero Section",
    description: "Manage hero information",
    icon: Setting2,
    path: "/admin/hero",
  },

  {
    title: "About Section",
    description: "Manage about information",
    icon: Profile2User,
    path: "/admin/about",
  },

  {
    title: "Services",
    description: "Manage services",
    icon: Briefcase,
    path: "/admin/services",
  },

  {
    title: "Portfolio",
    description: "Manage portfolio projects",
    icon: Gallery,
    path: "/admin/portfolio",
  },

  {
    title: "Contact",
    description: "Manage contact information",
    icon: Call,
    path: "/admin/contact",
  },

  {
    title: "Settings",
    description: "Manage website settings",
    icon: Setting,
    path: "/admin/settings",
  },
];

function Dashboard() {
  return (
    <section className='p-6'>
      {/* =========================================================
          Header
      ========================================================= */}

      <div>
        <h1 className='text-2xl font-bold'>Dashboard</h1>

        <p className='mt-2 text-sm text-base-content/60'>
          Manage your portfolio website and its content.
        </p>
      </div>

      {/* =========================================================
          Management Cards
      ========================================================= */}

      <div
        className='
          mt-6
          grid
          grid-cols-1
          gap-5
          md:grid-cols-2
          xl:grid-cols-3
        '>
        {cards.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className='
                group
                rounded-xl
                border
                border-base-300
                bg-base-100
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary/30
                hover:shadow-lg
              '>
              {/* Icon */}

              <div
                className='
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-primary/10
                  text-primary
                  transition-all
                  duration-300
                  group-hover:bg-primary
                  group-hover:text-primary-content
                '>
                <Icon size={26} variant='Bold' />
              </div>

              {/* Content */}

              <h2 className='mt-4 font-bold'>{item.title}</h2>

              <p
                className='
                  mt-2
                  text-sm
                  leading-6
                  text-base-content/60
                '>
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Dashboard;
