import React from 'react';

import Image from './Image';
import UserDetails from './UserDetails';
import Stat from './Stat';
import Aux from '../Auxs';
import styles from './Card.module.css';

const Card = props =>{
  const displayCard = props.login ?
  (   <Aux>
      <div className={styles.profile}>
        <Image username={props.username} avatar={props.avatar} url={props.url} />
        <UserDetails name={props.name} location={props.location} bio={props.bio} username={props.username} url={props.url} />          
      </div>
      <div className={styles.stats}>
        <Stat label={"Repositories"} stat={props.public_repos} url={props.repo_url}/>
        <Stat label={"Followers"} stat={props.followers} url={props.followers_url}/>
        <Stat label={"Gists"} stat={props.gists} url={props.gists_url}/>
      </div>
      </Aux>
  ) : 
  (
    <div className={styles.profile}>
    <Image username={props.username} />
    <UserDetails error={props.error} />          
  </div>
  );

  return (
    <div className={styles.card}>
      {displayCard}
    </div>
    )
}
export default Card;