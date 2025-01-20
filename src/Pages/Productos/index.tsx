import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { IconEye, IconGauge, IconSearch , IconShoppingCart } from '@tabler/icons-react';
import { Breadcrumbs, Anchor, Text, NavLink, Group, Grid, Title, Image, Pagination, TextInput, Card, ScrollArea, ActionIcon } from '@mantine/core';
import { motion } from 'framer-motion';

function Catalogo() {
    const isMobile = useMediaQuery('(min-width: 1000px)');

    const imageData = [
        {
            src: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
            title: 'Titulo',
            category: 'Categoría 1',
            subcategoria: 'Subcategoría 1A'
        },
        {
            src: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
            title: 'Titulo',
            category: 'Categoría 1',
            subcategoria: 'Subcategoría 1A'
        },
        {
            src: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
            title: 'Titulo',
            category: 'Categoría 1',
            subcategoria: 'Subcategoría 1A'
        },
        {
            src: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
            title: 'Titulo',
            category: 'Categoría 1',
            subcategoria: 'Subcategoría 1A'
        },
        {
            src: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
            title: 'Titulo',
            category: 'Categoría 1',
            subcategoria: 'Subcategoría 1A'
        },
        {
            src: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
            title: 'Titulo',
            category: 'Categoría 1',
            subcategoria: 'Subcategoría 1A'
        },
        {
            src: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
            title: 'Titulo',
            category: 'Categoría 1',
            subcategoria: 'Subcategoría 1A'
        },
        {
            src: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
            title: 'Titulo',
            category: 'Categoría 1',
            subcategoria: 'Subcategoría 1A'
        },
        {
            src: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
            title: 'Titulo',
            category: 'Categoría 1',
            subcategoria: 'Subcategoría 1A'
        },
        {
            src: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
            title: 'Titulo',
            category: 'Categoría 1',
            subcategoria: 'Subcategoría 1A'
        },
        {
            src: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
            title: 'Titulo',
            category: 'Categoría 1',
            subcategoria: 'Subcategoría 1A'
        },
        {
            src: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
            title: 'Titulo',
            category: 'Categoría 1',
            subcategoria: 'Subcategoría 1A'
        },
        {
            src: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
            title: 'Titulo',
            category: 'Categoría 1',
            subcategoria: 'Subcategoría 1A'
        },
        {
            src: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
            title: 'Titulo',
            category: 'Categoría 1',
            subcategoria: 'Subcategoría 1A'
        },
        {
            src: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
            title: 'Titulo',
            category: 'Categoría 1',
            subcategoria: 'Subcategoría 1A'
        },
        {
            src: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
            title: 'Titulo',
            category: 'Categoría 1',
            subcategoria: 'Subcategoría 1A'
        },
        {
            src: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
            title: 'Titulo',
            category: 'Categoría 1',
            subcategoria: 'Subcategoría 1A'
        },
        {
            src: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
            title: 'Titulo',
            category: 'Categoría 1',
            subcategoria: 'Subcategoría 1A'
        },
        {
            src: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
            title: 'Titulo',
            category: 'Categoría 1',
            subcategoria: 'Subcategoría 1B'
        },
        {
            src: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
            title: 'Titulo',
            category: 'Categoría 2',
            subcategoria: 'Subcategoría 2A'
        },
        {
            src: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
            title: 'Titulo',
            category: 'Categoría 2',
            subcategoria: 'Subcategoría 2B'
        },
        {
            src: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
            title: 'Titulo',
            category: 'Categoría 3',
            subcategoria: 'Subcategoría 3A'
        },
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [activePage, setActivePage] = useState(1);
    const imagesPerPage = 18;
    const totalImages = imageData.length;
    const totalPages = Math.ceil(totalImages / imagesPerPage);

    const isLargeScreen = useMediaQuery('(min-width: 1000px)');
    const isMediumScreen = useMediaQuery('(min-width: 768px)');
    const isSmallScreen = useMediaQuery('(max-width: 767px)');

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
            transition: { duration: 0.3 } // Puedes ajustar esta duración a lo que desees
        },
        rest: {
            scale: 1,
            boxShadow: "none",
            transition: { duration: 0.3 }
        }
    };


    const navLinkData = [
        ...new Set(imageData.map(item => item.category))
    ].map(category => ({
        label: category,
        icon: <IconGauge size={16} stroke={1.5} />,
        subtexts: imageData.filter(item => item.category === category).map(item => item.subcategoria)
    }));

    const handleNavLinkClick = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const currentImages = imageData.slice(
        (activePage - 1) * imagesPerPage,
        activePage * imagesPerPage
    );

    return (
        <>
            <Breadcrumbs mt={15} ml={15}>{items}</Breadcrumbs>
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
                                    <NavLink key={subIndex} label={subtext} />
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
                            total={totalPages}
                            color="red"
                            size="lg"
                            radius="md"
                            page={activePage}
                            onChange={setActivePage}
                        />
                        <TextInput
                            placeholder="Buscar...."
                            radius="lg"
                            size="lg"
                            mr={15}
                            icon={<IconSearch size={14} />}
                        />
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

                                                        <ActionIcon color="red">
                                                            <IconEye size={26} />
                                                        </ActionIcon>

                                                        <ActionIcon color="red">
                                                            <IconShoppingCart size={26} />
                                                        </ActionIcon>
                                                    </Group>

                                                    {data.src && (
                                                        <Image
                                                            src='https://www.extintoresromagnoli.com/imgs/productos/productos35_2489.jpg'
                                                            alt={data.title}
                                                            style={{
                                                                width: '100%',
                                                                height: 'auto',
                                                                objectFit: 'cover',  // Asegura que la imagen cubra todo el contenedor sin deformarse
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