import Logo from '../../assets/PROFIRECA.png';
import { IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react';
import { Text, Container, ActionIcon, Group, Image } from '@mantine/core';
import styles from './Footer.module.css'


function Footer() {
    const data = [
        {
            title: 'Profireca',
            links: [
                { label: 'Sobre', link: '#' },
                { label: 'Catalogo', link: '/profierecalanding/Catalogo' },
                { label: 'Servicios', link: '/profierecalanding/Servicio' }
            ]
        },
        {
            title: 'Horario',
            links: [
                { label: 'Lunes - Sábado:' },
                { label: ' 8:00am a 5:00 pm' },
                { label: 'Domingo: Cerrado' },
            ]
        },
        {
            title: 'Contacto',
            links: [
                { label: '+58 412-7341636' },
                { label: 'fabricaprofireca@gmail.com' },
                { label: '', link: '#' }
            ]
        }
    ];
    const groups = data.map((group) => {
        const links = group.links.map((link, index) => (
            <Text<'a'>
                key={index}
                className={styles.link}
                component="a"
                href={link.link}
            >
                {link.label}
            </Text>
        ));

        return (
            <div className={styles.wrapper} key={group.title}>
                <Text className={styles.title}>{group.title}</Text>
                {links}
            </div>
        );
    });

    return (
        <footer className={styles.footer}>
            <Container className={styles.inner}>
                <div className={styles.logo}>
                    <Image
                        src={Logo}
                        alt="Profireca"
                        width={170}
                        height={50}
                    />
                    <Text mt={15} size="sm" color="dimmed" className={styles.description}>
                        Mantener seguro aquello que más valoras es nuestra prioridad
                    </Text>
                </div>
                <div className={styles.groups}>{groups}</div>
            </Container>
            <Container className={styles.afterFooter}>
                <Text color="dimmed" size="sm">
                    © 2025 Profireca. Todos los derechos reservados.
                </Text>

                <Group spacing={0} className={styles.social} position="right" noWrap>
                    <ActionIcon size="lg">
                        <IconBrandFacebook size={23} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <IconBrandInstagram size={23} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </footer>
    );
}

export default Footer;