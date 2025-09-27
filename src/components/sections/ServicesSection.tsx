import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { t } from "i18next";
import { forwardRef } from "react";
import { useTranslation } from "react-i18next";

interface Service {
  key: string;
  img: string;
}

const services: Service[] = [
  { key: "corporateLaw", img: "img/services/corporate.jpeg" },
  { key: "contractLaw", img: "img/services/contract.jpg" },
  { key: "taxLaw", img: "img/services/tax.jpg" },
  { key: "naturalResourcesLaw", img: "img/services/natural.jpg" },
  { key: "landLaw", img: "img/services/land.png" },
  { key: "laborLaw", img: "img/services/job.jpeg" },
  { key: "administrativeLaw", img: "img/services/administration.jpeg" },
  { key: "financialLaw", img: "img/services/financial.jpg" },
  { key: "disputeResolution", img: "img/services/arbitration.png" },
  { key: "itLaw", img: "img/services/it.jpeg" },
  { key: "competitionLaw", img: "img/services/competitive.jpg" },
  { key: "aifcLaw", img: "img/services/mfca.webp" },
  { key: "infrastructureLaw", img: "img/services/infrastructure.jpg" },
  { key: "esgLaw", img: "img/services/esg.jpg" },
  { key: "complianceLaw", img: "img/services/complaens.jpg" },
];

const ServiceCard = ({ service }: { service: Service }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const circleSize = {
    xs: 80,
    sm: 120,
    md: 140,
  };

  return (
    <Box
      sx={{
        position: "relative",
        pl: {
          xs: `${circleSize.xs + 16}px`,
          sm: `${circleSize.sm + 16}px`,
          md: `${circleSize.md + 16}px`,
        },
        my: 2,
        p: 2,
        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          width: {
            xs: `${circleSize.xs}px`,
            sm: `${circleSize.sm}px`,
            md: `${circleSize.md}px`,
          },
          height: {
            xs: `${circleSize.xs}px`,
            sm: `${circleSize.sm}px`,
            md: `${circleSize.md}px`,
          },
          backgroundColor: theme.palette.background.paper,
          backgroundImage: `url(${service.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "50%",
          boxShadow: theme.shadows[1],
          [theme.breakpoints.down("sm")]: {
            top: "50%",
            transform: "translateY(-50%)",
          },
        },
      }}
    >
      <Typography
        variant={isMobile ? "h6" : "h5"}
        gutterBottom
        color="#dea057"
        sx={{ position: "relative", zIndex: 1 }}
      >
        {t(`about.specializations.${service.key}.title`)}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ position: "relative", zIndex: 1 }}
      >
        {t(`about.specializations.${service.key}.description`)}
      </Typography>
    </Box>
  );
};

const ServicesSection = forwardRef<HTMLDivElement>((_, ref) => {
  const theme = useTheme();

  return (
    <Box
      ref={ref}
      sx={{
        backgroundColor: theme.palette.grey[100],
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        width: "100vw",
        py: 2,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          mt: { xs: 8, sm: 10, md: 15 },
          backgroundColor: theme.palette.grey[100],
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box sx={{ textAlign: "center", mb: { xs: 4, sm: 6 } }}>
          <Typography
            variant="h5"
            sx={{
              display: "inline-block",
              fontWeight: "bold",
              position: "relative",
              pb: 1,
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: { xs: "120%", sm: "160%" },
                height: "2px",
                backgroundColor: theme.palette.divider,
              },
            }}
          >
            {t("about.services.title")}
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, sm: 4 }}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, sm: 6 }} key={index}>
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
});

ServicesSection.displayName = "ServicesSection";

export default ServicesSection;
