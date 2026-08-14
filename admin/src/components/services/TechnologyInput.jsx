/** @format */

import { useEffect, useRef, useState } from "react";
import { SearchNormal1, CloseCircle } from "iconsax-reactjs";

import servicesApi from "@/api/services.api";

const TechnologyInput = ({ value = [], onChange }) => {
  const [query, setQuery] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    const handler = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  useEffect(() => {
    const trimmed = query.trim();

    if (trimmed.length < 2) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        setLoading(true);

        const response = await servicesApi.searchTechnologies(trimmed);

        const data = response?.data?.data;

        setSuggestions(Array.isArray(data) ? data : []);

        setOpen(true);
      } catch (error) {
        console.error("TECHNOLOGY SEARCH ERROR:", error);

        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  const addTechnology = (technology) => {
    const normalized = technology.trim();

    if (!normalized) {
      return;
    }

    const exists = value.some(
      (item) => item.toLowerCase() === normalized.toLowerCase(),
    );

    if (!exists) {
      onChange?.([...value, normalized]);
    }

    setQuery("");
    setSuggestions([]);
    setOpen(false);
  };

  const removeTechnology = (technology) => {
    onChange?.(value.filter((item) => item !== technology));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && query.trim()) {
      event.preventDefault();

      addTechnology(query);
    }
  };

  return (
    <div ref={containerRef} className='relative'>
      <label className='mb-2 block text-sm font-bold'>
        تکنولوژی‌های مورد استفاده
      </label>

      <div
        className='
          min-h-14
          rounded-2xl
          border
          border-base-300
          bg-base-100
          p-2
          transition
          focus-within:border-primary
        '>
        <div className='flex flex-wrap gap-2'>
          {value.map((technology) => (
            <span
              key={technology}
              className='
                  badge
                  badge-primary
                  badge-lg
                  gap-2
                  py-4
                '>
              {technology}

              <button
                type='button'
                onClick={() => removeTechnology(technology)}
                className='hover:text-error'>
                <CloseCircle size={16} />
              </button>
            </span>
          ))}

          <div className='flex min-w-[180px] flex-1 items-center gap-2 px-2'>
            <SearchNormal1 size={18} className='text-base-content/40' />

            <input
              type='text'
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onFocus={() => {
                if (suggestions.length) {
                  setOpen(true);
                }
              }}
              onKeyDown={handleKeyDown}
              placeholder={"مثلاً React، PHP، WordPress..."}
              className='
                w-full
                bg-transparent
                py-2
                outline-none
                placeholder:text-base-content/40
              '
            />
          </div>
        </div>
      </div>

      {open && (
        <div
          className='
            absolute
            left-0
            right-0
            top-full
            z-50
            mt-2
            overflow-hidden
            rounded-2xl
            border
            border-base-300
            bg-base-100
            shadow-2xl
          '>
          {loading ?
            <div className='p-5 text-center text-sm text-base-content/60'>
              در حال جستجوی تکنولوژی...
            </div>
          : suggestions.length > 0 ?
            <div className='max-h-64 overflow-y-auto p-2'>
              {suggestions.map((technology) => {
                const selected = value.some(
                  (item) => item.toLowerCase() === technology.toLowerCase(),
                );

                return (
                  <button
                    key={technology}
                    type='button'
                    disabled={selected}
                    onClick={() => addTechnology(technology)}
                    className='
                        flex
                        w-full
                        items-center
                        justify-between
                        rounded-xl
                        px-4
                        py-3
                        text-right
                        transition
                        hover:bg-base-200
                        disabled:opacity-40
                      '>
                    <span>{technology}</span>

                    {selected && (
                      <span className='text-success'>اضافه شده</span>
                    )}
                  </button>
                );
              })}
            </div>
          : <button
              type='button'
              onClick={() => addTechnology(query)}
              className='
                w-full
                p-4
                text-right
                hover:bg-base-200
              '>
              افزودن «{query}»
            </button>
          }
        </div>
      )}
    </div>
  );
};

export default TechnologyInput;
