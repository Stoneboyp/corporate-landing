import { Box, Typography } from "@mui/material";

interface StatsBannerProps {}

const StatsBanner = ({}: StatsBannerProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: 300,
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        width: "100vw",
        py: 1,
        backgroundImage: "url('/img/background/statsBackground.jpg')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          px: 4,
        }}
      >
        {[
          { label: "ведущих юристов", value: "6" },
          { label: "лет кумулятивного опыта", value: "160" },
          { label: "в секторах", value: "8" },
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              textAlign: "center",
              position: "relative",
              zIndex: 2,
              flex: index === 1 ? "0 0 auto" : 1,
              mx: index === 1 ? 4 : 0,
            }}
          >
            <Typography
              variant="h1"
              color="#dea057"
              sx={{
                WebkitTextStroke: "1px black",
                fontWeight: 600,
                fontFamily: "'Rajdhani', sans-serif",
              }}
            >
              {item.value}
            </Typography>
            <Typography variant="h5" color="white" sx={{ fontWeight: "bold" }}>
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default StatsBanner;
