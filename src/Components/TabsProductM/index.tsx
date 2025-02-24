import Productsmain from "../Productsmain";
import { Text } from '@mantine/core';
import { useState } from "react";

function TabsProductM() {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = ['Extintor cargado', 'Equipos industriales', 'Accesorios y repuestos'];

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <>
            <div className="tabs-container">
                <div className="tab-list">
                    {tabs.map((tab, index) => (
                        <div
                            key={index}
                            className={`tab ${index === activeTab ? 'active-tab' : ''}`}
                            onClick={() => handleTabClick(index)}
                        >
                            <Text
                                mt={45}
                                mr={15}
                                fw={700}
                            >
                                {tab}
                            </Text>
                        </div>
                    ))}
                </div>

                <div className="tab-content">
                    {activeTab === 0 && <Productsmain category="Extintor cargado" />}
                    {activeTab === 1 && <Productsmain category="Equipos industriales" />}
                    {activeTab === 2 && <Productsmain category="Accesorios y repuestos" />}
                </div>
            </div>
        </>
    );
}

export default TabsProductM;
