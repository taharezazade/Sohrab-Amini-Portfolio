/** @format */

import { TickCircle, Clock } from "iconsax-reactjs";

const AboutStatusCard = ({ about }) => {
  const exists = Boolean(about?.id);

  return (
    <div className='card border border-base-300 bg-base-100 shadow-sm'>
      <div className='card-body'>
        <div className='flex items-center gap-3'>
          <div
            className={`
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              ${
                exists ?
                  "bg-success/10 text-success"
                : "bg-warning/10 text-warning"
              }
            `}>
            {exists ?
              <TickCircle size={23} variant='Bulk' />
            : <Clock size={23} variant='Bulk' />}
          </div>

          <div>
            <h3 className='font-bold'>وضعیت About</h3>

            <p className='text-sm text-base-content/60'>
              {exists ?
                "اطلاعات در سایت فعال است."
              : "اطلاعات هنوز ایجاد نشده است."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStatusCard;
