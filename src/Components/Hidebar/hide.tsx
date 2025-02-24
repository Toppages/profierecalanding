import * as React from 'react';
import Box from '@mui/material/Box';
import Logo from '../../assets/PROFIRECA.png';
import Logon from '../../assets/PROFIRECA Negro.png';
import Slide from '@mui/material/Slide';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { motion } from 'framer-motion';
import { useCart } from '../../CartContext';
import { Link, useLocation } from 'react-router-dom';
import { Group, ActionIcon, Image, Indicator, Text, Container, Title } from '@mantine/core';
import { IconBrandInstagram, IconBrandFacebook, IconShoppingCart } from '@tabler/icons-react';

interface Props {
  window?: () => Window;
  children?: React.ReactElement<unknown>;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}
const drawerWidth = 240;

export default function HideAppBar(props: Props) {
  const location = useLocation();
  const { cart } = useCart();

  const isActive = (path: string) => location.pathname === path ? 'red' : 'white';
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const getLinkStyle = (path: string) => ({
    color: location.pathname === path ? 'red' : 'black',
    borderBottom: location.pathname === path ? '2px solid red' : 'none',
    textDecoration: 'none',
    outline: 'none'
  });

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Container mt={15} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Link to="/profierecalanding">
          <Image width="200px" height="100px" src={Logon} />
        </Link>
        <div>
          <Link
            to="/profierecalanding"
            style={getLinkStyle('/profierecalanding')}
          >
            <Title mt={15} mr={15} order={3} >
              INICIO
            </Title>
          </Link>

          <Link
            to="/profierecalanding/Catalogo"
            style={getLinkStyle('/profierecalanding/Catalogo')}
          >
            <Title mt={15} mr={15} order={3} >
              CATALOGO
            </Title>
          </Link>

          <Link
            to="/profierecalanding/Nosotros"
            style={getLinkStyle('/profierecalanding/Nosotros')}
          >

            <Title mt={15} mr={15} order={3} >
              NOSOTROS
            </Title>
          </Link>

          <Link
            to="/profierecalanding/contacto"
            style={getLinkStyle('/profierecalanding/contacto')}
          >

            <Title mt={15} mr={15} order={3} >
              CONTACTANOS
            </Title>
          </Link>

          <Link
            to="/profierecalanding/Servicio"
            style={getLinkStyle('/profierecalanding/Servicio')}
          >
            <Title mb={15} mt={15} mr={15} order={3} >
              SERVICIOS
            </Title>

          </Link>

          <Group mt={15} spacing="xl" position="center">
            <ActionIcon mr={15} radius="xl">
              <IconBrandInstagram color="red" size={34} />
            </ActionIcon>
            <ActionIcon mr={15} radius="xl">
              <IconBrandFacebook color="red" size={34} />
            </ActionIcon>
            {cart.length > 0 ? (
              <Indicator label={cart.length} withBorder showZero={false} inline color="red" overflowCount={999} size={20}>
                <Link to="/profierecalanding/Cart">
                  <ActionIcon mr={8} radius="xl">
                    <IconShoppingCart color="red" size={34} />
                  </ActionIcon>
                </Link>
              </Indicator>
            ) : (
              <Link to="/profierecalanding/Cart">
                <ActionIcon mr={8} radius="xl">
                  <IconShoppingCart color="red" size={34} />
                </ActionIcon>
              </Link>
            )}
          </Group>
        </div>
      </Container>
    </Box>

  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar component="nav" sx={{ backgroundColor: '#273036' }}>

          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: { xs: 'flex', sm: 'none' },
                justifyContent: 'center',
                flexGrow: 1,
              }}
            >
              <Link to="/profierecalanding">
                <Image width="200px" height="100px" src={Logo} />
              </Link>

            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'block' }, justifyContent: 'flex-end' }}>

              <Link to="/profierecalanding">
                <Image width="200px" height="89px" src={Logo} />
              </Link>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'block' }, flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Group spacing="xl" position="center">
                <Link to="/profierecalanding" style={{ textDecoration: 'none' }}>
                  <motion.div whileHover={{ scale: 1.1, color: 'red' }}>
                    <Text fw={700} style={{ color: isActive("/profierecalanding") }}>
                      Inicio
                    </Text>
                  </motion.div>
                </Link>
                {['/profierecalanding/Catalogo', '/profierecalanding/Nosotros', '/profierecalanding/Contacto', '/profierecalanding/Servicio'].map((path, index) => (
                  <Link key={index} to={path} style={{ textDecoration: 'none' }}>
                    <motion.div whileHover={{ scale: 1.1, color: 'red' }}>
                      <Text fw={700} style={{ color: isActive(path) }}>
                        {path.split('/').pop()}
                      </Text>
                    </motion.div>
                  </Link>
                ))}
              </Group>

            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Group spacing="xl" position="center">

                <ActionIcon mr={15} radius="xl"><IconBrandInstagram color="red" size={34} /></ActionIcon>
                <ActionIcon mr={15} radius="xl"><IconBrandFacebook color="red" size={34} /></ActionIcon>
                {cart.length > 0 ? (
                  <Indicator label={cart.length} withBorder showZero={false} inline color="red" overflowCount={999} size={20}>
                    <Link to="/profierecalanding/Cart">
                      <ActionIcon mr={8} radius="xl"><IconShoppingCart color="red" size={34} /></ActionIcon>
                    </Link>
                  </Indicator>
                ) : (
                  <Link to="/profierecalanding/Cart">
                    <ActionIcon mr={8} radius="xl"><IconShoppingCart color="red" size={34} /></ActionIcon>
                  </Link>
                )}
              </Group>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>

      </nav>
      <Toolbar />
    </React.Fragment>
  );
}