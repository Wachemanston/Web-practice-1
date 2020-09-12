import React from 'react';
import styles from './styles.css';
import DefaultIcon from '../unity/Icon';

const Slider = () => {
  const slideSrc = [
    'https://images.unsplash.com/photo-1598928428433-1077478561d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1599734699867-92dd706c8c64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1598928428433-1077478561d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1599734699867-92dd706c8c64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1599793072640-d8365956dc31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
  ];
  const slideImgs = [];
  for (let i = 0; i < slideSrc.length; i += 1) {
    slideImgs.push(<img src={slideSrc[i]} alt="" key={`slideImg-${i}`} />);
  }

  const [slideIdx, setSlideIdx] = React.useState(0);
  const counter = () => setSlideIdx((slideIdx + 1) % slideSrc.length);
  React.useEffect(() => {
    const timer = setInterval(counter, 3000);
    return () => clearInterval(timer);
  });

  return (
    <div className={styles.container}>
      <div className={styles['sub-container']} style={{ transform: `translateX(${-slideIdx * 100}%)` }}>{slideImgs}</div>
      <DefaultIcon classes={styles.chevron} />
      <DefaultIcon classes={`${styles.chevron} ${styles['right-chevron']}`} />
    </div>
  );
};

export default Slider;
