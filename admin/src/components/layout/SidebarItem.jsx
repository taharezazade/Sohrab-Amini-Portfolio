/** @format */

import { NavLink } from "react-router-dom";

const SidebarItem = ({ to, title, icon: Icon, end = false, onClick }) => {
  return (
    <li>
      <NavLink
        to={to}
        end={end}
        onClick={onClick}
        className={({ isActive }) =>
          `
          flex
          items-center
          gap-1.5
          rounded-xl
          px-2.5
          py-2
          transition-all
          duration-200

          ${
            isActive ?
              "bg-primary text-primary-content shadow-md"
            : "hover:text-primary hover:bg-primary/10"
          }
        `
        }>
        {Icon && <Icon size={20} variant='Bulk' />}

        <span className='font-medium'>{title}</span>
      </NavLink>
    </li>
  );
};

export default SidebarItem;
