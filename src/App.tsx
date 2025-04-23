import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Box } from "@mui/material";
import AboutPage from "./pages/AboutPage/AboutPage";
import TeamPage from "./pages/TeamPage/TeamPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Footer from "./components/Footer/Footer";
import FloatingWhatsAppButton from "./components/FloatingContactButton/FloatingContactButton";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Box
        sx={{
          backgroundImage: `url("/img/landing/1.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <Container sx={{ py: 4 }}>
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Container>
      </Box>
      <Footer />
      <FloatingWhatsAppButton />
    </Router>
  );
}

export default App;
