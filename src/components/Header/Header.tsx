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
import { t } from "i18next";
import { Link } from "react-router-dom";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import logo from "@/assets/logo.png";

const Header = () => {
  const { i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { to: "/", label: t("nav.about") },
    { to: "/team", label: t("nav.team") },
    { to: "/contact", label: t("nav.contacts") },
  ];

  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);

  return (
    <Box position="static" color="default" bgcolor="white">
      <Toolbar
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button component={Link} to="/" color="inherit" sx={{ minWidth: 0 }}>
          <Box component="img" src={logo} alt="Logo" sx={{ height: 70 }} />
        </Button>

        {!isMobile && (
          <Box sx={{ display: "flex", gap: 4 }}>
            {navLinks.map(({ to, label }) => (
              <Button
                key={to}
                component={Link}
                to={to}
                color="inherit"
                sx={{ "&:hover": { color: "#6bbdca" } }}
              >
                {label}
              </Button>
            ))}
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
                    {navLinks.map(({ to, label }) => (
                      <ListItem key={to} disablePadding>
                        <ListItemButton component={Link} to={to}>
                          <ListItemText primary={label} />
                        </ListItemButton>
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
