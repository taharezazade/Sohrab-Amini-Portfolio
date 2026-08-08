/** @format */

import AboutGrid from "./AboutGrid";
import useAbout from "@/hooks/useAbout";

function About() {
  const { about, loading } = useAbout();

  if (loading || !about) {
    return (
      <section
        id='about'
        className='
          relative
          pt-20
          overflow-hidden
          min-h-[500px]
        '
      />
    );
  }

  return (
    <section
      id='about'
      className='
        relative
        pt-20
        overflow-hidden
      '>
      <div
        className='
          container
          mx-auto
          px-6
        '>
        <AboutGrid about={about} />
      </div>
    </section>
  );
}

export default About;
