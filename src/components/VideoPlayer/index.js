import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './videoPlayer.module.scss';
import { useKeyPress } from '../../functional/hooks';
import play from '../../images/playButton.png';

const VideoPlayer = ({ children }) => {
  const [open, setOpen] = useKeyPress('Escape');

  return (
    <div className={classnames(styles.menu, open && styles.menuOpen)}>
      <a
        className={styles.playButton}
        onClick={() => {
          setOpen(true);
        }}
      >
        <img src={play} />
      </a>
      <div className={styles.overlay}>
        <div className={styles.videoIframeContainer}>
          {open && children}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;