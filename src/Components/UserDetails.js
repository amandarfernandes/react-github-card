import React from 'react';
import Aux from '../Auxs';

import styles from './UserDetails.module.css';

const UserDetails = props =>{

    const userDetails = props.username ? 
    (
    <Aux>
    <p className={styles.large}><a href={props.url} rel="noopener noreferrer" target="_blank">{props.name}</a></p>
    <p className={styles.brown}>{props.location}</p>
    <p className={styles.small}>{props.bio}</p>
    </Aux>
    ):(
    props.error ? (<h4 style={{ margin: "10px"}}>{props.error} </h4>)
    :(<h4 style={{margin: "10px"}}>Please enter a Github User to search on </h4>)
    )
    

    return (
        <div className={styles.title}>
            {userDetails}
        </div>
    );
}

export default UserDetails;