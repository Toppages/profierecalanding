import Logo from '../../assets/PROFIRECA Negro.png';
import Drawer from '../Drawer';
import { motion } from 'framer-motion';
import { useCart } from '../../CartContext';
import { useMediaQuery } from '@mantine/hooks';
import { Link, useLocation } from 'react-router-dom';
import { IconBrandInstagram, IconShoppingCart, IconBrandWhatsapp, IconBrandFacebook } from '@tabler/icons-react';
import { Group, Divider, ActionIcon, Indicator, Image, Text } from '@mantine/core';

function Navbar() {
    const isMobile = useMediaQuery('(min-width: 1000px)');
    const location = useLocation();
    const { cart } = useCart();

    const isActive = (path: string) => location.pathname === path ? 'red' : 'black';

    return (
        <div style={{ width: '100%' }}>
            <Drawer />
            <Group position={isMobile ? "apart" : "center"} style={{ flexDirection: isMobile ? "row" : "column", width: "100%" }}>
                <Image mt={-50} width="200px" style={{ display: isMobile ? "none" : "flex" }} height="100px" src={Logo} />
                {isMobile && (
                    <>
                        <Image width="200px" height="100px" src={Logo} />
                        <Group spacing="xl" position="center">
                            {['/profierecalanding/Catalogo', '/profierecalanding/Nosotros', '/profierecalanding/contacto', '/profierecalanding/Servicio'].map((path, index) => (
                                <Link key={index} to={path} style={{ textDecoration: 'none' }}>
                                    <motion.div whileHover={{ scale: 1.1, color: 'red' }}>
                                        <Text fw={700} style={{ color: isActive(path) }}>
                                            {path.split('/').pop()}
                                        </Text>
                                    </motion.div>
                                </Link>
                            ))}
                        </Group>
                    </>
                )}

                <Group align='end' mr={15} spacing="lg" position={isMobile ? "apart" : "center"}>
                    <ActionIcon radius="xl"><IconBrandInstagram color="red" size={34} /></ActionIcon>
                    <ActionIcon radius="xl"><IconBrandWhatsapp color="red" size={34} /></ActionIcon>
                    <ActionIcon radius="xl"><IconBrandFacebook color="red" size={34} /></ActionIcon>
                    {cart.length > 0 ? (
                        <Indicator label={cart.length} withBorder showZero={false} inline color="red" overflowCount={999} size={20}>
                            <Link to="/profierecalanding/Cart">
                                <ActionIcon mr={8} radius="xl"><IconShoppingCart color="red" size={34} /></ActionIcon>
                            </Link>
                        </Indicator>
                    ) : (
                        <Link to="/profierecalanding/Cart">
                            <ActionIcon mr={8} radius="xl"><IconShoppingCart color="red" size={34} /></ActionIcon>
                        </Link>
                    )}
                </Group>
            </Group>
            <Divider mx='sm' />
        </div>
    );
}

export default Navbar;
