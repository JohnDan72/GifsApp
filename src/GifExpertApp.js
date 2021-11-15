
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import {    Col, 
            Container, 
            Content, 
            Divider, 
            FlexboxGrid, } from 'rsuite';
import AddCategory from './components/AddCategory';

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
                            <Divider>Divider</Divider>
                            <FlexboxGrid justify="center">
                                <FlexboxGrid.Item as={Col} xs={12}>
                                    <AddCategory/>

                                </FlexboxGrid.Item>

                            </FlexboxGrid>
                            <Divider></Divider>
                            <ol>
                                {
                                    categories.map((cat, ind) => {
                                        return (
                                            <li key={ind + 1}>
                                                {cat}
                                            </li>
                                        )
                                    })
                                }

                            </ol>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </Content>
            </Container>

        </>
    );
}

export default GifExpertApp;