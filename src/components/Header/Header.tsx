import { useState } from "react";
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
import { Link, useNavigate, useLocation } from "react-router-dom"; // добавили useNavigate и useLocation
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

  const navigate = useNavigate();
  const location = useLocation();

  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);

  const handleAboutClick = () => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        scrollToAbout();
      }, 100);
    } else {
      scrollToAbout();
    }
  };

  const navLinks = [
    { label: t("nav.about"), action: handleAboutClick },
    { label: t("nav.team"), to: "/team" },
    { label: t("nav.contacts"), to: "/contact" },
  ];

  return (
    <Box position="static">
      <Toolbar
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button component={Link} to="/" sx={{ minWidth: 0 }}>
          <Box component="img" src={logo} alt="Logo" sx={{ height: 70 }} />
        </Button>

        {!isMobile && (
          <Box sx={{ display: "flex", gap: 4 }}>
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
          </Box>
        )}

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <LanguageSwitcher />

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
                  </List>
                </Box>
              </Drawer>
            </>
          )}
        </Box>
      </Toolbar>
    </Box>
  );
};

export default Header;
