import './App.css';
import ImportarnP from './Components/ImportarnP';
import AboutBanner from './Components/AboutBanner';
import TabsProductM from './Components/TabsProductM';
import BannerCarrousel from './Components/BannerCarrousel';
import { ActionIcon } from '@mantine/core';
import { IconBrandWhatsapp } from '@tabler/icons-react';
function Home() {

  return (
    <>
      <BannerCarrousel />
      <ImportarnP />
      <AboutBanner />
      <TabsProductM />
      <ActionIcon
        color="green"
        size="xl"
        p={5}
        radius="xl"
        variant="filled"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000
        }}
      >
        <IconBrandWhatsapp size={48} />
      </ActionIcon>

    </>
  );
}

export default Home;