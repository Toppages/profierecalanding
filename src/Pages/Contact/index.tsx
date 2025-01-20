import { AspectRatio, Card, Group, Title } from "@mantine/core";
import { IconPhone, IconMail, IconPhotoPin } from "@tabler/icons-react";

function Contact() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>


                <Group mt={15} style={{ justifyContent: 'center' }}>
                    <Card shadow="sm" p="lg" radius="md" withBorder style={{ maxWidth: 400, flex: '1' }}>
                        <Title ta="center" order={4}>
                            <IconPhone size={24} /> Teléfono
                        </Title>
                        <p style={{ textAlign: 'center' }}>+1 234 567 890</p>
                    </Card>

                    <Card shadow="sm" p="lg" radius="md" withBorder style={{ maxWidth: 400, flex: '1' }}>
                        <Title ta="center" order={4}>
                            <IconMail size={24} /> Correo
                        </Title>
                        <p style={{ textAlign: 'center' }}>contacto@dominio.com</p>
                    </Card>

                    <Card shadow="sm" p="lg" radius="md" withBorder style={{ maxWidth: 400, flex: '1' }}>
                        <Title ta="center" order={4}>
                            <IconPhotoPin size={24} /> Dirección
                        </Title>
                        <p style={{ textAlign: 'center' }}>123 Calle Principal, Ciudad</p>
                    </Card>
                </Group>

            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <AspectRatio mt={15} ratio={16 / 9} style={{ width: '100%', maxWidth: '1200px', height: '50vh', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.559664596235!2d-71.61429906032714!3d10.691246572862605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e89997a04389231%3A0x327497681a0c38c4!2sEXTINTORES%20PROFIRECA!5e0!3m2!1ses!2sve&zoom=100"
                        loading="lazy"
                        style={{ border: 0, width: '100%', height: '100%' }}
                    ></iframe>
                </AspectRatio>
            </div>
        </>
    );
}

export default Contact;
