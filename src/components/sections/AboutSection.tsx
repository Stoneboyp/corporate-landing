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

  const paperBgColor = "#efefef";
  const textColor = "#545859";

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
      sx={{
        py: 10,
        borderRadius: "4px",
        color: textColor,
      }}
    >
      <Container maxWidth="md" sx={{ mt: 15 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 4 }}
        >
          {t("about.title")}
        </Typography>

        <Paper
          elevation={3}
          sx={{ p: 3, mb: 4, bgcolor: paperBgColor, color: textColor }}
        >
          <Typography variant="body1" paragraph>
            {t("about.history")}
          </Typography>
          <Typography variant="body1" paragraph>
            {t("about.today")}
          </Typography>
        </Paper>

        <Paper
          elevation={3}
          sx={{ p: 3, mb: 4, bgcolor: paperBgColor, color: textColor }}
        >
          <Typography variant="h5" sx={{ fontWeight: "medium", mb: 2 }}>
            {t("about.profile")}
          </Typography>
          <Typography variant="h5" sx={{ mb: 2 }}>
            {t("about.specializations.title")}
          </Typography>
          <List>
            <ListItem sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box sx={bullet} />
              <ListItemText
                primary={
                  <>
                    <strong>
                      {t("about.specializations.civil").split(":")[0]}
                    </strong>
                    :{t("about.specializations.civil").split(":")[1]}
                  </>
                }
              />
            </ListItem>
            <ListItem sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box sx={bullet} />
              <ListItemText
                primary={
                  <>
                    <strong>
                      {t("about.specializations.tax").split(":")[0]}
                    </strong>
                    :{t("about.specializations.tax").split(":")[1]}
                  </>
                }
              />
            </ListItem>
            <ListItem sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box sx={bullet} />
              <ListItemText
                primary={
                  <>
                    <strong>
                      {t("about.specializations.anticorruption").split(":")[0]}
                    </strong>
                    :{t("about.specializations.anticorruption").split(":")[1]}
                  </>
                }
              />
            </ListItem>
          </List>
        </Paper>

        <Paper
          elevation={3}
          sx={{ p: 3, bgcolor: paperBgColor, color: textColor }}
        >
          <Typography variant="h5" sx={{ fontWeight: "medium", mb: 2 }}>
            <strong>{t("about.approachTitle")}</strong>
          </Typography>
          <Typography variant="body1">{t("about.approach")}</Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default AboutSection;
