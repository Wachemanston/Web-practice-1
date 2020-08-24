import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import { TransparentIcon } from './Icon';

const DefaultButton = ({ children }) => {
  return (
    <div className={`${styles['button-container']} ${styles['default-button']}`}>{children}</div>
  );
};

export const SoftButton = ({ children }) => {
  return (
    <div className={`${styles['button-container']} ${styles['soft-button']}`}>{children}</div>
  );
};

export const IconButton = ({ iconName }) => {
  return (
    <div className={`${styles['button-container']} ${styles['icon-button']}`}>
      <TransparentIcon name={iconName} />
    </div>
  );
};

DefaultButton.propTypes = {
  children: PropTypes.node.isRequired,
};

SoftButton.propTypes = {
  children: PropTypes.node.isRequired,
};

IconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
};

export default DefaultButton;
