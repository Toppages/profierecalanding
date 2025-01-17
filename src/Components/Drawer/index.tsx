import { Link } from "react-router-dom";
import { useState } from "react";
import { useMediaQuery } from '@mantine/hooks';
import { Drawer as MantineDrawer, Burger, Text, Container } from '@mantine/core';

function Drawer() {
    const [opened, setOpened] = useState(false);
    const isMobile = useMediaQuery('(min-width: 1000px)');

    const closeDrawer = () => setOpened(false);

    return (
        <>
            {!isMobile && (
                <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
                    title={opened ? 'Close navigation' : 'Open navigation'}
                />
            )}

            <MantineDrawer
                opened={opened}
                onClose={() => setOpened(false)}
                padding="xl"
                size="lg"
                position="left"
                overlayOpacity={0.55}
                overlayBlur={3}
            >
                <Container mt={15} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div>
                        <Link 
                            to="/profierecalanding/Catalogo" 
                            style={{ textDecoration: 'none', outline: 'none' }}
                            onClick={closeDrawer}
                        >
                            <Text c='black' mr={15} fw={700}>
                                Texto
                            </Text>
                        </Link>
                        <Text mt={15} fw={700}>
                            Texto
                        </Text>
                        <Text mt={15} fw={700}>
                            Texto
                        </Text>
                        <Text mt={15} fw={700}>
                            Texto
                        </Text>
                    </div>
                </Container>
            </MantineDrawer>
        </>
    );
}

export default Drawer;
