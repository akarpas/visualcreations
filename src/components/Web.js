import React from 'react';
import { Link, Route } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Modal from './Modal';
import PortfolioImage from '../images/web/jpeg/portfolio.jpg';
// import EsolnetImage from '../images/web/jpeg/esolnet.jpg';
import EsolnetImage from '../images/web/jpeg/esolnet_mob.jpg';
import ArtistoImage from '../images/web/jpeg/artisto.jpg';
import style from './Web.scss';

// <a href="https://www.esolnetespana.es" target="_blank" rel="noopener noreferrer">
//   <img className={style.thumb} src={EsolnetImage} alt="Esolnet Espana" />
// </a>

const Web = () => {
  return (
    <div className={style.content}>
      <h3>Website Creation</h3>
      <hr />
      <Fade>
        <p>Providing solutions for simple landing pages to websites for promoting your business, yourself and to show off your work.</p>
        <p>Setting up domains, emails, hosting space and annual maintenance.</p>
      </Fade>
      <Zoom delay={250}>
        <div className={style.projects}>
          <a href="https://www.karpasitis.net" target="_blank" rel="noopener noreferrer">
            <img className={style.thumb} src={PortfolioImage} alt="Portfolio Website" />
          </a>
          <Link className={style.link} to={{ pathname: `web/image/web/1`, query: String(1) }}>
            <img className={style.thumb} src={EsolnetImage} alt="Esolnet" />
          </Link>
          <a href="https://artisto.netlify.com" target="_blank" rel="noopener noreferrer">
            <img className={style.thumb} src={ArtistoImage} alt="Artisto" />
          </a>
        </div>
      </Zoom>
      <Fade>
        <p>Complex solutions to setup an online store or an online membership site. Projects can be discussed on a one to one basis to determine project feasibility and possible costs.</p>
        <p>Technologies that are used include but not limited to <strong>Wordpress</strong> or depending on the case, custom made using the web standard programming language, <strong>Javascript</strong> (with React framework) </p>
      </Fade>
      <p><strong>Contact us for further details and pricing.</strong></p>
      <Route exact path="/web/image/web/:id" component={Modal} />
    </div>
  );
};

export default Web;