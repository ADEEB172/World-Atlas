import { FaLongArrowAltRight } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="container hero-panel">
        <div className="hero-content">
          <span className="hero-badge">Discover the world</span>
          <h1 className="heading-xl">
            Explore the world with us and discover new places, cultures, and
            experiences.
          </h1>
          <p className="paragraph">
            Discover the world with our travel website, where you can explore new
            destinations, plan your next adventure, and connect with fellow travelers.
          </p>
          <button className="hero-button">
            Start Exploring <FaLongArrowAltRight />
          </button>
        </div>
        <div className="hero-image">
          <img src="/public/images/world.png" alt="World" className="banner-image" />
        </div>
      </div>
    </main>
  );
};