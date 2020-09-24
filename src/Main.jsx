import React from 'react';
import styles from './styles.css';
import Navbar from './Navbar';
import Section from './unity/Section';
import Slider from './Slider';
import { H1 } from './Title';
import DefaultButton from './unity/Button';

const Main = () => {
  return (
    <div style={{ height: 'inherit' }}>
      <Navbar />
      <Section>
        <Slider />
      </Section>
      <Section>
        <H1 text="Lorem Title" />
        <div className={styles['row-img-container']}>
          <img className={styles['half-img']} src="https://images.unsplash.com/photo-1599793072640-d8365956dc31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80" alt="" />
          <img className={styles['half-img']} src="https://images.unsplash.com/photo-1599734699867-92dd706c8c64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80" alt="" />
        </div>
        <p className={styles['half-paragraph']}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eaque et exercitationem expedita, illum iusto </p>
        <p className={styles['half-paragraph']}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eaque et exercitationem expedita, illum iusto </p>
        <div className={styles['row-btn-container']}>
          <DefaultButton><span className={styles['empz-btn']}>Lorem 1</span></DefaultButton>
          <DefaultButton><span className={styles['empz-btn']}>Lorem 2</span></DefaultButton>
        </div>
      </Section>
      <Section>
        <div className={styles['row-container']}>
          <img className={styles['half-img']} src="https://images.unsplash.com/photo-1599793072640-d8365956dc31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80" alt="" />
          <div className={styles['half-paragraph']}>
            <H1 text="Lorem Title" />
            <p className={styles['full-paragraph']}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eaque et exercitationem expedita, illum iusto </p>
            <p className={styles['full-paragraph']}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eaque et exercitationem expedita, illum iusto </p>
            <div className={styles['row-btn-container']}>
              <DefaultButton><span className={styles['empz-btn']}>Lorem 1</span></DefaultButton>
              <DefaultButton><span className={styles['empz-btn']}>Lorem 2</span></DefaultButton>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Main;
