import { Box, Container, Typography } from "@mui/material";

interface TeamSectionProps {}

const TeamSection = ({}: TeamSectionProps) => {
  return (
    <>
      <Container>
        <Box>
          <Typography
            variant="h5"
            sx={{
              display: "inline-block",
              fontWeight: "bold",
              position: "relative",
              pb: 1,
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "160%",
                height: "2px",
                backgroundColor: "divider",
              },
            }}
          >
            Наша команда
          </Typography>
          <Typography>
            Высококвалифицированные эксперты, ориентированные на предоставление
            правовых услуг на высоком уровне. Каждый обладает обширным опытом и
            обеспечивает индивидуальный подход к каждому клиенту и делу.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default TeamSection;
