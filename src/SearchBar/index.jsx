import React from 'react';
import styles from './styles.css';
import { TransparentIcon } from '../unity/Icon';

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="SEARCH" />
      <TransparentIcon classes={styles['search-icon']} />
    </div>
  );
};

export default SearchBar;
