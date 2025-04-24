import { useTranslation } from "react-i18next";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState, useEffect } from "react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const currentLang = i18n.language;

  // Управляем стилями при открытии/закрытии меню
  useEffect(() => {
    if (open) {
      // Зафиксировать ширину окна, чтобы избежать изменений разметки
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden"; // Убираем прокрутку
      document.body.style.paddingRight = `${scrollBarWidth}px`; // Компенсируем ширину полосы прокрутки
    } else {
      document.body.style.overflow = "auto"; // Восстанавливаем прокрутку
      document.body.style.paddingRight = "0"; // Убираем компенсацию
    }

    // Очистка при размонтировании компонента
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0";
    };
  }, [open]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lang?: string) => {
    if (lang && lang !== currentLang) {
      i18n.changeLanguage(lang);
    }
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        sx={{
          minWidth: 40,
          fontWeight: "medium",
          textTransform: "uppercase",
          fontSize: 14,
          color: "text.primary",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        {currentLang}
      </Button>
      <Menu
        disablePortal
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        MenuListProps={{
          onMouseLeave: () => handleClose(),
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
          mt: 1,
        }}
      >
        {["ru", "kz", "en"].map(
          (lang) =>
            lang !== currentLang && (
              <MenuItem key={lang} onClick={() => handleClose(lang)}>
                {lang.toUpperCase()}
              </MenuItem>
            )
        )}
      </Menu>
    </>
  );
};

export default LanguageSwitcher;
