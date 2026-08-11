/** @format */

import { Setting2, Profile2User, Gallery, Briefcase } from "iconsax-reactjs";

const cards = [
  {
    title: "Hero Section",
    description: "Manage hero information",
    icon: Setting2,
  },

  {
    title: "About Section",
    description: "Manage about information",
    icon: Profile2User,
  },

  {
    title: "Services",
    description: "Manage services",
    icon: Briefcase,
  },

  {
    title: "Portfolio",
    description: "Manage portfolio projects",
    icon: Gallery,
  },
];

function Dashboard() {
  return (
    <section className='p-6'>
      <h1 className='text-2xl font-bold'>Dashboard</h1>

      <div className='mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
        {cards.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className='
                rounded-xl
                border
                border-base-300
                bg-base-100
                p-5
              '>
              <Icon size={28} variant='Bold' />

              <h2 className='mt-4 font-bold'>{item.title}</h2>

              <p className='mt-2 text-sm opacity-70'>{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Dashboard;
