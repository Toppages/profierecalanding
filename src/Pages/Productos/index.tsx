import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { IconGauge, IconSearch } from '@tabler/icons-react';
import { Breadcrumbs, Anchor, Text, NavLink, Group, Grid, Title, Image, Pagination, TextInput, Card } from '@mantine/core';

function Catalogo() {
    const imageData = [
        {
            src: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
            title: 'Imagen A',
            category: 'Categoría 1',
            subcategoria: 'Subcategoría 1A'
        },
        {
            src: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
            title: 'Imagen B',
            category: 'Categoría 1',
            subcategoria: 'Subcategoría 1B'
        },
        {
            src: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
            title: 'Imagen C',
            category: 'Categoría 2',
            subcategoria: 'Subcategoría 2A'
        },
        {
            src: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
            title: 'Imagen D',
            category: 'Categoría 2',
            subcategoria: 'Subcategoría 2B'
        },
        {
            src: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
            title: 'Imagen E',
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
                    <Group style={{ marginBottom: '1rem' }}>
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
                            width="50%"
                            size="lg"
                            mr={15}
                            icon={<IconSearch size={14} />}
                        />
                    </Group>

                    <div style={{ overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Grid gutter="lg" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            {currentImages.map((data, index) => (
                                <Grid.Col
                                    key={index}
                                    span={isLargeScreen ? 2 : isMediumScreen ? 3 : isSmallScreen ? 6 : 12}
                                    style={{ textAlign: 'center' }}
                                >
                                    <Card>
                                        {data.src && (
                                            <Image
                                                src={data.src.endsWith('.webp') ? data.src : `${data.src}.webp`}
                                                alt={data.title}
                                                radius="md"
                                                style={{
                                                    width: isSmallScreen ? '90%' : '100%',
                                                    height: 'auto',
                                                    maxWidth: '100%',
                                                    margin: '0 auto',
                                                }}
                                            />
                                        )}

                                        <Title order={4}>{data.title}</Title>
                                        <Text>{data.category}</Text>
                                    </Card>
                                </Grid.Col>
                            ))}
                        </Grid>
                    </div>
                </div>
            </Group>
        </>
    );
}

export default Catalogo;
