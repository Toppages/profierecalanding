import { Modal, Grid, Image, Stack, Title, Button, NumberInput, Text } from '@mantine/core';
import { useState, useEffect } from 'react';
import { useCart } from '../../CartContext';

interface ProductModalProps {
    opened: boolean;
    onClose: () => void;
    product: any;
}

const ProductModal = ({ opened, onClose, product }: ProductModalProps) => {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (opened) {
            setQuantity(1);
        }
    }, [opened]);

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }
        onClose();
    };

    return (
        <Modal opened={opened} onClose={onClose} size="lg" withCloseButton={false} centered  styles={{
          root: {
              zIndex: 2001,
          },
          modal: {
              backgroundColor: 'white',
          },
      }}>
            {product && (
                <Grid gutter="xl" align="center">
                    <Grid.Col xs={12} sm={6}>
                        <Image fit="contain" src={product.src} alt={product.title} radius="md" />
                    </Grid.Col>
                    <Grid.Col xs={12} sm={6}>
                        <Stack align="center" spacing="xl">
                            <Title align="center" order={2}>{product.title}</Title>
                            <Title align="center" color="dimmed" order={5}>{product.category}</Title>
                            <Title align="center" size="sm" italic order={6}>{product.subcategoria}</Title>
                            <Text align="center" color="dimmed">{product.descrip}</Text>
                            <Stack align="center" spacing="lg">
                                <NumberInput
                                    min={1}
                                    value={quantity}
                                    onChange={(value) => value !== undefined && setQuantity(value)}
                                    radius="md"
                                    size="lg"
                                    style={{ width: '100px' }}
                                />
                                <Button size="lg" color="red" onClick={handleAddToCart}>
                                    Añadir al carrito
                                </Button>
                            </Stack>
                        </Stack>
                    </Grid.Col>
                </Grid>
            )}
        </Modal>
    );
};

export default ProductModal;
