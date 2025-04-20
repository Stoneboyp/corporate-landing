import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, AppBar, Toolbar, Button, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import AboutPage from "./pages/AboutPage/AboutPage";
import TeamPage from "./pages/TeamPage/TeamPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";
import logo from "./assets/logo.png";

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <Box position="static" color="default">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button component={Link} to="/" color="inherit">
            <Box component="img" src={logo} alt="Logo" sx={{ height: 110 }} />
          </Button>
          <Box
            sx={{
              display: "flex",
              gap: 4,
            }}
          >
            <Button component={Link} to="/" color="inherit">
              {t("nav.about")}
            </Button>
            <Button component={Link} to="/team" color="inherit">
              {t("nav.team")}
            </Button>
            <Button component={Link} to="/contact" color="inherit">
              {t("nav.contacts")}
            </Button>
          </Box>

          <div>
            <LanguageSwitcher />
          </div>
        </Toolbar>
      </Box>

      <Container sx={{ marginTop: 4 }}>
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
