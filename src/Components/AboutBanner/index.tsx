import { BackgroundImage, Button, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

function AboutBanner() {
    const isMobile = useMediaQuery('(max-width: 1000px)');

    return (
        <>
            <div style={{ height: 'auto', display: 'flex' }}>
                <BackgroundImage
                    mt={45}
                    mb={45}
                    src="https://wallpapers.com/images/hd/blue-aesthetic-moon-df8850p673zj275y.jpg"
                    radius="xs"
                    sx={{
                        width: '100%',
                        height: '100vh',
                        objectFit: 'cover', 
                        display: 'flex',
                        flexDirection: 'column', 
                        justifyContent: isMobile ? 'center' : 'space-between',
                        alignItems: 'center',
                        padding: '20px', 
                        backgroundPosition: 'center', 
                    }}
                >
                    <Text
                        color="#fff"
                        ta='center'
                        style={{
                            fontSize: 'clamp(1rem, 5vw, 2rem)', 
                            maxWidth: '80%',
                            alignSelf: isMobile ? 'center' : 'start',
                        }}
                    >
                        Texto
                    </Text>

                    <Button 
                        color="red" 
                        radius="md" 
                        size="xl"
                        style={{
                            alignSelf: isMobile ? 'center' : 'center', 
                        }}
                    >
                        Texto
                    </Button>
                </BackgroundImage>
            </div>
        </>
    );
}

export default AboutBanner;
