import {
  Box,
  Container,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Email, WhatsApp } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logoWhite.png";

interface FooterProps {
  contactRef?: React.Ref<HTMLDivElement>;
}

const Footer = ({ contactRef }: FooterProps) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      component="footer"
      ref={contactRef}
      sx={{
        bgcolor: "#000000",
        py: { xs: 6, md: 8 },
        mt: "auto",
        minHeight: "400px",
        position: "relative",
      }}
    >
      <Container maxWidth="lg" disableGutters>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexDirection: { xs: "column", md: "row" },
            mb: 2,
            px: { xs: 2, sm: 3, md: 4 },
            gap: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              flex: 1,
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                height: {
                  xs: isSmallMobile ? 50 : 60,
                  sm: 70,
                  md: 80,
                },
                transition: "all 0.3s ease",
                transform: "scale(1.4)",
                transformOrigin: "center",
              }}
            />
            <Typography color="white" sx={{ maxWidth: 600 }}>
              {t("contacts.description")}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              color: "white",
            }}
          >
            <Typography variant="h6" gutterBottom>
              {t("contacts.title")}
            </Typography>
            <Typography>{t("contacts.addressDetail")}</Typography>
            <Typography>+7(777) 210-48-20</Typography>
            <Typography>info@caspianconsult.kz</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 2,
            px: { xs: 2, sm: 3, md: 4 },
            pt: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <IconButton
              component="a"
              href="https://wa.me/+77772104820"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              sx={{
                backgroundColor: "#DEA057",
                color: "white",
                borderRadius: "10%",
                width: 58,
                height: 58,
                "&:hover": {
                  backgroundColor: "#1ebe5d",
                },
              }}
            >
              <WhatsApp sx={{ fontSize: 28 }} />
            </IconButton>
            <IconButton
              component="a"
              href="mailto:info@caspianconsult.kz"
              aria-label="Email"
              sx={{
                backgroundColor: "#DEA057",
                borderRadius: "10%",
                color: "white",
                width: 58,
                height: 58,
                "&:hover": {
                  backgroundColor: "#DEA057",
                },
              }}
            >
              <Email sx={{ fontSize: 28 }} />
            </IconButton>
          </Box>

          <Typography
            variant="body1"
            color="white"
            align="center"
            sx={{
              borderTop: "1px solid rgba(255,255,255,0.1)",
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              paddingBottom: 1,
            }}
          >
            {t("copyright")}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
