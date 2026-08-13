/** @format */

const AboutContent = ({ about }) => {
  if (!about) {
    return null;
  }

  return (
    <div className='space-y-6'>
      <div>
        <span
          className='
            inline-flex
            rounded-full
            bg-primary/10
            px-4
            py-2
            text-sm
            font-semibold
            text-primary
          '>
          درباره من
        </span>
      </div>

      <h2
        className='
          text-3xl
          font-black
          leading-tight
          md:text-4xl
        '>
        {about.title}
      </h2>

      <p
        className='
          max-w-2xl
          whitespace-pre-line
          text-base
          leading-8
          text-base-content/70
          md:text-lg
        '>
        {about.description}
      </p>
    </div>
  );
};

export default AboutContent;
