import { Paper } from "@mui/material";
import Map from "../Map/Map";

const ContactSection = () => {
  return (
    <Paper elevation={1} sx={{ p: 3, mb: 4 }}>
      <section className="contact-section">
        <h1>Контакты:</h1>
        <p>
          Адрес:{" "}
          <span>адрес г. Астана, р-н Есиль, ул. Әлихан Бөкейхан, 6 - 238</span>
        </p>
        <p>
          Телефон: <span>+7 777 210 4820</span>
        </p>
        <p>
          Email: <span>info@caspianconsult.kz</span>
        </p>
      </section>
      <Map />
    </Paper>
  );
};

export default ContactSection;
