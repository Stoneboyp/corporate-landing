import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Box } from "@mui/material";
import AboutPage from "./pages/AboutPage/AboutPage";
import TeamPage from "./pages/TeamPage/TeamPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Footer from "./components/Footer/Footer";
import FloatingWhatsAppButton from "./components/FloatingContactButton/FloatingContactButton";
import Header from "./components/Header/Header";
import { useRef } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header scrollToAbout={scrollToAbout} />
        <Box sx={{ position: "relative", minHeight: "100vh" }}>
          <Container
            sx={{
              minHeight: "calc(100vh - 180px)",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Routes>
              <Route path="/" element={<AboutPage aboutRef={aboutRef} />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Container>
        </Box>
        <Footer />
        <FloatingWhatsAppButton />
      </Router>
    </ThemeProvider>
  );
}

export default App;
