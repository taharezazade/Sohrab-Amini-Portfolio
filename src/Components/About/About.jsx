import AboutGrid from "./AboutGrid";

function About() {
  return (
    <section
      id="about"
      className="
        relative
        pt-20
        overflow-hidden
      "
    >
      <div
        className="
          container
          mx-auto
          px-6
        "
      >
        <AboutGrid />
      </div>
    </section>
  );
}

export default About;
