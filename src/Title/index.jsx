import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

export const H1 = ({ text }) => <h1 className={styles.h1}>{ text }</h1>;
export const H2 = ({ text }) => <h2 className={styles.h2}>{ text }</h2>;
export const H3 = ({ text }) => <h3 className={styles.h3}>{ text }</h3>;

const defaultPropTypes = { text: PropTypes.string.isRequired };
H1.propTypes = defaultPropTypes;
H2.propTypes = defaultPropTypes;
H3.propTypes = defaultPropTypes;
