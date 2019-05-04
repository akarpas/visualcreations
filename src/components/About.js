import React from 'react';
import Fade from 'react-reveal/Fade';

import style from './Software.scss';

const About = () => {
  return (
    <div className={style.content}>
      <h3>About</h3>
      <hr />
      <Fade>
        <p>Based in Barcelona, Spain with a passion for creating visual and digital products, focusing on Photography, Video, Web and Software development.</p>
        <p>Enjoying the worked produced and open to new challenges and collaborations to bring ideas to life and create new connections and produce results that satisfy the customers needs.</p>
        <p>Offering freelance servies for short term contracts and jobs. Available for short term traveling, for specific types of work.</p>
      </Fade>
    </div>
  );
};

export default About;