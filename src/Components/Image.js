import React from 'react';
import styles from './Image.module.css';
const Image = props => {
    const placeholder="https://api.adorable.io/avatars/70/amanda@adorable.png";
    const avatar = props.avatar?props.avatar:placeholder;
    
    return(
    <a className={styles.image} href={props.url} target="_blank" rel="noopener noreferrer">
	    <div className={styles.outer}></div>
		<div className={styles.inner}></div>
		<img src={avatar} alt={props.username} />
	</a>
);
    }

export default Image;