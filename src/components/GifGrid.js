import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Divider, List, Row } from 'rsuite';
import GifGridItem from './GifGridItem';

const propTypes = {
    category: PropTypes.string.isRequired
};

const defaultProps = {};

/**
 * 
 */

const GifGrid = ({ category }) => {
    const [count, setCount] = useState(0)
    const [gifs, setgifs] = useState([])
    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=0bcW1FR66wVpVSj3v8logtrzaY6OIjvO&q=matrix&limit=25&offset=0&rating=g&lang=en`;
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs_data = data.map(img => ({ id: img.id, title: img.title, url: img.images?.downsized_medium.url }))
        setgifs(gifs_data);
        console.log("gifs...");
        console.log(gifs);
    }
    // getGifs();
    return (
        <>
            <h5>{category}</h5>
            <Divider></Divider>
            <Row>
                {
                    gifs.map((gif, ind) => (
                        <Col key={gif.id}>
                            <GifGridItem  {...gif} />
                        </Col>
                    ))
                }
            </Row>
            {/* <List className="mt-4" bordered>
                {
                    gifs.map((gif, ind) => (
                        <GifGridItem key={gif.id} {...gif} />

                    ))
                }
            </List> */}


            <h4>{count}</h4>
            <Button appearance="primary" onClick={() => setCount(count + 1)}>Rsuite</Button>
        </>
    );
}

GifGrid.propTypes = propTypes;
GifGrid.defaultProps = defaultProps;
// #endregion

export default GifGrid;