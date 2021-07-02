import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col, Badge, Carousel, CarouselItem } from 'react-bootstrap';
import Parser from 'html-react-parser';
import PortfolioContext from '../../context/context';
import Title from '../../components/Title/Title';
import ProjectImg from '../../components/Image/ProjectImg';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          {projects.map((project) => {
            const { title, info, repo, img, id, technologies } = project;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <div>
                        <p>{Parser(info) || ''}</p>
                        <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap' }}>
                          <p style={{ fontStyle: 'italic', margin: 0 }}>Technologies:</p>
                          {technologies.map((technology) => (
                            <Badge
                              key={technology}
                              className="badge"
                              style={{
                                padding: '0.5rem',
                                margin: '0.5rem',
                              }}
                              variant="primary"
                            >
                              {technology}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                          style={{ padding: '1rem 0 1rem 0' }}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <Tilt
                        options={{
                          reverse: false,
                          max: 8,
                          perspective: 1000,
                          scale: 1,
                          speed: 300,
                          transition: true,
                          axis: null,
                          reset: true,
                          easing: 'cubic-bezier(.03,.98,.52,.99)',
                        }}
                      >
                        <div data-tilt className="thumbnail rounded">
                          <Carousel>
                            {img.map((i) => (
                              <CarouselItem key={i} interval={1500}>
                                <ProjectImg alt={title} filename={i} />
                              </CarouselItem>
                            ))}
                          </Carousel>
                        </div>
                      </Tilt>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
