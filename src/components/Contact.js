import React from 'react';
import Fade from 'react-reveal/Fade';

import style from './Contact.scss';

const Contact = () => {
  return (
    <div className={style.content}>
      <h3>Contact</h3>
      <hr />
      <Fade>
        <p>info@digitations.es</p>
        <p>+34-671217767</p>
      </Fade>
    </div>
  );
};

export default Contact;