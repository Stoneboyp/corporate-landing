import { Button, ButtonGroup } from "@mui/material";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "ru", label: "Рус" },
  { code: "en", label: "Eng" },
  { code: "kz", label: "Қаз" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <ButtonGroup size="small" variant="outlined">
      {languages.map(({ code, label }) => (
        <Button
          key={code}
          onClick={() => i18n.changeLanguage(code)}
          variant={i18n.language === code ? "contained" : "outlined"}
        >
          {label}
        </Button>
      ))}
    </ButtonGroup>
  );
}
