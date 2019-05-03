import React, { useState } from 'react';

import style from './Modal.scss';

const Modal = props => {
  const { location } = props;
  const { pathname } = location;
  const type = pathname.split('/')[3];
  const image = props.query ? `thumb${props.query}` : `thumb${pathname.split('/')[4]}`;
  const imageSource = require(`../images/photography/${type}/${image}.jpg`)
  return (
    <div className={style.overlay}>
      <img className={style.photo} src={imageSource} alt="Image" />
      <button className={style.back} onClick={props.history.goBack}>Back</button>
    </div>
  );
};

export default Modal;