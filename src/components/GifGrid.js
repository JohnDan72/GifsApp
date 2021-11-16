import React from 'react';
import PropTypes from 'prop-types';
import { Col, Divider, Row, FlexboxGrid } from 'rsuite';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

// icons
import TimeIcon from '@rsuite/icons/Time';

const propTypes = {
    category: PropTypes.string.isRequired
};


const GifGrid = ({ category }) => {

    const { data: gifs, loading } = useFetchGifs(category);

    return (
        <>
            <h5 >{category}</h5>
            <Divider></Divider>
            { loading && (
                <FlexboxGrid justify="center">
                    <FlexboxGrid.Item >
                        <TimeIcon spin style={{ fontSize: '3rem' }} />
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            )}
            <Row className="my-2 animate__animated animate__fadeIn" >
                {
                    gifs.map(gif => (
                        <Col className="mt-3" key={gif.id} xs={12} md={8} lg={6}>
                            <GifGridItem {...gif} />
                        </Col>
                    ))
                }
            </Row>
        </>
    );
}

GifGrid.propTypes = propTypes;

export default GifGrid;