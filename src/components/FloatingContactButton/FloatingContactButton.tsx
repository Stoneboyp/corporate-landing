import { Fab, Zoom, Box, IconButton, Tooltip } from "@mui/material";
import { WhatsApp, Email, Phone, ContactSupport } from "@mui/icons-material";
import { useState } from "react";

export default function FloatingContactButton() {
  const [open, setOpen] = useState(false);

  const contacts = [
    {
      icon: <Phone />,
      label: "Позвонить",
      href: "tel:+77772104820",
    },
    {
      icon: <Email />,
      label: "Email",
      href: "mailto:info@caspianconsult.kz",
    },
    {
      icon: <WhatsApp />,
      label: "WhatsApp",
      href: "https://wa.me/+77772104820",
    },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
      }}
    >
      {contacts.map((contact, index) => (
        <Zoom
          key={contact.label}
          in={open}
          style={{
            transitionDelay: open ? `${index * 80}ms` : "0ms",
          }}
        >
          <Tooltip title={contact.label} placement="left">
            <IconButton
              component="a"
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              sx={{
                bgcolor: "white",
                border: "1px solid #ccc",
                boxShadow: 2,
                "&:hover": { bgcolor: "#f0f0f0" },
              }}
            >
              {contact.icon}
            </IconButton>
          </Tooltip>
        </Zoom>
      ))}

      <Fab
        color="primary"
        aria-label="Связаться с нами"
        onClick={() => setOpen((prev) => !prev)}
        sx={{ boxShadow: 6 }}
      >
        <ContactSupport />
      </Fab>
    </Box>
  );
}
