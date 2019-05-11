import React from 'react';
import Fade from 'react-reveal/Fade';

import style from './Contact.scss';

const Contact = () => {
  return (
    <div className={style.content}>
      <h3>Contact</h3>
      <hr />
      <Fade>
        <div className={style.contact}>
          <h4>For more information, questions and pricing please contact us at: </h4>
          <p><a href="mailto:info@digitations.net">info@digitations.net</a></p>
          <p>(+34)-671-217-767</p>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;