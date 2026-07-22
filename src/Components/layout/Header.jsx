/** @format */

import { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { LiquidGlass } from "@creativoma/liquid-glass";
import {
  Call,
  Document,
  Home2,
  User,
  CloseSquare,
  HamburgerMenu,
  Setting2,
} from "iconsax-reactjs";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "../common/ThemeToggle";

const routeItem = [
  {
    id: 1,
    route: "خانه",
    icon: Home2,
    to: "hero",
  },
  {
    id: 2,
    route: "درباره من",
    icon: User,
    to: "about",
  },
  {
    id: 3,
    route: "خدمات",
    icon: Setting2,
    to: "services",
  },
  {
    id: 4,
    route: "نمونه کارها",
    icon: Document,
    to: "portfolio",
  },

  {
    id: 5,
    route: "تماس",
    icon: Call,
    to: "contact",
  },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderStyle, setSliderStyle] = useState({
    left: 0,
    width: 0,
    height: 0,
    top: 0,
  });
  const navRef = useRef(null);
  const itemRefs = useRef([]);
  useEffect(() => {
    const sections = routeItem.map((item) => document.getElementById(item.to));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = routeItem.findIndex(
              (item) => item.to === entry.target.id,
            );

            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (itemRefs.current[activeIndex] && navRef.current) {
      const activeItem = itemRefs.current[activeIndex];
      const navRect = navRef.current.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();

      setSliderStyle({
        left: itemRect.left - navRect.left,
        width: itemRect.width,
        height: itemRect.height,
        top: itemRect.top - navRect.top,
      });
    }
  }, [activeIndex]);

  return (
    <>
      {/* Desktop */}
      <header className='fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block'>
        <LiquidGlass
          displace={2}
          distortionScale={-180}
          redOffset={0}
          greenOffset={0}
          blueOffset={0}
          brightness={80}
          opacity={0}
          backdropBlur={2}
          className='p-1.5 rounded-full'>
          <nav
            ref={navRef}
            className='flex items-center rounded-full gap-2 relative'>
            {/* اسلایدر کشویی */}
            <motion.div
              className='absolute bg-primary rounded-full'
              style={{
                left: sliderStyle.left,
                top: sliderStyle.top,
                width: sliderStyle.width,
                height: sliderStyle.height,
                borderRadius: 9999,
              }}
              layoutId='activeNavItem'
              transition={{
                type: "spring",
                stiffness: 420,
                damping: 38,
                mass: 0.8,
                restDelta: 0.001,
                restSpeed: 0.001,
              }}
            />
            {/* <div className='rounded-full text-primary-content w-10 h-10 flex items-center justify-center bg-primary'>
              SA
            </div> */}
            {routeItem.map(({ id, route, icon: Icon, to }, index) => (
              <Link
                key={id}
                to={to}
                smooth
                spy
                duration={700}
                offset={-110}
                onSetActive={() => setActiveIndex(index)}>
                <div
                  ref={(el) => (itemRefs.current[index] = el)}
                  className={`
                    relative
                    z-10
                    flex
                    items-center
                    gap-2
                    rounded-full
                    px-4
                    py-2
                    cursor-pointer
                    transition-all
                    duration-300
                    ${
                      activeIndex === index ?
                        "text-primary-content"
                      : "text-base-content hover:bg-primary/10"
                    }
                  `}>
                  <Icon
                    variant={activeIndex === index ? "Bulk" : "Outline"}
                    size={20}
                  />

                  <span>{route}</span>
                </div>
              </Link>
            ))}

            <ThemeToggle />
          </nav>
        </LiquidGlass>
      </header>

      {/* Mobile */}
      <header className='fixed top-4 left-4 right-4 z-50 md:hidden'>
        <LiquidGlass
          displace={1}
          distortionScale={-180}
          redOffset={0}
          greenOffset={0}
          blueOffset={0}
          brightness={20}
          opacity={0.5}
          className='rounded-2xl p-2 bg-white/70 dark:bg-transparent shadow-none'>
          <div className='flex items-center justify-between'>
            <Link to='/' className='font-bold text-lg text-primary'>
              سهراب امینی
            </Link>

            <div className='flex items-center gap-1'>
              <ThemeToggle />

              <button
                onClick={() => setOpen(!open)}
                className='
                  relative
                  z-10
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  transition-colors
                  hover:bg-primary/10
                '>
                {open ?
                  <CloseSquare
                    className='text-primary'
                    variant='Linear'
                    size={28}
                  />
                : <HamburgerMenu
                    className='text-primary'
                    variant='Linear'
                    size={28}
                  />
                }
              </button>
            </div>
          </div>

          <AnimatePresence>
            {open && (
              <motion.nav
                initial={{ height: 0, opacity: 1 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className='mt-4 flex flex-col gap-2 overflow-hidden'>
                {routeItem.map(({ id, route, icon: Icon, to }, index) => (
                  <Link
                    key={id}
                    to={to}
                    smooth
                    spy
                    duration={700}
                    offset={-80}
                    onClick={() => setOpen(false)}
                    onSetActive={() => setActiveIndex(index)}>
                    <div
                      className={`
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        p-3
                        cursor-pointer
                        transition-all

                        ${
                          activeIndex === index ?
                            "bg-primary text-primary-content"
                          : "text-base-content hover:bg-primary/10"
                        }
                      `}>
                      <Icon
                        variant={activeIndex === index ? "Bulk" : "Outline"}
                        size={22}
                      />

                      <span>{route}</span>
                    </div>
                  </Link>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>
        </LiquidGlass>
      </header>
    </>
  );
}

export default Header;
