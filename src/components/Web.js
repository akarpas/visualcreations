import React from 'react';
import PortfolioImage from '../images/web/jpeg/portfolio.jpg';
import EsolnetImage from '../images/web/jpeg/esolnet.jpg';
import ArtistoImage from '../images/web/jpeg/artisto.jpg';
import style from './Web.scss';

const Home = () => {
  return (
    <div className={style.content}>
      <h3>Website Creation</h3>
      <hr />
      <p>Providing solutions for simple landing pages to websites for promoting your business, yourself and to show off your work.</p>
      <p>Setting up domains, emails, hosting space and annual maintenance.</p>
      <div className={style.projects}>
        <a href="https://www.karpasitis.net" target="_blank" rel="noopener noreferrer">
          <img className={style.thumb} src={PortfolioImage} alt="Portfolio Website" />
        </a>
        <a href="https://www.esolnetespana.es" target="_blank" rel="noopener noreferrer">
          <img className={style.thumb} src={EsolnetImage} alt="Esolnet Espana" />
        </a>
        <a href="https://artisto.netlify.com" target="_blank" rel="noopener noreferrer">
          <img className={style.thumb} src={ArtistoImage} alt="Artisto" />
        </a>
      </div>
      <p>Complex solutions to setup an online store or an online membership site. Projects can be discussed on a one to one basis to determine project feasibility and possible costs.</p>
      <p>Technologies that are used include but not limited to <strong>Wordpress</strong> or depending on the case, custom made using the web standard programming language, <strong>Javascript</strong> (with React framework) </p>
      <p><strong>Contact us for further details and pricing.</strong></p>
    </div>
  );
};

export default Home;