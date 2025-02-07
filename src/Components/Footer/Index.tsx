import { Card, Text, Group, ActionIcon } from "@mantine/core";
import { IconBrandFacebook, IconBrandInstagram, IconBrandWhatsapp, IconMapPin } from "@tabler/icons-react";

function Footer() {
    return (
        <>

            <Card bg='#273036' shadow="sm" radius="xs" >
                <Group position="apart" spacing="xl">
                    <Text color="White" size="xl">Texto</Text>
                    <Text color="White" size="xl">Texto</Text>
                    <Text color="White" size="xl">Texto</Text>
                </Group>

                <Group position="apart" spacing="xl" >
                    <Text color="gray" size="sm">Texto</Text>
                    <Text color="gray" size="sm">Texto</Text>
                    <Text color="gray" size="sm">Texto</Text>
                </Group>
                <Group position="apart" spacing="xl" >
                    <Text color="gray" size="sm">Texto</Text>
                    <Text color="gray" size="sm">Texto</Text>
                    <Text color="gray" size="sm">Texto</Text>
                </Group>

                <Group position="apart" spacing="xl">
                    <Text color="gray" size="sm">Texto</Text>
                    <Text color="gray" size="sm">Texto</Text>
                    <Text color="gray" size="sm">Texto</Text>
                </Group>

                <Group position="apart" spacing="xl" mb={20}>
                    <Text color="gray" size="sm">Texto</Text>
                    <Text color="gray" size="sm">Texto</Text>
                    <Text color="gray" size="sm">Texto</Text>
                </Group>

                <Group position="center" spacing="xl" mr={25} mb={15}>
                    <ActionIcon className="icon">
                        <IconMapPin size={34} />
                    </ActionIcon>
                    <ActionIcon className="icon" radius="xl">
                        <IconBrandFacebook size={34} />
                    </ActionIcon>
                    <ActionIcon className="icon" radius="xl">
                        <IconBrandWhatsapp size={34} />
                    </ActionIcon>
                    <ActionIcon className="icon" >
                        <IconBrandInstagram size={34} />
                    </ActionIcon>
                </Group>


                <Text color="gray" size="xs" align="center" mt="xl">
                    Copyright  &copy; 2025 Profire C.A. Todos los derechos reservados. Desarrollado por: Evanansemprun
                </Text>
            </Card>
        </>
    );
}

export default Footer;
