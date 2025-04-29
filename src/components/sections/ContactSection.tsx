import { Box, Container, Typography, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();

  const paperBgColor = "#efefef";

  return (
    <Box
      component="section"
      sx={{
        py: 10,
        borderRadius: "4px",
      }}
    >
      <Container maxWidth="md" sx={{}}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            mb: 4,
            pb: 2,
            borderBottom: "2px solid",
            borderColor: "divider",
            fontWeight: "bold",
          }}
        >
          {t("contacts.title")}
        </Typography>

        <Paper elevation={3} sx={{ p: 3, bgcolor: paperBgColor }}>
          <Typography variant="body1" paragraph>
            {t("contacts.address")}{" "}
            <Typography component="span" variant="body1" fontWeight="medium">
              {t("contacts.addressDetail")}
            </Typography>
          </Typography>

          <Typography variant="body1" paragraph>
            {t("contacts.phone")}:{" "}
            <Typography component="span" variant="body1" fontWeight="medium">
              +7 777 210 4820
            </Typography>
          </Typography>

          <Typography variant="body1">
            {t("contacts.email")}:{" "}
            <Typography component="span" variant="body1" fontWeight="medium">
              info@caspianconsult.kz
            </Typography>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default ContactSection;
