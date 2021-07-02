import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Parser from 'html-react-parser';
import Title from '../../components/Title/Title';
import AboutImg from '../../components/Image/AboutImg';

const About = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename="profile.jpg" />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {Parser(
                    "Hi again, I'm a Master IT student at University of Technology, Sydney and I'm also a software engineer who is passionate about exploring various kinds of web technologies. I have experiences of building Web application using <strong>MERN</strong> stack (<strong>MongoDB</strong>, <strong>ExpressJS</strong>, <strong>ReactJS</strong>, <strong>NodeJS</strong>) and cross-platform mobile applications using <strong>React Native</strong>"
                  )}
                </p>
                <p className="about-wrapper__info-text">
                  {Parser(
                    "Currently, I mostly work with <strong>JavaScript/TypeScript</strong> technologies like <strong>ReactJS</strong>, <strong>NodeJS</strong>. I also have hands on experiences working with cloud infrastructure like <strong>AWS</strong> and always keep maintainability and scalability in mind. In my freetime, I'm enthusiastic about researching and experimenting advanced technologies like <strong>ML/DL</strong>, <strong>Cloud services</strong>. Moreover, I'm always a fast learner and a self-taught programmer."
                  )}
                </p>
                <span className="d-flex mt-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--resume"
                    href="https://dl-au2021.s3.amazonaws.com/Trung+Duc+Nguyen.pdf"
                  >
                    My Resume
                  </a>
                  <span style={{ marginLeft: '1rem' }} className="cta-btn cta-btn--resume">
                    <Link to="contact" smooth duration={1000}>
                      Contact me
                    </Link>
                  </span>
                </span>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
