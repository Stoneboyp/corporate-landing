import {
  Typography,
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();

  const bullet = {
    width: 6,
    height: 6,
    bgcolor: "black",
    borderRadius: "50%",
    flexShrink: 0,
  };
  return (
    <Box
      component="section"
      sx={{ py: 10, bgcolor: "rgba(245, 245, 245, 0.5)", borderRadius: "4px" }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 4 }}
        >
          {t("about.title")}
        </Typography>

        <Paper elevation={1} sx={{ p: 3, mb: 4 }}>
          <Typography variant="body1" paragraph>
            {t("about.history")}
          </Typography>
          <Typography variant="body1" paragraph>
            {t("about.today")}
          </Typography>
        </Paper>

        <Paper elevation={1} sx={{ p: 3, mb: 4, bgcolor: "white" }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            {t("about.profile")}
          </Typography>
          <Typography variant="h6">
            {t("about.specializations.title")}
          </Typography>
          <List>
            <ListItem sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box sx={bullet} />
              <ListItemText primary={t("about.specializations.civil")} />
            </ListItem>

            <ListItem sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box sx={bullet} />
              <ListItemText primary={t("about.specializations.tax")} />
            </ListItem>

            <ListItem sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box sx={bullet} />
              <ListItemText
                primary={t("about.specializations.anticorruption")}
              />
            </ListItem>
          </List>
        </Paper>

        <Paper elevation={1} sx={{ p: 3, bgcolor: "grey.100" }}>
          <Typography variant="h5" sx={{ fontWeight: "medium", mb: 2 }}>
            {t("about.approachTitle")}
          </Typography>
          <Typography variant="body1">{t("about.approach")}</Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default AboutSection;
