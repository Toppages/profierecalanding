import { useState } from "react";
import {
  Anchor,
  Breadcrumbs,
  Title,
  Text,
  Modal,
  Select,
  TextInput,
  Button,
  Textarea,
  Image,
  Grid,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import "./Service.scss";
import servicio1 from "../../assets/MANTENIMIENTO SISTEMAS FIJOS CONTRA INCENDIO.png";
import servicio2 from "../../assets/MANTENIMIENTO SISTEMA DETECCION DE INCENDIOS.png";
import servicio3 from "../../assets/INSTALACION Y VENTA DE LAMPARAS DE EMERGENCIA.png";
import servicio4 from "../../assets/Venta y recarga de todo tipo de extintores.png";
import servicio5 from "../../assets/EQUIPO DE PROTECCION.png";
import servicio6 from "../../assets/ASESORIA Y CAPACITACION EN SEGURIDAD.png";
import servicio7 from "../../assets/CONTROL DE PLAGAS, FUMIGACION Y SANITIZACION.png";

function Service() {
  const [opened, setOpened] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [selectedCard, setSelectedCard] = useState<any>(null);

  const form = useForm({
    initialValues: {
      name: "",
      message: "",
      branch: "",
    },
    validate: {
      name: (value) => (value ? null : "El nombre es requerido"),
      message: (value) => (value ? null : "El mensaje es requerido"),
      branch: (value) => (value ? null : "Sucursal es requerida"),
    },
  });

  const branches = [
    { value: "Zulia", label: "Zulia", phone: "+584127341636" },
    { value: "Caracas", label: "Caracas", phone: "+584127341637" },
    { value: "Anzoategui", label: "Anzoategui", phone: "+584127341638" },
  ];

  const items = [
    { title: "Inicio", href: "/profierecalanding" },
    { title: "Servicios", href: "#" },
  ].map((item, index) => (
    <Anchor c="black" href={item.href} key={index}>
      <Text fw={700}>{item.title}</Text>
    </Anchor>
  ));

  const cards = [
    { title: "VENTA MANTENIMIENTO E INGENIERÍA DE SISTEMAS FIJOS CONTRA INCENDIO", imageSrc: servicio1 ,description: "Explore the Pacific Northwest on your terms with our custom tours."},
    { title: "VENTA MANTENIMIENTO E INGENIERÍA DE SISTEMAS DE DETECCIÓN DE INCENDIOS", imageSrc: servicio2 ,description: "Explore the Pacific Northwest on your terms with our custom tours."},
    { title: "INSTALACIÓN Y VENTA DE LÁMPARAS DE EMERGENCIA", imageSrc: servicio3,description: "Explore the Pacific Northwest on your terms with our custom tours."},
    { title: "VENTA Y RECARGA DE TODO TIPO DE EXTINTORES", imageSrc: servicio4 ,description: "Explore the Pacific Northwest on your terms with our custom tours."},
    { title: "EQUIPOS DE PROTECCIÓN PERSONAL Y BIOSEGURIDAD", imageSrc: servicio5,description: "Explore the Pacific Northwest on your terms with our custom tours."},
    { title: "ASESORÍA Y CAPACITACIÓN EN SEGURIDAD Y SALUD LABORAL", imageSrc: servicio6,description: "Explore the Pacific Northwest on your terms with our custom tours."},
    { title: "CONTROL DE PLAGAS, FUMIGACIÓN Y SANITIZACIÓN", imageSrc: servicio7 ,description: "Explore the Pacific Northwest on your terms with our custom tours."},
  ];

  const handleCardClick = (card: any) => {
    setSelectedCard(card);
    setOpened(true);
  };

  const handleSubmit = (values: typeof form.values) => {
    const selectedBranch = branches.find((branch) => branch.value === values.branch);
    if (selectedBranch) {
      setPhoneNumber(selectedBranch.phone);
      setMessage(`Hola, soy ${values.name}. ${values.message} \n\nPresupesto para: ${selectedCard?.title}`);
      form.reset(); 
    }
  };

  const handleWhatsAppClick = () => {
    if (phoneNumber && message) {
      const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, "_blank");
    }
  };

  const handleModalClose = () => {
    setOpened(false);
    form.reset(); 
  };

  return (
    <>
      <Breadcrumbs mt={45} ml={15}>
        {items}
      </Breadcrumbs>
      <Title mt={15} mb={15} ta="center" order={1}>
        Servicios
      </Title>

      <div className="card-container">
        {cards.map((card, index) => (
          <div className="card" key={index} onClick={() => handleCardClick(card)}>
            <div className="card-image-wrapper">
              <Image src={card.imageSrc} alt={card.title} radius="md" />
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className="card-wave"
              >
                <path
                  fill="#ffffff"
                  fillOpacity="1"
                  d="M0,192L1440,32L1440,320L0,320Z"
                ></path>
              </svg>
            </div>
            <div className="card-content">
              <Title ta="center" order={4}>
                {card.title}
              </Title>
               <Text ta='center' mt={3} c="dimmed">{card.description}</Text>
            </div>
          </div>
        ))}
      </div>

      <Modal opened={opened} onClose={handleModalClose} size="xl" centered overlayBlur={3} withCloseButton={false}>
        <Grid gutter="xl" align="center">
          <Grid.Col xs={12} sm={6}>
            <Image src={selectedCard?.imageSrc} alt={selectedCard?.title} radius="md" />
          </Grid.Col>
          <Grid.Col xs={12} sm={6}>
            <Title order={2} ta="center">
              Cotiza con nosotros
            </Title>
            <form onSubmit={form.onSubmit((values) => { handleSubmit(values); handleWhatsAppClick(); })}>
              <TextInput mt={15} placeholder="Nombre" {...form.getInputProps("name")} />
              <Select
                mt={15}
                placeholder="Sucursal"
                data={branches}
                {...form.getInputProps("branch")}
              />
              <Textarea mt={15} placeholder="Mensaje" {...form.getInputProps("message")} />
              <Button
                mt={15}
                fullWidth
                color="green"
                disabled={!form.isValid()}
                type="submit"
              >
                Enviar por WhatsApp
              </Button>
            </form>
          </Grid.Col>
        </Grid>
      </Modal>
    </>
  );
}

export default Service;
