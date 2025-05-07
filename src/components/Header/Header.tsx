import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate, useLocation } from "react-router-dom";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import logo from "@/assets/logo.png";

interface HeaderProps {
  scrollToAbout: () => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToAbout }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);

  const handleAboutClick = () => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        scrollToAbout();
      }, 500);
    } else {
      scrollToAbout();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t("nav.home"), to: "/" },
    { label: t("nav.services"), to: "/services" },
    { label: t("nav.about"), action: handleAboutClick },
    { label: t("nav.team"), to: "/team" },
    { label: t("nav.contacts"), to: "/contact" },
  ];

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={10}
      sx={{
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        backgroundColor: scrolled ? "#fff" : "transparent",
        boxShadow: scrolled ? "0px 2px 4px rgba(0,0,0,0.1)" : "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-around", alignItems: "center" }}>
        <Button component={Link} to="/" sx={{ minWidth: 0 }}>
          <Box component="img" src={logo} alt="Logo" sx={{ height: 70 }} />
        </Button>

        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            {navLinks.map(({ to, label, action }) =>
              to ? (
                <Button key={to} component={Link} to={to}>
                  {label}
                </Button>
              ) : (
                <Button key={label} onClick={action}>
                  {label}
                </Button>
              )
            )}
            <LanguageSwitcher />
          </Box>
        )}

        {isMobile && (
          <>
            <IconButton onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  {navLinks.map(({ to, label, action }) => (
                    <ListItem key={to || label} disablePadding>
                      {to ? (
                        <ListItemButton component={Link} to={to}>
                          <ListItemText primary={label} />
                        </ListItemButton>
                      ) : (
                        <ListItemButton onClick={action}>
                          <ListItemText primary={label} />
                        </ListItemButton>
                      )}
                    </ListItem>
                  ))}
                  <ListItem>
                    <LanguageSwitcher />
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </>
        )}
      </Toolbar>
    </Box>
  );
};

export default Header;
