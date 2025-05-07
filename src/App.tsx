import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Container, Box } from "@mui/material";
import TeamPage from "./pages/TeamPage/TeamPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Footer from "./components/Footer/Footer";
import FloatingWhatsAppButton from "./components/FloatingContactButton/FloatingContactButton";
import Header from "./components/Header/Header";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import HomePage from "./pages/Home/HomePage";
import { useCallback, useRef } from "react";

function AppContent() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = useCallback(
    (ref: React.RefObject<HTMLDivElement | null>) => {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

  const handleScrollAfterNavigation = useCallback(
    (ref: React.RefObject<HTMLDivElement | null>) => {
      const result = navigate("/");
      if (result && typeof result.then === "function") {
        result.then(() => {
          setTimeout(() => scrollToSection(ref), 500);
        });
      } else {
        setTimeout(() => scrollToSection(ref), 500);
      }
    },
    [navigate, scrollToSection]
  );

  const handleAboutClick = useCallback(() => {
    if (location.pathname !== "/") {
      handleScrollAfterNavigation(aboutRef);
    } else {
      scrollToSection(aboutRef);
    }
  }, [location.pathname, scrollToSection, handleScrollAfterNavigation]);

  const handleServicesClick = useCallback(() => {
    if (location.pathname !== "/") {
      handleScrollAfterNavigation(servicesRef);
    } else {
      scrollToSection(servicesRef);
    }
  }, [location.pathname, scrollToSection, handleScrollAfterNavigation]);

  const handleTeamClick = useCallback(() => {
    if (location.pathname !== "/") {
      handleScrollAfterNavigation(teamRef);
    } else {
      scrollToSection(teamRef);
    }
  }, [location.pathname, scrollToSection, handleScrollAfterNavigation]);

  const handleContactClick = useCallback(() => {
    if (location.pathname !== "/") {
      handleScrollAfterNavigation(contactRef);
    } else {
      scrollToSection(contactRef);
    }
  }, [location.pathname, scrollToSection, handleScrollAfterNavigation]);

  return (
    <>
      <Header
        scrollToAbout={handleAboutClick}
        scrollToServices={handleServicesClick}
        scrollToTeam={handleTeamClick}
        scrollToContact={handleContactClick}
      />
      <Box>
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Container
            sx={{
              minHeight: "calc(100vh - 180px)",
              position: "relative",
            }}
          >
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    aboutRef={aboutRef}
                    servicesRef={servicesRef}
                    teamRef={teamRef}
                    contactRef={contactRef}
                  />
                }
              />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Container>
        </Box>
      </Box>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
