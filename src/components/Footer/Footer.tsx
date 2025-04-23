import { Box, Container, IconButton, Typography } from "@mui/material";
import { Email, Telegram, WhatsApp } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <Box component="footer" sx={{ bgcolor: "#f5f5f5", py: 4, mt: "auto" }}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: { sm: "absolute" },
            left: { sm: 0 },
            display: "flex",
            gap: 1,
          }}
        >
          <IconButton
            component="a"
            href="https://wa.me/1234"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <WhatsApp color="primary" />
          </IconButton>
          <IconButton
            component="a"
            href="mailto:info@caspianconsulting.kz"
            aria-label="Email"
          >
            <Email color="action" />
          </IconButton>
          <IconButton
            component="a"
            href="https://t.me/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
          >
            <Telegram sx={{ color: "#229ED9" }} />
          </IconButton>
        </Box>

        <Typography variant="body2" color="text.secondary" align="center">
          {t("copyright")}
        </Typography>
      </Container>
    </Box>
  );
}
