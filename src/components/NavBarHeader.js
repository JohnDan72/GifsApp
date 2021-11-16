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

// import { Home } from '@rsuite/icons';




const NavBarHeader = () => {
    const [activeKey, setActiveKey] = React.useState(null);

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

                    </Nav>

                </FlexboxGrid.Item>
            </FlexboxGrid>


        </Navbar>
    );
}

// #endregion

export default NavBarHeader;