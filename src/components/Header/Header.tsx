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
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import logo from "@/assets/logo.png";

interface HeaderProps {
  scrollToAbout: () => void;
  scrollToServices: () => void;
  scrollToTeam: () => void;
  scrollToContact: () => void;
}

const Header: React.FC<HeaderProps> = ({
  scrollToAbout,
  scrollToServices,
  scrollToTeam,
  scrollToContact,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t("nav.home"), to: "/" },
    { label: t("nav.about"), action: scrollToAbout },
    { label: t("nav.services"), action: scrollToServices },
    { label: t("nav.team"), action: scrollToTeam },
    { label: t("nav.contacts"), action: scrollToContact },
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
      <Container maxWidth="lg" disableGutters>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Button component={Link} to="/" sx={{ minWidth: 0 }}>
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                height: {
                  xs: isSmallMobile ? 50 : 60,
                  sm: 70,
                  md: 80,
                },
                transition: "height 0.3s ease",
              }}
            />
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
            <IconButton sx={{ color: "white" }} onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      {/* Мобильное меню */}
      <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
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
    </Box>
  );
};

export default Header;
