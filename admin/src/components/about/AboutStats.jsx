/** @format */

import { Calendar, Location, Briefcase, Image } from "iconsax-reactjs";

const AboutStats = ({ about }) => {
  const stats = [
    {
      label: "سال تولد",
      value: about?.birthYear || "—",
      icon: Calendar,
    },
    {
      label: "محل سکونت",
      value: about?.location || "—",
      icon: Location,
    },
    {
      label: "سابقه کاری",
      value:
        (
          about?.experience !== null &&
          about?.experience !== undefined &&
          about?.experience !== ""
        ) ?
          `${about.experience} سال`
        : "—",
      icon: Briefcase,
    },
    {
      label: "تصویر",
      value: about?.image ? "ثبت شده" : "ثبت نشده",
      icon: Image,
    },
  ];

  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4'>
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className='card border border-base-300 bg-base-100 shadow-sm'>
            <div className='card-body'>
              <div className='flex items-center gap-4'>
                <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary'>
                  <Icon size={24} variant='Bulk' />
                </div>

                <div>
                  <p className='text-xs text-base-content/50'>{item.label}</p>

                  <p className='mt-1 font-bold'>{item.value}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutStats;
