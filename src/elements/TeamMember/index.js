import React from 'react';
import styles from './teamMember.module.scss';

const TeamMember = ({ name, title, children: { headshot, bio } }) => {
  return (
    <div className={styles.teamMember}>
      <div className={styles.flexContainer}>
        <div className={styles.imageColumn}>
          {headshot}
        </div>
        <div className={styles.textColumn}>
          <h3>{name}</h3>
          <h4>{title}</h4>
        </div>
      </div>
      <div className={styles.bioText}>
        {bio}
      </div>
    </div>
  );
};

export default TeamMember;