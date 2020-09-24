import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Section = ({ children }) => {
  return (
    <section className={styles.section}>
      { children }
      <div className={styles['section-separator']} />
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
