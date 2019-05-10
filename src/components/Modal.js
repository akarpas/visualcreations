import React from 'react';
import Zoom from 'react-reveal/Zoom';

import style from './Modal.scss';

const Modal = props => {
  const { location, history } = props; // eslint-disable-line
  const { goBack } = history;
  const { pathname, query } = location;
  const type = pathname.split('/')[3];
  const image = query ? `image${query}` : `image${pathname.split('/')[4]}`;
  const imageSource = require(`../images/photography/${type}/${image}.jpg`) // eslint-disable-line
  return (
    <Zoom duration={250}>
      <div className={style.overlay}>
        <img className={style.photo} src={imageSource} alt={image} />
        <button type="button" className={style.back} onClick={goBack}>
          Back
        </button>
      </div>
    </Zoom>
  );
};

export default Modal;