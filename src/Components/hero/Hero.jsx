import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroDetails from "./HeroDetails";
import ScrollIndicator from "../common/ScrollIndicator";

function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        isolate
        overflow-hidden
        min-h-screen
        flex
        items-center
        pt-28
        lg:pt-20
      "
    >
      {/* Background */}
      <HeroBackground />

      {/* Container */}
      <div
        className="
          container
          mx-auto
          px-6
          lg:px-10
          xl:px-16
        "
      >
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-3
            items-center
            gap-16
          "
        >
          {/* Right */}
          <div className="order-1">
            <HeroContent />
          </div>

          {/* Center */}
          <div
            className="
              order-2
              flex
              justify-center
              items-center
            "
          >
            <HeroImage />
          </div>

          {/* Left */}
          <div className="order-3">
            <HeroDetails />
          </div>
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
}

export default Hero;
