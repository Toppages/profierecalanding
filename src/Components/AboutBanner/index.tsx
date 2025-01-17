import { BackgroundImage, Button,Text} from '@mantine/core';
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
                  {/* <Group position='apart'>
                <div>

                    <Image
                        src='https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
                        alt='no'
                        fit="contain"
                        radius="md"
                        width="100%"
                        height="90%"
                        style={{ objectFit: 'contain', maxHeight: '850px' }}
                    />
                    <Title ta="center" order={4}>hola</Title>
                </div>
                <div>

                    <Image
                        src='https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
                        alt='no'
                        fit="contain"
                        radius="md"
                        width="100%"
                        height="90%"
                        style={{ objectFit: 'contain', maxHeight: '850px' }}
                    />
                    <Title ta="center" order={4}>hola</Title>
                </div>
                <div>

                    <Image
                        src='https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
                        alt='no'
                        fit="contain"
                        radius="md"
                        width="100%"
                        height="90%"
                        style={{ objectFit: 'contain', maxHeight: '850px' }}
                    />
                    <Title ta="center" order={4}>hola</Title>
                </div>
            </Group> */}
            </div>
        </>
    );
}

export default AboutBanner;
