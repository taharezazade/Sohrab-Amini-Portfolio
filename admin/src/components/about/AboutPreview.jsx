/** @format */

import {
  User,
  Location,
  Calendar,
  Briefcase,
  TickCircle,
} from "iconsax-reactjs";

const AboutPreview = ({ about }) => {
  const hasData = Boolean(about);

  return (
    <div className='card border border-base-300 bg-base-100 shadow-sm'>
      <div className='card-body'>
        {/* Header */}

        <div className='mb-5 flex items-center gap-3'>
          <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary'>
            <User size={22} variant='Bulk' />
          </div>

          <div>
            <h2 className='text-lg font-bold'>پیش‌نمایش</h2>

            <p className='text-sm text-base-content/60'>
              نمایش اطلاعات فعلی About
            </p>
          </div>
        </div>

        {/* Preview */}

        <div className='overflow-hidden rounded-xl border border-base-300 bg-base-200'>
          {/* Image */}

          <div className='flex h-48 items-center justify-center bg-base-300'>
            {about?.image ?
              <img
                src={about.image}
                alt={about.title || "About"}
                className='h-full w-full object-cover'
              />
            : <div className='flex h-24 w-24 items-center justify-center rounded-full border border-base-300 bg-base-100'>
                <User size={42} variant='Bulk' className='text-primary' />
              </div>
            }
          </div>

          {/* Content */}

          <div className='space-y-4 p-5'>
            {/* Status */}

            <div className='flex items-center justify-between'>
              <span
                className={`badge gap-1 ${
                  hasData ? "badge-success" : "badge-error"
                }`}>
                {hasData && <TickCircle size={14} />}

                {hasData ? "اطلاعات موجود" : "بدون اطلاعات"}
              </span>
            </div>

            {/* Title */}

            <div>
              <h3 className='text-xl font-bold'>
                {about?.title || "عنوان About"}
              </h3>
            </div>

            {/* Description */}

            <p className='text-sm leading-7 text-base-content/70'>
              {about?.description || "هنوز توضیحی برای بخش About ثبت نشده است."}
            </p>

            {/* Information */}

            <div className='grid grid-cols-1 gap-2 text-sm'>
              {about?.location && (
                <div className='flex items-center gap-2 text-base-content/70'>
                  <Location size={16} variant='Bulk' className='text-primary' />

                  <span>{about.location}</span>
                </div>
              )}

              {about?.birthYear && (
                <div className='flex items-center gap-2 text-base-content/70'>
                  <Calendar size={16} variant='Bulk' className='text-primary' />

                  <span>متولد {about.birthYear}</span>
                </div>
              )}

              {about?.experience !== null &&
                about?.experience !== undefined &&
                about?.experience !== "" && (
                  <div className='flex items-center gap-2 text-base-content/70'>
                    <Briefcase
                      size={16}
                      variant='Bulk'
                      className='text-primary'
                    />

                    <span>{about.experience} سال تجربه</span>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPreview;
