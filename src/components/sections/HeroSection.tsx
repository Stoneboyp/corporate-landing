import { useTranslation } from "react-i18next";
import { Box, Paper, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate, useLocation } from "react-router-dom";

interface HeroSectionProps {
  scrollToAbout: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToAbout }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickMore = () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "about" } });
    } else {
      scrollToAbout();
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "70vh",
        background: "url('/img/landing/1.jpg') center/cover no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        flexDirection: "column",
      }}
    >
      <Paper
        sx={{
          height: "100%",
          width: "100%",
          opacity: 0.6,
          background: "black",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          p: { xs: 2, sm: 4 },
          boxSizing: "border-box",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "white",
            textAlign: "justify",
            maxWidth: 650,
            fontSize: { xs: "0.9rem", sm: "1.2rem", md: "1.4rem" },
            whiteSpace: "pre-line",
            lineHeight: 0.9,
          }}
        >
          {t("about.hero") + " "}
          <Box
            component="span"
            onClick={handleClickMore}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              color: "white",
              cursor: "pointer",
              fontWeight: 500,
              ml: 1,
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            {t("about.heroMore")}
            <KeyboardArrowDownIcon fontSize="small" sx={{ ml: 0.5 }} />
          </Box>
        </Typography>
      </Paper>
    </Box>
  );
};

export default HeroSection;
