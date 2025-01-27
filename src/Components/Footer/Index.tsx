import { Card, Text, Group, ActionIcon } from "@mantine/core";
import { IconBrandFacebook, IconBrandInstagram, IconBrandWhatsapp, IconMapPin } from "@tabler/icons-react";

function Footer() {
    return (
        <>
            <div style={{ width: '100%' }}>
                
                <Card bg='#273036' shadow="sm" radius="xs" mt={15}>
                    <Group position="apart" spacing="xl" mr={25}>
                        <Text color="White" size="xl">Texto</Text>
                        <Text color="White" size="xl">Texto</Text>
                        <Text color="White" size="xl">Texto</Text>
                    </Group>

                    <Group position="apart" spacing="xl" mr={25}>
                        <Text color="gray" size="sm">Texto</Text>
                        <Text color="gray" size="sm">Texto</Text>
                        <Text color="gray" size="sm">Texto</Text>
                    </Group>
                    <Group position="apart" spacing="xl" mr={25}>
                        <Text color="gray" size="sm">Texto</Text>
                        <Text color="gray" size="sm">Texto</Text>
                        <Text color="gray" size="sm">Texto</Text>
                    </Group>

                    <Group position="apart" spacing="xl" mr={25}>
                        <Text color="gray" size="sm">Texto</Text>
                        <Text color="gray" size="sm">Texto</Text>
                        <Text color="gray" size="sm">Texto</Text>
                    </Group>

                    <Group position="apart" spacing="xl" mr={25} mb={15}>
                        <Text color="gray" size="sm">Texto</Text>
                        <Text color="gray" size="sm">Texto</Text>
                        <Text color="gray" size="sm">Texto</Text>
                    </Group>

                    <Group position="center" spacing="xl" mr={25} mb={15}>
                        <ActionIcon radius="xl">
                            <IconMapPin color="red" size={34} />
                        </ActionIcon>
                        <ActionIcon radius="xl">
                            <IconBrandFacebook color="red" size={34} />
                        </ActionIcon>
                        <ActionIcon radius="xl">
                            <IconBrandWhatsapp color="red" size={34} />
                        </ActionIcon>

                        <ActionIcon radius="xl">
                            <IconBrandInstagram color="red" size={34} />
                        </ActionIcon>
                    </Group>

                    <Text color="gray" size="xs" align="center" mt="xl">
                        Copyright  &copy; 2025 Profire C.A. Todos los derechos reservados. Desarrollado por: Evanansemprun
                    </Text>
                </Card>
            </div>
        </>
    );
}

export default Footer;
