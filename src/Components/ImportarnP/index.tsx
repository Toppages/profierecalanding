import { Carousel, Embla } from '@mantine/carousel';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState } from "react";
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { Card, Image, Divider, Title, ActionIcon } from '@mantine/core';


function ImportarnP() {

    const [scrollProgress, setScrollProgress] = useState(0);
    const [embla, setEmbla] = useState<Embla | null>(null);
    const [showControls, setShowControls] = useState(false);

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

    const handlePrev = () => embla && embla.scrollPrev();
    const handleNext = () => embla && embla.scrollNext();

    const cards = [
        { title: "texto", image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" },
        { title: "texto", image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" },
        { title: "texto", image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" },
        { title: "texto", image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" },
        { title: "texto", image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" },
        { title: "texto", image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" },
        { title: "texto", image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" },
    ];

    return (
        <>
            <Title mr={15} order={1}>Productos Destacados</Title>
            <Divider my="sm" mx='sm' />


            <div
                onMouseEnter={() => setShowControls(true)}
                onMouseLeave={() => setShowControls(false)}
                style={{ position: 'relative' }}
            >
                <Carousel
                    dragFree
                    
                mt={45}
                mb={45}
                    slideSize="20%"
                    slideGap={5}
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
                    align="start"
                >
                    {cards.map((card, index) => (
                        <Carousel.Slide key={index}>
                            <Card mr={10} p="lg" radius="lg">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fit="contain"
                                    radius="md"
                                    width="100%"
                                    height="100%"
                                    style={{ objectFit: 'contain', maxHeight: '850px' }}
                                />
                                <Title ta="center" order={4}>{card.title}</Title>
                            </Card>
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
