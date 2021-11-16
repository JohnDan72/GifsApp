
import React from 'react';
import PropTypes from 'prop-types';
import { List, Panel, Placeholder } from 'rsuite';

const { Paragraph } = Placeholder;


const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const GifGridItem = ({ id, title, url }) => {
    return (
        <Panel bordered header={title}>
            <img src={url} />
        </Panel>
        // <List.Item  appearance="primary">
        //     <img src={url} alt={title}/>
        //     {title}
        // </List.Item>
    );
}

GifGridItem.propTypes = propTypes;
GifGridItem.defaultProps = defaultProps;
// #endregion

export default GifGridItem;