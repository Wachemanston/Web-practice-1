import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import { TransparentIcon } from '../unity/Icon';

const Tab = ({ text }) => {
  return (
    <div className={styles.container}>
      <TransparentIcon classes={styles.icon} />
      <span className={styles.text}>{ text }</span>
      <div className={styles.bar} />
    </div>
  );
};

Tab.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tab;
