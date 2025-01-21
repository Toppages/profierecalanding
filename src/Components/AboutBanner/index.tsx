import { Image } from '@mantine/core';
import bannerc from '../../assets/SERVICIO COMERCIAL WEB.png'
import banneri from '../../assets/SERVICIO INDUSTRAL WEB.png'
import bannerr from '../../assets/SERVICIO RESIDENCIAL WEB.png'

function AboutBanner() {

    return (
        <>

            <Image
                mb={20}
                fit="contain"
                src={bannerc}
            />
            <Image
                mb={20}
                fit="contain"
                src={bannerr}
            />
            <Image
                mb={20}
                fit="contain"
                src={banneri}
            />

        </>
    );
}

export default AboutBanner;
