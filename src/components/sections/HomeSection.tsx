import { Box, Typography } from "@mui/material";
import AboutSection from "@/components/sections/AboutSection";

interface HomeSectionProps {
  aboutRef: React.RefObject<HTMLDivElement | null>; // изменен тип на HTMLDivElement | null
}

const HomeSection: React.FC<HomeSectionProps> = ({ aboutRef }) => {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "80vh",
          background: "url('/img/homeHero.jpg') center/cover no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          left: "50%",
          marginLeft: "-50vw",
        }}
      >
        <Box
          sx={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            px: 3,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Основана признанными экспертами в области права
          </Typography>
          <Typography variant="h2" sx={{ color: "#dea057" }} gutterBottom>
            Качественные юридические решения, создающие преимущества
          </Typography>
          <Typography variant="h6">
            Caspian Consulting Ltd предоставляет юридические решения для роста и
            защиты Вашего бизнеса.
          </Typography>
        </Box>
      </Box>

      <AboutSection ref={aboutRef} />
    </>
  );
};

export default HomeSection;
