import { Box, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
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
            maxWidth: 950,
            fontSize: { xs: "0.9rem", sm: "1.2rem", md: "1.4rem" },
            whiteSpace: "pre-line",
          }}
        >
          {t("about.hero")}
        </Typography>
      </Paper>
    </Box>
  );
};

export default HeroSection;
