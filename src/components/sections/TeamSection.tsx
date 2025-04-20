import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTranslation } from "react-i18next";
import PersonIcon from "@mui/icons-material/Person";

const TeamSection = () => {
  const { t } = useTranslation();
  const members = Object.entries(
    t("team.members", { returnObjects: true })
  ) as [string, any][];

  return (
    <Box
      component="section"
      sx={{ py: 10, bgcolor: "white", color: "text.primary" }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          sx={{
            mb: 4,
            pb: 2,
            borderBottom: "2px solid",
            borderColor: "divider",
            fontWeight: "bold",
          }}
        >
          {t("team.title")}
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              lg: "1fr 1fr 1fr",
            },
            gap: 3,
          }}
        >
          {members.map(([key, member]) => {
            const [imgError, setImgError] = useState(false);

            return (
              <Card
                key={key}
                sx={{
                  borderRadius: 4,
                  boxShadow: 1,
                  transition: "box-shadow 0.3s",
                  "&:hover": {
                    boxShadow: 4,
                  },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: 500,
                    overflow: "hidden",
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "#f5f5f5",
                  }}
                >
                  {!imgError && member.photo ? (
                    <Box
                      component="img"
                      src={member.photo}
                      alt={member.name}
                      onError={() => setImgError(true)}
                      sx={{
                        width: "auto",
                        height: "110%",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  ) : (
                    <PersonIcon sx={{ fontSize: 120, color: "grey.500" }} />
                  )}
                </Box>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {member.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    {member.position}
                  </Typography>
                  <Typography variant="body2">{member.bio}</Typography>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default TeamSection;
