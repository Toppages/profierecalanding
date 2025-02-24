import Productsmain from "../Productsmain";
import { Tabs } from '@mantine/core';

function TabsProductM() {
    const tabs = [
        { label: "Extintor cargado", value: "extintor" },
        { label: "Equipos industriales", value: "equipos" },
        { label: "Accesorios y repuestos", value: "accesorios" },
    ];

    return (
        <>
             <Tabs mt={25} color="red" defaultValue="extintor">
            <Tabs.List grow position="center">
                {tabs.map((tab) => (
                    <Tabs.Tab
                        key={tab.value}
                        value={tab.value}
                        fz={{ base: "md", sm: "lg", lg: "xl" }}
                        sx={{ textAlign: "center" }}
                    >
                        {tab.label}
                    </Tabs.Tab>
                ))}
            </Tabs.List>

            <Tabs.Panel value="extintor" pl="xs">
                <Productsmain category="Extintor cargado" />
            </Tabs.Panel>

            <Tabs.Panel value="equipos" pl="xs">
                <Productsmain category="Equipos industriales" />
            </Tabs.Panel>

            <Tabs.Panel value="accesorios" pl="xs">
                <Productsmain category="Accesorios y repuestos" />
            </Tabs.Panel>
        </Tabs>
        </>
    );
}

export default TabsProductM;
