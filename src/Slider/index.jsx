import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import DefaultIcon from '../unity/Icon';

const Slider = () => {
  const src = 'https://images.unsplash.com/photo-1598928428433-1077478561d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
  return (
    <div className={styles.container}>
      <div className={styles['sub-container']}>
        <img src={src} alt="" /><img src={src} alt="" /><img src={src} alt="" /><img src={src} alt="" /><img src={src} alt="" />
      </div>
      <DefaultIcon classes={styles.chevron} />
      <DefaultIcon classes={styles.chevron} />
    </div>
  );
}

export default Slider;
