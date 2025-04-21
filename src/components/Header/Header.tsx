import { Box, Toolbar, Button } from "@mui/material";
import { t } from "i18next";
import { Link } from "react-router-dom";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import logo from "@/assets/logo.png";

const Header = () => {
  const navButtonStyle = {
    "&:hover": {
      color: "#6bbdca",
    },
  };
  return (
    <Box position="static" color="default" bgcolor="white">
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
          <Button component={Link} to="/" color="inherit" sx={navButtonStyle}>
            {t("nav.about")}
          </Button>
          <Button
            component={Link}
            to="/team"
            color="inherit"
            sx={navButtonStyle}
          >
            {t("nav.team")}
          </Button>
          <Button
            component={Link}
            to="/contact"
            color="inherit"
            sx={navButtonStyle}
          >
            {t("nav.contacts")}
          </Button>
        </Box>

        <div>
          <LanguageSwitcher />
        </div>
      </Toolbar>
    </Box>
  );
};

export default Header;
