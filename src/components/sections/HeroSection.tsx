import { Box, Paper, Typography } from "@mui/material";

const HeroSection = () => {
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
          justifyContent: "center",
          alignItems: "center",
          p: { xs: 2, sm: 4 }, // Меньше паддинг на мобилках
          boxSizing: "border-box",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "white",
            textAlign: "justify",
            maxWidth: 800,
            fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" }, // адаптивный размер текста
          }}
        >
          Caspian Consulting ltd. оказывает юридическую поддержку по вопросам
          корпоративного и налогового права. Компания предлагает
          квалифицированную юридическую поддержку для эффективного решения
          вопросов, связанных с правами собственности, корпоративным
          управлением, неправомерными налоговыми требованиями, антикоррупционным
          законодательством и многими другими юридическими аспектами вашего
          бизнеса.
        </Typography>
      </Paper>
    </Box>
  );
};

export default HeroSection;
