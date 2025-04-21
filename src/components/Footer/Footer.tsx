import { Box, Container, IconButton, Typography } from "@mui/material";
import { Email, Telegram, WhatsApp } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#f5f5f5", py: 4, mt: "auto" }}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © 2025 Caspian Consulting. Все права защищены.
        </Typography>
        <Box>
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
      </Container>
    </Box>
  );
}
