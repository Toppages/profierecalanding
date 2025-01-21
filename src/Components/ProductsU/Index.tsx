import { IconEye } from '@tabler/icons-react';
import { useState } from 'react';
import { Modal, ActionIcon, Text, Title, Image, Group } from '@mantine/core';

function ProductsU({ product }: { product: any }) {

    const [modalOpened, setModalOpened] = useState(false);

    return (
        <>
            <Modal
                opened={modalOpened}
                onClose={() => setModalOpened(false)}
                size="80%"
                withCloseButton={false}
                centered
            >

                <Title ta='center' order={2}>{product.title}</Title>
                <Group position='apart'>
                    <div style={{ width: 240 }}>
                        <Image
                            fit="contain" src={product.src} alt={product.title} />
                    </div>

                    <Text>{product.subcategoria}</Text>
                </Group>
            </Modal>

            <ActionIcon onClick={() => setModalOpened(true)}>
                <IconEye color="red" size={34} />
            </ActionIcon>
        </>
    );
}

export default ProductsU;
