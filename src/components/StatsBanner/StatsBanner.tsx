import { Box, Typography } from "@mui/material";

interface StatsBannerProps {}

const StatsBanner = ({}: StatsBannerProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        minHeight: 300,
        px: 4,
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
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
        },
      }}
    >
      {[
        { label: "Ведущих юристов", value: "6" },
        { label: "Лет кумулятивного опыта", value: "160" },
        { label: "В секторах", value: "8" },
      ].map((item, index) => (
        <Box
          key={index}
          sx={{ textAlign: "center", position: "relative", zIndex: 2 }}
        >
          <Typography variant="h2" color="primary">
            {item.value}
          </Typography>
          <Typography variant="h5" color="white">
            {item.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default StatsBanner;
