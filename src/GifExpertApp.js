import React, { Fragment, useState } from 'react';
// import PropTypes from 'prop-types';
import {
    Carousel,
    Col,
    Container,
    Content,
    Divider,
    FlexboxGrid,
    Header,
    List,
} from 'rsuite';
// icons
import { BsSearch } from 'react-icons/bs';

// components
import AddCategory from './components/AddCategory';
import NavBarHeader from './components/NavBarHeader';
import GifGrid from './components/GifGrid';



const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Dragin ball']);

    return (
        <>
            <Container >
                <Header>
                    <NavBarHeader />
                </Header>
                <Content className="mt-1">
                    <FlexboxGrid justify="center">
                        <FlexboxGrid.Item as={Col} xs={24}>
                            <Carousel    
                                        className="custom-slider"
                                        shape='bar'
                                        heigh="100">
                                <div id="carousel1">
                                    <div className="v-a-middle" justify="center">
                                        <h3>Gif Expert</h3>
                                    </div>
                                </div>
                                <div id="carousel2">
                                    <div className="v-a-middle" justify="center">
                                        <h3>Busca gifs de tu interés</h3>
                                    </div>
                                </div>
                                <div id="carousel3">
                                    <div className="v-a-middle" justify="center">
                                        <h3>Contamos con más de 1,000,000 de posibilidades</h3>
                                    </div>
                                </div>
                                <div id="carousel4">
                                    <div className="v-a-middle" justify="center">
                                        <h3>Encuentra solo lo mejor</h3>
                                    </div>
                                </div>
                            </Carousel>
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item as={Col} colspan={24} xs={20} className="mt-5">
                            <h3>Gif Expert App</h3>
                            <Divider>
                                <BsSearch style={{ fontSize: '1.2em' }}/>
                            </Divider>
                            <FlexboxGrid justify="center">
                                <FlexboxGrid.Item as={Col} xs={12}>
                                    <AddCategory categories={categories} setCategories={setCategories}/>

                                </FlexboxGrid.Item>

                            </FlexboxGrid>

                            <Content className="my-5">
                            {
                                categories.map((cat , ind) => (
                                    <GifGrid category={cat} key={ind}/>
                                ))
                            }

                            </Content>
                            
                            
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </Content>
            </Container>

        </>
    );
}

export default GifExpertApp;