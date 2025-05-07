import { Box, Typography } from "@mui/material";

interface StatsBannerProps {}

const StatsBanner = ({}: StatsBannerProps) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          minHeight: 300,
          px: 4,
          backgroundColor: "#F3F7Fa",
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          width: "100vw",
          py: 1,
        }}
      >
        {[
          { label: "Ведущих юристов", value: "6" },
          { label: "Лет кумулятивного опыта", value: "160" },
          { label: "В  секторах", value: "..." },
        ].map((item, index) => (
          <Box key={index} sx={{ textAlign: "center" }}>
            <Typography variant="h3" color="primary">
              {item.value}
            </Typography>
            <Typography variant="subtitle1">{item.label}</Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default StatsBanner;
