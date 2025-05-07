import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TeamSection from "@/components/sections/TeamSection";
import StatsBanner from "@/components/StatsBanner/StatsBanner";
import Competencies from "@/components/Competencies/Competencies";

interface HomePageProps {
  aboutRef: React.RefObject<HTMLDivElement | null>;
  servicesRef: React.RefObject<HTMLDivElement | null>;
  teamRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
}

const HomePage = ({
  aboutRef,
  servicesRef,
  teamRef,
  contactRef,
}: HomePageProps) => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  useEffect(() => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          width: "100vw",
          height: { xs: "100vh", sm: "90vh", md: "80vh" },
          background: {
            xs: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/img/homeHero.jpg') center/cover no-repeat",
            sm: "url('/img/homeHero.jpg') center/cover no-repeat",
          },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          left: "50%",
          marginLeft: "-50vw",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              ml: { xs: 0, sm: "5%", md: "10%" },
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              px: { xs: 2, sm: 0 },
            }}
          >
            <Box
              sx={{
                maxWidth: { xs: "100%", sm: "80%", md: "60%" },
                mt: { xs: "5%", sm: "7%", md: "10%" },
              }}
            >
              <Typography
                variant={isMobile ? "h5" : isTablet ? "h4" : "h3"}
                gutterBottom
                sx={{
                  fontWeight: 500,
                  fontSize: {
                    xs: "1.2rem",
                    sm: "1.5rem",
                    md: "1.8rem",
                    lg: "2rem",
                  },
                }}
              >
                Основана признанными экспертами в области права
              </Typography>

              <Typography
                variant={isMobile ? "h4" : isTablet ? "h3" : "h2"}
                sx={{
                  color: "#dea057",
                  fontWeight: 700,
                  fontSize: {
                    xs: "1.8rem",
                    sm: "2.2rem",
                    md: "2.8rem",
                    lg: "3.2rem",
                  },
                  lineHeight: 1.2,
                  my: { xs: 2, md: 3 },
                }}
                gutterBottom
              >
                Качественные юридические решения, создающие преимущества
              </Typography>

              <Typography
                variant={isMobile ? "body1" : "h6"}
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.2rem",
                  },
                  fontWeight: 400,
                  opacity: 0.9,
                }}
              >
                Caspian Consulting Ltd предоставляет юридические решения для
                роста и защиты Вашего бизнеса.
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: 2, sm: 3 },
                mt: { xs: 4, sm: 5 },
                width: { xs: "100%", sm: "auto" },
              }}
            >
              <Button
                sx={{
                  border: "1px solid white",
                  padding: { xs: "12px 20px", md: "12px 24px" },
                  color: "white",
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  minWidth: { xs: "100%", sm: "150px" },
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#dea057",
                    borderColor: "#dea057",
                  },
                }}
              >
                О нас
              </Button>
              <Button
                sx={{
                  border: "1px solid white",
                  padding: { xs: "12px 20px", md: "12px 24px" },
                  color: "white",
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  minWidth: { xs: "100%", sm: "150px" },
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#dea057",
                    borderColor: "#dea057",
                  },
                }}
              >
                Наши услуги
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* About Section */}
      <Box ref={aboutRef} id="about-section">
        <AboutSection ref={aboutRef} />
      </Box>
      {/*Services Section */}
      <Box ref={servicesRef} id="services-section">
        <ServicesSection />
      </Box>
      {/* Team Section */}
      <Box ref={teamRef} id="team-section">
        <TeamSection />
      </Box>
      <StatsBanner />
      <Competencies />
    </>
  );
};

export default HomePage;
