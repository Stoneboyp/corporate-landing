import { useEffect, useState } from "react";
import { Card, CardContent, Box, Typography, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import PersonIcon from "@mui/icons-material/Person";

const TeamMemberCard = ({ member }: { member: any }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <Card
      sx={{
        borderRadius: 4,
        boxShadow: 1,
        transition: "box-shadow 0.3s",
        "&:hover": { boxShadow: 4 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: 500,
          overflow: "hidden",
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
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
              transition: "transform 0.4s ease-in-out",
              "&:hover": { transform: "scale(1.05)" },
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
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {member.position}
        </Typography>
        {member.bio?.split("\n\n").map((paragraph: string, idx: number) => (
          <Typography
            sx={{
              whiteSpace: "pre-line",
              textAlign: "justify",
            }}
            key={idx}
            variant="body2"
            paragraph
          >
            {paragraph}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

const TeamSection = () => {
  const { t, i18n } = useTranslation();
  const [members, setMembers] = useState<{ [key: string]: any }>({});

  useEffect(() => {
    const teamData = t("team.members", { returnObjects: true }) as {
      [key: string]: any;
    };
    setMembers(teamData);
  }, [t, i18n.language]);

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
          {Object.entries(members).map(([key, member]) => (
            <TeamMemberCard key={key} member={member} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TeamSection;
