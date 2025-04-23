import { Paper } from "@mui/material";
import Map from "../Map/Map";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <Paper elevation={1} sx={{ p: 3, mb: 4 }}>
      <section className="contact-section">
        <h1>{t("contacts.title")}</h1>
        <p>
          {t("contacts.address")}{" "}
          <a
            href="https://go.2gis.com/xSBkb"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#004b87" }}
          >
            {t("contacts.addressDetail")}
          </a>
        </p>
        <p>
          {t("contacts.phone")}: <span>+7 777 210 4820</span>
        </p>
        <p>
          {t("contacts.email")}: <span>info@caspianconsult.kz</span>
        </p>
      </section>
      <Map />
    </Paper>
  );
};

export default ContactSection;
