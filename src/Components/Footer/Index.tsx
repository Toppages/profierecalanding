import { Card, Text, Group, Divider, Title } from "@mantine/core";

function Footer() {
    return (
        <Card bg='#273036' shadow="sm" radius="xs" p={20}>
            <Group mr={15} ml={15} position="apart" spacing="xl" align="flex-start" mt={15}>
                <div style={{ textAlign: 'center' }}>
                    <Title c='white' order={3}>
                        Profireca
                    </Title>
                    <Text color="gray" size="sm" style={{ maxWidth: 300, margin: '0 auto', textAlign: 'justify' }}>
                        Expertos en seguridad contra incendios, brindando soluciones de calidad desde hace más de 20 años.
                    </Text>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <Title c='white' order={3}>
                        Contacto
                    </Title>
                    <Text color="gray" size="xs" style={{ textAlign: 'justify' }}>Av. Principal 123, Ciudad</Text>
                    <Text color="gray" size="xs" style={{ textAlign: 'justify' }}>+1 234 567 890</Text>
                    <Text color="gray" size="xs" style={{ textAlign: 'justify' }}>contacto@Profireca.com</Text>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <Title c='white' order={3}>
                        Horario de Atención
                    </Title>
                    <Text color="gray" size="xs" style={{ textAlign: 'justify' }}>Lunes - Viernes: 9:00 - 18:00</Text>
                    <Text color="gray" size="xs" style={{ textAlign: 'justify' }}>Sábado: 9:00 - 13:00</Text>
                    <Text color="gray" size="xs" style={{ textAlign: 'justify' }}>Domingo: Cerrado</Text>
                </div>
            </Group>

            <Divider mr={15} ml={15} my="sm" variant="dotted" mt={25} />

            <Text color="gray" size="xs" align="center" mt={25}>
                &copy; 2025 Profireca. Todos los derechos reservados.
            </Text>
        </Card>
    );
}

export default Footer;
