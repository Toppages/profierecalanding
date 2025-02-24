import { Card, Text, Group, Divider, Title } from "@mantine/core";

function Footer() {
    return (
        <Card bg='#273036' shadow="sm" radius="xs" p={20}>
            <Group 
                mr={15} 
                mb='xl'
                ml={15} 
                position="apart" 
                spacing="xl" 
                align="flex-start" 
                mt={15} 
                style={{ textAlign: 'center' }}
            >
                <div style={{ maxWidth: 300, margin: '0 auto', textAlign: 'center' }}>
                    <Title c='white' order={3}>Profireca</Title>
                    <Text color="gray" size="sm">
                        Mantener seguro aquello que más valoras es nuestra prioridad
                    </Text>
                </div>

                <div style={{ maxWidth: 300, margin: '0 auto', textAlign: 'center' }}>
                    <Title c='white' order={3}>Contacto</Title>
                    <Text color="gray" size="xs">Avenida 6 calles C y D, diagonal a la C2, casa #C15</Text>
                    <Text color="gray" size="xs">+58 412-7341636</Text>
                    <Text color="gray" size="xs">fabricaprofireca@gmail.com</Text>
                </div>

                <div style={{ maxWidth: 300, margin: '0 auto', textAlign: 'center' }}>
                    <Title c='white' order={3}>Horario de Atención</Title>
                    <Text color="gray" size="xs">Lunes - Sábado: 8:00am a 5:00 pm</Text>
                    <Text color="gray" size="xs">Domingo: Cerrado</Text>
                </div>
            </Group>

            <Divider mr={15} ml={15} my="sm" variant="dotted" mt={250} />

            <Text color="gray" size="xs" align="center" mt={25}>
                &copy; 2025 Profireca. Todos los derechos reservados.
            </Text>
        </Card>
    );
}

export default Footer;
