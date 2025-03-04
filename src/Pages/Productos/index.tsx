
import { PData } from '../../Data/Pdata';
import { motion } from 'framer-motion';
import { useCart } from '../../CartContext';
import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { IconGauge, IconFilter, IconSearch, IconShoppingCart, IconEye } from '@tabler/icons-react';
import { Breadcrumbs, Anchor, Text, NavLink, Group, Grid, Title, Image, Pagination, Checkbox, TextInput, Card, ActionIcon, Drawer} from '@mantine/core';
import ProductModal from '../../Components/Products/ProductModal';

function Catalogo() {
    const isMobile = useMediaQuery('(min-width: 1000px)');
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [activePage, setActivePage] = useState(1);
    const { cart, addToCart } = useCart();
    const [filterText, setFilterText] = useState('');
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const imagesPerPage = 16;
    const isLargeScreen = useMediaQuery('(min-width: 1000px)');
    const isMediumScreen = useMediaQuery('(min-width: 768px)');
    const isSmallScreen = useMediaQuery('(max-width: 767px)');
    const [drawerOpened, setDrawerOpened] = useState(false);

    const [modalOpened, setModalOpened] = useState(false);
    const [product, setProduct] = useState<any>(null);

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

    const handleAddToCart = (item: any) => {
        addToCart(item);
    };

    const handleCheckboxChange = (subtext: string) => {
        setSelectedFilters((prev) =>
            prev.includes(subtext)
                ? prev.filter((filter) => filter !== subtext)
                : [...prev, subtext]
        );
    };

    const filteredImages = PData.filter(image =>
        image.title.toLowerCase().includes(filterText.toLowerCase()) &&
        (selectedFilters.length === 0 || selectedFilters.includes(image.subcategoria))
    );

    const totalFilteredImages = filteredImages.length;
    const totalPages = Math.max(1, Math.ceil(totalFilteredImages / imagesPerPage));

    const currentImages = filteredImages.slice(
        (activePage - 1) * imagesPerPage,
        activePage * imagesPerPage
    );

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



    const handleOpenModal = (product: any) => {
        setProduct(product);
        setModalOpened(true);
    };

    return (
        <>
            <Breadcrumbs mt={45} ml={15}>{items}</Breadcrumbs>
            <Text style={{ display: 'none' }}>Items in cart: {cart.length}</Text>
            <Drawer
                opened={drawerOpened}
                onClose={() => setDrawerOpened(false)}
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
                                <Checkbox
                                    mt={8}
                                    label={subtext}
                                    color="red"
                                    checked={selectedFilters.includes(subtext)}
                                    onChange={() => handleCheckboxChange(subtext)}
                                />
                            </div>
                        ))}
                    </NavLink>
                ))}
            </Drawer>


            <ProductModal
                opened={modalOpened}
                onClose={() => setModalOpened(false)}
                product={product}
            />

            <Group align="start" style={{ width: '100%' }} spacing={isSmallScreen ? 'xs' : 'lg'}>
                {isLargeScreen && (
                    <div style={{ flex: 1, maxWidth: '200px' }}>
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
                                    <div key={subIndex}>
                                        <Checkbox
                                            mt={5}
                                            label={subtext}
                                            color="red"
                                            checked={selectedFilters.includes(subtext)}
                                            onChange={() => handleCheckboxChange(subtext)}
                                        />
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
                            <ActionIcon onClick={() => setDrawerOpened(true)} color="red" size="xl" radius='md' variant="filled" style={{ display: isMobile ? "none" : "flex" }}>
                                <IconFilter size={34} />
                            </ActionIcon>
                            <TextInput
                                placeholder="Buscar...."
                                radius="md"
                                size="lg"
                                mr={isMobile ? 20 : 0}
                                icon={<IconSearch size={14} />}
                                value={filterText}
                                onChange={(e) => setFilterText(e.currentTarget.value)}
                            />
                        </Group>
                    </Group>

                    <Grid mt={10} gutter="lg" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        {currentImages.length > 0 ? (
                            currentImages.map((data, index) => (
                                <Grid.Col key={index} span={isLargeScreen ? 3 : isMediumScreen ? 3 : isSmallScreen ? 6 : 12} style={{ textAlign: 'center' }}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                                    >
                                        <Card
                                            shadow="xl"
                                            p="lg"
                                            radius="md"
                                            style={{ position: 'relative', width: '100%', maxWidth: '400px' }}
                                            onClick={() => handleOpenModal(data)}
                                        >
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
                                                    <ActionIcon onClick={(e) => { e.stopPropagation(); handleOpenModal(data); }} size="lg" radius="xl">
                                                        <IconEye color="red" size={34} />
                                                    </ActionIcon>
                                                    <ActionIcon
                                                        radius="xl"
                                                        onClick={(e) => { e.stopPropagation(); handleAddToCart(data); }}
                                                    >
                                                        <IconShoppingCart color="red" size={34} />
                                                    </ActionIcon>
                                                </Group>

                                                {data.src && (
                                                    <Image
                                                        src={data.src}
                                                        alt={data.title}
                                                        fit="contain"
                                                        style={{ width: '100%', height: 'auto', objectFit: 'cover', maxWidth: '100%', margin: '0 auto' }}
                                                    />
                                                )}
                                            </Card.Section>

                                            <Title order={6} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>
                                                {data.title}
                                            </Title>
                                        </Card>

                                    </motion.div>
                                </Grid.Col>
                            ))
                        ) : (
                            <Text>No disponible</Text>
                        )}
                    </Grid>
                    <Pagination
                        mt={isMobile ? 15 : 20}
                        mb={15}
                        total={totalPages}
                        color="red"
                        size="lg"
                        radius="md"
                        page={activePage}
                        onChange={setActivePage}
                    />
                </div>
            </Group>
        </>
    );
}

export default Catalogo;