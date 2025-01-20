import Drawer from '../Drawer';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@mantine/hooks';
import { Card, Text, Group, HoverCard, Divider, ActionIcon, Title } from '@mantine/core';
import { IconBrandInstagram, IconShoppingCart, IconBrandWhatsapp, IconBrandFacebook } from '@tabler/icons-react';

function Navbar() {
    const isMobile = useMediaQuery('(min-width: 1000px)');

    return (
        <>
            <div
                style={{
                    width: '100%'
                }}
            >

                <Drawer />
                <Group position={isMobile ? "apart" : "center"} style={{ flexDirection: isMobile ? "row" : "column", width: "100%" }}>

                    <Title style={{ display: isMobile ? "none" : "flex" }} ml={15} order={1} align={isMobile ? "left" : "center"}>Logo</Title>

                    {isMobile && (
                        <>
                            <Group ml='27%' spacing="xl" position="center">

                                <HoverCard width={320} radius="lg" shadow="md" openDelay={250}>
                                    <HoverCard.Target>
                                        <motion.div
                                            initial={{ opacity: 0.8 }}
                                            whileHover={{ opacity: 1, scale: 1.1 }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                        >
                                            <Text
                                                mr={15}
                                                fw={700}
                                                component={motion.div}
                                                whileHover={{ color: 'red' }}
                                                transition={{ duration: 0 }}
                                            >
                                                Catalogo
                                            </Text>
                                        </motion.div>
                                    </HoverCard.Target>

                                    <HoverCard.Dropdown ml={15}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 20 }}
                                            transition={{ duration: 0.3 }}
                                        >

                                            <Card radius="md">
                                                <Link to="/profierecalanding/Catalogo" style={{ textDecoration: 'none', outline: 'none' }}>
                                                    <Text c='black' mr={15} fw={700}>
                                                        Productos
                                                    </Text>
                                                </Link>
                                            </Card>
                                        </motion.div>
                                    </HoverCard.Dropdown>
                                </HoverCard>

                                <HoverCard width={320} radius="lg" shadow="md" openDelay={250}>
                                    <HoverCard.Target>
                                        <motion.div
                                            initial={{ opacity: 0.8 }}
                                            whileHover={{ opacity: 1, scale: 1.1 }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                        >
                                            <Text
                                                mr={15}
                                                fw={700}
                                                component={motion.div}
                                                whileHover={{ color: 'red' }}
                                                transition={{ duration: 0 }}
                                            >
                                                Nuestra empresa
                                            </Text>
                                        </motion.div>
                                    </HoverCard.Target>

                                    <HoverCard.Dropdown ml={15}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 20 }}
                                            transition={{ duration: 0.3 }}
                                        >

                                            <Card radius="md">
                                                <Link to="/profierecalanding/Nosotros" style={{ textDecoration: 'none', outline: 'none' }}>
                                                    <Text c='black' mr={15} fw={700}>
                                                        Nosotros
                                                    </Text>
                                                </Link>
                                            </Card>
                                        </motion.div>
                                    </HoverCard.Dropdown>
                                </HoverCard>
                                <Title ml={15} mr={15} order={1} align={isMobile ? "left" : "center"}>Logo</Title>
                                <HoverCard width={320} radius="lg" shadow="md" openDelay={250}>
                                    <HoverCard.Target>
                                        <motion.div
                                            initial={{ opacity: 0.8 }}
                                            whileHover={{ opacity: 1, scale: 1.1 }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                        >
                                            <Text
                                                mr={15}
                                                fw={700}
                                                component={motion.div}
                                                whileHover={{ color: 'red' }}
                                                transition={{ duration: 0 }}
                                            >
                                                Contactanos
                                            </Text>
                                        </motion.div>
                                    </HoverCard.Target>

                                    <HoverCard.Dropdown ml={15}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 20 }}
                                            transition={{ duration: 0.3 }}
                                        >

                                            <Card radius="md">
                                                <Link to="/profierecalanding/contacto" style={{ textDecoration: 'none', outline: 'none' }}>
                                                    <Text c='black' mr={15} fw={700}>
                                                        Productos
                                                    </Text>
                                                </Link>
                                            </Card>
                                        </motion.div>
                                    </HoverCard.Dropdown>
                                </HoverCard>

                                <HoverCard width={320} radius="lg" shadow="md" openDelay={250}>
                                    <HoverCard.Target>
                                        <motion.div
                                            initial={{ opacity: 0.8 }}
                                            whileHover={{ opacity: 1, scale: 1.1 }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                        >
                                            <Text
                                                mr={15}
                                                fw={700}
                                                component={motion.div}
                                                whileHover={{ color: 'red' }}
                                                transition={{ duration: 0 }}
                                            >
                                                Servicios
                                            </Text>
                                        </motion.div>
                                    </HoverCard.Target>

                                    <HoverCard.Dropdown ml={15}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 20 }}
                                            transition={{ duration: 0.3 }}
                                        >

                                            <Card radius="md">
                                                <Link to="/profierecalanding/Catalogo" style={{ textDecoration: 'none', outline: 'none' }}>
                                                    <Text c='black' mr={15} fw={700}>
                                                        Servicios
                                                    </Text>
                                                </Link>
                                            </Card>
                                        </motion.div>
                                    </HoverCard.Dropdown>
                                </HoverCard>
                            </Group>
                            {/* <TextInput
                                placeholder="Buscar...."
                                radius="lg"
                                width='50%'
                                size="lg"
                                mr={15}
                                icon={<IconSearch size={14} />}
                            /> */}
                        </>
                    )}

                    <Group align='end' mr={15} spacing="lg" position={isMobile ? "apart" : "center"}>
                        <ActionIcon radius="xl">
                            <IconBrandInstagram color="red" size={34} />
                        </ActionIcon>
                        <ActionIcon radius="xl">
                            <IconBrandWhatsapp color="red" size={34} />
                        </ActionIcon>
                        <ActionIcon radius="xl">
                            <IconBrandFacebook color="red" size={34} />
                        </ActionIcon>
                        <ActionIcon radius="xl">
                            <IconShoppingCart color="red" size={34} />
                        </ActionIcon>

                    </Group>
                </Group>


                <Divider my="sm" mx='sm' />

            </div>
        </>
    );
}

export default Navbar;