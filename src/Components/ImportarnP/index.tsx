import { Carousel, Embla } from '@mantine/carousel';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState, useRef } from "react";
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { Card, Image, Divider, Title, ActionIcon, Group } from '@mantine/core';

function ImportarnP() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [embla, setEmbla] = useState<Embla | null>(null);
    const [showControls, setShowControls] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef<HTMLDivElement>(null);

    const handleScroll = useCallback(() => {
        if (!embla) return;
        const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
        setScrollProgress(progress * 100);
    }, [embla]);

    useEffect(() => {
        if (embla) {
            embla.on('scroll', handleScroll);
            handleScroll();
        }
    }, [embla, handleScroll]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => {
            if (componentRef.current) {
                observer.unobserve(componentRef.current);
            }
        };
    }, []);

    const handlePrev = () => embla && embla.scrollPrev();
    const handleNext = () => embla && embla.scrollNext();

    const cards = [
        {
            src: 'https://www.extintoresromagnoli.com/imgs/productos/productos35_2489.jpg',
            title: 'EXTINTOR DE CO2 5 LBS',
            category: 'Extintor cargado',
            subcategoria: 'Extintores CO2',
            descrip: 'Extintor cargado con CO2, ideal para combatir fuegos de tipo B y C en situaciones de emergencia.'
        },
        {
            src: 'https://www.extintoresromagnoli.com/imgs/productos/productos35_2489.jpg',
            title: 'EXTINTOR DE CO2 10 LBS',
            category: 'Extintor cargado',
            subcategoria: 'Extintores CO2',
            descrip: 'Extintor cargado con CO2, diseñado para combatir incendios tipo B y C de mayor magnitud.'
        },
        {
            src: 'https://res.cloudinary.com/di0btw2pi/image/upload/v1738940202/Extintor_CO2_15LBS_afarpi.png',
            title: 'EXTINTOR CO2 15 LBS',
            category: 'Extintor cargado',
            subcategoria: 'Extintores CO2',
            descrip: 'Extintor CO2 de 15 libras, adecuado para fuegos tipo B y C, proporcionando una mayor capacidad de extinción.'
        },
        {
            src: 'https://www.extintoresromagnoli.com/imgs/productos/productos35_2489.jpg',
            title: 'EXTINTOR DE CO2 20 LBS',
            category: 'Extintor cargado',
            subcategoria: 'Extintores CO2',
            descrip: 'Extintor de dióxido de carbono (CO2) con capacidad de 20 libras, ideal para la supresión de incendios eléctricos y líquidos inflamables sin dejar residuos.'
        },
        {
            src: 'https://www.extintoresromagnoli.com/imgs/productos/productos35_2489.jpg',
            title: 'EXTINTOR DE PQS CARGADO DE 2.5 LBS',
            category: 'extintor cargado',
            subcategoria: 'Extintores PQS',
            descrip: 'Extintor portátil de polvo químico seco (PQS) con capacidad de 2.5 libras, adecuado para combatir incendios de tipo A, B y C.'
        },
        {
            src: 'https://res.cloudinary.com/di0btw2pi/image/upload/v1738940201/Extintor_5LBS_el9vwo.png',
            title: 'EXTINTOR PQS CARGADO DE 5 LBS',
            category: 'Extintor cargado',
            subcategoria: 'Extintores PQS',
            descrip: 'Extintor portátil de polvo químico seco (PQS) con capacidad de 5 libras, adecuado para la supresión de incendios de clases A, B y C.'
        },
        {
            src: 'https://www.extintoresromagnoli.com/imgs/productos/productos35_2489.jpg',
            title: 'EXTINTOR PQS CARGADO DE 15 LBS',
            category: 'Extintor cargado',
            subcategoria: 'PQS',
            descrip: 'Extintor de polvo químico seco (PQS) de 15 libras, cargado y listo para su uso en la protección contra incendios.'
        },
        {
            src: 'https://res.cloudinary.com/di0btw2pi/image/upload/v1738940200/Carreta_de_50_y_100_LBS_haj3ts.png',
            title: 'CARRETA PQS DE 50 LBS CARGADA',
            category: 'Equipos industriales',
            subcategoria: 'Carretas industriales',
            descrip: 'Carreta cargada de 50 libras, diseñada para el transporte y manejo industrial de extintores PQS.'
        },
        {
            src: 'https://res.cloudinary.com/di0btw2pi/image/upload/v1738940200/Carreta_de_50_y_100_LBS_haj3ts.png',
            title: 'CARRETA PQS DE 100 LBS CARGADA',
            category: 'Equipos industriales',
            subcategoria: 'Carretas industriales',
            descrip: 'Carreta cargada de 100 libras, diseñada para el transporte y manejo industrial de extintores PQS.'
        },
        {
            src: 'https://res.cloudinary.com/di0btw2pi/image/upload/v1738940210/manguera_rosca_gruesa_yyk8xm.png',
            title: 'MANGUERA M30 ROSCA GRUESA',
            category: 'Accesorios y repuestos',
            subcategoria: 'Mangueras',
            descrip: 'Manguera de rosca gruesa, compatible con válvula M30, ideal para sistemas de extinción de incendios.'
        },
        {
            src: 'https://res.cloudinary.com/di0btw2pi/image/upload/v1738940210/manguera_rosca_gruesa_yyk8xm.png',
            title: 'MANGUERA M30 ROSCA GRUESA',
            category: 'Accesorios y repuestos',
            subcategoria: 'Mangueras',
            descrip: 'Manguera de rosca gruesa, compatible con válvula M30, ideal para sistemas de extinción de incendios.'
        },
        {
            src: 'https://res.cloudinary.com/di0btw2pi/image/upload/v1738940241/Valvula_de_M22_suwafc.png',
            title: 'VÁLVULA M22',
            category: 'Accesorios y repuestos',
            subcategoria: 'Válvulas',
            descrip: 'Válvula diseñada para extintores de 2.5 y 5 LBS PQS, esencial para el correcto funcionamiento de los extintores.'
        },
        {
            src: 'https://res.cloudinary.com/di0btw2pi/image/upload/v1738940214/manometro_195_bsocie.png',
            title: 'MANÓMETRO 195 PSI',
            category: 'Accesorios y repuestos',
            subcategoria: 'Manómetros',
            descrip: 'Manómetro ideal para medir la presión interna de cilindros PQS de 10 y 5 libras.'
        },
        {
            src: 'https://res.cloudinary.com/di0btw2pi/image/upload/v1738940213/manometro_125_u5zoe1.png',
            title: 'MANÓMETRO 125 PSI',
            category: 'Accesorios y repuestos',
            subcategoria: 'Manómetros',
            descrip: 'Manómetro diseñado para medir la presión interna de cilindros PQS de 2.5 y 5 libras.'
        },
        {
            src: 'https://res.cloudinary.com/di0btw2pi/image/upload/v1738940209/KIT_primeros_Auxilios_ypoxdp.png',
            title: 'BOTIQUÍN DE PRIMEROS AUXILIOS',
            category: 'Accesorios y repuestos',
            subcategoria: 'Botiquines',
            descrip: 'Kit de primeros auxilios con suministros médicos esenciales para atender emergencias y brindar asistencia inmediata.'
        }

    ];

    return (
        <>
            <Group position='center'>
                <Title mt='5%' mb='2%' order={1}>Productos Destacados</Title>
            </Group>
            <Divider my="sm" mx='sm' />

            <div
                ref={componentRef}
                onMouseEnter={() => setShowControls(true)}
                onMouseLeave={() => setShowControls(false)}
                style={{ position: 'relative' }}
            >
                <Carousel
                    dragFree
                    slideSize="20%"
                    slideGap={5}
                    mt={45}
                    mb={45}
                    mr="2%"
                    ml="2%"
                    height="auto"
                    getEmblaApi={setEmbla}
                    withControls={false}
                    breakpoints={[
                        { maxWidth: 'lg', slideSize: '25%', slideGap: 10 },
                        { maxWidth: 'md', slideSize: '33.33%', slideGap: 10 },
                        { maxWidth: 'sm', slideSize: '50%', slideGap: 10 },
                        { maxWidth: 'xs', slideSize: '100%', slideGap: 10 },
                    ]}
                    loop
                    align="center"
                >
                    {cards.map((card, index) => (
                        <Carousel.Slide key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5 }}
                            >
                                <Card
                                    shadow="xl"
                                    p="lg"
                                    mb={45}
                                    radius="md"
                                    style={{ position: 'relative', width: '100%', maxWidth: '400px' }}
                                >
                                    <Image
                                        src={card.src}
                                        alt={card.title}
                                        fit="contain"
                                        radius="md"
                                        width="100%"
                                        height="100%"
                                        style={{ objectFit: 'contain', maxHeight: '850px' }}
                                    />
                                    <Title ta="center" order={6}>{card.title}</Title>
                                </Card>
                            </motion.div>
                        </Carousel.Slide>
                    ))}
                </Carousel>


                <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    display: 'none',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 2,
                    color: '#3486eb',
                    fontWeight: 'bold'
                }}>
                    {Math.round(scrollProgress)}% Scrolled
                </div>

                <AnimatePresence>
                    {showControls && (
                        <>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '10px',
                                    transform: 'translateY(-50%)',
                                    zIndex: 1
                                }}
                            >
                                <ActionIcon
                                    variant="default"
                                    ml={15}
                                    onClick={handlePrev}
                                    size="xl"
                                    radius="xl"
                                >
                                    <IconChevronLeft color='red' size={24} />
                                </ActionIcon>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    right: '10px',
                                    transform: 'translateY(-50%)',
                                    zIndex: 1
                                }}
                            >
                                <ActionIcon
                                    variant="default"
                                    onClick={handleNext}
                                    size="xl"
                                    mr={15}
                                    radius="xl"
                                >
                                    <IconChevronRight color='red' size={24} />
                                </ActionIcon>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}

export default ImportarnP;
