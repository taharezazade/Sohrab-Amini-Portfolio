/** @format */

import { QuoteUp } from "iconsax-reactjs";

const AboutQuote = ({ about }) => {
  if (!about?.description) {
    return null;
  }

  return (
    <section
      className='
        relative
        overflow-hidden
        rounded-3xl
        p-4
      '>
      <div
        className='
          absolute
          -right-10
          -top-10
          h-32
          w-32
          rounded-full
          bg-primary/10
          blur-3xl
        '
      />

      <div className='relative'>
        <div
          className='
            mb-5
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-primary/10
            text-primary
          '>
          <QuoteUp size={24} variant='Bulk' />
        </div>
        <p
          className='
            whitespace-pre-line
            text-base
            leading-8
            text-base-content
            font-medium
          '>
          {about.description}
        </p>
      </div>
    </section>
  );
};

export default AboutQuote;
