import { Box, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "70vh",
        background: "url('/img/landing/1.jpg') center/cover no-repeat",
        display: "flex",
        flexDirection: "column",
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
      <Typography variant="h2" sx={{ mb: 2 }}>
        Добро пожаловать
      </Typography>
      <Typography variant="h5">
        Мы предоставляем профессиональные юридические услуги
      </Typography>
    </Box>
  );
};

export default HeroSection;
