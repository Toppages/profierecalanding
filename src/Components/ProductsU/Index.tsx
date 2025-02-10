import { IconEye } from '@tabler/icons-react';
import { useCart } from '../../CartContext';
import { useState, useEffect } from 'react';
import {
  Modal,
  ActionIcon,
  Title,
  Image,
  Grid,
  Button,
  NumberInput,
  Stack,
  Group,
  Text
} from '@mantine/core';

function ProductsU({ product }: { product: any }) {
  const [modalOpened, setModalOpened] = useState(false);
  const [quantity, setQuantity] = useState<number>(1);
  const { addToCart } = useCart();

  useEffect(() => {
    if (modalOpened) {
      setQuantity(1);
    }
  }, [modalOpened]);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setModalOpened(false);
  };

  const handleQuantityChange = (value: number | undefined) => {
    if (value !== undefined) {
      setQuantity(value);
    }
  };

  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        size="55%"
        withCloseButton={false} 
        centered
        overlayBlur={3}
      >
        <Grid gutter="xl" align="center">
          <Grid.Col xs={12} sm={6}>
            <Image
              fit="contain"
              src={product.src}
              alt={product.title}
              radius="md"
              withPlaceholder
            />
          </Grid.Col>

          <Grid.Col xs={12} sm={6}>
            <Stack align="center" justify="space-between" spacing="xl">
              <Title align="center" order={2}>
                {product.title}
              </Title>
              <Title align="center" color="dimmed" order={5}>
                {product.category}
              </Title>
              <Title align="center" size="sm" italic order={6}>
                {product.subcategoria}
              </Title>

              <Group>
                <NumberInput
                  min={1}
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  radius="md"
                  size="lg"
                  style={{ width: '100px' }}
                />
                <Button
                  size="lg"
                  color="red"
                  onClick={handleAddToCart}
                >
                  Añadir al carrito
                </Button>
              </Group>
                <Text ta='center' mt={3} c="dimmed"> {product.descrip}</Text>
            </Stack>
          </Grid.Col>
        </Grid>
      </Modal>

      <ActionIcon
        onClick={() => setModalOpened(true)}
        size="lg"
        radius="xl"
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <IconEye color="red" size={34} />
      </ActionIcon>
    </>
  );
}

export default ProductsU;
