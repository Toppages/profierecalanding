import { Title, Text, Grid, Col, Card, Image, Anchor, Breadcrumbs } from '@mantine/core';
import varios from '../../assets/VARIADOS 500X300.png'
import varios2 from '../../assets/VARIADOS 500X300 2.png'
import varios3 from '../../assets/VARIADOS 500X300 3.png'
import varios4 from '../../assets/VARIADOS 500X300 4.png'
import varios5 from '../../assets/VARIADOS 500X300 5.png'
import lema from '../../assets/PROFIRECA BANNER LEMA WEB.png'
import valor from '../../assets/QUE NOS IDENTIFICA PROFIRECA WEB.png'

function About() {
  const items = [
    { title: 'Inicio', href: '/profierecalanding' },
    { title: 'Nuestra empresa ', href: '#' },
  ].map((item, index) => (
    <Anchor c='black' href={item.href} key={index}>
      <Text c='black' fw={700}>
        {item.title}
      </Text>
    </Anchor>
  ));
  return (
    <>
      <Breadcrumbs mt={45} ml={15}>{items}</Breadcrumbs>

      <Image mt={5} radius='md' src={lema} alt="Imagen 1" mb="md" />

      <Grid gutter="xl" grow mt="xl" mr={15} ml={15}>
        <Col span={12} md={6}>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Title order={3} ta="center" mb="md" fz={32}>
              Visión
            </Title>
            <Text fz={18} color="dimmed" align="center">
              Comprometidos con tu seguridad buscamos ser los mayores fabricantes, comercializadores y distribuidores a nivel nacional e internacional
              de herramientas de seguridad industrial y vial,
              valorando principalmente el talento humano
              ofreciedo asesoría personalizada a nuestros
              clientes según sus necesidades y ser una de
              las principales empresas en servicios de protección contra incendios de la industria petrolera.
            </Text>
          </Card>
        </Col>

        <Col span={12} md={6}>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Title mt={15}  order={3} ta="center" mb="xl" fz={32}>
              Misión
            </Title>
            <Text mb={35} fz={18} color="dimmed" align="center">
              En PROFIRECA nuestra misión es brindar el
              mejor servicio y elevar la seguridad de las
              empresas venezolanas, mediante productos
              de calidad que marcan la diferencia, abarcando desde pequeñas empresas hasta
              grandes industrias petroleras.

            </Text>
          </Card>
        </Col>

        <Col span={12}>
          <Image mt={10} radius='md' src={valor} alt="Imagen 1" mb="md" />

        </Col>

        <Col span={12}>
          <Title order={3} ta="center" mb="md" fz={32}>
            Nuestros Valores
          </Title>
        </Col>

        <Grid gutter="xl">
          <Col span={12} sm={6} md={6}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Title order={4} ta="center" mb="md" fz={24}>
                RESPETO
              </Title>
              <Text fz={18} color="dimmed" align="center">
                Aceptar las diferencias de cada individuo mejorando sus cualidades para lograr un gran trabajo en equipo.
              </Text>
            </Card>
          </Col>

          <Col span={12} sm={6} md={6}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Title order={4} ta="center" mb="md" fz={24}>
                LIDERAZGO
              </Title>
              <Text fz={18} color="dimmed" align="center">
                Influir en otros de la mejor manera posible logrando sus objetivos planificados conjuntamente.
              </Text>
            </Card>
          </Col>

          <Col span={12} sm={6} md={6}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Title order={4} ta="center" mb="md" fz={24}>
                SERVICIO
              </Title>
              <Text fz={18} color="dimmed" align="center">
                Buscar siempre la forma de conseguir la meta trazada, superando todas las situaciones que se presenten.
              </Text>
            </Card>
          </Col>

          <Col span={12} sm={6} md={6}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Title order={4} ta="center" mb="md" fz={24}>
                PERSEVERANCIA
              </Title>
              <Text fz={18} color="dimmed" align="center">
                Entregar siempre lo mejor de cada uno, con la firme intención de generar bienestar a los demás.
              </Text>
            </Card>
          </Col>
        </Grid>
      </Grid>
      <Grid gutter="xl" grow mt="xl" mr={15} ml={15}>
        <Grid.Col span={4}>
          <img
            src={varios}
            alt="Imagen 1"
            style={{ width: '100%', height: 'auto' }}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <img
            src={varios2}
            alt="Imagen 2"
            style={{ width: '100%', height: 'auto' }}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <img
            src={varios3}
            alt="Imagen 3"
            style={{ width: '100%', height: 'auto' }}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <img
            src={varios4}
            alt="Imagen 4"
            style={{ width: '100%', height: 'auto' }}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <img
            src={varios5}
            alt="Imagen 5"
            style={{ width: '100%', height: 'auto' }}
          />
        </Grid.Col>
      </Grid>
    </>
  );
}

export default About;
