import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const DefaultIcon = ({ name, classes }) => {
  return (
    <div className={`${styles['icon-container']} ${styles['default-icon']} ${classes}`}>
      <span>i</span>
    </div>
  );
};

export const TransparentIcon = ({ name, classes }) => {
  return (
    <DefaultIcon name={name} classes={`${styles['transparent-icon']} ${classes}`} />
  );
};

const IconPropTypes = {
  name: PropTypes.string,
  classes: PropTypes.string,
};

const IconDefaultProps = {
  name: '',
  classes: '',
};

DefaultIcon.propTypes = IconPropTypes;
DefaultIcon.defaultProps = IconDefaultProps;
TransparentIcon.propTypes = IconPropTypes;
TransparentIcon.defaultProps = IconDefaultProps;

export default DefaultIcon;
