import { Typography, Box, Container, Button, Collapse } from "@mui/material";
import { useTranslation } from "react-i18next";
import { forwardRef, useState } from "react";

const AboutSection = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        py: 10,
        borderRadius: "4px",
        color: "#000",
      }}
    >
      {/* Широкий контейнер */}
      <Container maxWidth="lg" sx={{ mt: 15 }}>
        {/* Центрированный заголовок с линией шире текста */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
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
                width: "160%", // ширина линии относительно текста
                height: "2px",
                backgroundColor: "divider",
              },
            }}
          >
            {t("about.title")}
          </Typography>
        </Box>

        {/* Секция с текстом и картинкой */}
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection={{ xs: "column", md: "row" }}
          gap={4}
        >
          {/* Текстовая часть */}
          <Box flex={1}>
            <Typography variant="h4" paragraph color="#dea057">
              Добро пожаловать в Caspian Consulting ltd
            </Typography>

            <Collapse in={expanded} collapsedSize={200}>
              <Typography
                variant="body1"
                paragraph
                sx={{ whiteSpace: "pre-line" }}
              >
                {t("about.fullText")}
              </Typography>
            </Collapse>

            <Button
              onClick={() => setExpanded(!expanded)}
              sx={{
                backgroundColor: "#dea057",
                color: "white",
                padding: "10px 20px",
                mt: 5,
              }}
            >
              {expanded ? "Скрыть" : "Узнать больше"}
            </Button>
          </Box>

          {/* Блок изображения */}
          <Box
            flex={1}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              width: "100%",
              height: 350,
              backgroundColor: "#ccc",
              borderRadius: "5px",
            }}
          >
            <Typography variant="caption">[Фото]</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
});

export default AboutSection;
