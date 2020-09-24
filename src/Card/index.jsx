import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Card = ({ text, imgPath, imgAlt }) => {
  return (
    <figure className={styles.container}>
      <img src={imgPath} alt={imgAlt} className={styles.img}/>
      <p>{text}</p>
    </figure>
  );
};

Card.propTypes = {
  text: PropTypes.string.isRequired,
  imgPath: PropTypes.string.isRequired,
  imgAlt: PropTypes.string,
};

Card.defaultProps = {
  imgAlt: 'no information',
};

export default Card;
