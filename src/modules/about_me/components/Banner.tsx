import type { AboutMe } from "../../../types/AboutMe";
interface BannerProps {
  aboutMe: AboutMe;
  scrolled: boolean;
}

const Banner: React.FC<BannerProps> = ({ aboutMe, scrolled }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen z-40 flex flex-col justify-center items-center transition-all duration-700 ease-in-out
          ${
            scrolled
              ? "opacity-0 scale-95 -translate-y-10 pointer-events-none"
              : "opacity-100 scale-100"
          }`}
      style={{
        backgroundColor: "var(--color-bg)",
        color: "var(--color-text-dark)",
        fontFamily: "'VT323', monospace",
      }}
    >
      <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl  font-extrabold tracking-wide">
        {aboutMe.name}
      </h1>
      <p className="mt-4 text-2xl italic">{aboutMe.currentPosition}</p>
    </div>
  );
};

export default Banner;
