import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';

import style from './Modal.scss';

const Modal = props => {
  const [finalImage, setFinalImage] = useState(null);
  const { location, history } = props; // eslint-disable-line
  const { goBack } = history;
  const { pathname, query } = location;
  const type = pathname.split('/')[3];
  const imageThumb = query ? `thumb${query}` : `thumb${pathname.split('/')[4]}`;
  const image = query ? `image${query}` : `image${pathname.split('/')[4]}`;
  const imageSourceThumb = require(`../images/photography/${type}/${imageThumb}.jpg`); // eslint-disable-line
  const imageSource = require(`../images/photography/${type}/${image}.jpg`); // eslint-disable-line

  const onLoad = () => {
    const imageSource = require(`../images/photography/${type}/${image}.jpg`); // eslint-disable-line
    setFinalImage(imageSource);
  }

  return (
    <Zoom duration={250}>
      <div className={style.overlay}>
        <img style={{ display: "none" }} onLoad={onLoad} className={style.photo} src={imageSource} alt={image} />
        <img className={style.photo} src={finalImage || imageSourceThumb} alt={image} />
        <button type="button" className={style.back} onClick={goBack}>
          Back
        </button>
      </div>
    </Zoom>
  );
};

export default Modal;