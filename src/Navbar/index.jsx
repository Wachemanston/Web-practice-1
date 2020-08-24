import React from 'react';
import styles from './styles.css';
import SearchBar from '../SearchBar';
import { SoftButton } from '../unity/Button';
import { TransparentIcon } from '../unity/Icon';

const Navbar = () => {
  return (
    <header className={styles.container}>
      <SearchBar />
      <div>
        <SoftButton>
          <TransparentIcon />
          <span>Lorem 1</span>
        </SoftButton>
        <SoftButton>
          <TransparentIcon />
          <span>Lorem 2</span>
        </SoftButton>
      </div>
    </header>
  );
};

export default Navbar;
