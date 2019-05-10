import React from 'react';
import Fade from 'react-reveal/Fade';

import style from './Contact.scss';

const Contact = () => {
  return (
    <div className={style.content}>
      <h3>Contact</h3>
      <hr />
      <Fade>
        <h4>info@digitations.es</h4>
        <h4>+34-671217767</h4>
      </Fade>
    </div>
  );
};

export default Contact;