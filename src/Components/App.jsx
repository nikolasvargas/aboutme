import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub, faReact, faNodeJs, faNode, faPython } from '@fortawesome/fontawesome-free-brands';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import 'modules/bulma/css/bulma.min.css';
import '../styles/app.css';

export default props => (
  <div>
    <section className="hero is-white is-fullheight ">
      <div className="hero-body has-text-centered">
        <div className="container">
          <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Full-Stack Developer</h1>
          <h2 className="subtitle is-size-4-desktop">I build mobile apps, software and websites</h2>
          <img className="avatar" width="220px" src={require('../images/welder.svg')} />
          <h2 className="subtitle is-size-4-desktop">Porto Alegre, RS | Brasil</h2>
        </div>
      </div>
      <div className="hero-foot">
        <nav className="tabs is-boxed is-fullwidth">
          <div className="container">
            <ul className="is-flex">
              <li>
                <a href="https://github.com/nikolasvargas" className="button is-large">
                  <span className="icon">
                    <FontAwesomeIcon icon={faGithub} />
                  </span>
                  <span>Github</span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/_nikolasm" className="button is-large">
                  <span className="icon">
                    <FontAwesomeIcon icon={faTwitter} />
                  </span>
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/nikolasvargas" className="button is-large">
                  <span className="icon">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </span>
                  <span>Linkedin</span>
                </a>
              </li>
              <li>
                <a href="mailto:nikolas@nikolas.pw" className="button is-large">
                  <span className="icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <span>Contact me</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  </div>
)

