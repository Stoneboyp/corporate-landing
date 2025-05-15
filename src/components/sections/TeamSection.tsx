import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActions,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface TeamSectionProps {}

const TeamSection = ({}: TeamSectionProps) => {
  const { t } = useTranslation();
  const teamMembers = t("team.members", { returnObjects: true }) as Record<
    string,
    any
  >;
  const membersArray = Object.values(teamMembers);

  return (
    <Box sx={{ py: 13 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
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
          <Typography variant="body1" sx={{ mt: 3, maxWidth: 800, mx: "auto" }}>
            Профессиональные юристы с экспертизой в различных областях права.
            Гарантируем качественное решение ваших юридических вопросов.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {membersArray.map((member, index) => (
            // @ts-ignore
            <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: 2,
                  borderRadius: 2,
                  "&:hover": {
                    boxShadow: 4,
                  },
                  width: "100%",
                }}
              >
                <Box>
                  <CardMedia
                    component="img"
                    height="200"
                    image={member.photo}
                    alt={member.name}
                    sx={{
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="subtitle1" fontWeight="medium">
                      {member.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      {member.services}
                    </Typography>
                  </CardContent>
                </Box>
                <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                  <Button
                    variant="outlined"
                    size="small"
                    component={Link}
                    to="/team"
                    sx={{
                      borderColor: "#dea057",
                      color: "#dea057",
                      "&:hover": {
                        backgroundColor: "#dea057",
                        color: "white",
                        borderColor: "#dea057",
                      },
                    }}
                  >
                    Подробнее
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TeamSection;
