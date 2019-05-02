import React from 'react';

import style from './Web.scss';

const Home = () => {
  return (
    <div className={style.content}>
      <h3>Website Creation</h3>
      <hr />
      <p className={style.paragraphLeft}>Providing solutions for simple landing pages to websites for promoting your business, yourself and to show off your work.</p>
      <p className={style.paragraphRight}>Setting up domains, emails, hosting space and annual maintenance.</p>
      <p className={style.paragraphLeft}>Complex solutions to setup an online store or an online membership site. Projects can be discussed on a one to one basis to determine project feasibility and possible costs.</p>
      <p className={style.paragraphRight}>Technologies that are used include but not limited to <strong>Wordpress</strong> or depending on the case, custom made using the web standard programming language, <strong>Javascript</strong> (with React framework) </p>
      <p className={style.paragraphLeft}><strong>Contact us for further details and pricing.</strong></p>    
    </div>
  );
};

export default Home;