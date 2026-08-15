/** @format */

import {
  ArrowLeft2,
  CloseCircle,
  Moon,
  Notification,
  SearchNormal1,
  SearchStatus1,
  Sun1,
} from "iconsax-reactjs";

import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useGlobalSearch from "@/hooks/useGlobalSearch";

import Breadcrumb from "./Breadcrumb";
import ProfileDropdown from "./ProfileDropdown";

/* =========================================================
   PAGE TITLES
========================================================= */

const PAGE_TITLES = {
  "/dashboard": "داشبورد",
  "/dashboard/hero": "بخش هیرو",
  "/dashboard/about": "درباره من",
  "/dashboard/services": "خدمات",
  "/dashboard/portfolio": "نمونه‌کارها",
  "/dashboard/contact": "اطلاعات تماس",
  "/dashboard/settings": "تنظیمات سایت",
};

/* =========================================================
   SEARCH RESULT TYPES
========================================================= */

const SEARCH_TYPE_LABELS = {
  hero: "هیرو",
  about: "درباره من",
  service: "سرویس",
  portfolio: "نمونه‌کار",
  contact: "تماس",
  settings: "تنظیمات",
};

/* =========================================================
   HEADER
========================================================= */

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const searchInputRef = useRef(null);

  /* =======================================================
     GLOBAL SEARCH
  ======================================================= */

  const { query, setQuery, results, loading, error, clearSearch } =
    useGlobalSearch();

  /* =======================================================
     LOCAL STATE
  ======================================================= */

  const [searchOpen, setSearchOpen] = useState(false);

  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    return localStorage.getItem("theme") || "dark";
  });

  /* =======================================================
     CURRENT PAGE
  ======================================================= */

  const currentTitle = PAGE_TITLES[location.pathname] || "پنل مدیریت";

  /* =======================================================
     THEME
  ======================================================= */

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  /* =======================================================
     SEARCH OPEN
  ======================================================= */

  const openSearch = () => {
    setSearchOpen(true);

    requestAnimationFrame(() => {
      searchInputRef.current?.focus();
    });
  };

  /* =======================================================
     SEARCH CLOSE
  ======================================================= */

  const closeSearch = () => {
    setSearchOpen(false);
    clearSearch();
  };

  /* =======================================================
     KEYBOARD SHORTCUT
  ======================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      /* Ctrl + K / Cmd + K */

      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();

        openSearch();

        return;
      }

      /* Escape */

      if (event.key === "Escape") {
        closeSearch();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* =======================================================
     SEARCH RESULT CLICK
  ======================================================= */

  const handleResultClick = (result) => {
    if (!result?.url) {
      return;
    }

    navigate(result.url);

    closeSearch();
  };

  /* =======================================================
     SEARCH INPUT CHANGE
  ======================================================= */

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header
        className='
          fixed
          top-0
          right-0
          z-50

          h-20
          w-full

          border-b
          border-base-300

          bg-base-100/80
          backdrop-blur-xl

          lg:right-56
          lg:w-[calc(100%-14rem)]
        '>
        <div
          className='
            flex
            h-20
            items-center
            justify-between

            px-5
            lg:px-8
          '>
          {/* =================================================
              PAGE INFORMATION
          ================================================= */}

          <div className='min-w-0'>
            <h1
              className='
                truncate
                text-xl
                font-black
                text-primary

                md:text-2xl
              '>
              {currentTitle}
            </h1>

            <Breadcrumb />
          </div>

          {/* =================================================
              HEADER ACTIONS
          ================================================= */}

          <div className='flex shrink-0 items-center gap-3'>
            {/* ===============================================
                GLOBAL SEARCH
            =============================================== */}

            <button
              type='button'
              onClick={openSearch}
              className='
                hidden
                h-12
                w-80
                items-center
                gap-3

                rounded-2xl
                border
                border-base-300

                bg-base-200

                px-4

                text-right

                transition-all

                hover:border-primary
                hover:bg-base-300

                lg:flex
              '>
              <SearchNormal1
                size={20}
                variant='Bulk'
                className='shrink-0 text-primary'
              />

              <span
                className='
                  flex-1
                  truncate
                  text-sm
                  text-base-content/40
                '>
                جستجوی کل پنل...
              </span>

              <kbd className='kbd kbd-sm shrink-0'>Ctrl K</kbd>
            </button>

            {/* ===============================================
                MOBILE SEARCH
            =============================================== */}

            <button
              type='button'
              onClick={openSearch}
              className='
                btn
                btn-ghost
                btn-circle

                border
                border-base-300

                lg:hidden
              '>
              <SearchNormal1
                size={21}
                variant='Bulk'
                className='text-primary'
              />
            </button>

            {/* ===============================================
                THEME
            =============================================== */}

            <button
              type='button'
              onClick={toggleTheme}
              aria-label={
                theme === "dark" ? "تغییر به حالت روشن" : "تغییر به حالت تاریک"
              }
              className='
                btn
                btn-ghost
                btn-circle

                border
                border-base-300
              '>
              {theme === "dark" ?
                <Sun1 size={22} variant='Bulk' className='text-warning' />
              : <Moon size={22} variant='Bulk' className='text-primary' />}
            </button>

            {/* ===============================================
                NOTIFICATIONS
            =============================================== */}

            <button
              type='button'
              aria-label='اعلان‌ها'
              className='
                btn
                btn-ghost
                btn-circle

                relative

                border
                border-base-300
              '>
              <Notification size={22} variant='Bulk' className='text-primary' />

              <span
                className='
                  absolute
                  right-2
                  top-2

                  flex
                  h-2.5
                  w-2.5
                '>
                <span
                  className='
                    absolute
                    inline-flex
                    h-full
                    w-full

                    animate-ping
                    rounded-full

                    bg-primary
                    opacity-60
                  '
                />

                <span
                  className='
                    relative
                    inline-flex
                    h-2.5
                    w-2.5

                    rounded-full

                    bg-primary
                  '
                />
              </span>
            </button>

            {/* ===============================================
                DIVIDER
            =============================================== */}

            <div className='hidden h-8 w-px bg-base-300 sm:block' />

            {/* ===============================================
                PROFILE
            =============================================== */}

            <ProfileDropdown />
          </div>
        </div>
      </header>

      {/* =====================================================
          GLOBAL SEARCH MODAL
      ===================================================== */}

      {searchOpen && (
        <div
          role='dialog'
          aria-modal='true'
          aria-label='جستجوی سراسری'
          className='
            fixed
            inset-0
            z-[100]

            bg-black/50
            backdrop-blur-sm

            p-4
          '
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeSearch();
            }
          }}>
          {/* =================================================
              SEARCH CONTAINER
          ================================================= */}

          <div
            className='
              mx-auto
              mt-20

              w-full
              max-w-2xl

              overflow-hidden

              rounded-3xl

              border
              border-base-300

              bg-base-100

              shadow-2xl

              md:mt-24
            '>
            {/* ===============================================
                SEARCH HEADER
            =============================================== */}

            <div
              className='
                flex
                items-center
                gap-3

                border-b
                border-base-300

                p-4
                md:p-5
              '>
              <SearchNormal1
                size={24}
                variant='Bulk'
                className='shrink-0 text-primary'
              />

              <input
                ref={searchInputRef}
                type='search'
                value={query}
                onChange={handleSearchChange}
                placeholder='سرویس، نمونه‌کار، هیرو، درباره من...'
                autoComplete='off'
                className='
                  min-w-0
                  flex-1

                  bg-transparent

                  text-base
                  outline-none

                  md:text-lg
                '
              />

              {/* Clear */}

              {query && (
                <button
                  type='button'
                  onClick={clearSearch}
                  aria-label='پاک کردن جستجو'
                  className='btn btn-ghost btn-circle btn-sm'>
                  <CloseCircle size={20} />
                </button>
              )}

              {/* Close */}

              <button
                type='button'
                onClick={closeSearch}
                aria-label='بستن جستجو'
                className='btn btn-ghost btn-circle btn-sm'>
                <ArrowLeft2 size={20} />
              </button>
            </div>

            {/* ===============================================
                SEARCH BODY
            =============================================== */}

            <div
              className='
                max-h-[65vh]
                overflow-y-auto

                p-3
              '>
              {/* =============================================
                  EMPTY QUERY
              ============================================= */}

              {!query.trim() && (
                <div
                  className='
                    flex
                    flex-col
                    items-center
                    justify-center

                    py-14

                    text-center
                  '>
                  <div
                    className='
                      mb-4
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center

                      rounded-2xl

                      bg-primary/10
                      text-primary
                    '>
                    <SearchStatus1 size={30} variant='Bulk' />
                  </div>

                  <h3 className='font-bold'>جستجوی سراسری پنل مدیریت</h3>

                  <p
                    className='
                      mt-2
                      max-w-md

                      text-sm
                      leading-6
                      text-base-content/50
                    '>
                    عنوان، توضیحات، دسته‌بندی، سرویس، نمونه‌کار و سایر اطلاعات
                    پنل را جستجو کنید.
                  </p>

                  <div className='mt-5'>
                    <kbd className='kbd kbd-sm'>Ctrl</kbd>
                    <span className='mx-1 text-base-content/30'>+</span>
                    <kbd className='kbd kbd-sm'>K</kbd>
                  </div>
                </div>
              )}

              {/* =============================================
                  LOADING
              ============================================= */}

              {query.trim() && loading && (
                <div
                  className='
                    flex
                    flex-col
                    items-center
                    justify-center

                    py-14
                  '>
                  <span
                    className='
                      loading
                      loading-spinner
                      loading-md

                      text-primary
                    '
                  />

                  <p
                    className='
                      mt-4
                      text-sm
                      text-base-content/50
                    '>
                    در حال جستجو...
                  </p>
                </div>
              )}

              {/* =============================================
                  ERROR
              ============================================= */}

              {query.trim() && !loading && error && (
                <div className='py-14 text-center'>
                  <div
                    className='
                      mx-auto
                      mb-4

                      flex
                      h-14
                      w-14
                      items-center
                      justify-center

                      rounded-2xl

                      bg-error/10
                      text-error
                    '>
                    <CloseCircle size={28} />
                  </div>

                  <h3 className='font-bold'>خطا در جستجو</h3>

                  <p
                    className='
                      mt-2
                      text-sm
                      text-base-content/50
                    '>
                    دریافت نتایج جستجو با مشکل مواجه شد.
                  </p>

                  <button
                    type='button'
                    onClick={() => setQuery(query)}
                    className='
                      btn
                      btn-primary
                      btn-sm
                      mt-5
                    '>
                    تلاش مجدد
                  </button>
                </div>
              )}

              {/* =============================================
                  NO RESULTS
              ============================================= */}

              {query.trim() && !loading && !error && results.length === 0 && (
                <div className='py-14 text-center'>
                  <div
                    className='
                        mx-auto
                        mb-4

                        flex
                        h-14
                        w-14
                        items-center
                        justify-center

                        rounded-2xl

                        bg-base-200
                        text-base-content/40
                      '>
                    <SearchNormal1 size={28} />
                  </div>

                  <h3 className='font-bold'>نتیجه‌ای پیدا نشد</h3>

                  <p
                    className='
                        mt-2
                        text-sm
                        text-base-content/50
                      '>
                    عبارت دیگری را امتحان کنید.
                  </p>
                </div>
              )}

              {/* =============================================
                  RESULTS
              ============================================= */}

              {!loading && !error && results.length > 0 && (
                <div className='space-y-1'>
                  <div
                    className='
                        px-3
                        pb-2
                        pt-1

                        text-xs
                        font-semibold
                        text-base-content/40
                      '>
                    {results.length} نتیجه پیدا شد
                  </div>

                  {results.map((result) => (
                    <button
                      key={`${result.type}-${result.id}`}
                      type='button'
                      onClick={() => handleResultClick(result)}
                      className='
                          flex
                          w-full
                          items-center
                          gap-4

                          rounded-2xl

                          p-4

                          text-right

                          transition

                          hover:bg-base-200

                          focus:bg-base-200
                          focus:outline-none
                        '>
                      {/* Icon */}

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
                        <SearchNormal1 size={20} variant='Bulk' />
                      </div>

                      {/* Content */}

                      <div className='min-w-0 flex-1'>
                        <div
                          className='
                              flex
                              items-center
                              gap-2
                            '>
                          <h4
                            className='
                                min-w-0
                                flex-1

                                truncate

                                font-bold
                              '>
                            {result.title || "بدون عنوان"}
                          </h4>

                          <span
                            className='
                                badge
                                badge-ghost
                                badge-sm

                                shrink-0
                              '>
                            {SEARCH_TYPE_LABELS[result.type] || result.type}
                          </span>
                        </div>

                        {result.description && (
                          <p
                            className='
                                mt-1

                                truncate

                                text-sm
                                text-base-content/50
                              '>
                            {result.description}
                          </p>
                        )}
                      </div>

                      {/* Arrow */}

                      <ArrowLeft2
                        size={18}
                        className='
                            shrink-0
                            text-base-content/30
                          '
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
