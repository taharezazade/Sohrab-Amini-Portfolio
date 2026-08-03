/** @format */

import { motion } from "framer-motion";
import { TickCircle, CloseCircle } from "iconsax-reactjs";

import TableAction from "../tables/TableActions";

const ServicesTable = ({
  services = [],
  onView,
  onEdit,
  onDelete,
  onToggleStatus,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className='
        card
        bg-base-100
        border-base-300
        overflow-hidden
        border
        shadow-sm
      '>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th>سرویس</th>

              <th>وضعیت</th>

              <th>ترتیب</th>

              <th>تاریخ ایجاد</th>

              <th className='text-center'>عملیات</th>
            </tr>
          </thead>

          <tbody>
            {services.map((service) => (
              <tr
                key={service.id}

                className='
                    hover:bg-base-200
                    transition
                  '>
                {/* Service */}

                <td>
                  <div
                    className='
                        flex
                        items-center
                        gap-3
                      '>
                    <div
                      className='
                          bg-primary/10
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          overflow-hidden
                          rounded-xl
                        '>
                      {service.icon ?
                        <img
                          src={service.icon}

                          alt={service.title}

                          className='
                              h-full
                              w-full
                              object-cover
                            '
                        />
                      : <span
                          className='
                              text-primary
                              text-lg
                              font-black
                            '>
                          {service.title?.charAt(0)}
                        </span>
                      }
                    </div>

                    <div>
                      <p className='font-bold'>{service.title}</p>

                      <p
                        className='
                            text-base-content/50
                            max-w-xs
                            truncate
                            text-xs
                          '>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Status */}

                <td>
                  <button
                    onClick={() => onToggleStatus?.(service)}

                    className={`
                        badge
                        cursor-pointer
                        gap-1

                        ${service.isActive ? "badge-success" : "badge-error"}
                      `}>
                    {service.isActive ?
                      <>
                        <TickCircle size={14} />
                        فعال
                      </>
                    : <>
                        <CloseCircle size={14} />
                        غیرفعال
                      </>
                    }
                  </button>
                </td>

                {/* Order */}

                <td>
                  <span
                    className='
                        badge
                        badge-ghost
                      '>
                    {service.order}
                  </span>
                </td>

                {/* Date */}

                <td>
                  <span
                    className='
                        text-sm
                        opacity-70
                      '>
                    {service.createdAt ?
                      new Date(service.createdAt).toLocaleDateString("fa-IR")
                    : "-"}
                  </span>
                </td>

                {/* Actions */}

                <td>
                  <TableAction
                    item={service}
                    onView={onView}
                    onEdit={onEdit}
                    onDelete={onDelete}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ServicesTable;
