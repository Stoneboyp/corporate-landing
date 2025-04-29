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
  const textColor = "#black";

  const bullet = {
    width: 8,
    height: 8,
    bgcolor: "black",
    borderRadius: "50%",
    flexShrink: 0,
  };

  const sectionTitleStyle = {
    mb: 4,
    pb: 2,
    borderBottom: "2px solid",
    borderColor: "divider",
    fontWeight: "bold",
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
        <Paper
          elevation={3}
          sx={{ p: 3, mb: 4, bgcolor: paperBgColor, color: textColor }}
        >
          <Typography variant="h5" sx={sectionTitleStyle}>
            {t("about.title")}
          </Typography>
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
          <Typography variant="h5" sx={sectionTitleStyle}>
            {t("about.profileTitle")}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {t("about.profile")}
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "medium", mb: 2 }}>
            {t("about.specializations.title")}
          </Typography>

          <List>
            {["civil", "tax", "anticorruption"].map((key) => {
              const [title, description] = t(
                `about.specializations.${key}`
              ).split(":");
              return (
                <ListItem
                  key={key}
                  sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}
                >
                  <Box sx={bullet} mt="7px" />
                  <ListItemText
                    primary={
                      <>
                        <strong>{title}</strong>: {description}
                      </>
                    }
                  />
                </ListItem>
              );
            })}
          </List>
        </Paper>

        <Paper
          elevation={3}
          sx={{ p: 3, bgcolor: paperBgColor, color: textColor }}
        >
          <Typography variant="h5" sx={sectionTitleStyle}>
            {t("about.approachTitle")}
          </Typography>
          <Typography variant="body1">{t("about.approach")}</Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default AboutSection;
