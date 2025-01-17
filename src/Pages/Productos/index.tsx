import { IconGauge, IconFingerprint } from '@tabler/icons-react';
import { Breadcrumbs, Anchor, Text, Box, NavLink } from '@mantine/core';

function Catalogo() {

    const items = [
        { title: 'Inicio', href: '/profierecalanding' },
        { title: 'Catalogo', href: '/profierecalanding/Catalogo' },
    ].map((item, index: number) => (
        <Anchor c='black' href={item.href} key={index}>
            <Text c='black' fw={700}>
                {item.title}
            </Text>
        </Anchor>
    ));

    return (
        <>
            <Breadcrumbs mt={15} ml={15}>{items}</Breadcrumbs>

            <Box mt={15} ml={5} sx={{ width: 150 }}>
                <NavLink
                    label="Texto"
                    icon={<IconGauge size={16} stroke={1.5} />}
                    childrenOffset={28}
                >
                    <NavLink label="Texto" />
                    <NavLink label="Texto" />

                </NavLink>

                <NavLink
                    label="Texto"
                    icon={<IconFingerprint size={16} stroke={1.5} />}
                    childrenOffset={28}
                    defaultOpened
                >
                    <NavLink label="Texto" />
                    <NavLink label="Texto" />
                    <NavLink label="Texto" />
                </NavLink>
            </Box>
        </>
    );
}

export default Catalogo;
