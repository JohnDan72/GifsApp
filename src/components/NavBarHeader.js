import React from 'react';
import {
    Col,
    FlexboxGrid,
    Nav,
    Navbar,
} from 'rsuite';

import {
    BsFillHouseDoorFill,
    BsFillPlugFill,
    BsGiftFill
} from 'react-icons/bs';
import { GiDonut } from "react-icons/gi";
import { RiFocus2Fill } from "react-icons/ri";



// import { Home } from '@rsuite/icons';




const NavBarHeader = ({settheme}) => {
    const [activeKey, setActiveKey] = React.useState(null);
    const handleTheme = () => {
        const themes = ['light','dark','high-contrast'];
        const random = Math.floor(Math.random() * 3);
        settheme(themes[random]);
    }

    return (
        <Navbar appearance="subtle">
            <FlexboxGrid justify="center">
                <FlexboxGrid.Item as={Col} xs={20}>
                    <Navbar.Brand href="#"><BsGiftFill />Gif Expert</Navbar.Brand>
                    <Nav onSelect={setActiveKey} activeKey={activeKey}>
                        <Nav.Item eventKey="1" icon={<BsFillHouseDoorFill />}>
                            Home
                        </Nav.Item>
                        <Nav.Item eventKey="2" icon={<BsFillPlugFill />}>Matrix gifs</Nav.Item>
                        <Nav.Item eventKey="3" icon={<GiDonut />}>Simpsons gifs</Nav.Item>
                        <Nav.Item eventKey="4" icon={<RiFocus2Fill />} onClick={ handleTheme }>Light Mode</Nav.Item>

                    </Nav>

                </FlexboxGrid.Item>
            </FlexboxGrid>


        </Navbar>
    );
}

// #endregion

export default NavBarHeader;