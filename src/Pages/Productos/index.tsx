import { PData } from './Pdata';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { IconEye, IconGauge, IconFilter, IconSearch, IconShoppingCart } from '@tabler/icons-react';
import { Breadcrumbs, Anchor, Checkbox, Text, NavLink, Group, Grid, Title, Image, Pagination, TextInput, Card, ScrollArea, ActionIcon, Drawer } from '@mantine/core';
import { useCart } from '../../CartContext';

function Catalogo() {
    const isMobile = useMediaQuery('(min-width: 1000px)');
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [activePage, setActivePage] = useState(1);
    const { cart, addToCart } = useCart();
    const imagesPerPage = 18;
    const totalImages = PData.length;
    const totalPages = Math.ceil(totalImages / imagesPerPage);
    const isLargeScreen = useMediaQuery('(min-width: 1000px)');
    const isMediumScreen = useMediaQuery('(min-width: 768px)');
    const isSmallScreen = useMediaQuery('(max-width: 767px)');
    const [opened, setOpened] = useState(false);
    const items = [
        { title: 'Inicio', href: '/profierecalanding' },
        { title: 'Catalogo', href: '#' },
    ].map((item, index) => (
        <Anchor c='black' href={item.href} key={index}>
            <Text c='black' fw={700}>
                {item.title}
            </Text>
        </Anchor>
    ));

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        hover: {
            scale: 1.05,
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
            transition: { duration: 0.3 }
        },
        rest: {
            scale: 1,
            boxShadow: "none",
            transition: { duration: 0.3 }
        }
    };

    const navLinkData = [
        ...new Set(PData.map(item => item.category))
    ].map(category => ({
        label: category,
        icon: <IconGauge size={16} stroke={1.5} />,
        subtexts: [
            ...new Set(PData.filter(item => item.category === category).map(item => item.subcategoria))
        ]
    }));

    const handleNavLinkClick = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleAddToCart = (item: any) => {
        addToCart(item);
      };

    const currentImages = PData.slice(
        (activePage - 1) * imagesPerPage,
        activePage * imagesPerPage
    );

    return (
        <>
            <Breadcrumbs mt={10} ml={15}>{items}</Breadcrumbs>
            <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                padding="xl"
                size="xl"
            >

                {navLinkData.map((navItem, index) => (
                    <NavLink
                        key={index}
                        mt={15}
                        label={navItem.label}
                        icon={navItem.icon}
                        childrenOffset={28}
                        style={{
                            color: activeIndex === index ? 'red' : 'black',
                            cursor: 'pointer',
                            flexShrink: 0,
                        }}
                        onClick={() => handleNavLinkClick(index)}
                        opened={activeIndex === index}
                    >
                        {navItem.subtexts.map((subtext, subIndex) => (
                            <div key={subIndex}>
                                <Checkbox mt={8} label={subtext} color="red" />
                            </div>
                        ))}
                    </NavLink>
                ))}


            </Drawer>
            <Group align="start" style={{ width: '100%' }} spacing={isSmallScreen ? 'xs' : 'lg'}>
                {isLargeScreen && (
                    <div style={{ flex: 1, maxWidth: '150px' }}>
                        {navLinkData.map((navItem, index) => (
                            <NavLink
                                key={index}
                                mt={15}
                                label={navItem.label}
                                icon={navItem.icon}
                                childrenOffset={28}
                                style={{
                                    color: activeIndex === index ? 'red' : 'black',
                                    cursor: 'pointer',
                                    flexShrink: 0,
                                }}
                                onClick={() => handleNavLinkClick(index)}
                                opened={activeIndex === index}
                            >
                                {navItem.subtexts.map((subtext, subIndex) => (
                                    <div key={subIndex}>
                                        <Checkbox label={subtext} color="red" />
                                    </div>
                                ))}
                            </NavLink>
                        ))}
                    </div>
                )}
                <div style={{ flex: 2 }}>
                    <Group
                        mr={isMobile ? 10 : 0}
                        ml={isMobile ? 25 : 0}
                        position={isMobile ? 'apart' : 'center'}
                        style={{
                            marginBottom: '1rem',
                        }}
                    >
                        <Pagination
                            mt={isMobile ? 0 : 20}
                            total={totalPages}
                            color="red"
                            size="lg"
                            radius="md"
                            page={activePage}
                            onChange={setActivePage}
                        />
                        <Group>

                            <ActionIcon onClick={() => setOpened(true)} color="red" size="xl" radius='md' variant="filled" style={{ display: isMobile ? "none" : "flex" }}>
                                <IconFilter size={34} />
                            </ActionIcon>
                            <TextInput
                                placeholder="Buscar...."
                                radius="md"
                                size="lg"
                                mr={isMobile ? 20 : 0}
                                icon={<IconSearch size={14} />}
                            />
                        </Group>
                    </Group>

                    <ScrollArea style={{ height: 1250 }} type="never">
                        <div style={{ overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Grid mt={10} mb={100} gutter="lg" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                {currentImages.map((data, index) => (
                                    <Grid.Col
                                        key={index}
                                        span={isLargeScreen ? 2 : isMediumScreen ? 3 : isSmallScreen ? 6 : 12}
                                        style={{ textAlign: 'center' }}
                                    >
                                        <motion.div
                                            initial="hidden"
                                            animate="visible"
                                            whileHover="hover"
                                            exit="rest"
                                            variants={cardVariants}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Card mb={5} shadow="xl" p="lg" radius="md" style={{ position: 'relative' }}>
                                                <Card.Section>
                                                    <Group
                                                        style={{
                                                            position: 'absolute',
                                                            top: '10px',
                                                            left: '0',
                                                            right: '0',
                                                            zIndex: 1,
                                                            justifyContent: 'space-between',
                                                            padding: '0 10px',
                                                        }}
                                                    >
                                                        <ActionIcon >
                                                            <IconEye color="red" size={34} />
                                                        </ActionIcon>

                                                        <ActionIcon radius="xl" onClick={() => handleAddToCart(data)}>
                                                            <IconShoppingCart color="red" size={34} />
                                                        </ActionIcon>
                                                    </Group>

                                                    {data.src && (
                                                        <Image
                                                            src={data.src}
                                                            alt={data.title}
                                                            fit="contain"
                                                            style={{
                                                                width: '100%',
                                                                height: 'auto',
                                                                objectFit: 'cover',
                                                                maxWidth: '100%',
                                                                margin: '0 auto',
                                                            }}
                                                        />
                                                    )}
                                                </Card.Section>

                                                <Title order={4}>{data.title}</Title>
                                            </Card>
                                        </motion.div>
                                    </Grid.Col>
                                ))}
                            </Grid>
                        </div>
                    </ScrollArea>
                </div>
            </Group>
        </>
    );
}

export default Catalogo;