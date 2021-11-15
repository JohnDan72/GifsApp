
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import {
    Col,
    Container,
    Content,
    Divider,
    FlexboxGrid,
    List,
} from 'rsuite';
// icons
import AddCategory from './components/AddCategory';
// import PcIcon from '@rsuite/icons/Pc';
// import MobileIcon from '@rsuite/icons/Mobile';
import DeviceIcon from '@rsuite/icons/Device';




const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragin ball']);

    // const handleAdd = (newCategory = 'Counter X') => {
    //     setCategories([...categories, newCategoryS]);
    // }

    return (
        <>
            <Container className="mt-5">
                <Content>
                    <FlexboxGrid justify="center">
                        <FlexboxGrid.Item as={Col} colspan={24} xs={20}>
                            <h2>Gif Expert App</h2>
                            <Divider>
                                <DeviceIcon style={{ fontSize: '2em' }} />
                            </Divider>
                            <FlexboxGrid justify="center">
                                <FlexboxGrid.Item as={Col} xs={12}>
                                    <AddCategory />

                                </FlexboxGrid.Item>

                            </FlexboxGrid>

                            {/* <Divider></Divider> */}

                            <List className="mt-5" bordered>
                                {
                                    categories.map((cat, ind) => (
                                        <List.Item key={ind + 1} index={ind}>
                                            {cat}
                                        </List.Item>

                                    ))
                                }
                            </List>
                            {/* <ol>
                                {
                                    categories.map((cat, ind) => {
                                        return (
                                            <li key={ind + 1}>
                                                {cat}
                                            </li>
                                        )
                                    })
                                }

                            </ol> */}
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </Content>
            </Container>

        </>
    );
}

export default GifExpertApp;