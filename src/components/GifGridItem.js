
import React from 'react';
// import PropTypes from 'prop-types';
import { Panel } from 'rsuite';
import styles from '../css/GifGridItem.module.css';



const GifGridItem = ({ id, title, url , shortName }) => {
    return (
        <Panel bodyFill className={styles.rsPanel}> 
            <img src={url} className={styles.imgCard} alt={title} />
            <Panel header={shortName}></Panel>
        </Panel>
    );
}

// #endregion

export default GifGridItem;