import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { forwardRef } from "react";

interface Service {
  title: string;
  description: string;
  img: string;
}

const services: Service[] = [
  {
    title: "Корпоративное право",
    description:
      "Консультируем по вопросам создания, управления, реорганизации и ликвидации юридических лиц. Обеспечиваем правовую защиту интересов участников и акционеров, включая урегулирование корпоративных споров.",
    img: "img/services/corporate.jpeg",
  },
  {
    title: "Договорное право",
    description:
      "Разрабатываем, анализируем и сопровождаем договоры любой сложности, включая международные контракты. Помогаем минимизировать риски и защищаем интересы клиентов при возникновении споров.",
    img: "img/services/contract.jpg",
  },
  {
    title: "Налоговое право",
    description:
      "Предоставляем комплексные консультации по налогообложению и налоговому планированию. Сопровождаем процедуры обжалования актов налоговых органов.",
    img: "img/services/tax.jpg",
  },
  {
    title: "Недропользование и природоресурсное право",
    description:
      "Оказываем правовую поддержку недропользователям на всех этапах — от получения лицензий до операционной деятельности. Имеем значительный опыт в сопровождении нефтегазовых и горнорудных проектов.",
    img: "img/services/natural.jpg",
  },
  {
    title: "Земельное право и недвижимость",
    description:
      "Сопровождаем сделки с землей и объектами недвижимости, включая юридическую экспертизу и оформление прав. Представляем интересы клиентов в земельных и имущественных спорах.",
    img: "img/services/land.jpg",
  },
  {
    title: "Трудовое право",
    description:
      "Разрабатываем трудовые договоры, коллективные соглашения и внутренние нормативные акты. Консультируем по вопросам увольнения, споров с работниками и соблюдения трудового законодательства.",
    img: "img/services/job.jpeg",
  },
  {
    title: "Административное право",
    description:
      "Сопровождаем обжалование действий и решений государственных органов, включая сопровождение проверок. Представляем клиентов в административных спорах и взаимодействуем с госорганами.",
    img: "img/services/administration.jpeg",
  },
  {
    title: "Финансовое и банковское право",
    description:
      "Консультируем по вопросам регулирования финансовых рынков, банковской деятельности и привлечения инвестиций. Сопровождаем сделки с ценными бумагами и консультируем по вопросам AIFC.",
    img: "img/services/financial.jpg",
  },
  {
    title: "Судебное и арбитражное представительство",
    description:
      "Представляем интересы клиентов в судах всех инстанций Республики Казахстан. Имеем опыт в международном арбитраже, включая процедуры при AIFC, ICC, LCIA и других институтах.",
    img: "img/services/arbitration.jpg",
  },
  {
    title: "Интеллектуальная собственность и IT-право",
    description:
      "Защищаем права на товарные знаки, изобретения, авторские и смежные права. Консультируем по вопросам цифрового права, обработки персональных данных и ИТ-контрактов.",
    img: "img/services/it.jpeg",
  },
  {
    title: "Конкурентное право",
    description:
      "Сопровождаем клиентов при взаимодействии с антимонопольными органами и согласовании сделок. Осуществляем правовую защиту от недобросовестной конкуренции и антиконкурентных практик.",
    img: "img/services/competitive.jpg",
  },
  {
    title: "Право МФЦА (AIFC Law)",
    description:
      "Предоставляем юридическое сопровождение сделок и проектов в юрисдикции Международного финансового центра «Астана». Работаем в рамках AIFC Common Law с учетом международных стандартов регулирования.",
    img: "img/services/mfca.webp",
  },
  {
    title: "ГЧП и инфраструктурные проекты",
    description:
      "Консультируем по заключению и реализации соглашений о государственно-частном партнерстве. Сопровождаем инфраструктурные проекты на всех стадиях — от концепции до эксплуатации.",
    img: "img/services/infrastructure.jpg",
  },
  {
    title: "ESG и устойчивое развитие",
    description:
      "Оказываем правовую поддержку в интеграции ESG-подходов в корпоративную политику и отчетность. Сопровождаем проекты, направленные на устойчивое развитие и соблюдение международных стандартов.",
    img: "img/services/esg.jpg",
  },
  {
    title: "Комплаенс и антикоррупционная экспертиза",
    description:
      "Проводим правовую экспертизу на предмет соответствия требованиям антикоррупционного законодательства. Разрабатываем и внедряем корпоративные комплаенс-программы и механизмы внутреннего контроля.",
    img: "img/services/complaens.jpg",
  },
];

const ServiceCard = ({ title, description, img }: Service) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const circleSize = {
    xs: 80,
    sm: 120,
    md: 140,
  };

  return (
    <Box
      sx={{
        position: "relative",
        pl: {
          xs: `${circleSize.xs + 16}px`,
          sm: `${circleSize.sm + 16}px`,
          md: `${circleSize.md + 16}px`,
        },
        py: 2,
        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          width: {
            xs: `${circleSize.xs}px`,
            sm: `${circleSize.sm}px`,
            md: `${circleSize.md}px`,
          },
          height: {
            xs: `${circleSize.xs}px`,
            sm: `${circleSize.sm}px`,
            md: `${circleSize.md}px`,
          },
          backgroundColor: theme.palette.background.paper,
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "50%",
          zIndex: 0,
          flexShrink: 0,
          boxShadow: theme.shadows[1],
          [theme.breakpoints.down("sm")]: {
            top: "50%",
            transform: "translateY(-50%)",
          },
        },
      }}
    >
      <Typography
        variant={isMobile ? "h6" : "h5"}
        gutterBottom
        color="#dea057"
        sx={{ position: "relative", zIndex: 1 }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ position: "relative", zIndex: 1 }}
      >
        {description}
      </Typography>
    </Box>
  );
};

const ServicesSection = forwardRef<HTMLDivElement>((_, ref) => {
  const theme = useTheme();

  return (
    <Box
      ref={ref}
      sx={{
        backgroundColor: theme.palette.grey[100],
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        width: "100vw",
        py: 2,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          mt: { xs: 8, sm: 10, md: 15 },
          backgroundColor: theme.palette.grey[100],
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box sx={{ textAlign: "center", mb: { xs: 4, sm: 6 } }}>
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
                width: { xs: "120%", sm: "160%" },
                height: "2px",
                backgroundColor: theme.palette.divider,
              },
            }}
          ></Typography>
        </Box>

        <Grid container spacing={{ xs: 2, sm: 4 }}>
          {services.map((service, index) => (
            // @ts-ignore
            <Grid item size={{ xs: 12, sm: 6 }} key={index}>
              <ServiceCard {...service} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
});

export default ServicesSection;
