import { Fab, Zoom } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";
import { useEffect, useState } from "react";

export default function FloatingWhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Zoom in={visible}>
      <Fab
        color="success"
        aria-label="WhatsApp"
        href="https://wa.me/12345"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 999,
          boxShadow: 6,
        }}
      >
        <WhatsApp />
      </Fab>
    </Zoom>
  );
}
