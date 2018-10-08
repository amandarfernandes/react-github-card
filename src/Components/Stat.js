import React from 'react';
import styles from './UserDetails.module.css';
const Stat = props => (
    <a className={styles.box} href={props.url} target="_blank" rel="noopener noreferrer" >
    <p className={styles.large}>{props.stat}</p>
    <p className={styles.small}>{props.label}</p>
    </a>
)

export default Stat;