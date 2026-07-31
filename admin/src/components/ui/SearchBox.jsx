/** @format */

import { SearchNormal1, CloseCircle } from "iconsax-reactjs";

/* Search Box */

const SearchBox = ({
  value = "",
  onChange,
  placeholder = "جستجو...",
  className = "",
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      <SearchNormal1
        size={20}
        className='absolute right-4 top-1/2 -translate-y-1/2 text-base-content/50'
      />

      <input
        type='text'
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        className='input input-bordered w-full pr-12 pl-12'
      />

      {value && (
        <button
          type='button'
          onClick={() => onChange?.("")}
          className='absolute left-4 top-1/2 -translate-y-1/2 text-base-content/50 transition hover:text-error'>
          <CloseCircle size={18} variant='Bulk' />
        </button>
      )}
    </div>
  );
};

export default SearchBox;
