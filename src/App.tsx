import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Toolbar, Button, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import AboutPage from "./pages/AboutPage/AboutPage";
import TeamPage from "./pages/TeamPage/TeamPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Footer from "./components/Footer/Footer";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton/FloatingWhatsAppButton";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Container sx={{ marginTop: 4 }}>
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Container>
      <Footer />
      <FloatingWhatsAppButton />
    </Router>
  );
}

export default App;
