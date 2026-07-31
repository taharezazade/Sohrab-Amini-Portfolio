/** @format */

import { ArrowLeft2, ArrowRight2 } from "iconsax-reactjs";
import Button from "./Button";

/* Pagination */

const Pagination = ({ page = 1, totalPages = 1, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className='mt-6 flex items-center justify-center gap-2'>
      <Button
        size='sm'
        variant='ghost'
        disabled={page === 1}
        startIcon={<ArrowRight2 size={16} />}
        onClick={() => onPageChange(page - 1)}>
        قبلی
      </Button>

      {pages.map((item) => (
        <Button
          key={item}
          size='sm'
          variant={item === page ? "primary" : "ghost"}
          onClick={() => onPageChange(item)}>
          {item}
        </Button>
      ))}

      <Button
        size='sm'
        variant='ghost'
        disabled={page === totalPages}
        endIcon={<ArrowLeft2 size={16} />}
        onClick={() => onPageChange(page + 1)}>
        بعدی
      </Button>
    </div>
  );
};

export default Pagination;
