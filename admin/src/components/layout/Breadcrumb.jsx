/** @format */

import { ArrowLeft2 } from "iconsax-reactjs";
import { Link, useLocation } from "react-router-dom";

const routeTitles = {
  "/dashboard": "داشبورد",
  "/dashboard/hero": "بخش هیرو",
  "/dashboard/about": "درباره من",
  "/dashboard/services": "خدمات",
  "/dashboard/portfolio": "نمونه‌کارها",
  "/dashboard/contact": "اطلاعات تماس",
  "/dashboard/settings": "تنظیمات سایت",
};

const Breadcrumb = () => {
  const { pathname } = useLocation();

  const currentTitle = routeTitles[pathname] || "پنل مدیریت";

  return (
    <nav
      className='breadcrumbs text-xs md:text-md text-base-content/70'
      aria-label='breadcrumb'>
      <ul>
        <li>
          <Link
            to='/dashboard'
            className='transition-colors hover:text-primary'>
            داشبورد
          </Link>
        </li>

        {pathname !== "/dashboard" && (
          <li className='font-medium text-base-content'>{currentTitle}</li>
        )}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
