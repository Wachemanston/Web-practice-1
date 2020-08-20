import React from 'react';
import styles from './styles.css';
import SearchBar from '../SearchBar';

const Navbar = () => {
  return (
    <header className={styles.container}>
      <SearchBar />
    </header>
  );
};

export default Navbar;
