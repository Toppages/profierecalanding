import { Carousel } from "@mantine/carousel";
import { Image } from '@mantine/core';

function BannerCarrousel() {

    return (
        <>
            <div style={{ height: 'auto', display: 'flex' }}>
                <Carousel
                    mb={15}
                    mt={25}
                    sx={{ width: '100%' }}
                    withIndicators
                    loop
                    styles={{
                        indicator: {
                            width: 12,
                            height: 4,
                            transition: 'width 250ms ease',
                            '&[data-active]': {
                                width: 40,
                            },
                        },
                    }}
                >
                    <Carousel.Slide>
                        <Image
                            height="auto"
                            width="100%"
                            fit="cover"
                            src="https://wallpapers.com/images/hd/blue-aesthetic-moon-df8850p673zj275y.jpg"
                            alt="With default placeholder"
                            withPlaceholder
                            className="carousel-image"
                        />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Image
                            height="auto"
                            width="100%"
                            fit="cover"
                            src="https://wallpapers.com/images/hd/blue-aesthetic-moon-df8850p673zj275y.jpg"
                            alt="With default placeholder"
                            withPlaceholder
                            className="carousel-image"
                        />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Image
                            height="auto"
                            width="100%"
                            fit="cover"
                            src="https://wallpapers.com/images/hd/blue-aesthetic-moon-df8850p673zj275y.jpg"
                            alt="With default placeholder"
                            withPlaceholder
                            className="carousel-image"
                        />
                    </Carousel.Slide>
                </Carousel>
            </div>
        </>
    );
}

export default BannerCarrousel;