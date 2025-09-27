import { useTranslation } from "react-i18next";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export const Competencies = () => {
  const { t } = useTranslation();
  const sections = t("competencies.sections", { returnObjects: true }) as {
    title: string;
    items: string[];
  }[];

  return (
    <Box py={10}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h5" fontWeight="bold">
          {t("competencies.title")}
        </Typography>
      </Box>

      {sections.map((section, index) => (
        <Box key={index} mb={4}>
          <Typography variant="h6" gutterBottom>
            {section.title}
          </Typography>
          <List dense>
            {section.items.map((item, idx) => (
              <ListItem key={idx} disablePadding>
                <ListItemIcon sx={{ minWidth: 24 }}>
                  <FiberManualRecordIcon sx={{ fontSize: 12 }} />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Box>
  );
};

export default Competencies;
