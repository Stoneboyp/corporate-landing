import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import { Box } from "@mui/material";
import { RefObject, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface AboutPageProps {
  aboutRef: RefObject<HTMLDivElement | null>;
}

const AboutPage: React.FC<AboutPageProps> = ({ aboutRef }) => {
  const location = useLocation();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (location.state?.scrollTo === "about") {
      scrollToAbout();
    }
  }, [location]);

  return (
    <Box>
      <HeroSection scrollToAbout={scrollToAbout} />
      <div id="about" ref={aboutRef}>
        <AboutSection />
      </div>
    </Box>
  );
};

export default AboutPage;
