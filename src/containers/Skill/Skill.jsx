import React, { useEffect, useState, useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../../components/Title/Title';
import DisplayLottie from '../../components/DisplayLottie/DisplayLottie';
import webdev from '../../lottie/webdev.json';
import TechIcon from '../../components/TechIcon/TechIcon';

const Skills = () => {
  const { languages, databases, frameworks, tools } = useContext(PortfolioContext);

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
    <section id="skill">
      <Container>
        <div className="skill-wrapper">
          <Title title="What I do" />
          <Row>
            <Col lg="6">
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <DisplayLottie animationData={webdev} />
              </Fade>
            </Col>

            <Col lg="6">
              <Fade
                right={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={1000}
                distance="30px"
              >
                <div>
                  <Row style={{ marginBottom: '1rem' }}>
                    <h3>Programming languages</h3>
                  </Row>
                  <Row style={{ marginBottom: '2rem' }}>
                    {languages.map((language) => (
                      <TechIcon key={language.id} item={language} />
                    ))}
                  </Row>
                </div>

                <div>
                  <Row style={{ marginBottom: '1rem' }}>
                    <h3>Databases</h3>
                  </Row>
                  <Row style={{ marginBottom: '2rem' }}>
                    {databases.map((database) => (
                      <TechIcon key={database.id} item={database} />
                    ))}
                  </Row>
                </div>
                <div>
                  <Row style={{ marginBottom: '1rem' }}>
                    <h3>Frameworks</h3>
                  </Row>
                  <Row style={{ marginBottom: '2rem' }}>
                    {frameworks.map((framework) => (
                      <TechIcon key={framework.id} item={framework} />
                    ))}
                  </Row>
                </div>
                <div>
                  <Row style={{ marginBottom: '1rem' }}>
                    <h3>Platforms/Tools</h3>
                  </Row>
                  <Row style={{ marginBottom: '2rem' }}>
                    {tools.map((tool) => (
                      <TechIcon key={tool.id} item={tool} />
                    ))}
                  </Row>
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
