import React from 'react';
import Modal from './Modal';
import { Link, Route } from 'react-router-dom';

import style from './Photography.scss';

const Photography = () => {
  const fashionImages = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const boudoirImages = [2, 4, 7, 8, 9, 12, 13, 14, 16];
  const productImages = [1, 2, 3];
  const retouchingImages = [1, 2, 3];

  return (
    <div className={style.content}>
      <h3>Photography & Videography</h3>
      <hr />
      <h4 className={style.subtitle}>Fashion / Editorial / Street: </h4>
      <p>Whether you are looking to promote your clothing line, or your brand, we setup a package and provide your with the necessary photos to use on your website or social account.</p>
      <div className={style.projects}>
        {fashionImages.map(image => {
          const fashionImage = require(`../images/photography/fashion/thumb${image}.jpg`);
          return (
            <Link className={style.link} key={`thumbFashionLink${image}`} to={{ pathname: `photography/image/fashion/${image}`, query: String(image) }}>
              <img key={`thumbFashion${image}`} className={style.thumb} src={fashionImage} alt="Fashion" />
            </Link>
          )
        })}
      </div>
      <h4 className={style.subtitle}>High End Boudoir Photoshoot : </h4>
      <p>Looking to create the perfect present for your significant other? Or in need to boost your confidence? We will provide you with a package, including a location to take some shots, that are sure to impress. With an option to produce a customised photo album.</p>
      <div className={style.projects}>
        {boudoirImages.map(image => {
          const boudoirImage = require(`../images/photography/boudoir/thumb${image}.jpg`);
          return (
            <Link className={style.link} key={`thumbBoudoirLink${image}`} to={{ pathname: `photography/image/boudoir/${image}`, query: String(image) }}>
              <img key={`thumbBoudoir${image}`} className={style.thumb} src={boudoirImage} alt="Boudoir" />
            </Link>
          )
        })}
      </div>
      <h4 className={style.subtitle}>Portraits and/or Headshots: </h4>
      <p>Simple Portrait photographs to use professionally or customised Headshots</p>
      <h4 className={style.subtitle}>Product Photography: </h4>
      <p>Need some professional photographs of your products in order to display them on your website or show them off in a magazine or on your store's instagram account? Get in touch!</p>
      <div className={style.projects}>
        {productImages.map(image => {
          const productImage = require(`../images/photography/product/thumb${image}.jpg`);
          return (
            <Link className={style.link} key={`thumbProductLink${image}`} to={{ pathname: `photography/image/product/${image}`, query: String(image) }}>
              <img key={`thumbProduct${image}`} className={style.thumb} src={productImage} alt="Product" />
            </Link>
          )
        })}
      </div>
      <h4 className={style.subtitle}>Events: </h4>
      <p>Corporate Events, Seminars or Parties. Let us know and will see how we can accomodate depending on location.</p>
      <h4 className={style.subtitle}>Retouching: </h4>
      <p>We will help you take care of photographs in need of saving. Colour correction, skin retouching, removal of unwanted objects and more.</p>
      <div className={style.projects}>
        {retouchingImages.map(image => {
          const retouchingImage = require(`../images/photography/retouching/thumb${image}.jpg`);
          return (
            <Link className={style.link} key={`thumbRetouchingLink${image}`} to={{ pathname: `photography/image/retouching/${image}`, query: String(image) }}>
              <img key={`thumbRetouching${image}`} className={style.thumb} src={retouchingImage} alt="Retouching" />
            </Link>
          )
        })}
      </div>
      <h4 className={style.subtitle}>Videos: </h4>
      <p>We can arrange short videos to use on your Social Media account to promote your store, cafe, bar or even yourself. Just get in touch and we can discuss the details.</p>
      <p><strong>Contact us for further details and pricing.</strong></p>
      <Route exact path="/photography/image/fashion/:id" component={Modal} />
      <Route exact path="/photography/image/boudoir/:id" component={Modal} />
      <Route exact path="/photography/image/product/:id" component={Modal} />
      <Route exact path="/photography/image/retouching/:id" component={Modal} />
    </div>
  );
};

export default Photography;