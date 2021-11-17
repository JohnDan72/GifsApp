
import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'rsuite';
import styles from '../css/GifGridItem.module.css';


const propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    shortName: PropTypes.string.isRequired,
}

const GifGridItem = ({ id, title, url , shortName }) => {
    return (
        <Panel bodyFill className={styles.rsPanel}> 
            <img src={url} className={styles.imgCard} alt={title} />
            <Panel header={shortName}></Panel>
        </Panel>
    );
}

GifGridItem.propTypes = propTypes;
// #endregion

export default GifGridItem;