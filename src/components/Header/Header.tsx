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
import { Link } from "react-router-dom";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import logo from "@/assets/logo.png";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);

  const navLinks = [
    { label: t("nav.home"), to: "/" },
    { label: t("nav.services"), to: "/services" },
    { label: t("nav.about"), to: "/#about" },
    { label: t("nav.team"), to: "/team" },
    { label: t("nav.contacts"), to: "/contact" },
  ];

  return (
    <Box position="static">
      <Toolbar
        sx={{
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Button component={Link} to="/" sx={{ minWidth: 0 }}>
          <Box component="img" src={logo} alt="Logo" sx={{ height: 70 }} />
        </Button>

        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            {navLinks.map(({ to, label }) => (
              <Button key={to} component={Link} to={to}>
                {label}
              </Button>
            ))}
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
                  {navLinks.map(({ to, label }) => (
                    <ListItem key={to} disablePadding>
                      <ListItemButton component={Link} to={to}>
                        <ListItemText primary={label} />
                      </ListItemButton>
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
