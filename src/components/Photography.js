import React from 'react';
import BoudoirImage2 from '../images/photography/boudoir/image2.jpg';
import BoudoirImage4 from '../images/photography/boudoir/image4.jpg';
import BoudoirImage5 from '../images/photography/boudoir/image5.jpg';
import BoudoirImage7 from '../images/photography/boudoir/image7.jpg';
import BoudoirImage8 from '../images/photography/boudoir/image8.jpg';
import BoudoirImage9 from '../images/photography/boudoir/image9.jpg';
import BoudoirImage12 from '../images/photography/boudoir/image12.jpg';
import BoudoirImage13 from '../images/photography/boudoir/image13.jpg';
import BoudoirImage14 from '../images/photography/boudoir/image14.jpg';
import BoudoirImage16 from '../images/photography/boudoir/image16.jpg';
import BoudoirThumb2 from '../images/photography/boudoir/thumb2.jpg';
import BoudoirThumb4 from '../images/photography/boudoir/thumb4.jpg';
import BoudoirThumb5 from '../images/photography/boudoir/thumb5.jpg';
import BoudoirThumb7 from '../images/photography/boudoir/thumb7.jpg';
import BoudoirThumb8 from '../images/photography/boudoir/thumb8.jpg';
import BoudoirThumb9 from '../images/photography/boudoir/thumb9.jpg';
import BoudoirThumb12 from '../images/photography/boudoir/thumb12.jpg';
import BoudoirThumb13 from '../images/photography/boudoir/thumb13.jpg';
import BoudoirThumb14 from '../images/photography/boudoir/thumb14.jpg';
import BoudoirThumb16 from '../images/photography/boudoir/thumb16.jpg';
import FashionImage1 from '../images/photography/fashion/image1.jpg';
import FashionImage2 from '../images/photography/fashion/image2.jpg';
import FashionImage3 from '../images/photography/fashion/image3.jpg';
import FashionImage4 from '../images/photography/fashion/image4.jpg';
import FashionImage5 from '../images/photography/fashion/image5.jpg';
import FashionImage6 from '../images/photography/fashion/image6.jpg';
import FashionImage7 from '../images/photography/fashion/image7.jpg';
import FashionImage8 from '../images/photography/fashion/image8.jpg';
import FashionImage9 from '../images/photography/fashion/image9.jpg';
import FashionThumb1 from '../images/photography/fashion/thumb1.jpg';
import FashionThumb2 from '../images/photography/fashion/thumb2.jpg';
import FashionThumb3 from '../images/photography/fashion/thumb3.jpg';
import FashionThumb4 from '../images/photography/fashion/thumb4.jpg';
import FashionThumb5 from '../images/photography/fashion/thumb5.jpg';
import FashionThumb6 from '../images/photography/fashion/thumb6.jpg';
import FashionThumb7 from '../images/photography/fashion/thumb7.jpg';
import FashionThumb8 from '../images/photography/fashion/thumb8.jpg';
import FashionThumb9 from '../images/photography/fashion/thumb9.jpg';

import style from './Photography.scss';

const Photography = () => {
  return (
    <div className={style.content}>
      <h3>Photography & Videography</h3>
      <hr />
      <h4 className={style.subtitle}>Fashion / Editorial / Street: </h4>
      <p>Whether you are looking to promote your clothing line, or your brand, we setup a package and provide your with the necessary photos to use on your website or social account.</p>
      <div className={style.projects}>
        <img className={style.thumb} src={FashionThumb1} alt="Fashion" />
        <img className={style.thumb} src={FashionThumb2} alt="Fashion" />
        <img className={style.thumb} src={FashionThumb3} alt="Fashion" />
        <img className={style.thumb} src={FashionThumb4} alt="Fashion" />
        <img className={style.thumb} src={FashionThumb5} alt="Fashion" />
        <img className={style.thumb} src={FashionThumb6} alt="Fashion" />
        <img className={style.thumb} src={FashionThumb7} alt="Fashion" />
        <img className={style.thumb} src={FashionThumb8} alt="Fashion" />
        <img className={style.thumb} src={FashionThumb9} alt="Fashion" />
      </div>
      <h4 className={style.subtitle}>High End Boudoir Photoshoot : </h4>
      <p>Looking to create the perfect present for your significant other? Or in need to boost your confidence? We will provide you with a package, including a location to take some shots, that are sure to impress. With an option to produce a customised photo album.</p>
      <div className={style.projects}>
        <img className={style.thumb} src={BoudoirThumb2} alt="Boudoir" />
        <img className={style.thumb} src={BoudoirThumb4} alt="Boudoir" />
        <img className={style.thumb} src={BoudoirThumb7} alt="Boudoir" />
        <img className={style.thumb} src={BoudoirThumb8} alt="Boudoir" />
        <img className={style.thumb} src={BoudoirThumb9} alt="Boudoir" />
        <img className={style.thumb} src={BoudoirThumb12} alt="Boudoir" />
        <img className={style.thumb} src={BoudoirThumb13} alt="Boudoir" />
        <img className={style.thumb} src={BoudoirThumb14} alt="Boudoir" />
        <img className={style.thumb} src={BoudoirThumb16} alt="Boudoir" />
      </div>
      <h4 className={style.subtitle}>Portraits and/or Headshots: </h4>
      <p>Simple Portrait photographs to use professionally or customised Headshots</p>
      <h4 className={style.subtitle}>Product Photography: </h4>
      <p>Need some professional photographs of your products in order to display them on your website or show them off in a magazine or on your store's instagram account? Get in touch!</p>
      <div className={style.projects}>
      </div>
      <h4 className={style.subtitle}>Events: </h4>
      <p>Corporate Events, Seminars or Parties. Let us know and will see how we can accomodate depending on location.</p>
      <h4 className={style.subtitle}>Retouching: </h4>
      <p>We will help you take care of photographs in need of saving. Colour correction, skin retouching, removal of unwanted objects and more.</p>
      <h4 className={style.subtitle}>Videos: </h4>
      <p>We can arrange short videos to use on your Social Media account to promote your store, cafe, bar or even yourself. Just get in touch and we can discuss the details.</p>
      <p><strong>Contact us for further details and pricing.</strong></p>
    </div>
  );
};

export default Photography;