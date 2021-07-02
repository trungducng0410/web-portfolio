import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../../components/Title/Title';

const Contact = () => {
  const { contacts } = useContext(PortfolioContext);

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <div className="location-div">
              <span className="contact-wrapper__text">
                <svg
                  viewBox="-0.5 -2 20 19"
                  version="1.1"
                  width="30"
                  height="30"
                  aria-hidden="true"
                  stroke="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                  />
                </svg>
                Hanoi, Vietnam
              </span>
            </div>

            <hr
              style={{
                backgroundColor: 'white',
                marginTop: '2rem',
                marginBottom: '2rem',
                width: '50%',
                height: '50%',
              }}
            />
            <div className="social-links">
              {contacts.length > 0
                ? contacts.map((item) => {
                    const { id, name, url } = item;
                    return (
                      <a
                        key={id}
                        href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label={name}
                      >
                        <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                      </a>
                    );
                  })
                : null}
            </div>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
