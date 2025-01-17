import { Card, Text, Group, ActionIcon } from "@mantine/core";
import { IconBrandFacebook, IconBrandInstagram, IconBrandWhatsapp ,IconMapPin  } from "@tabler/icons-react";

function Footer() {
    return (
        <>

            <div style={{ position: 'relative' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" >
                    <path fill="#273036" fill-opacity="1" d="M0,224L48,192C96,160,192,96,288,96C384,96,480,160,576,181.3C672,203,768,181,864,160C960,139,1056,117,1152,122.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                <Card mt={-35} bg='#273036' shadow="sm" p="lg" radius="md" >

                    <Group position="apart" spacing="xl" mr={25}>
                        <Text color="White" size="xl">Texto</Text>
                        <Text color="White" size="xl">Texto</Text>
                        <Text color="White" size="xl">Texto</Text>
                        <Text color="White" size="xl">Texto</Text>
                    </Group>

                    <Group position="apart" spacing="xl" mr={25}>
                        <Text color="gray" size="sm">Texto</Text>
                        <Text color="gray" size="sm">Texto</Text>
                        <Text color="gray" size="sm">Texto</Text>
                        <ActionIcon radius="xl">
                            <IconBrandInstagram color="red" size={34} />
                        </ActionIcon>
                    </Group>
                    <Group position="apart" spacing="xl" mr={25}>
                        <Text color="gray" size="sm">Texto</Text>
                        <Text color="gray" size="sm">Texto</Text>
                        <Text color="gray" size="sm">Texto</Text>
                        <Text color="gray" size="sm">
                            <ActionIcon radius="xl">
                                <IconBrandWhatsapp color="red" size={34} />
                            </ActionIcon>
                        </Text>
                    </Group>
                    <Group position="apart" spacing="xl" mr={25}>
                        <Text color="gray" size="sm">Texto</Text>
                        <Text color="gray" size="sm">Texto</Text>
                        <Text color="gray" size="sm">Texto</Text>
                        <ActionIcon radius="xl">
                                <IconBrandFacebook color="red" size={34} />
                            </ActionIcon>         
                         </Group>
                    <Group position="apart" spacing="xl" mr={25} mb={15}>
                        <Text color="gray" size="sm">Texto</Text>
                        <Text color="gray" size="sm">Texto</Text>
                        <Text color="gray" size="sm">Texto</Text>
                        <Text color="gray" size="sm">
                            <ActionIcon radius="xl">
                                <IconMapPin color="red" size={34} />
                            </ActionIcon>
                        </Text>            </Group>

                    <Text color="gray" size="xs" align="center" mt="xl">
                        Copyright  &copy; 2025 Profire C.A. Todos los derechos reservados. Desarrollado por: Evanansemprun
                    </Text>
                </Card>
            </div>
        </>
    );
}

export default Footer;
