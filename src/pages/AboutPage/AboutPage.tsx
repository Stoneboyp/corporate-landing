import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import { Box } from "@mui/material";
import { RefObject } from "react";

interface AboutPageProps {
  aboutRef: RefObject<HTMLDivElement | null>;
}

const AboutPage: React.FC<AboutPageProps> = ({ aboutRef }) => {
  return (
    <Box>
      <HeroSection />
      <div ref={aboutRef}>
        <AboutSection />
      </div>
    </Box>
  );
};

export default AboutPage;
