import React from 'react';
import Navbar from './Navbar';
import Section from './unity/Section';
import Slider from './Slider';

const Main = () => {
  return (
    <div style={{ height: 'inherit' }}>
      <Navbar />
      <Section>
        <Slider />
      </Section>
    </div>
  );
};

export default Main;
