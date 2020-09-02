import React from 'react';
import styles from './styles.css';
import SearchBar from '../SearchBar';
import { SoftButton } from '../unity/Button';
import { TransparentIcon } from '../unity/Icon';
import { H1 } from '../Title';
import Tab from '../Tab';

const Navbar = () => {
  return (
    <header className={styles.container}>
      <SearchBar />
      <div className={styles['title-container']}>
        <H1 text="Lorem" />
        <div className={styles['tabs-container']}>
          <Tab text="Lorem 1" />
          <Tab text="Lorem 2" />
          <Tab text="Lorem 3" />
          <Tab text="Lorem 4" />
          <Tab text="Lorem 5" />
          <Tab text="Lorem 6" />
        </div>
      </div>
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
