import {
  Typography,
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import { t } from "i18next";

const AboutSection = () => {
  return (
    <Box
      component="section"
      sx={{ py: 10, bgcolor: "grey.50", borderRadius: "4px" }}
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
          <List>
            <ListItem>
              <ListItemText primary={t("about.specializations.civil")} />
            </ListItem>
            <ListItem>
              <ListItemText primary={t("about.specializations.tax")} />
            </ListItem>
            <ListItem>
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
