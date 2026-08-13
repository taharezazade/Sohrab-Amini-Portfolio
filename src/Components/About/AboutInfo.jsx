/** @format */

import { Location, Calendar, Briefcase } from "iconsax-reactjs";

const AboutInfo = ({ about }) => {
  if (!about) {
    return null;
  }

  const items = [
    {
      key: "location",
      label: "محل زندگی",
      value: about.location,
      icon: Location,
    },
    {
      key: "birthYear",
      label: "سال تولد",
      value: about.birthYear,
      icon: Calendar,
    },
    {
      key: "experience",
      label: "سابقه فعالیت",
      value:
        about.experience !== null && about.experience !== undefined ?
          `${about.experience} سال`
        : "",
      icon: Briefcase,
    },
  ];

  return (
    <div
      className='

      '>
      <div className='space-y-4'>
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.key}
              className='
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-base-300
                bg-base-200
                p-4
              '>
              <div
                className='
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-primary/10
                  text-primary
                '>
                <Icon size={21} variant='Bulk' />
              </div>

              <div className='min-w-0'>
                <p className='text-md text-base-content/50'>{item.label}</p>

                <p className='mt-1 truncate text-sm font-semibold'>
                  {item.value || "—"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutInfo;
