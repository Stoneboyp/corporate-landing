// components/LanguageSwitcher.tsx
import { useTranslation } from "react-i18next";
import { Button, Menu, MenuItem, Box } from "@mui/material";
import { useState, useEffect, useRef } from "react";

interface LanguageSwitcherProps {
  scrolled?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  scrolled = false,
}) => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const currentLang = i18n.language;
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const handleLanguageChanged = () => {
      if (anchorEl) {
        setClosing(true);
        setTimeout(() => {
          setAnchorEl(null);
          setClosing(false);
        }, 100);
      }
    };

    i18n.on("languageChanged", handleLanguageChanged);
    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, [anchorEl, i18n]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (closing) return;
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    if (!closing) {
      setAnchorEl(null);
    }
  };

  const changeLanguage = (lang: string) => {
    if (lang !== currentLang) {
      i18n.changeLanguage(lang);
    }
  };

  const handleRussianLanguage = () => {
    changeLanguage("ru");
    setTimeout(() => {
      setAnchorEl(null);
    }, 50);
  };

  return (
    <Box ref={menuRef} sx={{ position: "relative", display: "inline-block" }}>
      <Button
        onClick={handleClick}
        sx={{
          minWidth: 40,
          fontWeight: "medium",
          textTransform: "uppercase",
          fontSize: 14,
          color: scrolled ? "black" : "white",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
        aria-controls="language-menu"
        aria-haspopup="true"
      >
        {currentLang}
      </Button>

      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl) && !closing}
        onClose={handleClose}
        disableScrollLock
        MenuListProps={{
          "aria-labelledby": "language-button",
          sx: { py: 0 },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{
          "& .MuiPaper-root": {
            mt: 1,
            boxShadow: 3,
          },
        }}
      >
        {["en", "kz", "ru"]
          .filter((lang) => lang !== currentLang)
          .map((lang) => (
            <MenuItem
              key={lang}
              onClick={
                lang === "ru"
                  ? handleRussianLanguage
                  : () => changeLanguage(lang)
              }
              sx={{
                textTransform: "uppercase",
                fontSize: 14,
                minHeight: "32px",
                "&:hover": {
                  backgroundColor: "action.hover",
                },
              }}
            >
              {lang.toUpperCase()}
            </MenuItem>
          ))}
      </Menu>
    </Box>
  );
};

export default LanguageSwitcher;
